const GlowOrb = ({ className = "" }) => (
  <div
    className={`absolute pointer-events-none rounded-full ${className} opacity-10 blur-3xl orb-background animate-orb-pulse`}
  />
);

export default GlowOrb;
