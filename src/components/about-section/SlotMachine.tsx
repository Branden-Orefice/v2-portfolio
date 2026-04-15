import { useState } from "react";
import Confetti from "@/components/about-section/Confetti";
import Reel from "@/components/about-section/Reel";

const SlotMachine = ({
  onClose,
  leftColumnIcons,
  middleColumnIcons,
  rightColumnIcons,
}: {
  onClose: () => void;
  leftColumnIcons: string[];
  middleColumnIcons: string[];
  rightColumnIcons: string[];
}) => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string[] | null>(null);
  const [winner, setWinner] = useState(false);
  const [shake, setShake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [spinCount, setSpinCount] = useState(0);

  const handleSpin = () => {
    if (spinning) return;
    setWinner(false);
    setResult(null);
    setShowConfetti(false);
    setSpinning(true);
    const newCount = spinCount + 1;
    setSpinCount(newCount);
    const count = newCount;
    const forceWin = count % 10 === 0 || (count > 5 && Math.random() < 0.12);

    setTimeout(() => {
      let leftColumn, middleColumn, rightColumn;

      if (forceWin) {
        const winIcon =
          leftColumnIcons[Math.floor(Math.random() * leftColumnIcons.length)];
        leftColumn = winIcon;
        middleColumn = winIcon;
        rightColumn = winIcon;
      } else {
        leftColumn =
          leftColumnIcons[Math.floor(Math.random() * leftColumnIcons.length)];
        middleColumn =
          middleColumnIcons[
            Math.floor(Math.random() * middleColumnIcons.length)
          ];
        rightColumn =
          rightColumnIcons[Math.floor(Math.random() * rightColumnIcons.length)];
      }
      setSpinning(false);
      setResult([leftColumn, middleColumn, rightColumn]);

      if (leftColumn === middleColumn && middleColumn === rightColumn) {
        setWinner(true);
        setShowConfetti(true);
        setShake(true);
        setTimeout(() => setShake(false), 600);
        setTimeout(() => setShowConfetti(false), 1800);
      }
    }, 3500);
  };

  return (
    <div className="relative animate-machine-enter">
      <Confetti active={showConfetti} />

      <div
        className={`rounded-2xl overflow-hidden relative ${
          shake ? "animate-shake-it" : ""
        }`}
        style={{
          background:
            "color-mix(in srgb, var(--color-surface), 85%, transparent)",
          border: `1px solid ${winner ? "border-primary/60" : "border-primary"}`,
          transition: "border-color 0.5s",
        }}
      >
        {winner && (
          <div className="absolute pointer-events-none top-1/2 left-1/2 w-50 h-50 rounded-2xl gradient-b-transparent animate-glow-burst" />
        )}

        <div className=" flex items-center justify-between px-4 py-3 bg-surface/80">
          <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
            Tech Stack Slots
          </span>
          <button
            onClick={onClose}
            className="transition-colors duration-300 cursor-pointer text-muted-foreground hover:text-primary"
          >
            X
          </button>
        </div>

        <div className="flex gap-2 px-4 py-4 relative bg-surface/15">
          <div className="absolute top-4 bottom-4 pointer-events-none left-[34%] w-1 gradient-transparent-primary" />
          <div className="absolute top-4 bottom-4 pointer-events-none left-[66%] w-1 gradient-transparent-primary" />
          <Reel
            items={leftColumnIcons}
            spinning={spinning}
            result={result?.[0]}
            spinDuration={2.8}
            reelIndex={0}
            key={`leftColumn-${spinCount}`}
          />
          <Reel
            items={middleColumnIcons}
            spinning={spinning}
            result={result?.[1]}
            spinDuration={3.2}
            reelIndex={1}
            key={`middleColumn-${spinCount}`}
          />
          <Reel
            items={rightColumnIcons}
            spinning={spinning}
            result={result?.[2]}
            spinDuration={3.6}
            reelIndex={2}
            key={`rightColumn-${spinCount}`}
          />
        </div>

        <div className="flex items-center justify-between px-4 py-3 bg-surface">
          <div className="min-h-7">
            {winner && (
              <div className="flex items-center gap-2 animate-fade-slide-up">
                <span>🎰</span>
                <span className="font-bold text-sm tracking-wide inline-block text-primary animate-pulse-scale">
                  JACKPOT!
                </span>
                <span>🎰</span>
              </div>
            )}
            {result && !winner && !spinning && (
              <span className="text-sm text-muted-foreground animate-fade-slide-up">
                Try again...
              </span>
            )}
          </div>
          <button
            onClick={handleSpin}
            disabled={spinning}
            className="bg-linear-to-br from-red-700 to-red-800 text-black rounded-[10px] px-6 py-2 text-[12px] font-bold tracking-[0.12em] uppercase cursor-pointer shadow-[0_4px_16px_rgba(185,28,28,0.3)]"
          >
            Spin
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;
