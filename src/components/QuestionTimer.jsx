import { useEffect, useState } from "react";

export default function QuestionTimer({ timer, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timeout = setTimeout(onTimeout, timer);

    return () => {
      clearTimeout(timeout);
      setRemainingTime(timer);
    };
  }, [timer, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevState) => prevState - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      value={remainingTime}
      max={timer}
      className={mode}
    />
  );
}
