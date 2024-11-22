export default function Question({ question, onRegisterAnswer }) {
  return (
    <div id="question">
      <h2>{question.text}</h2>
      <ul id="answers">
        {question.answers.map((answer) => {
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
