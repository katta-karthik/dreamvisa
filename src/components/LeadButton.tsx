import React from 'react';

interface LeadButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export function LeadButton({ onClick, children, className = '' }: LeadButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 ${className}`}
    >
      {children}
    </button>
  );
} 