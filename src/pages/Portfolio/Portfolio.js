import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="bg-white py-4 md:py-16">
      <div className="px-4 md:px-24 z-20">
        <div className="py-4 md:py-12">
          <h2 className="text-secondary text-xl md:text-4xl font-bold text-center ">
            My Project
          </h2>
          <div className=" w-12 mx-auto divider"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div  className='bg-accent shadow-sm p-4 rounded' key={project._id}>
                <img
                  src={project.img}
                  alt="work"
                  className="w-full h-36 md:h-48 object-cover"
                />
                <div className="w-full p-5 text-gray-600 dark:text-gray-300 ">
                  <h4 className="text-lg md:text-xl text-white mb-2 md:mb-3 font-semibold">
                   {project.projectName}
                  </h4>
                  <p className='text-white'>{project.description}</p>
                  {/* <p className="flex text-white flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                    {
                        project.technology.map((t, index) => 
                            <span key={index} className="inline-block text-white px-2 py-1 bg-primary  rounded-md">
                                {t}
                    </span> )
                    }
                    
                  </p> */}
                 <div className="flex space-x-3 pt-4">
                 <a href={project.liveSite} className='text-white px-2 py-1 bg-secondary  rounded-md' target='_blank'>Live Site</a>
                 <a href={project.clientCode} className='text-white px-2 py-1 bg-secondary  rounded-md' target='_blank'>Client Site</a>
                 <a href={project.ServerCode} className='text-white px-2 py-1 bg-secondary  rounded-md' target='_blank'>Server Site</a>
                 </div>
                </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-4 md:pt-12">
        <Link
        to='/portfolio'
            className="px-8 btn btn-outline text-primary hover:bg-gradient-to-r from-primary via-info to-secondary"
          >
            All Project
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
