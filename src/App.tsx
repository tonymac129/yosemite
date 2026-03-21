import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Widget from "./components/Widget";

function App() {
  const [isDay, setIsDay] = useState<boolean>(false);
  const [rotate, setRotate] = useState<number>(45);
  const moonImg = useRef<HTMLImageElement>(null);
  const sunImg = useRef<HTMLImageElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

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
      <motion.div
        initial={{ scale: 0.3, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="flex flex-col py-10 gap-y-10"
        ref={mainRef}
      >
        <h2 className="text-center text-white text-2xl font-bold font-[sono]!">
          BEAUTIFUL SCENERY
        </h2>
        <div className="flex flex-wrap justify-center gap-5 mx-[15%]">
          <Widget>Test hi</Widget>
          <Widget>Test hi</Widget>
          <Widget>Test hi</Widget>
          <Widget>Test hi</Widget>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="flex flex-col py-10 gap-y-10"
        ref={mainRef}
      >
        <h2 className="text-center text-white text-2xl font-bold font-[sono]!">
          ABOUT THE PARK
        </h2>
        <div className="mx-[15%] text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aut. Qui
          harum aut dolor sunt dolores dolorum repellendus vero. Omnis
          laboriosam deserunt ducimus obcaecati dolore voluptas deleniti quo
          magni ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eum, praesentium qui. Consequuntur sint enim facilis quasi? Aliquam,
          provident? Atque voluptatum quaerat culpa. Quidem debitis praesentium,
          repudiandae perspiciatis laborum assumenda quasi? Nulla dignissimos
          repudiandae eligendi reprehenderit neque ipsam consequatur laboriosam
          exercitationem eum, beatae, ullam amet consectetur doloremque fugit,
          laborum perferendis nobis minus numquam.
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
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
