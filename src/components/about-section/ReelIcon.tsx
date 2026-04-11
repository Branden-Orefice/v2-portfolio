const ReelIcon = ({
  icon,
  landed = false,
}: {
  icon: string;
  landed?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-center shrink-0 transition-all duration-500 w-35 h-22 rounded-xl
        ${
          landed
            ? "bg-linear-to-b from-surface to-primary/15 border border-primary/60 shadow-[0_0_30px_rgba(92,151,171,0.3)] scale-105"
            : "bg-surface border border-border shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
        }`}
    >
      <img src={icon} alt="tech logo" className="w-16 h-16 object-contain" />
    </div>
  );
};

export default ReelIcon;
