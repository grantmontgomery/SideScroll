import * as React from "react";
import "./Boxes.css";

export const Boxes: React.FC<{ color: string }> = ({ color }) => {
  const [state, setState] = React.useState<{ slide: string }>({ slide: "25%" });

  React.useEffect(() => {
    if (color === "" || color === "red") {
      setState({ slide: "25%" });
    }
    if (color === "green") {
      setState({ slide: "-8%" });
    }
    if (color === "blue") {
      setState({ slide: "-41%" });
    }
  }, [color]);
  return (
    <section className="boxesSection">
      <div
        className="boxesFlex"
        style={{ transform: `translate(${state.slide})` }}
      >
        <div
          className="box"
          style={{
            background: "red",
            transform: `${
              color === "red" ? "rotateY(0deg)" : "rotateY(45deg)"
            }`,
          }}
        ></div>
        <div
          className="box"
          style={{
            background: "green",
            transform: `${
              color === "green" ? "rotateY(0deg)" : "rotateY(45deg)"
            }`,
          }}
        ></div>
        <div
          className="box"
          style={{
            background: "blue",
            transform: `${
              color === "blue" ? "rotateY(0deg)" : "rotateY(45deg)"
            }`,
          }}
        ></div>
      </div>
    </section>
  );
};
