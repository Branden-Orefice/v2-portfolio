import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectImage from "@/components/work-section/ProjectImage";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { ProjectValues } from "@/utils/types";

const FeaturedCard = ({ project }: { project: ProjectValues }) => {
  return (
    <div
      className={`group grid md:grid-cols-2 glass-look overflow-hidden rounded-2xl backdrop-blur-xl border border-surface/30 hover:border-primary/80 opacity-100 relative shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_0_40px_rgba(92,151,171,0.15),0_20px_60px_rgba(0,0,0,0.4)] hover:translate-y-1 transition-all duration-700 ${project.id % 2 === 0 ? "ltr" : "rtl"}`}
    >
      <div className="relative overflow-hidden">
        <ProjectImage project={project} />

        <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.15)_50%,transparent_60%)] group-hover:translate-x-[300%] transition-transform duration-700" />
      </div>

      <div className="py-9 px-8 flex flex-col justify-center relative">
        <span className="text-primary text-sm mb-2.5 block">
          ★ FEATURED PROJECT
        </span>
        <h3 className="font-bold text-2xl text-foreground mb-3">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((projectTech: string, techIndex: number) => (
            <span
              key={`${project.id}-${techIndex}`}
              className="bg-primary/10 text-muted-foreground text-xs px-2 py-1 rounded"
            >
              {projectTech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 items-center text-muted-foreground">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-all duration-300 flex items-center gap-1.5"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
            <span className="text-sm">Code</span>
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-all duration-300 flex gap-1.5 items-center"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-lg"
            />
            <span className="text-sm">Live</span>
          </a>
        </div>
        <div className="absolute top-0 right-0 w-30 h-full group-hover:opacity-100 opacity-0 transition-all duration-700 bg-linear-to-l from-surface/10  to-transparent" />
      </div>
    </div>
  );
};

export default FeaturedCard;
