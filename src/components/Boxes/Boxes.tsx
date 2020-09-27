import * as React from "react";
import "./Boxes.css";

export const Boxes: React.FC<{ color: string }> = ({ color }) => {
  const [state, setState] = React.useState<{ text: string }>({ text: "" });
  return (
    <section className="boxesSection">
      <div
        className="middleBox"
        style={{ background: color }}
        onClick={() =>
          state.text === ""
            ? setState({ text: "clicked" })
            : setState({ text: "" })
        }
      >
        {state.text}
      </div>
    </section>
  );
};
