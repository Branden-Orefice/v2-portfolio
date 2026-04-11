import ReelIcon from "@/components/about-section/ReelIcon";
import { shuffleIcons } from "@/components/about-section/SlotMachine";
import { useState } from "react";

const Reel = ({
  items,
  spinning,
  result,
  spinDuration,
  reelIndex,
}: {
  items: string[];
  spinning: boolean;
  result: string | undefined;
  spinDuration: number;
  reelIndex: number;
}) => {
  const [displayIcons] = useState(() => {
    const looped: string[] = [];
    for (let i = 0; i < 8; i++) looped.push(...shuffleIcons(items));
    return looped;
  });
  return (
    <div className="relative flex-1 overflow-hidden h-70">
      <div className="absolute inset-0 pointer-events-none z-10 bg-linear-to-b from-surface/60 via-transparent/70 to-surface/60" />
      <div
        className="absolute left-0 right-0 pointer-events-none top-1/2 z-20 h-24 -translate-y-1/2 transition-all duration-300"
        style={{
          borderTop: `1px solid ${spinning ? "border-primary/40" : "border-primary/15"}`,
          borderBottom: `1px solid ${spinning ? "border-primary/40" : "border-primary/15"}`,
          background: spinning
            ? "bg-linear-to-b from-primary/60 via-primary/10 to-primary/60"
            : "transparent",
        }}
      />
      {spinning ? (
        <div
          className="absolute w-full"
          style={{
            animation: `reel-spin ${spinDuration}s cubic-bezier(.2,0,.3,1) forwards`,
          }}
        >
          <div className="flex flex-col items-center gap-3">
            {displayIcons.map((item, index: number) => (
              <ReelIcon key={`${reelIndex} - ${index}`} icon={item} />
            ))}
          </div>
        </div>
      ) : result ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <ReelIcon icon={result} landed />
        </div>
      ) : (
        <div
          className="absolute w-full"
          style={{
            animation: `marquee-idle ${reelIndex % 2 === 0 ? "35s" : "40s"} linear infinite`,
            animationDirection: reelIndex % 2 === 0 ? "normal" : "reverse",
          }}
        >
          <div className="flex flex-col items-center gap-3">
            {[...items, ...items].map((item, index) => (
              <ReelIcon key={`${reelIndex} - ${index}`} icon={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reel;
