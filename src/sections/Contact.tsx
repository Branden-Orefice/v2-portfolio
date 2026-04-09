const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-primary">04.</span>{" "}
          <span className="text-xl font-medium tracking-wider">
            Get In Touch
          </span>
          <span className="block relative -top-3.75 left-60 w-65 h-px bg-linear-to-l from-primary/70 via-primary/30 to-transparent shadow-[0_0_25px_rgba(92,151,171,0.8)">
            {[0.4, 1, 1, 1].map((opacity, index) => (
              <div
                key={index}
                style={{ opacity, right: `${index * 18}px` }}
                className="absolute top-1/2 mr-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-primary flex gap-2"
              />
            ))}
          </span>
        </div>
        <div className="relative">
          <div className="stronger-glass-look w-full h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
