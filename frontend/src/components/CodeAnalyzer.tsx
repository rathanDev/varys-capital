import { useState } from "react";
import axios from "axios";
import "./CodeAnalyzer.css";
import Result from "./Result";
import { config } from "../config";

const CodeAnalyzer = () => {
  const [textInput, setTextInput] = useState<string>("");
  const [results, setResults] = useState<string>("");

  const analyzeCode = () => {
    setResults("");
    if (!textInput.trim().length) {
      alert("Please enter valid input!");
      return;
    }
    const payload = preparePayload(textInput);
    doPost(payload);
  };

  const preparePayload = (textInput: string) => {
    const jsonStr = JSON.stringify(textInput);
    const codeInput = jsonStr.replace(/(\\n)/gm, " ").replace(/(\\")/gm, '"');
    const payload = {
      code: codeInput,
    };
    return payload;
  }

  const doPost = (payload: any) => {
    const url = `${config.baseUrl}/analyze`;
    axios.post<Result>(url, payload)
      .then(response => {
        const { data } = response;
        setResults(JSON.stringify(data, null, 2));
      })
      .catch((e) => {
        alert("Oops! Unexpected Error happened.");
        console.error(e);
      });
  };

  return (
    <div>
      <img width="2409" style={{ maxWidth: "100%", width: "319px", height: "47px" }} src="https://d2a1lk4nhrwv0k.cloudfront.net/mb/questions/sb1d374bc-73da-43a4-876f-bd7192d0ea07_qb15d800a-6040-4cf2-8192-e06751b65b8c.png" />
      <div className="resultLabel">Input</div>
      <textarea className="textArea"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button className="button" onClick={analyzeCode}>Analyze Code</button>
      <div className="resultLabel">Results</div>
      <pre className="resultDiv">{results}</pre>
    </div>
  );

};

export default CodeAnalyzer;
