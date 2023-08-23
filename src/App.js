import { useEffect, useState } from "react";

import ToggleButton from "./components/ToggleButton"
import RefreshButton from "./components/RefreshButton"

import './App.css';


function App() {
  const [state, setState] = useState(false);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (!state) return;
    const timeId = setInterval(() => {
      if (seconds < 60) {
        setSeconds(seconds + 1);
      } else {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timeId);
  });

  const formatTime = (time) => {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  }

  return (
    <div className="App">
      <header className={"App-header " + ((state) ? "on" : "off")}>
        <h1 className="timer">{formatTime(minutes)}:{formatTime(seconds)}</h1>

        <div>
          <ToggleButton state={state} setState={setState} />
          <RefreshButton setMinutes={setMinutes} setSeconds={setSeconds} minutes={minutes} seconds={seconds} />
        </div>
      </header>
    </div>
  );
}

export default App;
