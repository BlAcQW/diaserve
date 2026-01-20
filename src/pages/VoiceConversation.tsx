import React from 'react';
import { motion } from 'framer-motion';
import { useVapi } from '../hooks/useVapi';
import { AnimatedAvatar } from '../components/AnimatedAvatar';
import { VoiceButton } from '../components/VoiceButton';
export function VoiceConversation() {
  const {
    status,
    isSpeaking,
    volume,
    toggleCall
  } = useVapi();
  const getStatusText = () => {
    switch (status) {
      case 'connecting':
        return 'Connecting to secure line...';
      case 'active':
        return isSpeaking ? 'Ama is speaking...' : 'Listening...';
      case 'error':
        return 'Connection failed. Please try again.';
      default:
        return 'Ready to assist you';
    }
  };
  return <main className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-blue-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl" />
      </div>

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      ease: 'easeOut'
    }} className="relative z-10 w-full max-w-md flex flex-col items-center space-y-12">
        {/* Header / Context */}
        <div className="text-center space-y-2">
          <motion.h1 initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="text-2xl font-semibold text-slate-800 tracking-tight">
            Special Gardens
          </motion.h1>
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }} className="text-slate-500 text-sm font-medium uppercase tracking-wider">
            Resident Assistant
          </motion.p>
        </div>

        {/* Avatar Section */}
        <div className="flex flex-col items-center justify-center">
          <AnimatedAvatar status={status} isSpeaking={isSpeaking} volume={volume} />

          <motion.div key={status + isSpeaking} // Re-animate on state change
        initial={{
          opacity: 0,
          y: 5
        }} animate={{
          opacity: 1,
          y: 0
        }} className={`mt-8 text-sm font-medium transition-colors duration-300 ${status === 'error' ? 'text-red-500' : status === 'active' ? 'text-blue-600' : 'text-slate-400'}`}>
            {getStatusText()}
          </motion.div>
        </div>

        {/* Controls Section */}
        <div className="w-full px-4">
          <VoiceButton status={status} onClick={toggleCall} />

          {status === 'idle' && <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1
        }} className="mt-6 text-center text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
              Click to start a voice conversation with Ama about our new gated
              community in Adenta–Oyarifa.
            </motion.p>}
        </div>
      </motion.div>
    </main>;
}