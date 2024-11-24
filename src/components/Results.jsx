import quizCompletedImg from "../assets/quiz-complete.png";

export default function Results() {
  return (
    <div id="summary">
      <img
        src={quizCompletedImg}
        alt="Trophy"
      />
      <h2>Quiz over!</h2>
      {/* <ol>
        {userAnswers.map((userAnswer, index) => {
          let answerColorStatus;

          if (userAnswer.answer === correctAnswers[index]) {
            answerColorStatus = "correct";
          } else if (userAnswer.answer === null) {
            answerColorStatus = "skipped";
          } else {
            answerColorStatus = "wrong";
          }

          return (
            <li key={userAnswer.id}>
              <h3>{index + 1}</h3>
              <div className="question">{questionsList[index].text}</div>
              <div className={`user-answer ${answerColorStatus}`}>
                {userAnswer.answer ?? correctAnswers[index]}
              </div>
            </li>
          );
        })}
      </ol> */}
    </div>
  );
}
