import Link from "next/link";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-maroon-100 flex flex-col h-full">
      {/* Full-bleed logo/banner */}
      <div className="h-48 bg-white relative overflow-hidden group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {(() => {
          const bannerSrc =
            project.thumbnail || (project.id && project.id.startsWith("study-") ? "/uitm-logo.png" : undefined);
          return bannerSrc ? (
            <img
              src={bannerSrc}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-maroon-300">
              Project Screenshot
            </div>
          );
        })()}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="bg-maroon-50 text-maroon-700 text-xs px-2 py-1 rounded-full font-medium"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="text-gray-500 text-xs py-1">+ {project.tools.length - 3} more</span>
          )}
        </div>

        <h3 className="text-xl font-bold text-maroon-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>

        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center text-maroon-600 font-semibold text-sm hover:text-maroon-800 transition-colors mt-auto"
        >
          View Case Study <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}