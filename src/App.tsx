import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";

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
    <div>
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
      <div className="flex flex-col py-10 gap-y-10" ref={mainRef}>
        <h2 className="text-center text-white text-2xl font-extrabold">
          BEAUTIFUL SCENARY
        </h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
