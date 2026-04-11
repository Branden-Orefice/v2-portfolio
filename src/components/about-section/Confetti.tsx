import { useMemo } from "react";

const Confetti = ({ active }: { active: boolean }) => {
  const particles = useMemo(() => {
    return [...Array(60)].map((_, index) => ({
      id: `particle-${index}`,
      x: Math.random() * 100,
      size: 4 + Math.random() * 6,
      duration: 1.5 + Math.random() * 2,
      delay: Math.random() * 0.8,
      rotation: Math.random() * 360,
      drift: -30 + Math.random() * 60,
      colors: [
        "#5c97ab",
        "#f5a623",
        "#20b2a6",
        "#e8a87c",
        "#7EC8D4",
        "#ff6b6b",
        "#ffd93d",
      ][Math.floor(Math.random() * 7)],
    }));
  }, []);

  if (!active) return null;

  return (
    <div className="absolute -inset-8 overflow-hidden pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: "-5%",
            width: particle.size,
            height: particle.size * 0.6,
            backgroundColor: particle.colors,
            borderRadius: 1,
            transform: `rotate(${particle.rotation}deg)`,
            animation: `confetti-fall ${particle.duration}s ease-in-out ${particle.delay}s forwards`,
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
