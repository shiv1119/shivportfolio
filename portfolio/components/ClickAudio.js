"use client";
import { useEffect } from 'react';

const ClickAudio = ({ audioSrc }) => {
  useEffect(() => {
    const handleClick = () => {
      const audio = new Audio(audioSrc);
      audio.play();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [audioSrc]);

  return null; 
};

export default ClickAudio;
