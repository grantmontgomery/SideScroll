import * as React from "react";
import { Boxes } from "../Boxes";
import "./Container.css";

export const Container: React.FC = () => {
  const [state, setState] = React.useState({ color: "black" });

  // const redScroll: React.MutableRefObject<any> = React.useRef();
  // const greenScroll: React.MutableRefObject<any> = React.useRef();
  // const blueScroll: React.MutableRefObject<any> = React.useRef();

  let redScroll: HTMLElement | null = null;
  let greenScroll: HTMLElement | null = null;
  let blueScroll: HTMLElement | null = null;

  let ElementObject: { [key: number]: null | HTMLElement }[] = [];

  const randomArray: number[] = [1, 2, 3];

  ElementObject = randomArray.map((elem) => ({ [elem]: null }));

  const observer: React.MutableRefObject<IntersectionObserver> = React.useRef(
    new IntersectionObserver(
      (entries) => {
        console.log(entries);

        return entries.forEach((entry) => {
          const { target, intersectionRatio } = entry;
          switch (target) {
            case redScroll:
              return intersectionRatio === 1
                ? setState({ color: "red" })
                : null;
            case greenScroll:
              return intersectionRatio === 1
                ? setState({ color: "green" })
                : null;
            case blueScroll:
              return intersectionRatio === 1
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
    // const redFocus = redScroll.current;
    // const blueFocus = blueScroll.current;
    // const greenFocus = greenScroll.current;
    // if (redFocus) {
    //   newObserver.observe(redFocus);
    // }
    // if (blueFocus) {
    //   newObserver.observe(blueFocus);
    // }
    // if (greenFocus) {
    //   newObserver.observe(greenFocus);

    ElementObject.forEach((foo, index) => {
      const newElement = document.getElementById(`sensor${index}`);
      foo[index] = newElement;
      if (newElement) {
        return newObserver.observe(newElement);
      }
    });

    redScroll = document.getElementById("red");
    greenScroll = document.getElementById("green");
    blueScroll = document.getElementById("blue");
    const newObserver = observer.current;

    if (redScroll) {
      newObserver.observe(redScroll);
    }
    if (blueScroll) {
      newObserver.observe(blueScroll);
    }
    if (greenScroll) {
      newObserver.observe(greenScroll);
    }
  }, []);

  return (
    <div className="container">
      <Boxes color={state.color}></Boxes>
      <div className="scrollWrapper">
        <div className="secretScroll" id="secretScroll">
          <div className="secretSection" id="red"></div>
          <div className="secretSection" id="green"></div>
          <div id="blue" className="secretSection"></div>
          <div className="secretSection"></div>
          <div className="secretSection"></div>
          <div className="secretSection"></div>
          <div className="secretSection"></div>
          <div className="secretSection"></div>
        </div>
      </div>
    </div>
  );
};
