import * as React from "react";
import "./Container.css";

export const Container: React.FC = () => {
  const observer: React.MutableRefObject<IntersectionObserver> = React.useRef(
    new IntersectionObserver(
      (entries) => {
        console.log(entries);

        if (entries.length === 1) {
          console.log(entries[0].intersectionRatio);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        root: document.getElementById("secretScroll"),
      }
    )
  );

  const testRef = React.useRef(null);

  React.useEffect(() => {
    const newObserver = observer.current;
    const testRefCurrent = testRef.current;
    if (testRefCurrent) {
      newObserver.observe(testRefCurrent);
    }
  }, []);

  return (
    <div className="container">
      <div></div>
      <div className="secretScroll" id="secretScroll">
        <div className="secretSection"></div>
        <div className="secretSection"></div>
        <div
          ref={testRef}
          style={{ background: "red" }}
          className="secretSection"
        ></div>
        <div className="secretSection"></div>
        <div className="secretSection"></div>
        <div className="secretSection"></div>
        <div className="secretSection"></div>
        <div className="secretSection"></div>
      </div>
    </div>
  );
};
