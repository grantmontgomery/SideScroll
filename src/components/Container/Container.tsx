import * as React from "react";
import { Boxes } from "../Boxes";
import "./Container.css";

export const Container: React.FC = () => {
  const [state, setState] = React.useState({ color: "black" });

  const redScroll: React.MutableRefObject<any> = React.useRef();
  const greenScroll: React.MutableRefObject<any> = React.useRef(null);
  const blueScroll: React.MutableRefObject<any> = React.useRef(null);

  const observer: React.MutableRefObject<IntersectionObserver> = React.useRef(
    new IntersectionObserver(
      (entries) => {
        console.log(entries);

        return entries.forEach((entry) => {
          const { target, intersectionRatio } = entry;
          switch (target) {
            case document.getElementById("red"):
              return intersectionRatio >= 0.5
                ? setState({ color: "red" })
                : null;
            case document.getElementById("green"):
              return intersectionRatio >= 0.5
                ? setState({ color: "green" })
                : null;
            case document.getElementById("blue"):
              return intersectionRatio >= 0.5
                ? setState({ color: "blue" })
                : null;
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        root: document.getElementById("secretScroll"),
      }
    )
  );

  React.useEffect(() => {
    const newObserver = observer.current;
    const redFocus = redScroll.current;
    const blueFocus = blueScroll.current;
    const greenFocus = greenScroll.current;
    if (redFocus) {
      newObserver.observe(redFocus);
    }
    if (blueFocus) {
      newObserver.observe(blueFocus);
    }
    if (greenFocus) {
      newObserver.observe(greenFocus);
    }
  }, []);

  return (
    <div className="container">
      <Boxes color={state.color}></Boxes>
      <div className="scrollWrapper">
        <div className="secretScroll" id="secretScroll">
          <div className="secretSection"></div>
          <div className="secretSection"></div>
          <div
            ref={redScroll}
            style={{ border: "solid 1px red" }}
            className="secretSection"
            id="red"
          ></div>
          <div
            ref={greenScroll}
            id="green"
            style={{ border: "solid 1px green" }}
            className="secretSection"
          ></div>
          <div
            ref={blueScroll}
            style={{ border: "solid 1px blue" }}
            className="secretSection"
            id="blue"
          ></div>
          <div className="secretSection"></div>
          <div className="secretSection"></div>
          <div className="secretSection"></div>
        </div>
      </div>
    </div>
  );
};
