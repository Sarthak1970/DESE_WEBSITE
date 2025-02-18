import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-8 py-3 rounded-lg text-lg font-mono font-semibold transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-transparent';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#9b5de5] to-[#f15bb5] text-white hover:shadow-[0_0_15px_5px_rgba(155,93,229,0.3)] focus:ring-[#9b5de5] hover:border-[#9b5de5]/50',
    secondary: 'bg-gradient-to-r from-[#0a192f] to-[#0a192f]/90 text-[#9b5de5] border border-[#9b5de5]/30 hover:shadow-[0_0_15px_5px_rgba(155,93,229,0.2)] focus:ring-[#9b5de5] hover:border-[#9b5de5]/50',
    accent: 'bg-gradient-to-r from-[#ff9f1c] to-[#ffbf69] text-white hover:shadow-[0_0_15px_5px_rgba(255,159,28,0.2)] focus:ring-[#ff9f1c] hover:border-[#ff9f1c]/50',
    ghost: 'bg-transparent text-[#9b5de5] hover:bg-[#9b5de5]/10 border border-[#9b5de5]/20 hover:border-[#9b5de5]/50 focus:ring-[#9b5de5] hover:shadow-[0_0_15px_5px_rgba(155,93,229,0.1)]'
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
