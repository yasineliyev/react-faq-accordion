import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import { questions } from "./questionData";

function App() {
  const [active, setActive] = useState("");

  return (
    <div className="App">
      <h1>FAQ Apppp</h1>
      {questions.map(({ title, id, answer }) => (
        <Accordion
          key={id}
          title={title}
          answer={answer}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  );
}

export default App;
