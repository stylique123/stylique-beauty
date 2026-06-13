import React, { useEffect, useRef, useState } from 'react';
import { ScanningOverlay } from './ScanningOverlay';
import { useCameraStore } from '../../store/cameraStore';
import { adjustColorForUndertone } from '../../utils/colorBlending';
import { FaceMesh } from '@mediapipe/face_mesh';
import { Camera } from '@mediapipe/camera_utils';

export function CameraView() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const { cameraState, setCameraState, closeCamera, startScan, analysisResult, activeLayers } = useCameraStore();

  const [error, setError] = useState<string | null>(null);
  const [modelLoading, setModelLoading] = useState<boolean>(false);
  const [lightingWarning, setLightingWarning] = useState<string | null>(null);

  // Hidden canvas for lighting analysis
  const hiddenCanvasRef = useRef<HTMLCanvasElement>(null);

  // Refs for direct DOM manipulation to avoid 60fps React re-renders
  const lipsRef = useRef<HTMLDivElement>(null);
  const cheekLeftRef = useRef<HTMLDivElement>(null);
  const cheekRightRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      // Cleanup camera stream on unmount
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [closeCamera]);

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: { ideal: 720 }, height: { ideal: 1280 } } 
      });
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        
        // Initialize MediaPipe Face Mesh
        const faceMesh = new FaceMesh({
          locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
        });
        
        faceMesh.setOptions({
          maxNumFaces: 1,
          refineLandmarks: true,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5
        });

        faceMesh.onResults((results) => {
          if (modelLoading) setModelLoading(false);

          if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0 && videoRef.current) {
            const landmarks = results.multiFaceLandmarks[0];
            const videoWidth = videoRef.current.videoWidth;
            const videoHeight = videoRef.current.videoHeight;
            const rect = videoRef.current.getBoundingClientRect();
            
            // Map normalized coordinates (0-1) to DOM coordinates
            const getPos = (index: number) => {
              const lm = landmarks[index];
              // Note: Video is mirrored via CSS scaleX(-1), so we flip the X coordinate
              return {
                x: (1 - lm.x) * rect.width,
                y: lm.y * rect.height
              };
            };

            // Update Lips (Point 13 is center inner lip)
            if (lipsRef.current) {
              const pos = getPos(13);
              lipsRef.current.style.transform = `translate(${pos.x - 30}px, ${pos.y - 15}px)`;
            }

            // Update Cheeks (Point 205 left cheek, 425 right cheek)
            if (cheekLeftRef.current) {
              const posL = getPos(205);
              cheekLeftRef.current.style.transform = `translate(${posL.x - 40}px, ${posL.y - 40}px)`;
            }
            if (cheekRightRef.current) {
              const posR = getPos(425);
              cheekRightRef.current.style.transform = `translate(${posR.x - 40}px, ${posR.y - 40}px)`;
            }

            // Update Base (Point 1 is nose tip)
            if (baseRef.current) {
              const pos = getPos(1);
              baseRef.current.style.transform = `translate(${pos.x - 150}px, ${pos.y - 200}px)`;
            }
          }
        });

        const camera = new Camera(videoRef.current, {
          onFrame: async () => {
            if (videoRef.current) {
              // 1. Check Lighting
              if (hiddenCanvasRef.current) {
                const ctx = hiddenCanvasRef.current.getContext('2d');
                if (ctx) {
                  ctx.drawImage(videoRef.current, 0, 0, 100, 100);
                  const imageData = ctx.getImageData(0, 0, 100, 100);
                  const data = imageData.data;
                  let brightnessSum = 0;
                  for (let i = 0; i < data.length; i += 4) {
                     brightnessSum += (data[i] + data[i+1] + data[i+2]) / 3;
                  }
                  const avgBrightness = brightnessSum / (100 * 100);
                  
                  if (avgBrightness < 30) {
                    setLightingWarning("Environment too dark. Please move to natural lighting for an accurate scan.");
                  } else if (avgBrightness > 240) {
                    setLightingWarning("Environment too bright/washed out. Please adjust lighting.");
                  } else {
                    setLightingWarning(null);
                  }
                }
              }

              // 2. Process Face Mesh
              await faceMesh.send({ image: videoRef.current });
            }
          },
          width: 720,
          height: 1280
        });

        camera.start();
      }

      setError(null);
      setModelLoading(true);
      setCameraState('active');
    } catch (err) {
      console.error("Camera access denied or unavailable", err);
      setError("Camera access denied. Please enable camera permissions to use AR features.");
    }
  };

  const handleCanPlay = () => {};

  if (cameraState === 'closed') return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 2147483648,
      background: '#000',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 20, background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)' }}>
        <h2 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>Stylique 3D AR</h2>
        <button onClick={closeCamera} style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', border: 'none', color: 'white', width: '40px', height: '40px', borderRadius: '20px', fontSize: '1.25rem', cursor: 'pointer' }}>✕</button>
      </div>

      {/* Video Feed */}
      {error ? (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center', color: 'white' }}>
          <div><div style={{ fontSize: '48px', marginBottom: '16px' }}>📷</div><h3>{error}</h3></div>
        </div>
      ) : (
        <video 
          ref={videoRef} autoPlay playsInline muted onCanPlay={handleCanPlay}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }}
        />
      )}

      {/* Hidden Canvas for Lighting Analysis */}
      <canvas ref={hiddenCanvasRef} width={100} height={100} style={{ display: 'none' }} />

      {/* Overlays */}
      {!error && <ScanningOverlay isScanning={cameraState === 'scanning'} />}
      
      {/* 3D AR Try-On Layers (Powered by MediaPipe) */}
      {cameraState === 'active' && activeLayers.length > 0 && analysisResult && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 15, overflow: 'hidden' }}>
          
          {activeLayers.map(layer => {
            const adjustedColor = adjustColorForUndertone(layer.hexColor, analysisResult.undertone || 'neutral', analysisResult.skinToneDepth || 'medium');
            
            if (layer.category === 'lips') {
              return (
                <div key={layer.id} ref={lipsRef} style={{ position: 'absolute', top: 0, left: 0, width: '60px', height: '30px', background: adjustedColor, opacity: layer.intensity, borderRadius: '50%', filter: 'blur(4px)', mixBlendMode: 'multiply', willChange: 'transform' }} />
              );
            } else if (layer.category === 'cheeks') {
              return (
                <React.Fragment key={layer.id}>
                  <div ref={cheekLeftRef} style={{ position: 'absolute', top: 0, left: 0, width: '80px', height: '80px', background: `radial-gradient(ellipse at center, ${adjustedColor} 0%, transparent 70%)`, opacity: layer.intensity, mixBlendMode: 'multiply', willChange: 'transform' }} />
                  <div ref={cheekRightRef} style={{ position: 'absolute', top: 0, left: 0, width: '80px', height: '80px', background: `radial-gradient(ellipse at center, ${adjustedColor} 0%, transparent 70%)`, opacity: layer.intensity, mixBlendMode: 'multiply', willChange: 'transform' }} />
                </React.Fragment>
              );
            } else if (layer.category === 'base') {
              return (
                <div key={layer.id} ref={baseRef} style={{ position: 'absolute', top: 0, left: 0, width: '300px', height: '400px', background: adjustedColor, opacity: layer.intensity * 0.4, borderRadius: '50%', filter: 'blur(40px)', mixBlendMode: 'overlay', willChange: 'transform' }} />
              );
            }
            return null;
          })}
          
          {/* Active Layer Swatches UI */}
          <div style={{ position: 'absolute', top: '80px', right: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {activeLayers.map(layer => {
               const adjustedColor = adjustColorForUndertone(layer.hexColor, analysisResult.undertone || 'neutral', analysisResult.skinToneDepth || 'medium');
               return (
                <div key={layer.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.5)', padding: '6px 12px', borderRadius: '16px', backdropFilter: 'blur(4px)' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: layer.hexColor, border: '2px solid white' }} />
                  <span style={{ color: 'white', fontSize: '10px' }}>→</span>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: adjustedColor, border: '2px solid white' }} />
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 500 }}>{layer.productName}</span>
                </div>
               );
            })}
          </div>
        </div>
      )}

      {/* Controls */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', zIndex: 20, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
        
        {cameraState === 'initializing' && (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h3 style={{ marginBottom: '16px' }}>Ready for Face Scan</h3>
            <button onClick={requestCameraPermission} style={{ background: 'var(--primary-color, #8b5cf6)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '24px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>
              Start 3D Scanner
            </button>
          </div>
        )}

        {cameraState === 'active' && modelLoading && (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <div style={{ 
              width: '40px', height: '40px', 
              border: '4px solid rgba(255,255,255,0.3)', 
              borderTopColor: 'white', 
              borderRadius: '50%', 
              margin: '0 auto 16px auto',
              animation: 'spin 1s linear infinite'
            }} />
            <h3 style={{ fontSize: '1rem', margin: 0 }}>Loading Neural AR Matrix...</h3>
            <p style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '8px' }}>Optimizing Wasm Models (~3MB)</p>
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {cameraState === 'active' && !modelLoading && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {lightingWarning && (
              <div style={{ background: 'rgba(239, 68, 68, 0.9)', color: 'white', padding: '12px 20px', borderRadius: '16px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '20px', textAlign: 'center', maxWidth: '80%' }}>
                ⚠️ {lightingWarning}
              </div>
            )}
            <button 
              onClick={startScan} 
              disabled={!!lightingWarning}
              style={{ width: '80px', height: '80px', borderRadius: '40px', border: '4px solid white', background: lightingWarning ? 'rgba(255,255,255,0.3)' : 'transparent', padding: '6px', cursor: lightingWarning ? 'not-allowed' : 'pointer' }}
            >
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'white', transition: 'transform 0.1s', opacity: lightingWarning ? 0.5 : 1 }} />
            </button>
          </div>
        )}

        {cameraState === 'complete' && analysisResult && (
          <div style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', padding: '24px', borderRadius: '24px', width: '100%', maxWidth: '400px', color: '#0f172a' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Scan Complete</h3>
            <p style={{ fontSize: '0.875rem', color: '#475569', marginBottom: '16px' }}>{analysisResult.rawAnalysis}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: '#f1f5f9', padding: '12px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Tone</div>
                <div style={{ fontWeight: 600, textTransform: 'capitalize' }}>{analysisResult.skinToneDepth}</div>
              </div>
              <div style={{ background: '#f1f5f9', padding: '12px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Undertone</div>
                <div style={{ fontWeight: 600, textTransform: 'capitalize' }}>{analysisResult.undertone}</div>
              </div>
            </div>

            <button onClick={() => { closeCamera(); window.dispatchEvent(new CustomEvent('stella-open-routine')); }} style={{ width: '100%', background: 'var(--primary-color, #8b5cf6)', color: 'white', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>
              View My Routine
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
