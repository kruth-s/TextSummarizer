
import React from 'react';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`
        flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark 
        focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ActionButton;
