"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="background-root">
      {/* Animated gradient blobs */}
      <motion.div
        className="background-blob"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(198, 172, 143, 0.4) 0%, transparent 70%)",
          top: "5%",
          left: "-10%",
        }}
        animate={{
          x: [0, 60, 20, 80, 0],
          y: [0, 40, 80, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="background-blob"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(94, 80, 63, 0.35) 0%, transparent 70%)",
          bottom: "10%",
          right: "-5%",
        }}
        animate={{
          x: [0, -50, -20, -70, 0],
          y: [0, -30, -60, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="background-blob"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(34, 30, 27, 0.5) 0%, transparent 70%)",
          top: "45%",
          left: "35%",
        }}
        animate={{
          x: [0, 40, -20, 50, 0],
          y: [0, -40, 20, -30, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Noise texture overlay */}
      <div className="background-noise" />
    </div>
  );
}
