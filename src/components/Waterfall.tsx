const lefts = [0, 6, 4, 10, 10, 4, 6, 0];
const randoms = [...Array(30)].map(() => Math.floor(Math.random() * 10) - 5);

function Waterfall() {
  return (
    <div className="left-15 absolute -top-30 w-100 h-180 -z-4 overflow-hidden">
      {randoms.map((random, i) => {
        return (
          <div
            className={`absolute ${random < 0 ? "-" : ""}left-${Math.abs(random)}`}
          >
            <div
              style={{ animationDelay: (i * 2500) / randoms.length + "ms" }}
              className={`waterfall w-15 h-1.5 bg-blue-500 rounded-sm`}
            />
            {lefts.map((item, j) => {
              const negative = j > lefts.length / 2;
              return (
                <div
                  style={{ animationDelay: (i * 2500) / randoms.length + "ms" }}
                  className={`waterfall w-15 h-1.5 bg-blue-500 rounded-sm absolute
                  ${negative ? "-" : ""}left-${item * 0.5} ${!negative ? "-" : ""}top-${3 * Math.abs(j % 2 != 0 ? item + 4 : item - 4)}`}
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
