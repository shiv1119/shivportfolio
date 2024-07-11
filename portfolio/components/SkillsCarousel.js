"use client";
import React from "react";



const logoGap = 20; 


const skillsLogos = [
  "./images/cprogramming.png",
  "./images/cpp.png",
  "./images/css.png",
  "./images/boostrap.svg",
  "./images/tailpng.png",
  "./images/html.png",
  "./images/python.png",
  "./images/django.svg",
  "./images/java.png",
  "./images/nextjs.svg",
  "./images/ant.png",
  "./images/react.svg",
  "./images/framer.png",
  "./images/typescript.png",
  "./images/jquery.svg",
  "./images/postgresql.svg",
  "./images/mysql.svg",
  "./images/mongodb.svg",
  "./images/github.svg",
  "./images/docker.svg",
  "./images/machinelearning.png",
];

export const SkillsCarousel = () => {
  return (
    <div className="skills-carousel">
        <marquee width="100%" scrollamount="12" behavior="alternate">
        {skillsLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            style={{
              marginLeft: `${logoGap}px`, 
            }}
          />
        ))}
        </marquee>
    </div>
  );
};


