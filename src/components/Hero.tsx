import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Btn from "./Btn";
import { FaMoon, FaMountain, FaSun } from "react-icons/fa";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ',./<>=+-!@#$%^&*()_[]{}\\\";:?~`";
const completed = ["YOSEMITE", "NATIONAL", "PARK"];

type HeroProps = {
  isDay: boolean;
  setIsDay: React.Dispatch<React.SetStateAction<boolean>>;
  onclick: () => void;
};

function Hero({ isDay, setIsDay, onclick }: HeroProps) {
  const [upper, setUpper] = useState<string>("");
  const [lower, setLower] = useState<string>("");
  const [showDescription, setShowDescription] = useState<boolean>(false);

  function generateRandomString(done: number, index: number): string {
    let base = "";
    for (let i = 0; i < Math.min(completed[index].length, done); i++) {
      base += completed[index][i];
    }
    for (let i = Math.max(done, 0); i < completed[index].length; i++) {
      base +=
        characters.split("")[Math.floor(Math.random() * characters.length)];
    }
    return base;
  }

  useEffect(() => {
    let done = -3;
    const sorted = completed.sort((a, b) => b.length - a.length);
    const textAnimationInterval = setInterval(() => {
      setUpper(generateRandomString(done, 0));
      setLower(
        generateRandomString(done, 1) + " " + generateRandomString(done, 2),
      );
      if (Math.random() < 0.4 - Math.min(0.35, done * 0.01)) done++;
      if (done == sorted[0].length + 1) setShowDescription(true);
    }, 80);

    setTimeout(() => {
      clearInterval(textAnimationInterval);
      setUpper("YOSEMITE");
      setLower("NATIONAL PARK");
    }, 5000);

    return () => {
      clearInterval(textAnimationInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 17, type: "spring", damping: 15 }}
      className="flex flex-col items-center gap-y-15 py-30 z-50 h-150"
    >
      <h1 className="font-[sono]! text-7xl leading-18 font-extrabold text-center w-300 text-gray-300">
        {upper}
        <br />
        {lower}
      </h1>
      <h1 className="absolute left-[50%] -translate-x-[50.15%] -translate-y-[1.5%] font-[sono]! text-7xl leading-18 font-extrabold text-center w-300 bg-linear-to-r from-blue-500 via-blue-500 to-red-500 bg-clip-text text-transparent">
        {upper}
        <br />
        {lower}
      </h1>
      {showDescription && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, type: "spring" }}
          className="w-[65%] lg:w-[35%] flex flex-col gap-y-5 items-center text-center"
        >
          <div>
            <i>
              "Not just a great valley, but a shrine to human foresight, the
              strength of granite, the power of glaciers, the persistence of
              life, and the tranquility of the High Sierra."
            </i>{" "}
            - NPS
          </div>
          <div className="flex gap-x-5">
            <Btn onclick={onclick} primary>
              <FaMountain size={25} />
              EXPLORE
            </Btn>
            <Btn onclick={() => setIsDay(!isDay)}>
              {isDay ? (
                <FaMoon
                  size={25}
                  className="group-hover:-rotate-30 group-active:rotate-30 transition-transform duration-300"
                />
              ) : (
                <FaSun
                  size={25}
                  className="group-hover:-rotate-30 group-active:rotate-30 transition-transform duration-300"
                />
              )}
              {isDay ? "NIGHT" : "DAY"}
            </Btn>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Hero;
