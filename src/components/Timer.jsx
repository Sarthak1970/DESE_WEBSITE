import React, { useEffect, useState, useCallback } from 'react';

const CountdownTimer = () => {
    const calculateTimeLeft = useCallback(() => {
        const eventDate = new Date('2025-03-01T00:00:00');
        const now = new Date();
        const difference = eventDate - now;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }
        return timeLeft;
    }, []);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return (
        <section className="relative flex flex-col items-center justify-center bg-transparent w-full h-full text-center">
            <h2 className="text-5xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e0d4ff] to-[#e0d4ff] mb-6">
                <i className="ri-hourglass-line animate-pulse text"></i> Countdown to Open Day <i className="ri-hourglass-line animate-pulse"></i>
            </h2>
            <div className="flex gap-2 md:gap-3 justify-center items-center flex-wrap">
                {timeLeft.days !== undefined ? (
                    <>
                        <DigitWheel value={String(timeLeft.days).padStart(2, '0')} label="DAYS" />
                        <div className="text-2xl md:text-3xl text-[#e0d4ff] animate-pulse">:</div>
                        <DigitWheel value={String(timeLeft.hours).padStart(2, '0')} label="HRS" />
                        <div className="text-2xl md:text-3xl text-[#e0d4ff] animate-pulse">:</div>
                        <DigitWheel value={String(timeLeft.minutes).padStart(2, '0')} label="MIN" />
                        <div className="text-2xl md:text-3xl text-[#e0d4ff] animate-pulse">:</div>
                        <DigitWheel value={String(timeLeft.seconds).padStart(2, '0')} label="SEC" />
                    </>
                ) : (
                    <div className="text-[#e0d4ff] text-xl md:text-2xl font-bold animate-bounce bg-[#0a192f]/50 px-6 py-3 rounded-full border border-[#e0d4ff]/30">
                        EVENT STARTED
                    </div>
                )}
            </div>
        </section>
    );
};

const DigitWheel = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <div className="flex gap-2">
            {value.split('').map((digit, index) => (
                <div 
                    key={index} 
                    className="relative w-10 sm:w-12 md:w-14 h-12 sm:h-14 md:h-18 bg-gradient-to-b from-[#0a192f] to-[#e0d4ff]/90 rounded-xl overflow-hidden border-2 border-[#e0d4ff]/30 shadow-[0_0_10px_rgba(224,212,255,0.3)] hover:bg-[#b8a8ff]"
                >
                    <div className="absolute inset-0 flex justify-center ">
                        <div className="flex flex-col translate-y-4">
                            {[0,1,2,3,4,5,6,7,8,9].map((num) => (
                                <div 
                                    key={num}
                                    className="h-12 sm:h-14 md:h-18 w-10 sm:w-12 md:w-14 flex items-center justify-center text-xl sm:text-2xl md:text-5xl font-mono text-white transition-all duration-300 ease-in-out will-change-transform"
                                    style={{ transform: `translateY(-${parseInt((digit+1)*10)}%)` }}
                                >
                                    {num}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                </div>
            ))}
        </div>
        <div className="text-[#e0d4ff] text-sm sm:text-base font-bold mt-3 bg-[#0a192f]/50 px-2 py-1 rounded-full hover:bg-[#b8a8ff]">
            {label}
        </div>
    </div>
);

export default CountdownTimer;
