import { useState, useEffect } from "react";
import Hero from "./components/Hero";

function App() {
  const [isDay, setIsDay] = useState<boolean>(false);
  const [rotate, setRotate] = useState<number>(45);

  useEffect(() => {
    const gradientInterval = setInterval(() => {
      setRotate((prev) => prev + 5);
    }, 50);

    setTimeout(() => {
      clearInterval(gradientInterval);
    }, 1800);

    return () => {
      clearInterval(gradientInterval);
    };
  }, [isDay]);

  return (
    <div>
      <div
        style={{
          background: `linear-gradient(${rotate}deg,hsl(${rotate + 175},20%,25%),hsl(${rotate + 185},15%,7%),hsl(${rotate + (isDay ? 5 : 0)},${isDay ? 60 : 0}%,${isDay ? 55 : 0}%))`,
          transition: "background 0.3s ease",
        }}
        className="absolute top-0 left-0 w-full h-150 -z-5"
      />
      <img
        src="/moon.png"
        className="absolute -top-5 right-20 w-25 brightness-90"
      />
      <div className="absolute top-0 left-0 w-full h-150 bg-center bg-cover bg-[url('/middleground.png')] brightness-50 -z-5" />
      <div className="absolute top-0 left-0 w-full h-150 bg-linear-to-t from-gray-950 via-transparent to-transparent -z-5" />
      <Hero isDay={isDay} setIsDay={setIsDay} />
      <div className="flex flex-col py-10 gap-y-10">
        <h2 className="text-center text-white text-2xl font-extrabold">
          BEAUTIFUL SCENARY
        </h2>
      </div>
    </div>
  );
}

export default App;
