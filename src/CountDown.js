import React, { useState, useEffect } from "react";

function CountdownTimer() {
  let [countDownTime, setCountDownTime] = useState(20 * 60 * 1000);
  let [timerDisplay, setTimerDisplay] = useState("");
  let [timerColor, setTimerColor] = useState("purple");

  useEffect(() => {
      let interval = setInterval(() => {
      let minutes = Math.floor(countDownTime / (60 * 1000));
      let seconds = Math.floor((countDownTime % (60 * 1000)) / 1000);

      if (seconds<10 && minutes<10)
      {
        setTimerDisplay(`0${minutes}:0${seconds}`);
      }
      else if(seconds<10 && minutes>=10)
      {
        setTimerDisplay(`${minutes}:0${seconds}`);
      }
      else if(minutes<10 && seconds>=10)
      {
        setTimerDisplay(`0${minutes}:${seconds}`);
      }
      else
      {
        setTimerDisplay(`${minutes}:${seconds}`);
      }

      // setTimerDisplay(`${minutes}:${seconds}`);
      setCountDownTime(countDownTime - 1000);

      if (minutes < 5) {
        setTimerColor("red");
      }

      if (countDownTime < 0) {
        clearInterval(interval);
        setTimerDisplay("Time's up!");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownTime]);

  return <div style={{ color: timerColor }}>{timerDisplay}</div>;
}

export default CountdownTimer;
