import React, { useState } from "react";

const App: React.FC = () => {
  const [formA, setFormA] = useState("");
  const [formB, setFormB] = useState("");
  const [conditionalOperator, setConditionalOperator] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onClickHandler() {
    setErrorMessage("");

    if (conditionalOperator === "===") {
      setResult((formA === formB).toString());
    } else if (conditionalOperator === "<") {
      setResult((formA < formB).toString());
    } else if (conditionalOperator === ">") {
      setResult((formA > formB).toString());
    } else if (conditionalOperator === "<=") {
      setResult((formA <= formB).toString());
    } else if (conditionalOperator === ">=") {
      setResult((formA >= formB).toString());
    } else if (conditionalOperator === "==") {
      setResult((formA == formB).toString());
    } else if (conditionalOperator === "!==") {
      setResult((formA !== formB).toString());
    } else {
      setErrorMessage("演算子が無効です。正しい演算子を入力してください。");
    }
  }
  return (
    <>
      <p>比較したいものを入力してください</p>
      <textarea id="formA" onChange={(e) => setFormA(e.target.value)}>
        {formA}
      </textarea>
      <textarea id="formB" onChange={(e) => setFormB(e.target.value)}>
        {formB}
      </textarea>
      <p>比較方法(javascript演算子)を入力してください</p>
      <textarea onChange={(e) => setConditionalOperator(e.target.value)}>{conditionalOperator}</textarea>
      <button onClick={() => onClickHandler()}>比較する</button>
      <p>{errorMessage}</p>
      <p>結果: {result}</p>
    </>
  );
};

export default App;
