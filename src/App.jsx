import { useState } from "react";
import Header from "./components/Header.jsx";
import QUESTIONS from "./questions.js";
import Question from "./components/Question.jsx";

const shuffledQuestions = QUESTIONS.sort(() => Math.random() - 0.5);

function App() {
  const [availableQuestions, setAvailableQuestions] =
    useState(shuffledQuestions);
  const [userAnswers, setUserAnswers] = useState([]);

  function handleRegisterAnswer(id, answer) {
    setAvailableQuestions((prevState) => {
      const updatedQuestions = prevState.filter(
        (question) => question.id !== id
      );
      return updatedQuestions;
    });
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      { id: id, answer: answer },
    ]);
  }

  return (
    <>
      <Header />
      <div id="quiz">
        <Question
          question={availableQuestions[0]}
          onRegisterAnswer={handleRegisterAnswer}
        />
      </div>
    </>
  );
}

export default App;
