import {useState} from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = function (newMode, replace) {
    if (!replace) {
      setHistory([...history, newMode]);
    } else {
      setHistory([...history.slice(0, history.length - 1, newMode)]);
    }
  };

  const back = function () {};

  return {mode: history[history.length - 1], transition, back};
}
