import { useState } from "react";
import Header from "./components/Header.jsx";
import QUESTIONS from "./questions.js";
import Question from "./components/Question.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [availableQuestions, setAvailableQuestions] = useState(QUESTIONS);
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
        {availableQuestions.length !== 0 ? (
          <Question
            question={availableQuestions[0]}
            onRegisterAnswer={handleRegisterAnswer}
          />
        ) : (
          <Results userAnswers={userAnswers} />
        )}
      </div>
    </>
  );
}

export default App;
