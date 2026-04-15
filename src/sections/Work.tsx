import FeaturedCard from "@/components/work-section/FeaturedCard";
import SmallCard from "@/components/work-section/SmallCard";
import GlowOrb from "@/components/GlowOrb";

const projects = [
  {
    id: 1,
    title: "brandenorefice.com (v1)",
    description:
      "First iteration of my portfolio site. Built with HTML, JavaScript, and CSS. Features dark-mode/light-mode, image hovering effect, and responsive design.",
    image: "/images/first-portfolio.webp",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://v1.brandenorefice.com",
    github: "https://www.github.com/branden-orefice/personal-website",
    featured: true,
  },
  {
    id: 2,
    title: "Sound Wave",
    description:
      "Create playlists and share with your friends. Search by artist, album, or song, create a playlist and generate them right to your personal Spotify account.",
    image: "/images/playlist.webp",
    tags: ["JavaScript", "Express", "Axios", "React"],
    link: "https://sound-wave-app-efde8f11e684.herokuapp.com/",
    github: "https://www.github.com/Branden-Orefice/Sound-Wave",
    featured: false,
  },
  {
    id: 3,
    title: "brandenorefice.com (v1)",
    description: "First iteration of my portfolio site.",
    image: "/images/first-portfolio.webp",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "brandenorefice.com (v1)",
    description: "First iteration of my portfolio site.",
    image: "/images/first-portfolio.webp",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
    featured: false,
  },
];

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
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {notFeatured.map((project) => (
            <SmallCard key={`small-${project.id}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
