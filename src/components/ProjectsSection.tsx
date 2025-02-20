import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Páginas Amarillas",
    description:
      "El Portal De Los Dominicanos — Encuentra lo que buscas y ahorra tiempo con nuestro directorio telefónico en línea.",
    image: "/images/paginas-amarillas.png",
    technologies: ["Angular", "TypeScript", "Tailwind"],
    link: "https://www.paginasamarillas.com.do/",
  },
  {
    title: "Project 2",
    description: "Mobile-first responsive design",
    image: "/images/projects/project1.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Project 3",
    description: "AI-powered application",
    image: "/images/projects/project1.jpg",
    technologies: ["Python", "TensorFlow", "AWS"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-400">
            ¡Pasa el cursor sobre cualquier proyecto para saber más!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
