import * as React from "react";
import "./Boxes.css";

export const Boxes: React.FC<{ squareIndex: number; list: number[] }> = ({
  squareIndex,
  list,
}) => {
  const [state, setState] = React.useState<{ slide: string }>({ slide: "" });

  React.useEffect(() => {
    setState({ slide: `${15 - 20 * squareIndex}vh` });
  }, [squareIndex]);
  return (
    <section className="boxesSection">
      <div
        className="boxesFlex"
        style={{ transform: `translate(${state.slide})` }}
      >
        {list.map((item, index) => {
          const determineRotation: () => string = () => {
            if (index === squareIndex) return "rotateY(0deg)";
            return index > squareIndex ? "rotateY(45deg)" : "rotateY(-45deg)";
          };

          return (
            <div
              className="box"
              style={{
                background: "black",
                transform: determineRotation(),
                pointerEvents: squareIndex === index ? "none" : "all",
              }}
            ></div>
          );
        })}
      </div>
    </section>
  );
};
