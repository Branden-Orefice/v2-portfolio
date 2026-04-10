const GlowOrb = ({
  top = "20%",
  left = "50%",
  size = 420,
  color = "var(--color-primary)",
}) => (
  <div
    className="absolute pointer-events-none"
    style={{
      top,
      left,
      width: size,
      height: size,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${color}, transparent 30%)`,
      opacity: 0.08,
      filter: "blur(60px)",
      transform: "translate(-50%, -50%)",
      animation: "orb-pulse 8s ease-in-out infinite",
    }}
  />
);

export default GlowOrb;
