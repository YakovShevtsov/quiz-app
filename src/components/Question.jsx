import ProgressBar from "./ProgressBar";

const TIMER = 5000;

export default function Question({ question, onRegisterAnswer }) {
  const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);

  return (
    <div id="question">
      <ProgressBar
        timer={TIMER}
        onRegisterAnswer={onRegisterAnswer}
        questionId={question.id}
      />
      <h2>{question.text}</h2>
      <ul id="answers">
        {shuffledAnswers.map((answer) => {
          return (
            <li
              className="answer"
              key={answer}
            >
              <button onClick={() => onRegisterAnswer(question.id, answer)}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
