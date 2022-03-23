import React from "react";
import { motion } from "framer-motion";

const FloatingContainer: React.FC<{ className?: string; delay?: number }> = ({
  children,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      animate={{
        transition: {
          repeat: Infinity,
          duration: 5,
          delay: delay,
        },
        translateY: [0, 10, 0, 10, 0],
      }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FloatingContainer;
