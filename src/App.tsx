import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home, Game, NotFound } from "./routes";
import "./App.css";

const App = () => {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  function displayCount(message: string): string {
    return message;
  }

  return (
    // <h2>{displayCount(`Count: ${count}`)}</h2>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>);
}

export default App;

