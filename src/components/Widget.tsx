import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type WidgetProps = {
  children: React.ReactNode;
  full?: boolean;
  i: number;
  link?: string;
};

function Widget({ children, full, i, link }: WidgetProps) {
  const [hue, setHue] = useState<number>(0);

  useEffect(() => {
    setHue(Math.random() * 360);
  }, []);

  return full ? (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 1, y: -1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      style={
        {
          "--before-gradient": `conic-gradient(hsl(${hue}, 74%, 45%), hsl(${(hue + 100) % 360}, 80%, 45%),hsl(${(hue + 200) % 360}, 30%, 45%),hsl(${(hue + 100) % 360}, 80%, 45%),hsl(${hue}, 74%, 45%))`,
        } as React.CSSProperties
      }
      className={`cursor-pointer h-30 w-full md:w-[calc(50%-10px)] rounded bg-gray-900 relative overflow-hidden before:content-[''] before:absolute before:top-[50%] before:-translate-y-[50%] before:-left-[10%] before:w-[120%] before:h-150 before:opacity-0 hover:before:opacity-100 before:bg-(image:--before-gradient) hover:before:animate-spin before:z-1 hover:before:[animation-duration:2s] ${i == 3 ? "rounded-bl-2xl" : "rounded-br-2xl"}`}
      onClick={link ? () => window.open(link, "_blank") : undefined}
    >
      <div
        className={`absolute z-10 m-0.75 p-2 bg-gray-900 w-[calc(100%-6px)] h-[calc(100%-6px)] rounded ${i == 3 ? "rounded-bl-2xl" : "rounded-br-2xl"}`}
      >
        {children}
      </div>
    </motion.div>
  ) : (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 1, y: -1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      style={
        {
          "--before-gradient": `linear-gradient(to right, hsl(${hue}, 74%, 45%), hsl(${(hue + 100) % 360}, 80%, 45%))`,
        } as React.CSSProperties
      }
      className={`cursor-pointer h-30 w-full md:w-[calc(50%-10px)] rounded bg-gray-900 relative before:content-[''] before:absolute before:top-[50%] before:-translate-y-[50%] before:-left-[10%] before:w-[120%] before:h-[50%] before:opacity-0 hover:before:opacity-100 before:bg-(image:--before-gradient) hover:before:animate-spin before:z-1 overflow-hidden hover:before:[animation-duration:2s] ${i == 1 ? "rounded-tl-2xl" : "rounded-tr-2xl"}`}
      onClick={link ? () => window.open(link, "_blank") : undefined}
    >
      <div
        className={`absolute z-10 m-0.75 p-2 bg-gray-900 w-[calc(100%-6px)] h-[calc(100%-6px)] rounded ${i == 1 ? "rounded-tl-2xl" : "rounded-tr-2xl"}`}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default Widget;
