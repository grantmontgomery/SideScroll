import { objectExpression } from "@babel/types";
import { element } from "prop-types";
import * as React from "react";
import { SensorSquare } from "../SensorSquare";
import { Boxes } from "../Boxes";
import "./Container.css";

export const Container: React.FC = () => {
  const [state, setState] = React.useState<{ squareIndex: number }>({
    squareIndex: 0,
  });

  let ElementObject: { [key: number]: null | HTMLElement }[] = [];

  const randomArray: number[] = [0, 1, 2, 3];

  ElementObject = randomArray.map((elem) => ({ [elem]: null }));

  const observer: React.MutableRefObject<IntersectionObserver> = React.useRef(
    new IntersectionObserver(
      (entries) => {
        return ElementObject.forEach((Element, index) => {
          return entries.forEach((entry) => {
            const { target, intersectionRatio } = entry;
            switch (target) {
              case document.getElementById(`sensor${index}`):
                return intersectionRatio === 1
                  ? setState({ squareIndex: index })
                  : null;
            }
          });
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

    ElementObject.forEach((foo, index) => {
      const newElement = document.getElementById(`sensor${index}`);
      foo[index] = newElement;
      if (newElement) {
        return newObserver.observe(newElement);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="opacityBar" id="opacityBar1"></div>
      <Boxes list={randomArray} squareIndex={state.squareIndex}></Boxes>
      <div className="scrollWrapper">
        <div className="secretScroll" id="secretScroll">
          {randomArray.map((item, index) => (
            <SensorSquare index={index}></SensorSquare>
          ))}
        </div>
      </div>
      <div className="opacityBar" id="opacityBar2"></div>
    </div>
  );
};
