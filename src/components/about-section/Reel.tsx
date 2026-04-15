import ReelIcon from "@/components/about-section/ReelIcon";
import type { ReelProps } from "@/utils/types";
import { useState } from "react";
import { shuffleIcons } from "@/utils/shuffleIcons";

const buildLoopedIcons = (items: string[]) => {
  const looped: string[] = [];
  for (let i = 0; i < 10; i++) {
    looped.push(...shuffleIcons(items));
  }
  return looped;
};

const Reel = ({
  items,
  spinning,
  result,
  spinDuration,
  reelIndex,
}: ReelProps) => {
  const [displayIcons] = useState<string[]>(() => buildLoopedIcons(items));
  return (
    <div className="relative flex-1 overflow-hidden h-70">
      <div className="absolute inset-0 pointer-events-none z-10 gradient-surface-fade" />
      {spinning ? (
        <div
          className="absolute w-full"
          style={{
            animation: `reel-spin ${spinDuration}s cubic-bezier(.2,0,0.3,1) forwards`,
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
