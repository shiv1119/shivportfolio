'use client';

import { useEffect, useRef, useState } from 'react';

const ScrollAudio = ({ audioSrc }) => {
  const [audioReady, setAudioReady] = useState(false);
  const audioRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (audioReady && audioRef.current) {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min(scrollY / docHeight, 1);
        audioRef.current.volume = scrollPercent;

        if (scrollPercent > 0 && audioRef.current.paused) {
          audioRef.current.play();
        } else if (scrollPercent === 0 && !audioRef.current.paused) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0; // Reset audio to the beginning
        }

        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          audioRef.current.pause();
        },150);
      }
    };

    const enableAudio = () => {
      setAudioReady(true);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', enableAudio); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', enableAudio);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, [audioReady]);

  return <audio ref={audioRef} src={audioSrc} muted={!audioReady} loop />;
};

export default ScrollAudio;
