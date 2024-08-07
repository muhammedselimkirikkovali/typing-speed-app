import { useCallback, useContext, useEffect } from "react";
import Context from "../context/Context";

import "./word.css";

const Writeword = () => {
  const {
    randomWord,
    createWord,
    inputValue,
    setCorrect,
    setIncorrect,
    setWpm,
  } = useContext(Context);

  useEffect(() => {
    randomWord();
  }, []);

  const calculateWord = useCallback(() => {
    const inputWord = inputValue.trim().split(" ");
    const correctWord = createWord.filter(
      (word, index) => word === inputWord[index]
    );
    const incorrectWord = inputWord.length - correctWord.length;
    const wpm = Math.floor((correctWord.length / 20) * 100);

    return {
      correctWord: correctWord.length,
      incorrectWord: incorrectWord,
      wpm: wpm,
    };
  }, [inputValue, createWord]);

  setCorrect(calculateWord().correctWord);
  setIncorrect(calculateWord().incorrectWord);
  setWpm(calculateWord().wpm);

  const getWordClass = (word, index) => {
    const inputWord = inputValue.split(" ");

    if (inputWord.length === 0) {
      return "";
    }

    if (index < inputWord.length) {
      return word === inputWord[index] ? "correct" : "incorrect";
    }
    return "";
  };

  return (
    <div className="container">
      <div className="word-field">
        {createWord.map((word, i) => (
          <span className={`word-container ${getWordClass(word, i)}`} key={i}>
            {word + " "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Writeword;
