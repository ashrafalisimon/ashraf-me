import React from 'react';
import { Link } from 'react-router-dom';
import ashraf from '../../img/ashraf-yello (2).png'

const HeroSection = () => {
    return (
        <div className="hero min-h-full bg-accent  lg:min-h-screen md:px-12 lg:px-24"  >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={ashraf}
            className="w-full px-2 md:px-0 md:max-w-lg lg:max-w-lg xl:max-w-2xl rounded-lg shadow-2xl"
          />
          <div>
          <p className="text-secondary">
              Hi, My Name is 
            </p>
            <h1 className="text-3xl text-white sm:text-5xl font-bold">Ashraf Ali</h1>
            <h2 className="text-2xl text-secondary sm:text-4xl font-bold">I'm a Full-stack Developer</h2>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
            <div className='space-x-2'>
            <a href="https://drive.google.com/file/d/1miR7bZt_BtArdVg4Hc_EhAhqb4kjey3p/view?usp=sharing" target='_blank' className="btn text-white bg-gradient-to-r from-primary caret-secondary to-secondary">Resume</a>
            <Link to='/contact' className='btn btn-outline text-white hover:bg-gradient-to-r from-primary caret-secondary to-secondary'>Hire Me</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;