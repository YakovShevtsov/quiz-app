import QuestionTimer from "../components/QuestionTimer.jsx";
import Answers from "../components/Answers.jsx";
import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Question({
  onSelectAnswer,
  onSkipAnswer,
  questionIndex,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[questionIndex].answers[0],
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        timer={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        selectedAnswer={answer.selectedAnswer}
        answers={QUESTIONS[questionIndex].answers}
        answerState={answerState}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
