import React, { useEffect, useState } from "react";
import { fakeData } from "../data/fakeData";

export default function Keypad({ usedKeys, handleKeyup }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(fakeData.letters);
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3001/letters")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setLetters(json);
  //     });
  // }, []);

  return (
    <div>
      <div className="options-wrapper">
        <div key="Backspace" onClick={() => handleKeyup({ key: "Backspace" })}>
          <span>⌫</span>
          <span>BACKSPACE</span>
        </div>
        <div key="Enter" onClick={() => handleKeyup({ key: "Enter" })}>
          <span>ENTER</span>
          <span>⏎</span>
        </div>
      </div>
      <div className="keypad">
        {letters &&
          letters.map((l) => {
            const color = usedKeys[l.key];
            return (
              <div
                key={l.key}
                className={color}
                onClick={() => handleKeyup({ key: l.key })}
              >
                {l.key}
              </div>
            );
          })}
      </div>
    </div>
  );
}
