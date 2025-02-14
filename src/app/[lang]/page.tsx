import Navigation from "@/components/Navigation";
import TerminalIntro from "@/components/TerminalIntro";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/config/i18n";
import Image from "next/image";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div lang={lang} className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation currentLang={lang} />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 mb-32">
            <TerminalIntro />

            <header className="w-full max-w-2xl text-center py-8">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-12">
                {dict.hero.title}
              </h1>
              <p className="text-gray-400 text-lg mb-12">
                {dict.hero.description}
              </p>

              <div className="flex gap-4 justify-center">
                <Link
                  href="/projects"
                  aria-label={dict.hero.viewProjects}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-colors duration-200"
                >
                  {dict.hero.viewProjects}
                </Link>
              </div>
            </header>

            <section
              id="technologies"
              className="w-full max-w-4xl mx-auto text-center py-16"
            >
              <h2 className="text-3xl font-bold mb-16">
                {dict.technologies.title}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center items-center">
                <Image
                  src="/images/javascript.svg"
                  alt="JavaScript"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/typescript.svg"
                  alt="TypeScript"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/nextjs_logo_light.svg"
                  alt="Next.js"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/react_light.svg"
                  alt="React"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/angular.svg"
                  alt="Angular"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/wordpress.svg"
                  alt="WordPress"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/aws_light.svg"
                  alt="AWS"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/azure.svg"
                  alt="Azure"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/html5.svg"
                  alt="HTML"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/css_old.svg"
                  alt="CSS"
                  width={100}
                  height={100}
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
