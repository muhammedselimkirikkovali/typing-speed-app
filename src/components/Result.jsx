// import { useEffect } from "react";
import Context from "../context/Context";
import { useContext } from "react";
import "./word.css";

function Result() {
  const { correct, incorrect, wpm } = useContext(Context);

  return (
    <>
      <div className="result">
        <span>Doğru Kelime: {correct}</span>
        <span>Yanlış Kelime: {incorrect}</span>
        <span>Doğruluk Oranı: %{wpm}</span>
      </div>
    </>
  );
}

export default Result;
