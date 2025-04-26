import Button from "./Button";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl text-white font-semibold mb-2">
          {project.title}
        </h2>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <div className="relative group">
            {project.isComingSoon ? (
              <div
                className="inline-block pointer-events-none"
                title="Coming soon"
                aria-disabled="true"
              >
                <Button
                  variant="secondary"
                  disabled
                  className="pointer-events-none opacity-90 hover:opacity-90"
                  aria-hidden="true"
                >
                  Coming Soon
                </Button>
              </div>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="primary">Live Demo</Button>
              </a>
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
