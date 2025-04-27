import React from 'react';

interface LogoProps {
  variant?: 'white' | 'blue' | 'black';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'white', className = '' }) => {
  let fillColor, strokeColor;
  
  switch (variant) {
    case 'white':
      fillColor = '#FEFEFE';
      strokeColor = '#0649E7';
      break;
    case 'black':
      fillColor = '#101010';
      strokeColor = '#FEFEFE';
      break;
    case 'blue':
    default:
      fillColor = '#0649E7';
      strokeColor = '#FEFEFE';
      break;
  }

  return (
    <div className={`flex items-center ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
        <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill={fillColor} />
        <path d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M20 30C14.4772 30 10 25.5228 10 20" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className={`font-sora font-semibold text-xl ${variant === 'white' ? 'text-white' : variant === 'blue' ? 'text-primary' : 'text-neutral-black'}`}>
        MobiusEngine
      </span>
    </div>
  );
};

export default Logo;