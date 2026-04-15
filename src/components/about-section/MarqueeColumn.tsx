import type { MarqueeColumnProps } from "@/utils/types";

const MarqueeColumn = ({
  items,
  reverse = false,
  index = 0,
}: MarqueeColumnProps) => {
  return (
    <div className="relative flex-1 overflow-hidden flex justify-center h-80">
      <div className="absolute inset-0 pointer-events-none z-2 bg-linear-to-b from-surface/60 via-transparent to-surface/60" />
      <div
        className="w-full absolute"
        style={{
          animation: `marquee-idle ${reverse ? "40s" : "35s"} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex flex-col items-center gap-4">
          {[...items, ...items].map((item, i) => (
            <div
              key={`marquee-${index}-${i}`}
              className="flex items-center justify-center shrink-0 w-37.5 h-24 rounded-xl bg-surface border border-surface"
            >
              <img
                src={item}
                alt="tech logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeColumn;
