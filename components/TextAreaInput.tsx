
import React from 'react';

interface TextAreaInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  disabled: boolean;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ value, onChange, placeholder, disabled }) => {
  return (
    <div className="relative w-full h-full">
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className="w-full h-80 lg:h-full resize-none p-4 border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-dark dark:focus:ring-primary focus:border-transparent transition-all duration-300 disabled:opacity-50"
            aria-label="Text input for summarization"
        />
    </div>
  );
};

export default TextAreaInput;
