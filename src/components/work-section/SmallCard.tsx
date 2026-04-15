import type { ProjectValues } from "@/utils/types";
import ProjectImage from "@/components/work-section/ProjectImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const SmallCard = ({ project }: { project: ProjectValues }) => {
  return (
    <div
      className={`group glass-look flex flex-col relative border border-surface rounded-2xl backdrop-blur-lg hover:border-primary/70 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(92,151,171,0.12),0_12px_40px_rgba(0,0,0,0.25)] hover:translate-y-1 opacity-100 transition-all duration-700`}
    >
      <ProjectImage project={project} />
      <div className="flex flex-1 flex-col p-[20px_22px_24px]">
        <div className="flex justify-between items-start mb-2.5">
          <h3 className="mr-3 flex-1 text-base font-semibold text-foreground">
            {project.title}
          </h3>
          <div className="flex gap-2.5 shrink-0">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-muted-foreground transition-all duration-300 cursor-pointer hover:text-primary text-base"
              />
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-muted-foreground transition-all duration-300 cursor-pointer hover:text-primary text-base"
              />
            </a>
          </div>
        </div>

        <p className="text-muted-foreground text-xs mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((projectTech: string, techIndex: number) => (
            <span
              key={`${project.id}-${techIndex}`}
              className="bg-primary/10 text-muted-foreground text-xs px-2 py-1 rounded"
            >
              {projectTech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
