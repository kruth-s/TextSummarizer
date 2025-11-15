
import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon, ExclamationTriangleIcon, LightBulbIcon } from './icons/EditorIcons';

interface SummaryDisplayProps {
  summary: string;
  isLoading: boolean;
  error: string | null;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center text-center text-slate-500 dark:text-slate-400">
        <svg className="animate-spin-slow h-12 w-12 mb-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="font-semibold text-lg">Generating Summary</p>
        <p>Our AI is working its magic. Please wait a moment...</p>
    </div>
);


const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-2 rounded-lg bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200"
      aria-label="Copy summary to clipboard"
    >
      {copied ? <CheckIcon className="text-green-500" /> : <ClipboardIcon />}
    </button>
  );
};


const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ summary, isLoading, error }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-80 lg:h-full p-4 border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 rounded-lg">
      {isLoading && <LoadingSpinner />}
      
      {!isLoading && error && (
          <div className="text-center text-red-500 dark:text-red-400">
            <ExclamationTriangleIcon className="mx-auto mb-2" />
            <p className="font-semibold">An Error Occurred</p>
            <p>{error}</p>
          </div>
      )}

      {!isLoading && !error && !summary && (
        <div className="text-center text-slate-500 dark:text-slate-400">
            <LightBulbIcon className="mx-auto mb-2" />
            <p className="font-semibold">Your Summary Will Appear Here</p>
            <p>Enter text and click "Summarize" to begin.</p>
        </div>
      )}

      {!isLoading && !error && summary && (
        <>
          <CopyButton textToCopy={summary} />
          <div className="prose prose-slate dark:prose-invert w-full h-full overflow-y-auto p-2">
            <p>{summary}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SummaryDisplay;
