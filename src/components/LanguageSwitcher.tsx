import Link from 'next/link'
import { locales } from '@/config/i18n'

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          className={`px-3 py-1 rounded-md transition-colors ${
            currentLang === locale
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:bg-purple-600/10'
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  )
} 