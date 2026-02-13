import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-semibold transition-all duration-300 rounded-lg focus:outline-none tracking-wide disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-gold-gradient text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 border border-transparent active:scale-[0.98]",
    secondary: "bg-white text-black hover:bg-gray-100 hover:-translate-y-0.5 shadow-lg",
    outline: "bg-transparent border border-white/20 text-white hover:border-gold-400 hover:text-gold-300 backdrop-blur-md hover:bg-white/5",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;