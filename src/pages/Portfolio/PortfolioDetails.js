import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PortfolioDetails = () => {
    const { id } = useParams();
    const projects = [
        {
            "_id": 1,
            "projectName": "Style-Fabrics",
            "description" :"Garments Manufacturer Portal for managing orders. Style Fabrics Limited is a Garments manufacturing company formed by an entrepreneur and is dedicated to manufacturing garments and maintaining production.",
            "img" : "https://i.ibb.co/c1091yT/style-fabrics.png",
            "technology": ["TailwindCSS","Desiy Ui", "React", "NodeJs", "MongoDB", "Firebase", "react hook form", "jwt","react query", "stripe"],
            "liveSite": "https://style-fabrics-cd172.web.app/",
            "clientCode": "https://github.com/ashrafalisimon/style-fabrics-client",
            "ServerCode": "https://github.com/ashrafalisimon/style-fabrics-server"
        },
        {
            "_id": 2,
            "projectName": "Boating Nevica",
            "description" :"Business stores goods in a warehouse, inventory management is a key part of how you control your stock. Learn the basics of warehouse inventory management.",
            "img" : "https://i.ibb.co/7rrc1rP/boatin-nevia.png",
            "technology": ["TailwindCSS", "React", "NodeJs", "MongoDB", "Firebase", "heroicons"],
            "liveSite": "https://boating-nevica.web.app/",
            "clientCode": "https://github.com/ashrafalisimon/boating-nevica-client",
            "ServerCode": "https://github.com/ashrafalisimon/boating-nevica-server"
        },
        {
            "_id": 3,
            "projectName": "Dream Focus Click",
            "description" :"Photographer Independent Service Provider Website.",
            "img" : "https://i.ibb.co/XZCQ0Gw/drem.png",
            "technology": ["react","bootstrap", "font awesome", "Firebase"],
            "liveSite": "https://dream-focus-click.web.app/",
            "clientCode": "https://github.com/ashrafalisimon/independent-service-provider"
        }
    ];
    fetch(projects)
    .then(res=>res.json())
    .then(data=>console.log(data))

    const projectDetails = projects.find((p) => p._id == id);
    

    return (

         <div>
            {projectDetails.projectName}
         </div>
    );
};

export default PortfolioDetails;