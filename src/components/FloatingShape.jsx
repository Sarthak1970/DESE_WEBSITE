import React, { useEffect } from "react";

const FloatingShape = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowflake.style.opacity = Math.random();
      snowflake.style.width = snowflake.style.height = Math.random() * 4 + 2 + 'px';
      
      document.querySelector('.snowfall-container').appendChild(snowflake);
      
      // Remove snowflake after animation
      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };
    
    const snowfallInterval = setInterval(createSnowflake, 50);
    
    return () => clearInterval(snowfallInterval);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Snowfall container */}
      {/* <div className="snowfall-container absolute inset-0 z-10">
        <style>
          {`
            .snowflake {
              position: absolute;
              background: white;
              border-radius: 50%;
              pointer-events: none;
              animation: snowfall linear forwards;
            }
            
            @keyframes snowfall {
              0% {
                transform: translateY(-10vh) rotate(0deg);
              }
              100% {
                transform: translateY(100vh) rotate(360deg);
              }
            }
          `}
        </style>
      </div> */}
      
      {/* Background shapes */}
      <div
        className="absolute bottom-[-30vh] left-[-20vw] z-[-2] blur-[60px]"
        style={{
          width: "60vw",
          height: "60vh",
          background:
            "radial-gradient(circle, rgba(96,67,132,0.8) 0%, rgba(96,67,132,0.1) 70%)",
          transition: "background 10s ease-in-out",
        }}
      />
      
      <div
        className="absolute bottom-[-30vh] right-[-20vw] z-[-2] blur-[60px]"
        style={{
          width: "60vw",
          height: "60vh",
          background:
            "radial-gradient(circle, rgba(100,12,15,0.8) 0%, rgba(100,12,15,0.1) 70%)",
          transition: "background 10s ease-in-out",
        }}
      />
    </div>
  );
};

export default FloatingShape;