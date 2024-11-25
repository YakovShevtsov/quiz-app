import { useRef } from "react";
import QUESTIONS from "../questions.js";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelectAnswer,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <ul id="answers">
        {answers.map((answer) => {
          const isSelected = selectedAnswer === answer;
          let cssClasses;

          if (answerState === "answered" && isSelected) {
            cssClasses = "selected";
          }

          if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
          ) {
            cssClasses = answerState;
          }

          return (
            <li
              className="answer"
              key={answer}
            >
              <button
                onClick={() => onSelectAnswer(answer)}
                className={cssClasses}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
