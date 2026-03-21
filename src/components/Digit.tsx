import { useState, useEffect } from "react";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

type DigitProps = {
  digit: number;
  hue: number;
  i: number;
  l: number;
};

function Digit({ digit, hue, i, l }: DigitProps) {
  const [bottom, setBottom] = useState<number>(0);

  useEffect(() => {
    let count = 0;
    setBottom(-50 * (digit + 1));
    const randomInterval = Math.random() * 20 + 20;
    setInterval(() => {
      if (count < (digit + 1) * 10) {
        setBottom((prev) => prev + 2.5);
        count++;
      }
    }, randomInterval);
  }, []);

  return (
    <div className="flex flex-col gap-y-5 w-7.5 h-13.5 z-15 relative overflow-hidden">
      <div
        style={{ bottom: 6 + bottom + "px" }}
        className="bg-clip-text absolute left-0 flex flex-col"
      >
        {numbers.slice(0, digit + 1).map((val) => {
          return (
            <div
              style={
                {
                  "--text-gradient": `linear-gradient(to right,hsl(${(hue + (60 / l) * i) % 360},100%,50%),hsl(${(hue + (60 / l) * (i + 1)) % 360},100%,50%))`,
                } as React.CSSProperties
              }
              className={`relative text-center z-2 font-[sono]! font-extrabold text-5xl bg-clip-text! text-transparent! bg-(image:--text-gradient)`}
            >
              {val}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Digit;
