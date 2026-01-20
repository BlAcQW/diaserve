import React from 'react';
import { motion } from 'framer-motion';
import { Phone, PhoneOff, Loader2 } from 'lucide-react';
interface VoiceButtonProps {
  status: 'idle' | 'connecting' | 'active' | 'error';
  onClick: () => void;
}
export function VoiceButton({
  status,
  onClick
}: VoiceButtonProps) {
  const isCallActive = status === 'active';
  const isConnecting = status === 'connecting';
  return <motion.button whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} onClick={onClick} disabled={isConnecting} className={`
        relative overflow-hidden group
        flex items-center justify-center space-x-3
        px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300
        ${isCallActive ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200' : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200/50'}
        ${isConnecting ? 'opacity-80 cursor-not-allowed' : ''}
        w-full max-w-xs mx-auto
      `} aria-label={isCallActive ? 'End conversation' : 'Start conversation'}>
      {isConnecting ? <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Connecting...</span>
        </> : isCallActive ? <>
          <PhoneOff className="w-5 h-5" />
          <span>End Call</span>
        </> : <>
          <Phone className="w-5 h-5" />
          <span>Talk to Agent Now</span>
        </>}

      {/* Subtle shimmer effect for the primary button */}
      {!isCallActive && !isConnecting && <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />}
    </motion.button>;
}