import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Typewriter = ({ texts, ...rest }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setKey((prevKey) => prevKey + 1);
    }, texts[currentTextIndex].length * 100 + 1000);

    return () => clearInterval(interval);
  }, [currentTextIndex, texts]);

  return (
    <motion.div
      key={key}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      {...rest}
    >
      {texts[currentTextIndex].split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={letterVariants}
          style={{ color: getRandomColor() }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

