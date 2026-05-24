import Button from "./Button";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        width="600"
        height="400"
        loading="lazy"
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-2xl text-white font-semibold mb-2">
          {project.title}
        </h2>
        <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <div className="relative group">
            {project.isComingSoon ? (
              <div className="relative group inline-block">
                <Button
                  variant="secondary"
                  disabled
                  className="cursor-not-allowed opacity-70"
                >
                  Coming Soon
                </Button>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Working on it! 🚧
                </span>
              </div>
            ) : (
              <Button
                variant="primary"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            )}

            {project.isComingSoon && (
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                Working on it! 🚧
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
