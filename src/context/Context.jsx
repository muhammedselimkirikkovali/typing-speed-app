import { createContext, useState } from "react";
import PropTypes from "prop-types";

const WordContext = createContext();

const wordsArray = [
  "kitap",
  "ev",
  "toprak",
  "deniz",
  "yol",
  "çiçek",
  "kalem",
  "bilgisayar",
  "öğrenci",
  "öğretmen",
  "kedi",
  "köpek",
  "kuş",
  "balık",
  "orman",
  "dağ",
  "çay",
  "kahve",
  "süt",
  "su",
  "gökyüzü",
  "bulut",
  "gün",
  "ay",
  "yıldız",
  "gece",
  "sabah",
  "akşam",
  "yemek",
  "pasta",
  "ekmek",
  "meyve",
  "sebze",
  "pizza",
  "salata",
  "anahtar",
  "kapı",
  "pencere",
  "duvar",
  "oda",
  "masa",
  "sandalye",
  "telefon",
  "televizyon",
  "müzik",
  "resim",
  "renk",
  "doğa",
  "şehir",
  "ülke",
  "dünya",
  "ayakkabı",
  "çanta",
  "elbise",
  "pantolon",
  "gömlek",
  "çorap",
  "ayak",
  "el",
  "yüz",
  "saç",
  "göz",
  "kulak",
  "burun",
  "ağız",
  "diş",
  "parmak",
  "tırnak",
  "kol",
  "bacak",
  "kalp",
  "beyin",
  "akıl",
  "düşünce",
  "fikir",
  "plan",
  "proje",
  "öneri",
  "soru",
  "cevap",
  "bilgi",
  "bilim",
  "teknoloji",
  "sanat",
  "müze",
  "tarih",
  "geçmiş",
  "gelecek",
  "bugün",
  "yarın",
  "hafta",
  "ay",
  "yıl",
  "zaman",
  "uzay",
  "evren",
  "düzen",
  "barış",
  "mutluluk",
  "sevgi",
];

export const WordProvider = ({ children }) => {
  const [createWord, setCreateWord] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [startCount, setStartCount] = useState(false);

  const [timer, setTimer] = useState(10);

  const [correct, setCorrect] = useState(0);

  const [incorrect, setIncorrect] = useState(0);

  const [wpm, setWpm] = useState(0);

  const randomWord = () => {
    const words = [];
    for (let i = 0; i < 20; i++) {
      let randomIndex = Math.floor(Math.random() * wordsArray.length);
      words.push(wordsArray[randomIndex]);
    }
    setCreateWord(words);
  };

  const values = {
    inputValue,
    setInputValue,
    startCount,
    setStartCount,
    timer,
    setTimer,
    correct,
    setCorrect,
    incorrect,
    setIncorrect,
    wpm,
    setWpm,
    createWord,
    setCreateWord,
    randomWord,
  };

  return <WordContext.Provider value={values}>{children}</WordContext.Provider>;
};

WordProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WordContext;
