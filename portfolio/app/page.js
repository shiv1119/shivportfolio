import '@fortawesome/fontawesome-svg-core/styles.css';
import '../lib/fontawesome'; 
import About from "@/components/about";
import ScrollProgressBar from '@/components/scrollProgressBar';
import ScrollAudio from '@/components/ScrollAudio';
import EnableAudio from '@/components/enableAudios';
import ClickAudio from '@/components/ClickAudio';
import Hr from '@/components/Hr';
import Profile from '@/components/Profile';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import GitHubStats from '@/components/GitHubStats';
import Repo from '@/components/Repo';
import Projects from '@/components/Projects';
import FloatMessage from '@/components/FloatMessage';
import Contacts from '@/components/Contact';

export default function Home() {
  return (
    <main style={{marginBottom:"150px"}}>
      <ScrollProgressBar />
      <ScrollAudio audioSrc="./audio/caraudio.mp3"  />
      <ClickAudio audioSrc="./audio/hammersound.mp3" />
      <EnableAudio />
      <Hr />
      <Profile />
      {/* <Hr /> */}
      <About />
      {/* <Hr /> */}
      <Skills />
      {/* <Hr /> */}
      <Experience />
      <Education />
      <GitHubStats />
      <Repo />
      <Projects />
      <FloatMessage />
      <Contacts />
    </main>
  );
}
