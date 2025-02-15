import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-8 py-3 rounded-lg text-lg font-mono font-semibold transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-transparent';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-white hover:shadow-[0_0_15px_5px_rgba(0,180,216,0.3)] focus:ring-[#00b4d8] hover:border-[#00b4d8]/50',
    secondary: 'bg-gradient-to-r from-[#0a192f] to-[#0a192f]/90 text-[#00b4d8] border border-[#00b4d8]/30 hover:shadow-[0_0_15px_5px_rgba(0,180,216,0.2)] focus:ring-[#00b4d8] hover:border-[#00b4d8]/50',
    accent: 'bg-gradient-to-r from-[#ff9f1c] to-[#ffbf69] text-white hover:shadow-[0_0_15px_5px_rgba(255,159,28,0.2)] focus:ring-[#ff9f1c] hover:border-[#ff9f1c]/50',
    ghost: 'bg-transparent text-[#00b4d8] hover:bg-[#00b4d8]/10 border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 focus:ring-[#00b4d8] hover:shadow-[0_0_15px_5px_rgba(0,180,216,0.1)]'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10">
        {children}
        <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
      </span>
    </button>
  );
};

export default Button;
