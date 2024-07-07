import '@fortawesome/fontawesome-svg-core/styles.css';
import '../lib/fontawesome'; 
import About from "@/components/about";
import ScrollProgressBar from '@/components/scrollProgressBar';
import ScrollAudio from '@/components/ScrollAudio';
import EnableAudio from '@/components/enableAudios';
import ClickAudio from '@/components/ClickAudio';
import Hr from '@/components/Hr';
import Profile from '@/components/Profile';

export default function Home() {
  return (
    <main>
      <ScrollProgressBar />
      <ScrollAudio audioSrc="./audio/caraudio.mp3"  />
      <ClickAudio audioSrc="./audio/hammersound.mp3" />
      <EnableAudio />
      <Hr />
      <Profile />
      <Hr />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
    </main>
  );
}
