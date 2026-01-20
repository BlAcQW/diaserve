// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mic } from 'lucide-react';
// interface AnimatedAvatarProps {
//   status: 'idle' | 'connecting' | 'active' | 'error';
//   isSpeaking: boolean;
//   volume?: number;
// }
// export function AnimatedAvatar({
//   status,
//   isSpeaking,
//   volume = 0
// }: AnimatedAvatarProps) {
//   // Base animation for idle state (floating)
//   const idleAnimation = {
//     y: [0, -10, 0],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: 'easeInOut'
//     }
//   };
//   // Pulse animation for listening (when active but not speaking)
//   const listeningAnimation = {
//     scale: [1, 1.05, 1],
//     opacity: [0.8, 1, 0.8],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: 'easeInOut'
//     }
//   };
//   // Dynamic animation for speaking based on volume or preset
//   const speakingAnimation = {
//     scale: [1, 1.1, 1],
//     boxShadow: ['0 0 0 0px rgba(59, 130, 246, 0.4)', '0 0 0 20px rgba(59, 130, 246, 0)'],
//     transition: {
//       duration: 1,
//       repeat: Infinity,
//       ease: 'easeOut'
//     }
//   };
//   return <div className="relative flex items-center justify-center w-64 h-64">
//       {/* Outer Ripple/Glow Effects */}
//       {status === 'active' && <>
//           <motion.div className="absolute inset-0 rounded-full bg-blue-100 opacity-50" animate={isSpeaking ? {
//         scale: [1, 1.5],
//         opacity: [0.5, 0]
//       } : {
//         scale: 1.2,
//         opacity: 0.2
//       }} transition={isSpeaking ? {
//         duration: 1.5,
//         repeat: Infinity
//       } : {
//         duration: 2,
//         repeat: Infinity,
//         repeatType: 'reverse'
//       }} />
//           <motion.div className="absolute inset-0 rounded-full bg-blue-200 opacity-30" animate={isSpeaking ? {
//         scale: [1, 1.3],
//         opacity: [0.4, 0]
//       } : {
//         scale: 1.1,
//         opacity: 0.1
//       }} transition={isSpeaking ? {
//         duration: 1.5,
//         delay: 0.2,
//         repeat: Infinity
//       } : {
//         duration: 2,
//         delay: 0.5,
//         repeat: Infinity,
//         repeatType: 'reverse'
//       }} />
//         </>}

//       {/* Main Avatar Container */}
//       <motion.div className={`
//           relative z-10 flex items-center justify-center w-40 h-40 rounded-full shadow-xl
//           ${status === 'error' ? 'bg-red-50' : 'bg-gradient-to-br from-white to-blue-50'}
//           border-4 ${status === 'active' ? 'border-blue-400' : 'border-white'}
//         `} animate={status === 'idle' ? idleAnimation : status === 'active' && isSpeaking ? speakingAnimation : status === 'active' ? listeningAnimation : {}}>
//         {/* Abstract Face / Visual Representation */}
//         <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
//           {/* Simple gradient background for the "face" */}
//           <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 opacity-50" />

//           {status === 'connecting' ? <motion.div animate={{
//           rotate: 360
//         }} transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: 'linear'
//         }} className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full" /> : <div className="flex flex-col items-center justify-center space-y-2">
//               {/* Eyes */}
//               <div className="flex space-x-4 mb-1">
//                 <motion.div className="w-3 h-3 bg-slate-700 rounded-full" animate={status === 'active' ? {
//               scaleY: [1, 0.1, 1]
//             } : {
//               scaleY: 1
//             }} transition={{
//               duration: 0.2,
//               delay: 3,
//               repeat: Infinity,
//               repeatDelay: 4
//             }} />
//                 <motion.div className="w-3 h-3 bg-slate-700 rounded-full" animate={status === 'active' ? {
//               scaleY: [1, 0.1, 1]
//             } : {
//               scaleY: 1
//             }} transition={{
//               duration: 0.2,
//               delay: 3,
//               repeat: Infinity,
//               repeatDelay: 4
//             }} />
//               </div>
//               {/* Mouth */}
//               <motion.div className="w-8 h-4 border-b-4 border-slate-700 rounded-full" animate={isSpeaking ? {
//             height: [4, 12, 4],
//             width: [32, 28, 32]
//           } : {
//             height: 4
//           }} transition={{
//             duration: 0.3
//           }} />
//             </div>}
//         </div>
//       </motion.div>

