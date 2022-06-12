import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PortfolioDetails = () => {
  const { id } = useParams();
  const projects = [
    {
        "_id": 1,
        "projectName": "Style-Fabrics",
        "description" :"Garments Manufacturer Portal for managing orders. Style Fabrics Limited is a Garments manufacturing company formed by an entrepreneur and is dedicated to manufacturing garments and maintaining production.",
        "projectDetails": ["Manufacturer Website", "Responsive single page full stack website.", "Detailed information of the Manufacturer is given.", "Detailed information of the Inventories is given.","IAdmin Panel is Developed for Products & Order Management. Payment gateway Stripe.", "Can buy products. Be able to pay. Talk to us directly", "Implemented for email-password (login-Register) based login, google system & JWT security", "You can hire him by going here and peeling up the form" ],
        "img" : "https://i.ibb.co/c1091yT/style-fabrics.png",
        "technology": ["TailwindCSS","Desiy Ui", "React", "NodeJs", "MongoDB", "Firebase", "react hook form", "jwt","react query", "stripe"],
        "liveSite": "https://style-fabrics-cd172.web.app/",
        "clientCode": "https://github.com/ashrafalisimon/style-fabrics-client",
        "ServerCode": "https://github.com/ashrafalisimon/style-fabrics-server",
        "sliderImg": ["https://i.ibb.co/7bNxV9q/silder-img06.png", "https://i.ibb.co/c1xRjNH/silder-img07.png", "https://i.ibb.co/tMXMbBD/silder-img08.png","https://i.ibb.co/MRGTJzT/silder-img09.png" ]
    },
    {
        "_id": 2,
        "projectName": "Boating Nevica",
        "description" :"Business stores goods in a warehouse, inventory management is a key part of how you control your stock. Learn the basics of warehouse inventory management.",
        "projectDetails": ["Inventories Website", "Firebase Authentication implemented for email/password & Google.", "If the user is logged in, he will be able to manage items, add new items.", "Detailed information of the Inventories is given.","If you want to add Service him, you have to go to the Add Service page.", "You can add or delete any item if you want. (But you must have an account)" ],
        "img" : "https://i.ibb.co/7rrc1rP/boatin-nevia.png",
        "technology": ["TailwindCSS", "React", "NodeJs", "MongoDB", "Firebase", "heroicons"],
        "liveSite": "https://boating-nevica.web.app/",
        "clientCode": "https://github.com/ashrafalisimon/boating-nevica-client",
        "ServerCode": "https://github.com/ashrafalisimon/boating-nevica-server",
        "sliderImg": ["https://i.ibb.co/4Rg1GWg/silder-img03.png", "https://i.ibb.co/0y0yp4W/silder-img04.png", "https://i.ibb.co/SJH153d/silder-img05.png" ]
    },
    {
        "_id": 3,
        "projectName": "Dream Focus Click",
        "description" :"Photographer Independent Service Provider Website.",
        "projectDetails": ["Photographer Website", "Detailed information of the photographer is given.", "If you want to hire him, you have to go to the book page.", "You can hire him by going here and peeling up the form" ],
        "img" : "https://i.ibb.co/XZCQ0Gw/drem.png",
        "technology": ["react","bootstrap", "font awesome", "Firebase"],
        "liveSite": "https://dream-focus-click.web.app/",
        "clientCode": "https://github.com/ashrafalisimon/independent-service-provider",
        "sliderImg": ["https://i.ibb.co/5LVnwxG/silder-img01.png", "https://i.ibb.co/t4zzYRv/silder-img02.png" ]
    }
];
  fetch(projects)
    .then((res) => res.json())
    .then((data) => console.log(data));

  const projectDetails = projects.find((p) => p._id == id);

  return (
    <div className="md:px-28  px-6 ">
      {/* carosel start */}
      <div class="carousel w-full mt-4 rounded-lg shadow-md">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={projectDetails.sliderImg[0]} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" class="carousel-item relative w-full">
          <img src={projectDetails.sliderImg[1]} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src={projectDetails.sliderImg[2]} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src={projectDetails.sliderImg[3]} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* carosel ends*/}
      {/* projects details */}

      <div className="py-6 space-y-4">
       <div className="flex justify-between py-8">
       <h4 className="text-lg md:text-4xl font-semibold">
          {projectDetails.projectName}
        </h4>
        <div className="flex space-x-3 pt-4">
                 <a href={projectDetails.liveSite} className='text-white px-2 py-1 bg-secondary  rounded-md' target='_blank'>Live Site</a>
                 <a href={projectDetails.clientCode} className='text-white px-2 py-1 bg-secondary  rounded-md' target='_blank'>Client Site</a>
                 <a href={projectDetails.ServerCode} className='text-white px-2 py-1 bg-secondary  rounded-md' target='_blank'>Server Site</a>
                 </div>
       </div>
        <p>{projectDetails.description}</p>
        <div>
          <p className="font-bold text-xl">Project features:</p>
          <ul className="list-disc">
            {projectDetails.projectDetails.map((d, index) => (
              <li className="ml-4" key={index}>
                {d}
              </li>
            ))}
          </ul>
        </div>
        <p className="flex text-white flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
          {projectDetails.technology.map((t, index) => (
            <span
              key={index}
              className="inline-block text-white px-2 py-1 bg-primary  rounded-md"
            >
              {t}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PortfolioDetails;
