import React from "react";
import { motion } from "framer-motion";

const FloatingContainer: React.FC<{
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}> = ({ children, className, delay = 0, y = 10, duration = 5 }) => {
  return (
    <motion.div
      animate={{
        transition: {
          repeat: Infinity,
          duration: duration,
          delay: delay,
        },
        translateY: [0, y, 0],
      }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FloatingContainer;
