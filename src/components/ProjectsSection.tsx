import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Habit Tracker",
    description:
      "A simple React habit tracker that uses firebase database to keep track of your daily habits.",
    technologies: ["React", "Firebase", "TailwindCSS"],
    imageUrl: "/projects/habit-tracker.jpg",
    liveUrl: "https://your-habit-tracker.vercel.app",
    githubUrl: "https://github.com/yourusername/habit-tracker",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Framer Motion for smooth animations.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    imageUrl: "/projects/portfolio.jpg",
    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application powered by OpenAI's GPT-3, with user authentication and message history.",
    technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    imageUrl: "/projects/ai-chat.jpg",
    liveUrl: "https://your-ai-chat.vercel.app",
    githubUrl: "https://github.com/yourusername/ai-chat",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400">hover over any project to learn more!</p>
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
