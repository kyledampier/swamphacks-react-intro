import "./App.css";
import Counter from "./components/Counter";
import GPTCompletion from "./components/GPTCompletion";

import { openai } from "./lib/OpenAIClient";

function App() {
  return (
    <div className="App">
      <h1> Swamphacks - Intro to React </h1>
      {/* <Counter /> */}
      <h2> Counter Demo </h2>
      <Counter color="green" style={{ marginLeft: "0.5em" }} />

      <h2> API Calls Demo</h2>
      <GPTCompletion openai={openai} />
    </div>
  );
}

export default App;