//       {/* Status Indicator Icon (Small badge) */}
//       {status === 'active' && <motion.div initial={{
//       scale: 0
//     }} animate={{
//       scale: 1
//     }} className="absolute bottom-10 right-10 z-20 bg-blue-500 text-white p-2 rounded-full shadow-lg">
//           <Mic size={16} />
//         </motion.div>}
//     </div>;
// }

import React from 'react';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

interface AnimatedAvatarProps {
  status: 'idle' | 'connecting' | 'active' | 'error';
  isSpeaking: boolean;
  volume?: number;
}

export function AnimatedAvatar({
  status,
  isSpeaking,
  volume = 0
}: AnimatedAvatarProps) {
  // Base animation for idle state (floating)
  const idleAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  // Pulse animation for listening (when active but not speaking)
  const listeningAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  // Dynamic animation for speaking based on volume or preset
  const speakingAnimation = {
    scale: [1, 1.1, 1],
    boxShadow: ['0 0 0 0px rgba(59, 130, 246, 0.4)', '0 0 0 20px rgba(59, 130, 246, 0)'],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'easeOut'
    }
  };

  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      {/* Outer Ripple/Glow Effects */}
      {status === 'active' && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-100 opacity-50"
            animate={
              isSpeaking
                ? {
                    scale: [1, 1.5],
                    opacity: [0.5, 0]
                  }
                : {
                    scale: 1.2,
                    opacity: 0.2
                  }
            }
            transition={
              isSpeaking
                ? {
                    duration: 1.5,
                    repeat: Infinity
                  }
                : {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }
            }
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-200 opacity-30"
            animate={
              isSpeaking
                ? {
                    scale: [1, 1.3],
                    opacity: [0.4, 0]
                  }
                : {
                    scale: 1.1,
                    opacity: 0.1
                  }
            }
            transition={
              isSpeaking
                ? {
                    duration: 1.5,
                    delay: 0.2,
                    repeat: Infinity
                  }
                : {
                    duration: 2,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }
            }
          />
        </>
      )}

      {/* Main Avatar Container */}
      <motion.div
        className={`
          relative z-10 flex items-center justify-center w-40 h-40 rounded-full shadow-xl
          ${status === 'error' ? 'bg-red-50' : 'bg-gradient-to-br from-white to-blue-50'}
          border-4 ${status === 'active' ? 'border-blue-400' : 'border-white'}
        `}
        animate={
          status === 'idle'
            ? idleAnimation
            : status === 'active' && isSpeaking
            ? speakingAnimation
            : status === 'active'
            ? listeningAnimation
            : {}
        }
      >
        {/* Abstract Face / Visual Representation */}
        <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
          {/* Simple gradient background for the "face" */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 opacity-50" />

          {status === 'connecting' ? (
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full"
            />
          ) : (
            <div className="flex flex-col items-center justify-center space-y-2">
              {/* Eyes - Blinking */}
              <div className="flex space-x-4 mb-2">
                <motion.div
                  className="w-4 h-4 bg-slate-700 rounded-full"
                  animate={{
                    scaleY: [1, 0.1, 1]
                  }}
                  transition={{
                    duration: 0.15,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
                <motion.div
                  className="w-4 h-4 bg-slate-700 rounded-full"
                  animate={{
                    scaleY: [1, 0.1, 1]
                  }}
                  transition={{
                    duration: 0.15,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
              </div>
              {/* Mouth - Smiling (more visible) */}
              <motion.div
                className="w-10 h-5 border-b-[5px] border-slate-700"
                style={{
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                }}
                animate={
                  isSpeaking
                    ? {
                        height: [5, 10, 5],
                        width: [40, 36, 40]
                      }
                    : {
                        height: 5
                      }
                }
                transition={{
                  duration: 0.3,
                  repeat: isSpeaking ? Infinity : 0
                }}
              />
            </div>
          )}
        </div>
      </motion.div>

      {/* Status Indicator Icon (Small badge) */}
      {status === 'active' && (
        <motion.div
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          className="absolute bottom-10 right-10 z-20 bg-blue-500 text-white p-2 rounded-full shadow-lg"
        >
          <Mic size={16} />
        </motion.div>
      )}
    </div>
  );
}