import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/config/i18n";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default async function ProjectsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/800/600?random=1",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://picsum.photos/800/600?random=2",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://picsum.photos/800/600?random=3",
      tags: ["Python", "TensorFlow", "AWS"],
      link: "#",
    },
  ];

  return (
    <>
      <Navigation currentLang={lang} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {dict.navigation.projects}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
