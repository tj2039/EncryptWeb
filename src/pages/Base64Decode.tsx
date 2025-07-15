import React, { useState, useEffect } from "react";
import { Base64 } from "js-base64";
import ToolLayout from "../components/layout/ToolLayout";

const Base64Decode: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    try {
      setOutput(Base64.decode(input));
    } catch {
      setOutput("⚠️ 디코딩 실패: 유효한 Base64 문자열이 아닙니다");
    }
  }, [input]);

  return (
    <ToolLayout
      title="📥 Base64 디코딩"
      description="입력한 텍스트를 Base64 형식으로 디코딩합니다."
      inputLabel="input"
      outputLabel="output"
      input={input}
      onInputChange={setInput}
      output={output}
    />
  );
};

export default Base64Decode;