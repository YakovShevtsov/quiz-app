import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";
import Results from "./Results.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const activeQuestion =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestion === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleAnswer(answer) {
      setAnswerState("answered");
      setUserAnswers((prevAnswers) => [...prevAnswers, answer]);

      setTimeout(() => {
        if (answer === QUESTIONS[activeQuestion].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestion]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Results />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestion}
        answers={QUESTIONS[activeQuestion].answers}
        onSelectAnswer={handleSelectAnswer}
        questionText={QUESTIONS[activeQuestion].text}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
