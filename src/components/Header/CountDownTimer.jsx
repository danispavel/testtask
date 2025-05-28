import { useEffect, useState } from "react";
import TimeBlock from "./TimeBlock";

export default function CountdownTimer() {
    const [secondsLeft, setSecondsLeft] = useState(6 * 3600);
  
    useEffect(() => {
      if (secondsLeft <= 0) return;
  
      const interval = setInterval(() => {
        setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
  
      return () => clearInterval(interval);
    }, [secondsLeft]);
  
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;
  
    const formatNumber = (num) => num.toString().padStart(2, '0');
  
    return (
      <div className="flex space-x-2 items-center select-none">
        <TimeBlock value={formatNumber(hours)} label="Hrs" />
        <span className="text-white text-3xl font-semibold">:</span>
        <TimeBlock value={formatNumber(minutes)} label="Min" />
        <span className="text-white text-3xl font-semibold">:</span>
        <TimeBlock value={formatNumber(seconds)} label="Sec" />
      </div>
    );
  }