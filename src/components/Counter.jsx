import { useEffect, useContext } from "react";
import Context from "../context/Context";
import "./word.css";

function Geri() {
  const { timer, setTimer, startCount } = useContext(Context);

  useEffect(() => {
    if (startCount) {
      const id = setInterval(() => {
        setTimer((s) => {
          if (s === 0) {
            clearInterval(id);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }
  }, [setTimer, startCount]);
  return (
    <>
      <div className="counter-field">{timer}</div>
    </>
  );
}

export default Geri;
