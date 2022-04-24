/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Wordle from "./components/Wordle";
import { fakeData } from "./data/fakeData";

const App = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const randomSolution =
      fakeData.solutions[Math.floor(Math.random() * fakeData.solutions.length)];
    setSolution(randomSolution.word);
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3001/solutions")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const randomSolution = data[Math.floor(Math.random() * data.length)];
  //       setSolution(randomSolution.word);
  //     });
  // }, [setSolution]);

  return (
    <div className="App">
      <h1>
        Wordle{" "}
        <small>
          by{" "}
          <a
            href="https://github.com/brunogcpinheiro"
            target="_blank"
            rel="noreferrer"
          >
            Bruno Pinheiro
          </a>
        </small>
      </h1>
      {solution && <Wordle solution={solution} />}
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#666",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default App;
