import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Results({ answers }) {
  const skippedAnswers = answers.filter((answer) => answer === null);
  const correctAnswers = answers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const incorrectAnswers = answers.filter(
    (answer, index) => answer !== QUESTIONS[index].answers[0] && answer !== null
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / answers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / answers.length) * 100
  );
  const incorrectAnswersShare = Math.round(
    (incorrectAnswers.length / answers.length) * 100
  );

  return (
    <div id="summary">
      <img
        src={quizCompletedImg}
        alt="Trophy"
      />
      <h2>Quiz over!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let answerColorStatus;

          if (answer === QUESTIONS[index].answers[0]) {
            answerColorStatus = "correct";
          } else if (answer === null) {
            answerColorStatus = "skipped";
          } else {
            answerColorStatus = "wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <div className="question">{QUESTIONS[index].text}</div>
              <div className={`user-answer ${answerColorStatus}`}>
                {answer ?? "skipped"}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
