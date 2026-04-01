import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Btn from "./Btn";

function Carousel() {
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState<boolean>(true);

  function handleBack() {
    setIndex(index == 0 ? 9 : index - 1);
    setForward(false);
  }

  function handleNext() {
    setIndex(index == 9 ? 0 : index + 1);
    setForward(true);
  }

  return (
    <div className="flex gap-x-10 justify-center items-center">
      <Btn onclick={handleBack} primary>
        <FaCaretLeft size={20} />
      </Btn>
      <div className="w-100 h-65 relative">
        <AnimatePresence mode="sync">
          <motion.img
            initial={{ x: forward ? 200 : -200, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: forward ? -200 : 200, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, type: "spring" }}
            key={index}
            src={"/" + (index + 1) + ".png"}
            className="rounded-lg w-full h-full absolute"
          />
        </AnimatePresence>
      </div>
      <Btn onclick={handleNext} primary>
        <FaCaretRight size={20} />
      </Btn>
    </div>
  );
}

export default Carousel;
