import React, { useState, useEffect } from "react";
import { Base64 } from "js-base64";
import ToolLayout from "../components/layout/ToolLayout";

const Base64Encode: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    try {
      setOutput(Base64.encode(input));
    } catch {
      setOutput("⚠️ 인코딩 실패");
    }
  }, [input]);

  return (
    <ToolLayout
      title="🔐 Base64 인코딩"
      description="입력한 텍스트를 Base64 형식으로 인코딩합니다."
      inputLabel="입력 텍스트"
      outputLabel="Base64 인코딩 결과"
      input={input}
      onInputChange={setInput}
      output={output}
    />
  );
};

export default Base64Encode;