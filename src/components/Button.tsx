import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5";

  const variantStyles = variant === 'primary'
    ? "bg-gradient-to-r from-violet-500 via-purple-500 to-sky-500 text-white shadow-lg hover:shadow-xl"
    : "border-2 border-gray-700 text-gray-100 hover:border-violet-500 hover:text-violet-400";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}
