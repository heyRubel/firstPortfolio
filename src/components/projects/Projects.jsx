import "./Projects.css";
import projects from "../Data/projects.json";
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Projects = () => {

  useEffect(()=>{
  Aos.init()
  },[])
  

  return (


    <div id="projects" className="projects_container">
      <h1>PROJECTS</h1>
      <div  className="projects_container_child">
        {projects.map((project,index) => {
          return (
            <div  data-aos-offset="100" data-aos-duration="1000"   data-aos={index % 2 === 0? 'flip-down' : 'flip-up'}    key={project.key} className="grid_boxx">
              <div className="iimage">
                <img src={project.imageSrc} />
              </div>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="buttons">
                <button style={{backgroundColor:'#0B5ED7',}}>Demo</button>
                <button style={{backgroundColor:'#FFCA2C',color:'black'}}>Demo</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
