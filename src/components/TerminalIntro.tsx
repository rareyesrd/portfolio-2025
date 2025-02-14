"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TerminalIntro = () => {
  const [text, setText] = useState("");
  const fullText = `const desarrollador = {
  nombre: "Rafael Alexander Reyes Perez",
  rol: "Desarrollador de Software",
  habilidades: ["React", "JavaScript", "TypeScript", "Next.js", "Angular", "WordPress", "AWS", "Azure", "HTML", "CSS"],
  pasión: "Construir experiencias interactivas hermosas y funcionales"
};`;

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl bg-black backdrop-blur-md rounded-lg p-6 font-mono text-green-400 border border-green-500/20"
    >
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="whitespace-pre-wrap">{text}</pre>
      <div className="w-2 h-5 bg-green-400 animate-pulse inline-block ml-1" />
    </motion.div>
  );
};

export default TerminalIntro;
