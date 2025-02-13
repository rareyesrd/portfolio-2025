import Navigation from "@/components/Navigation";
import TerminalIntro from "@/components/TerminalIntro";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 mb-20">
            <TerminalIntro />

            <section className="w-full max-w-2xl text-center">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
                Crafting Digital Experiences
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Full-stack developer specializing in building exceptional
                digital experiences. Let&apos;s turn your ideas into reality.
              </p>

              <div className="flex gap-4 justify-center">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-colors duration-200"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-purple-600 hover:bg-purple-600/10 rounded-full text-purple-400 font-medium transition-colors duration-200"
                >
                  Contact Me
                </a>
              </div>
            </section>
          </div>

          <ProjectsSection />
        </div>
      </main>
    </div>
  );
}
