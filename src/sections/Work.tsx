import FeaturedCard from "@/components/work-section/FeaturedCard";
import SmallCard from "@/components/work-section/SmallCard";
import GlowOrb from "@/components/GlowOrb";
import {projects} from "@/data/projects.ts";



const Work = () => {
  const featured = projects.filter((project) => project.featured);
  const notFeatured = projects.filter((project) => !project.featured);
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-primary">03.</span>{" "}
          <span className="text-xl font-medium tracking-wider">
            Things I've Built
          </span>
          <span className="block relative top-1 left-4 w-65 h-px gradient-glow-l"></span>
        </div>

        <div className="flex flex-col gap-10 mb-12">
          <GlowOrb className="xl:top-[12%] xl:left-[97%] lg:top-[12%] lg:left-[95%] md:top-[9%] md:left-[94%] sm:top-[6%] sm:left-[92%] size-[500px]" />
          {featured.map((project) => (
            <FeaturedCard key={`featured-${project.id}`} project={project} />
          ))}
        </div>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notFeatured.map((project) => (
            <SmallCard key={`small-${project.id}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
