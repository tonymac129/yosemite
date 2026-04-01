const lefts = [0, 6, 4, 10, 10, 4, 6, 0];
const randoms = [...Array(50)].map(() => Math.floor(Math.random() * 20) - 10);

function Waterfall() {
  return (
    <div className="lg:left-15 -left-45 sm:-left-25 absolute -top-35 w-100 h-185 -z-4 overflow-hidden">
      {randoms.map((random, i) => {
        return (
          <div style={{ left: `${random}px` }} className="absolute">
            <div
              style={{ animationDelay: (i * 2000) / randoms.length + "ms" }}
              className={`waterfall w-15 h-1.5 bg-blue-500 rounded-sm`}
            />
            {lefts.map((item, j) => {
              const negative = j > lefts.length / 2;
              return (
                <div
                  style={{
                    animationDelay: (i * 2000) / randoms.length + "ms",
                    left: `${negative ? "-" : ""}${item * 1.5}px`,
                    top: `${!negative ? "-" : ""}${12 * Math.abs(j % 2 != 0 ? item + 4 : item - 4)}px`,
                  }}
                  className="waterfall w-15 h-1.5 bg-blue-500 rounded-sm absolute"
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Waterfall;
