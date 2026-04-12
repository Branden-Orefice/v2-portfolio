import type { ProjectValues } from "@/utils/types";

const ProjectImage = ({
  project,
  featured = false,
}: {
  project: ProjectValues;
  featured?: boolean;
}) => {
  return (
    <div
      className={`w-full border border-border flex items-center justify-center relative overflow-hidden
        ${featured ? "h-[320px] rounded-2xl" : "h-[200px] rounded-[12px_12px_0_0]"}`}
    >
      <div className="absolute inset-0 opacity-5 bg-[size:40px_40px]" />

      <img
        src={project.image}
        alt="displaying hero of project"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProjectImage;
