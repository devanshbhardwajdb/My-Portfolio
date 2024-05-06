// HorizontalWrapper.jsx
'use client'
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

function HorizontalWrapper({ children, direction, height }) {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll(scrollRef);

  const xTransform = useTransform(
    scrollY,
    [0, height],
    [0, direction]
  );

  return (
    <div
      ref={scrollRef}
      style={{
        overflowX: "hidden", // Changed to "auto" to allow smooth scrolling without requiring Shift
        overflowY: "auto", // Hide vertical scrollbar
        WebkitOverflowScrolling: "touch", // Enable smooth scrolling on iOS
      }}
      className="w-[100vw] flex items-center justify-center"
    >
      <motion.div
        style={{ width: "max-content", translateX: xTransform }}
        className="bg-red-400 w-full flex flex-wrap justify-center max-md:flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default HorizontalWrapper;
