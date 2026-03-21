import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Widget({ children }: { children: React.ReactNode }) {
  const [hue, setHue] = useState<number>(0);

  useEffect(() => {
    setHue(Math.random() * 360);
  }, []);

  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 1, y: -1 }}
      transition={{ duration: 0.7, type: "spring" }}
      style={
        {
          "--before-gradient": `linear-gradient(to right, hsl(${hue}, 74%, 45%), hsl(${(hue + 100) % 360}, 80%, 45%))`,
        } as React.CSSProperties
      }
      className={`cursor-pointer h-30 w-[calc(50%-10px)] rounded-lg bg-gray-900 relative before:content-[''] before:absolute before:top-[50%] before:-translate-y-[50%] before:-left-2 before:w-[calc(100%+16px)] before:h-[50%] before:opacity-0 hover:before:opacity-100 before:bg-(image:--before-gradient) hover:before:animate-spin after:content-[''] after:rounded-lg after:z-1 before:z-1 after:inset-0.75 after:absolute after:bg-gray-900 overflow-hidden hover:before:[animation-duration:2s]`}
    >
      <div className="absolute z-10 p-2">{children}</div>
    </motion.div>
  );
}

export default Widget;
