import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Btn from "./Btn";

function Carousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex gap-x-10 justify-center items-center">
      <Btn onclick={() => setIndex(index - 1)} primary>
        <FaCaretLeft size={20} />
      </Btn>
      <AnimatePresence mode="sync">
        <div className="w-100 h-65 relative">
          <motion.img
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            key={index}
            src={"/wildlife" + (index + 1) + ".jpg"}
            className="rounded-lg w-full h-full absolute"
          />
        </div>
      </AnimatePresence>
      <Btn onclick={() => setIndex(index + 1)} primary>
        <FaCaretRight size={20} />
      </Btn>
    </div>
  );
}

export default Carousel;
