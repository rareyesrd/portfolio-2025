import Navigation from "@/components/Navigation";
import TerminalIntro from "@/components/TerminalIntro";
import ProjectsSection from "@/components/ProjectsSection";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/config/i18n";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div lang={lang} className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation currentLang={lang} />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 mb-20">
            <TerminalIntro />

            <header className="w-full max-w-2xl text-center">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-8">
                {dict.hero.title}
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                {dict.hero.description}
              </p>

              <div className="flex gap-4 justify-center">
                <a
                  href="#projects"
                  aria-label={dict.hero.viewProjects}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-colors duration-200"
                >
                  {dict.hero.viewProjects}
                </a>
                <a
                  href="#contact"
                  aria-label={dict.hero.contactMe}
                  className="px-6 py-3 border border-purple-600 hover:bg-purple-600/10 rounded-full text-purple-400 font-medium transition-colors duration-200"
                >
                  {dict.hero.contactMe}
                </a>
              </div>
            </header>
          </div>

          <ProjectsSection />
        </div>
      </main>
    </div>
  );
}
