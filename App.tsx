
import React, { useState, useEffect, useCallback } from 'react';
import { summarizeText } from './services/geminiService';
import Header from './components/Header';
import TextAreaInput from './components/TextAreaInput';
import SummaryDisplay from './components/SummaryDisplay';
import ActionButton from './components/ActionButton';
import { SparklesIcon, TrashIcon } from './components/icons/EditorIcons';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedTheme = window.localStorage.getItem('theme');
        return storedTheme === 'dark' || (storedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleSummarize = useCallback(async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to summarize.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSummary('');

    try {
      const result = await summarizeText(inputText);
      setSummary(result);
    } catch (err) {
      setError('Failed to generate summary. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [inputText]);

  const handleReset = () => {
    setInputText('');
    setSummary('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">
            Paste your long-form text below and let our AI generate a clear and concise summary for you.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <TextAreaInput
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your article, report, or any long text here..."
                disabled={isLoading}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <ActionButton
                  onClick={handleSummarize}
                  disabled={isLoading || !inputText}
                  className="bg-primary hover:bg-primary-light dark:bg-primary-dark dark:hover:bg-primary text-white flex-grow"
                >
                  <SparklesIcon />
                  {isLoading ? 'Summarizing...' : 'Summarize'}
                </ActionButton>
                <ActionButton
                  onClick={handleReset}
                  disabled={isLoading}
                  className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200"
                >
                  <TrashIcon />
                  Reset
                </ActionButton>
              </div>
            </div>

            <SummaryDisplay
              summary={summary}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
