import React from 'react';

interface ButtonProps {
  size: 'sm' | 'md';
  color: 'white' | 'black' | 'blue';
  children: React.ReactNode;
  onClick?: () => void;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-md',
};

const colorClasses = {
  white: 'text-black bg-white hover:bg-gray-200 focus:ring-gray-300',
  black: 'text-white bg-black hover:bg-gray-800 focus:ring-gray-600',
  blue: 'text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-300 ring-opacity-50 ring-offset-2',
};

export const Button: React.FC<ButtonProps> = ({ size, color, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        focus:outline-none 
        focus:ring 
        rounded border 
        border-gray-200 
        shadow-sm 
        transition 
        ease-in-out 
        duration-150
        ${color === 'blue' ? 'backdrop-filter backdrop-blur-sm' : ''}
      `}
    >
      {children}
    </button>
  );
};
