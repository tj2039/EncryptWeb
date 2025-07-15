import React, { useState, useEffect } from "react";
import ToolLayout from "../components/layout/ToolLayout";

const Sha256Tool: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encodeSHA256 = async (text: string): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  };

  useEffect(() => {
    if (input) {
      encodeSHA256(input).then(setOutput);
    } else {
      setOutput("");
    }
  }, [input]);

  return (
    <ToolLayout
      title="🔐 SHA-256 해시 계산"
      description="입력한 텍스트를 SHA-256으로 암호화합니다."
      inputLabel="input"
      outputLabel="output"
      input={input}
      onInputChange={setInput}
      output={output}
    />
  );
};

export default Sha256Tool;