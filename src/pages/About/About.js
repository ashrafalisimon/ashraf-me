import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../../img/ashraf.png";

const About = () => {
    
  return (
    <div className="bg-accent ">
      <h1 className="text-5xl text-center pt-6  font-bold  text-secondary">
        About Me
      </h1>
      <div className="hero  min-h-full lg:min-h-screen md:px-12 lg:px-24">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
          <div>
            <p className="text-secondary">Hi, My Name is</p>
            <h1 className="text-3xl tracking-wider text-white sm:text-5xl font-bold">
              Ashraf Ali
            </h1>
            <p className="text-xl font-bold text-white">
              React Developer || Frontend Web Developer || Web Developer
            </p>
            <p className="py-6 text-white">
              web developer who specializes in the front-end, having a positive
              attitude and am eager to learn new trails. Always ready to put my
              programming skills to work with a talented engineering team to
              create high-quality solutions. Experienced in MERN Stack Web
              Development in both the development and the business aspects of
              technology. I am working with React, Node.js, Express JS, React
              Native and MongoDB. I also have experience in developing static
              websites using HTML, CSS and JavaScript(ES6). I can deliver
              pixel-perfect design and clean code.
            </p>
            <div className="space-x-4">
              <a href="https://web.facebook.com/ashrafalisimon" target="_blank">
                <i className="fa-brands fa-facebook text-white text-3xl hover:text-primary hover:translate-y-2 duration-150 ease-in-out"></i>
              </a>
              <a href="https://github.com/ashrafalisimon" target="_blank">
                <i className="fa-brands fa-github text-white text-3xl hover:text-primary hover:translate-y-2 duration-150 ease-in-out"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ashrafalisimon/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin text-white text-3xl hover:text-primary hover:translate-y-2 duration-150 ease-in-out"></i>
              </a>
            </div>
          </div>
          <img
            src={AboutImg}
            className="w-full md:mr-16 px-2 md:px-0 md:max-w-lg lg:max-w-lg xl:max-w-2xl rounded-lg shadow-2xl hover:translate-y-6 duration-300 ease-out"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
