import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Widget from "./components/Widget";
import Digit from "./components/Digit";
import Carousel from "./components/Carousel";

function App() {
  const [isDay, setIsDay] = useState<boolean>(false);
  const [rotate, setRotate] = useState<number>(45);
  const [hue, setHue] = useState<number>(0);
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const moonImg = useRef<HTMLImageElement>(null);
  const sunImg = useRef<HTMLImageElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHue(Math.random() * 360);

    const hueInterval = setInterval(() => {
      setHue((prev) => prev + 2);
    }, 75);

    return () => {
      clearInterval(hueInterval);
    };
  }, []);

  useEffect(() => {
    const gradientInterval = setInterval(() => {
      setRotate((prev) => prev + 5);
    }, 50);

    setTimeout(() => {
      clearInterval(gradientInterval);
    }, 1800);

    setTimeout(() => {
      sunImg.current?.classList.remove("initial");
    }, 1500);
    moonImg.current?.classList.toggle("set");
    sunImg.current?.classList.toggle("set");
    setTimeout(() => {
      moonImg.current?.classList.toggle("set");
      sunImg.current?.classList.toggle("set");
      moonImg.current?.classList.toggle("up");
      sunImg.current?.classList.toggle("up");
    }, 1500);

    return () => {
      clearInterval(gradientInterval);
    };
  }, [isDay]);

  return (
    <div className="pb-30">
      <div
        style={{
          background: `
    linear-gradient(${rotate}deg, 
      ${isDay ? "hsl(210, 70%, 20%)" : "hsl(220, 20%, 25%)"}  0%, 
      ${isDay ? "hsl(120, 40%, 32%)" : "hsl(120, 35%, 15%)"} 50%, 
      ${isDay ? "hsl(40, 70%, 60%)" : "hsl(240, 30%, 5%)"} 100%
    )
  `,
          transition: "background 0.8s ease",
        }}
        className="absolute -top-5 left-0 w-full h-150 -z-7"
      />
      <img
        src="/moon.png"
        className="up absolute -top-3 right-20 w-25 brightness-90 -z-6 transition-transform duration-300"
        ref={moonImg}
      />
      <img
        src="/sun.png"
        className="initial absolute -top-3 right-20 w-25 brightness-90 -z-6 transition-transform duration-300"
        ref={sunImg}
      />
      <div className="absolute top-0 left-0 w-full h-150 bg-center bg-cover bg-[url('/middleground.png')] brightness-50 -z-5" />
      <div className="absolute top-0 left-0 w-full h-150 bg-linear-to-t from-gray-950 via-transparent to-transparent -z-5" />
      <Hero
        isDay={isDay}
        setIsDay={setIsDay}
        onclick={() =>
          mainRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      />
      <div ref={mainRef} />
      <motion.div
        initial={{ scale: 0.3, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="flex flex-col py-10 gap-y-10"
      >
        <h2 className="text-center text-white text-2xl font-bold font-[sono]!">
          BEAUTIFUL SCENERY
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mx-[15%] items-center text-sm text-gray-300 text-center">
          <Widget
            i={1}
            link="https://www.nps.gov/orgs/1207/03-13-26-2025-visitation-statsitics.htm"
          >
            <div className="h-full flex flex-col gap-y-3 justify-center">
              <motion.div
                onViewportEnter={() => setHasEntered(true)}
                viewport={{ once: true, amount: 0.5 }}
                style={
                  {
                    "--text-gradient": `linear-gradient(to right,hsl(${hue % 360},100%,50%),hsl(${(hue + 90) % 360},100%,50%))`,
                  } as React.CSSProperties
                }
                className={`relative text-center z-2 font-[sono]! font-extrabold text-5xl bg-clip-text! text-transparent! bg-(image:--text-gradient) before:content-['4,278,213'] before:absolute before:z-3 before:blur-xs before:h-full before:w-full before:text-center before:font-[sono]! before:top-0 before:left-0 before:bg-(image:--text-gradient) before:font-extrabold before:text-5xl before:bg-clip-text! before:text-transparent! before:opacity-80 flex items-center justify-center`}
              >
                {hasEntered && (
                  <>
                    <Digit digit={4} hue={hue} i={0} l={7} />
                    ,
                    <Digit digit={2} hue={hue} i={1} l={7} />
                    <Digit digit={7} hue={hue} i={2} l={7} />
                    <Digit digit={8} hue={hue} i={3} l={7} />
                    ,
                    <Digit digit={2} hue={hue} i={4} l={7} />
                    <Digit digit={1} hue={hue} i={5} l={7} />
                    <Digit digit={3} hue={hue} i={6} l={7} />
                  </>
                )}
              </motion.div>
              <div>people visited the park in 2025</div>
            </div>
          </Widget>
          <Widget
            i={2}
            link="https://www.nps.gov/yose/learn/management/statistics.htm"
          >
            <div className="h-full flex flex-col gap-y-3 justify-center">
              <motion.div
                onViewportEnter={() => setHasEntered(true)}
                viewport={{ once: true, amount: 0.5 }}
                style={
                  {
                    "--text-gradient": `linear-gradient(to right,hsl(${(hue + 180) % 360},100%,50%),hsl(${(hue + 315) % 360},100%,50%))`,
                  } as React.CSSProperties
                }
                className={`relative text-center z-2 font-[sono]! font-extrabold text-5xl bg-clip-text! text-transparent! bg-(image:--text-gradient) before:content-['700,000+'] before:absolute before:z-3 before:blur-xs before:h-full before:w-full before:text-center before:font-[sono]! before:top-0 before:left-0 before:bg-(image:--text-gradient) before:font-extrabold before:text-5xl before:bg-clip-text! before:text-transparent! before:opacity-80 flex items-center justify-center`}
              >
                {hasEntered && (
                  <>
                    <Digit digit={7} hue={hue + 180} i={1} l={6} />
                    <Digit digit={0} hue={hue + 180} i={2} l={6} />
                    <Digit digit={4} hue={hue + 180} i={3} l={6} />
                    ,
                    <Digit digit={6} hue={hue + 180} i={4} l={6} />
                    <Digit digit={2} hue={hue + 180} i={5} l={6} />
                    <Digit digit={4} hue={hue + 180} i={6} l={6} />+
                  </>
                )}
              </motion.div>
              <div>acres of undisturbed wilderness</div>
            </div>
          </Widget>
          <Widget i={3} full>
            Test hi
          </Widget>
          <Widget i={4} full>
            Test hi
          </Widget>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="flex flex-col py-10 gap-y-10"
      >
        <h2 className="text-center text-white text-2xl font-bold font-[sono]!">
          ABOUT THE PARK
        </h2>
        <div className="mx-[15%] text-lg flex flex-col gap-y-10">
          <p>
            Yosemite National Park is a popular, breathtaking, and scenic
            national park located in the mountains of Eastern California in
            Mariposa County. Established on October 1st, 1890, it is the third
            oldest national park in the United States. The park consistently
            gets voted as one of the most beautiful (and popular) national parks
            in America, with its stunning natural features like the Yosemite
            Valley made up of the two giant granite cliffs El Capitan and Half
            Dome, the iconic Yosemite Falls that's the tallest one in the
            continental US (2,425 feet), giant sequoia forests, glaciers
            originating from huge mountain peaks, and open meadows.
          </p>
          <div className="flex flex-col gap-y-3">
            <Carousel />
            <div className="text-sm text-center text-gray-400">
              Some cool photos of Yosemite wildlife from{" "}
              <a href="https://unsplash.com" target="_blank">
                Unsplash
              </a>
            </div>
          </div>
          <p>
            Because of its diverse terrain composed of different elevation zones
            and varying weathers throughout different seasons, the park has an
            incredible ecosystem that is home to more than 90 types of mammals,
            250 bird species, and 1,400 native plant species. There are also
            tons of activities you can do here, including hiking/biking over 800
            miles of trails, rock climbing on the granite cliffs, kayaking in
            lakes, going on scenic tours, outdoor camping/lodging, skiing during
            the winter, and so much more. Yosemite isn't just a national park,
            it's a way of truly experiencing life.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="pt-20 text-center text-sm text-gray-400"
      >
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/tonymac129"
          target="_blank"
          className="underline mr-5"
        >
          tonymac129
        </a>{" "}
        •{" "}
        <a
          href="https://github.com/tonymac129/yosemite"
          target="_blank"
          className="underline ml-5"
        >
          Source code
        </a>
      </motion.div>
    </div>
  );
}

export default App;
