import { useState, useCallback } from 'react';
import type { FaceAnalysisResult } from '@stylique/types';
import { type TryOnLayer } from '../utils/colorBlending';

export type CameraState = 'closed' | 'initializing' | 'active' | 'scanning' | 'complete';

export function useCameraStore() {
  const [cameraState, setCameraState] = useState<CameraState>('closed');
  const [analysisResult, setAnalysisResult] = useState<FaceAnalysisResult | null>(null);
  const [activeLayers, setActiveLayers] = useState<TryOnLayer[]>([]);

  const openCamera = useCallback(() => {
    setCameraState('initializing');
  }, []);

  const closeCamera = useCallback(() => {
    setCameraState('closed');
    setAnalysisResult(null);
    setActiveLayers([]);
  }, []);

  const addTryOnLayer = useCallback((layer: TryOnLayer) => {
    setActiveLayers(prev => {
      // Replace existing layer of same category (e.g., can only wear one lipstick at a time)
      const filtered = prev.filter(l => l.category !== layer.category);
      return [...filtered, layer];
    });
  }, []);

  const removeTryOnLayer = useCallback((categoryId: string) => {
    setActiveLayers(prev => prev.filter(l => l.category !== categoryId));
  }, []);

  const clearLayers = useCallback(() => setActiveLayers([]), []);

  const startScan = useCallback(() => {
    if (cameraState !== 'active') return;
    setCameraState('scanning');
    
    setTimeout(() => {
      setAnalysisResult({
        skinToneDepth: 'medium',
        skinToneDepthConfidence: 0.92,
        undertone: 'olive',
        undertoneConfidence: 0.88,
        skinType: 'combination',
        skinTypeConfidence: 0.85,
        faceShape: 'oval',
        faceShapeConfidence: 0.79,
        eyeShape: 'almond',
        concerns: ['dark_spots', 'fine_lines'],
        rawAnalysis: 'Simulated visual analysis completed. Detected medium skin with clear olive undertones.',
        provider: 'mock',
      } as FaceAnalysisResult);
      
      setCameraState('complete');
    }, 3500); 
  }, [cameraState]);

  return {
    cameraState,
    setCameraState,
    analysisResult,
    activeLayers,
    addTryOnLayer,
    removeTryOnLayer,
    clearLayers,
    openCamera,
    closeCamera,
    startScan
  };
}
