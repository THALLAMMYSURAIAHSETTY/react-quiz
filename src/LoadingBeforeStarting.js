import React, { useState, useEffect } from "react";
import {Router,Route,Link,useNavigate} from 'react-router-dom'



const LoadingBeforeStarting = () => {
  let navigate=useNavigate();

  const [countdown, setCountdown] = useState(5);

  useEffect(() => {

    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    if (countdown === -1) {
      clearInterval(timer);
      navigate("/TestInterface");
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown, navigate]);

  return (
    <div>
      <h2>Your Test Begins in {countdown} seconds</h2>
    </div>
  );
};

export default LoadingBeforeStarting;