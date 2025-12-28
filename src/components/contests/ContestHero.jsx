import { useState, useEffect } from "react";
import image from "../../../src/assets/contest/contest-bg.png";
import CountdownBox from "../winners/CountdownBox";

const ContestHero = () => {
  const title = "Awards 2026";
  const subtitle = "Global Design Excellence";
  const description = "Shape the future of digital experiences.";

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date (example: December 31, 2026)
    const targetDate = new Date("2026-12-31T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[60vh] md:h-[600px] relative overflow-hidden">
      {/* Background Image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0  flex flex-col items-center justify-center text-center px-4">
        {/* Title */}
        <h1 className="text-white text-2xl md:text-3xl font-playfair font-normal mb-2 tracking-wide">
          {title}
        </h1>

        {/* Subtitle */}
        <h2 className="text-white text-4xl md:text-5xl font-bold font-playfair mb-3">
          {subtitle}
        </h2>

        {/* Description */}
        <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl">
          {description}
        </p>

        {/* Countdown Timer */}
        <div className="flex gap-4 md:gap-6">
          <CountdownBox value={timeLeft.days} label="Days" />
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <CountdownBox value={timeLeft.minutes} label="Minutes" />
          <CountdownBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default ContestHero;
