import React from "react";

const FloatingShape = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {/* Background shapes */}
      <div
        className="absolute bottom-[-30vh] left-[-20vw] z-0 blur-[60px]"
        style={{
          width: "60vw",
          height: "60vh",
          background:
            "radial-gradient(circle, rgba(96,67,132,0.8) 0%, rgba(96,67,132,0.1) 70%)",
          transition: "background 10s ease-in-out",
        }}
      />

      <div
        className="absolute bottom-[-30vh] right-[-20vw] z-0 blur-[60px]"
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
