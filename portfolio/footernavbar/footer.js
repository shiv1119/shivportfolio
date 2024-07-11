import React from 'react';
import FooterIcon from './footerIcon';
import Link from 'next/link';

const Footer = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="footerStyle">
      <a onClick={() => scrollToSection('home')}>
        <FooterIcon title="Home" src="./images/home.png" />
      </a>
      <a onClick={() => scrollToSection('about')}>
        <FooterIcon title="About Me" src="./images/profile.png" />
      </a>
      <a onClick={() => scrollToSection('skills')}>
        <FooterIcon title="Skills" src="./images/skills.png" />
      </a>
      <a onClick={() => scrollToSection('experience')}>
        <FooterIcon title="Experience" src="./images/experience.png" />
      </a>
      <a onClick={() => scrollToSection('education')}>
        <FooterIcon title="Education" src="./images/education.png" />
      </a>
      <a onClick={() => scrollToSection('certificates')}>
        <FooterIcon title="License & Certifications" src="./images/certificates.png" />
      </a> 
      <a onClick={() => scrollToSection('githubstats')}>
        <FooterIcon title="GitHub Stats" src="./images/github.png" />
      </a>
      <a onClick={() => scrollToSection('projects')}>
        <FooterIcon title="Projects" src="./images/project.png" />
      </a>
      {/* <a onClick={() => scrollToSection('contact')}>
        <FooterIcon title="Contact Me" src="./images/contact.png" />
      </a> */}

    </div>
  );
};

export default Footer;
