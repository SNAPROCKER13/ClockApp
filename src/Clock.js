import React, { useState } from "react";
import "./Clock.css";

function Clock() {
  let date = new Date().toLocaleTimeString();
  const [time, setTime] = useState(date);

  setInterval(() => {
    date = new Date().toLocaleTimeString();
    setTime(date);
  }, 1000);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default Clock;
