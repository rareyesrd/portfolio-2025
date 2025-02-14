import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/config/i18n";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const projects = [
    {
      title: "Páginas Amarillas",
      description:
        "Un portal de directorio telefónico en línea para encontrar lo que buscas y ahorrar tiempo en la República Dominicana.",
      image: "/images/paginas_amarillas.png",
      tags: ["Angular", "TypeScript", "Tailwind"],
      link: "https://www.paginasamarillas.com.do/",
    },
    {
      title: "Super Pages Pr",
      description:
        "Un portal de directorio telefónico en línea para encontrar lo que buscas y ahorrar tiempo en Puerto Rico.",
      image: "/images/superpagespr.png",
      tags: ["Angular", "TypeScript", "Tailwind"],
      link: "https://superpagespr.com/es/home",
    },

    {
      title: "Cloud Bridge CX",
      description:
        "Cloud bridge CX a platform designed to extend the capabilities of the our client's Cloud CX infrastructure.",
      image: "/images/interactstrategies.png",
      tags: ["Nextjs", "Javascript", "Tailwind", "Aws Console services"],
      link: "https://cloudbridgecx.com/",
    },
    {
      title: "Urbe Guía Inmobiliaria ",
      description:
        "Portal que potencia el crecimiento del mercado inmobiliario y construcción, ofreciendo una plataforma que establece conexiones significativas entre proveedores e inversionistas.",
      image: "/images/urbe.png",
      tags: ["Wordpress", "PHP", "Azure"],
      link: "https://urbe.com.do/",
    },
    {
      title: "Cáritas Dominicana",
      description:
        "Cáritas Dominicana es un organismo de la Pastoral Social de la Iglesia instalado en 1961 por la Conferencia del Episcopado Dominicano como instrumento al servicio del pueblo dominicano.",
      image: "/images/caritas.png",
      tags: ["Wordpress", "PHP", "cPanel"],
      link: "https://caritas.org.do/wp/",
    },
  ];

  return (
    <>
      <Navigation currentLang={lang} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
          {dict.navigation.projects}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  {dict.projects.viewProject}
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
