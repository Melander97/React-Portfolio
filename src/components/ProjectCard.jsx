export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl text-white font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.link}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
