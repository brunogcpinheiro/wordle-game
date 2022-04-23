import { useEffect, useState } from "react";
import { attempts } from "../constants";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import { useWindowSize } from "../hooks/useWindowSize";
import Confetti from "react-confetti";

const Wordle = ({ solution }) => {
  const { width, height } = useWindowSize();
  const [confetti, setConfetti] = useState(false);
  const { currentGuess, handleKeyup, guesses, turn, isCorrect, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => setConfetti(true), 1100);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn > attempts - 1) {
      console.log("You lose!");
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, height, isCorrect, turn, width]);

  return (
    <div className="main-wrapper">
      {confetti && <Confetti width={`${width - 20}px`} height={height} />}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
};

export default Wordle;
