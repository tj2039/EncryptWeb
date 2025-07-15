// src/components/layout/ToolLayout.tsx

import React from "react";
import { colors } from "../../styles";

type Props = {
  title: string;
  description?: string;
  inputLabel: string;
  outputLabel: string;
  input: string;
  onInputChange: (value: string) => void;
  output: string;

  titleColor?: string;
  inputLabelColor?: string;
  outputLabelColor?: string;
};

const ToolLayout: React.FC<Props> = ({
  title,
  description,
  inputLabel,
  outputLabel,
  input,
  onInputChange,
  output,
  titleColor = colors.titleColor,
  inputLabelColor = colors.inputLabelColor,
  outputLabelColor = colors.outputLabelColor,
}) => {
  return (
    <div className={`w-full px-4 md:px-6 ${colors.text}`}>
      <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${titleColor}`}>{title}</h1>

      {description && (
        <p className="mb-6 text-sm md:text-base text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}

      <div className="mb-6">
        <label className={`block font-semibold mb-2 ${inputLabelColor}`}>{inputLabel}</label>
        <textarea
          className={`w-full h-48 md:h-64 lg:h-80 p-3 border rounded resize-y shadow-sm text-sm md:text-base ${colors.inputBg} ${colors.text}`}
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>

      <div>
        <label className={`block font-semibold mb-2 ${outputLabelColor}`}>{outputLabel}</label>
        <textarea
          className={`w-full h-48 md:h-64 lg:h-80 p-3 border rounded resize-y shadow-sm text-sm md:text-base ${colors.outputBg} ${colors.text}`}
          readOnly
          value={output}
        />
      </div>
    </div>
  );
};

export default ToolLayout;