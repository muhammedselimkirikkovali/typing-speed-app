// import { useState } from 'react'
import "./App.css";

import Word from "./components/CreateWord";
import Input from "./components/Input";
import Counter from "./components/Counter";
import { WordProvider } from "./context/Context";
import Result from "./components/Result";

function App() {
  const Restart = () => {
    window.location.reload();
  };

  return (
    <WordProvider>
      <Word />
      <div className="all-field">
        <Input />
        <Counter />
        <button className="reset" onClick={Restart}>
          Reset
        </button>
      </div>
      <div>
        <Result />
      </div>
    </WordProvider>
  );
}

export default App;
