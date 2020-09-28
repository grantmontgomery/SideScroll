import * as React from "react";
import "./Boxes.css";

export const Boxes: React.FC<{ index: number; list: number[] }> = ({
  index,
  list,
}) => {
  const [state, setState] = React.useState<{ slide: string }>({ slide: "25%" });

  React.useEffect(() => {
    setState({ slide: `${11 - index * 14}%` });
  }, [index]);
  return (
    <section className="boxesSection">
      <div
        className="boxesFlex"
        style={{ transform: `translate(${state.slide})` }}
      >
        {list.map((item) => (
          <div className="box" style={{ background: "black" }}></div>
        ))}
      </div>
    </section>
  );
};
