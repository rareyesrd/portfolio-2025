"use client";

import { Fragment, useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Locale, locales } from "@/config/i18n";
import Link from "next/link";

import { IoLanguage, IoSettings } from "react-icons/io5";
import { Menu, Transition } from "@headlessui/react";
// import { useTheme } from "./ThemeProvider";
import { getDictionary } from "@/lib/dictionary";

const Navigation = ({ currentLang }: { currentLang: Locale }) => {
  const [dict, setDict] = useState<Awaited<ReturnType<typeof getDictionary>>>(
    {} as Awaited<ReturnType<typeof getDictionary>>
  );
  // const { theme, toggleTheme } = useTheme();
  // const isDark = theme === "light";

  useEffect(() => {
    getDictionary(currentLang).then(setDict);
  }, [currentLang]);

  const links = [
    { href: `/${currentLang}/`, label: dict?.navigation?.home ?? "" },
    {
      href: `/${currentLang}/projects`,
      label: dict?.navigation?.projects ?? "",
    },
    { href: `/${currentLang}/cv`, label: dict?.navigation?.curriculum ?? "" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-black/30 backdrop-blur-md border-b border-gray-200/20 dark:border-white/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Rafael.dev
          </motion.div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Menu as="div" className="relative">
              <Menu.Button className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-purple-600/10 transition-colors">
                <IoSettings className="w-6 h-6" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-900 border border-purple-500/20 shadow-lg focus:outline-none">
                  <div className="px-1 py-1">
                    <div className="px-2 py-2 text-sm text-gray-400">
                      <div className="flex items-center mb-2">
                        <IoLanguage className="mr-2" />
                        Language
                      </div>
                      <div className="flex gap-2 ml-6">
                        {locales.map((locale) => (
                          <Link
                            key={locale}
                            href={`/${locale}`}
                            className={`px-2 py-1 rounded-md text-sm transition-colors ${
                              currentLang === locale
                                ? "bg-purple-600 text-white"
                                : "text-gray-400 hover:bg-purple-600/10"
                            }`}
                          >
                            {locale.toUpperCase()}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* <Menu.Item>
                      {({ active }) => (
                        // <button
                        //   onClick={toggleTheme}
                        //   className={`${
                        //     active ? "bg-purple-600/10" : ""
                        //   } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-400`}
                        // >
                        //   {isDark ? (
                        //     <IoSunny className="mr-2 h-5 w-5" />
                        //   ) : (
                        //     <IoMoon className="mr-2 h-5 w-5" />
                        //   )}
                        //   {isDark ? "Light Mode" : "Dark Mode"}
                        // </button>
                      )}
                    </Menu.Item> */}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
