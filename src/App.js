import Timer from "./Component/Timer";
import Btns from "./Component/Btns";
import { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [status, setStatus] = useState(0);
  const [interv, setInterv] = useState();

  let updateMs = time.ms,
    updateM = time.m,
    updateS = time.s,
    updateH = time.h;

  const Start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  const Stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const Reset = () => {
    setStatus(0);
    clearInterval(interv);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const Resume = () => Start();
  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <Timer time={time} />
      <Btns
        status={status}
        Start={Start}
        Resume={Resume}
        Reset={Reset}
        Stop={Stop}
      />
    </div>
  );
}

export default App;