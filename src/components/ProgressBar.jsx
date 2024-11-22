import { useEffect, useState } from "react";

export default function ProgressBar({ timer, onRegisterAnswer, questionId }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevState) => prevState - 10);
    }, 10);

    const timeout = setTimeout(() => {
      onRegisterAnswer(questionId, null);
    }, timer);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      setRemainingTime(timer);
    };
  }, [onRegisterAnswer]);

  return (
    <progress
      value={remainingTime}
      max={timer}
    />
  );
}
