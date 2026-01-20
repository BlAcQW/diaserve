import { useEffect, useState, useRef, useCallback } from 'react';
import Vapi from '@vapi-ai/web';

// Note: In a real production app, this should be in an environment variable
const VAPI_PUBLIC_KEY = '0c22dcea-0d6c-4fc0-8fb2-93292d8575e8'; // User will need to replace this
const AGENT_ID = '318a7d49-2e53-47ad-96b9-4f3530ac14eb'; // Provided Agent ID

export type VapiStatus = 'idle' | 'connecting' | 'active' | 'error';
export function useVapi() {
  const [status, setStatus] = useState<VapiStatus>('idle');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volume, setVolume] = useState(0);
  const vapiRef = useRef<any>(null);
  useEffect(() => {
    // Initialize Vapi instance
    const vapi = new Vapi(VAPI_PUBLIC_KEY);
    vapiRef.current = vapi;

    // Event listeners
    vapi.on('call-start', () => {
      setStatus('active');
    });
    vapi.on('call-end', () => {
      setStatus('idle');
      setIsSpeaking(false);
      setVolume(0);
    });
    vapi.on('speech-start', () => {
      setIsSpeaking(true);
    });
    vapi.on('speech-end', () => {
      setIsSpeaking(false);
    });
    vapi.on('volume-level', (level: number) => {
      setVolume(level);
    });
    vapi.on('error', (error: any) => {
      console.error('Vapi error:', error);
      setStatus('error');
      // Reset to idle after a delay so user can try again
      setTimeout(() => setStatus('idle'), 3000);
    });
    return () => {
      vapi.stop();
      vapiRef.current = null;
    };
  }, []);
  const toggleCall = useCallback(async () => {
    if (!vapiRef.current) return;
    if (status === 'idle' || status === 'error') {
      setStatus('connecting');
      try {
        await vapiRef.current.start(AGENT_ID);
      } catch (err) {
        console.error('Failed to connect:', err);
        setStatus('error');
      }
    } else if (status === 'active' || status === 'connecting') {
      vapiRef.current.stop();
      setStatus('idle');
    }
  }, [status]);
  return {
    status,
    isSpeaking,
    volume,
    toggleCall
  };
}