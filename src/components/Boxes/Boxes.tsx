import * as React from "react";
import "./Boxes.css";

export const Boxes: React.FC<{
  squareIndex: number;
  list: { [key: string]: any }[] | string;
}> = ({ squareIndex, list }) => {
  const [state, setState] = React.useState<{ slide: string }>({ slide: "" });

  React.useEffect(() => {
    if (window.innerHeight > window.innerWidth) {
      setState({ slide: `${15 - 20 * squareIndex}vh` });
    } else {
      setState({ slide: `calc(calc(45vw - 10vh) - ${squareIndex * 20}vh)` });
    }
  }, [squareIndex, window]);
  return (
    <section className="boxesSection">
      <div
        className="boxesFlex"
        style={{ transform: `translate(${state.slide})` }}
      >
        {typeof list === "object"
          ? list.map((item, index) => {
              const determineRotation: () => string = () => {
                if (index === squareIndex) return " rotateY(0deg)";
                return index > squareIndex
                  ? " rotateY(45deg)"
                  : " rotateY(-45deg)";
              };

              return (
                <div
                  className="box"
                  style={{
                    transform: determineRotation(),
                    pointerEvents: squareIndex === index ? "none" : "all",
                  }}
                >
                  <img src={item.urls.small} alt="" />
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
};
