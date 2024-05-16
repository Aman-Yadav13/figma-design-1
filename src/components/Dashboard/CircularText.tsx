//Non-used file in the project -> Tried stuff

import React from "react";

const generateSpanElements = (text: string): JSX.Element[] => {
  const length = text.length;
  const splittedText = text.split("");
  const spanElements: JSX.Element[] = [];
  var spaces = 0;
  for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] === " ") {
      spaces++;
    }
  }
  var clength = splittedText.length - spaces;
  var j = 0;
  var a = Math.floor(clength / 2);
  var b = 0;

  for (let i = 0; i < length; i++) {
    if (splittedText[i] === " ") {
    } else if (j <= Math.floor(clength / 2)) {
      const rotation = `rotate(${-a * 2}deg)`;

      spanElements.push(
        <span
          key={`c-${i + 1}`}
          style={{
            transform: rotation,
            padding: "0px",
            marginLeft: `-${j * 2}px`,
          }}
        >
          {text[i]}
        </span>
      );
      j++;
      a--;
    } else {
      const rotation = `rotate(${(b + 1) * 2}deg)`;
      spanElements.push(
        <span
          key={`c-${i + 1}`}
          style={{
            transform: rotation,
            padding: "0px",
            marginLeft: `-${j * 2}px`,
          }}
        >
          {text[i]}
        </span>
      );
      j++;
      b++;
    }
  }

  return spanElements;
};

export const CircularText = ({ text }: { text: string }) => {
  const spanElements = generateSpanElements(text);

  return <div>{spanElements}</div>;
};
