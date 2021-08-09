import React, { useState, useEffect } from "react";
import axios from "axios";
import TrueButton from "./components/TrueButton";
import FalseButton from "./components/FalseButton";
import { AllHtmlEntities } from "html-entities";

const entities = new AllHtmlEntities();

const App = (props) => {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);

  const new_question = async () => {
    axios
      .get("https://opentdb.com/api.php?amount=1&type=boolean")
      .then((response) => {
        const result = response.data.results[0];
        setQuestion(result.question);
        setAnswer(result.correct_answer === "True");
      });
  };

  const make_guess = (guess) => {
    if (answer === guess) {
      setScore((score) => score + 1);
    } else {
      setScore(0);
    }
    new_question();
  };

  const guess_true = () => make_guess(true);
  const guess_false = () => make_guess(false);

  useEffect(() => {
    new_question();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 w-full h-screen flex flex-row justify-center">
      <div className="flex flex-col justify-center text-center">
        <div className="text-3xl italic text-center mb-6 font-bold font-mono text-white">
          TRIVIA
        </div>
        <div
          className="mb-6 text-xl text-white
    animate-pulse
    inline-block
    text-center
    py-1 px-4
    font-bold"
        >
          Current Streak: {score}
        </div>
        <div className="h-32 flex mb-4 flex-col justify-center">
          <div className="bg-gray-700 border-black-500 transistion-all hover:scale-150 mb-4 w-full h-32 rounded-md p-4 shadow-2xl text-white text-xl">
            {entities.decode(question)}
          </div>
        </div>
        <div className="flex flex-row justify-center gap-3">
          <TrueButton onClick={guess_true} green>
            True
          </TrueButton>
          <FalseButton onClick={guess_false} red>
            False
          </FalseButton>
        </div>
      </div>
    </div>
  );
};

export default App;
