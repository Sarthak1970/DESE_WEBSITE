import React from 'react';

const FloatingShape = () => {
    const createShapes = () => {
        const shapes = [];
        for (let i = 0; i < 50; i++) {
            const size = Math.random() * 10 + 5;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * -20;
            const left = Math.random() * 100;
            
            shapes.push(
                <div
                    key={i}
                    className="absolute z-[1000] rounded-full bg-blue-400 opacity-50 blur-sm"
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${left}%`,
                        animation: `float ${duration}s ${delay}s infinite linear`,
                        boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
                    }}
                />
            );
        }
        return shapes;
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {createShapes()}
            <style jsx>{`
                @keyframes float {
                    0% {
                        transform: translateY(-10%);
                    }
                    100% {
                        transform: translateY(110vh);
                    }
                }
            `}</style>
        </div>
    );
};

export default FloatingShape;
