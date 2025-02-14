import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/config/i18n";
import Navigation from "@/components/Navigation";
const esCv = "/pdf/cv/es/cv.pdf";
const enCv = "/pdf/cv/en/cv.pdf";

export default async function CVPage({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const cvUrl = lang === "es" ? esCv : enCv;

  return (
    <>
      <Navigation currentLang={lang} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {dict.cv.title}
        </h1>
        <div className="flex justify-center">
          <iframe
            src={cvUrl}
            width="100%"
            height="800px"
            className="border-2 border-gray-300 rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="text-center mt-8">
          <a
            href={cvUrl}
            download
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            {dict.cv.download}
          </a>
        </div>
      </main>
    </>
  );
}
