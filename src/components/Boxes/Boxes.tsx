import * as React from "react";
import "./Boxes.css";

export const Boxes: React.FC<{
  squareIndex: number;
  list: { [key: string]: any }[] | string;
}> = ({ squareIndex, list }) => {
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
        {typeof list === "object"
          ? list.map((item, index) => {
              const determineRotation: () => string = () => {
                if (index === squareIndex) return "rotateY(0deg)";
                return index > squareIndex
                  ? "rotateY(45deg)"
                  : "rotateY(-45deg)";
              };

              return (
                <div
                  className="box"
                  style={{
                    transform: determineRotation(),
                    pointerEvents: squareIndex === index ? "none" : "all",
                    objectFit: "contain",
                  }}
                >
                  <img
                    src={item.urls.small}
                    alt=""
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      position: "relative",
                      height: "100%",
                      width: "auto",
                    }}
                  />
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
};
