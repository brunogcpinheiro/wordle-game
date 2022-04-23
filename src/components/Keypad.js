import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);

  return (
    <div>
      <div className="options-wrapper">
        <div key="Backspace">
          <span>⌫</span>
          <span>Backspace</span>
        </div>
        <div key="Enter">
          <span>Enter</span>
          <span>⏎</span>
        </div>
      </div>
      <div className="keypad">
        {letters &&
          letters.map((l) => {
            const color = usedKeys[l.key];
            return (
              <div key={l.key} className={color}>
                {l.key}
              </div>
            );
          })}
      </div>
    </div>
  );
}
