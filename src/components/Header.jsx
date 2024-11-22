import QuizLogoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={QuizLogoImg}
        alt="Clipboard with pen"
      />
      <h1>React quiz</h1>
    </header>
  );
}
