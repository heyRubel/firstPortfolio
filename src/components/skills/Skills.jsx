import "./Skills.css";
import skills from "../Data/skills.json";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skills = () => {
useEffect(()=>{
  AOS.init({duration:1000,offset:140,})
},[])



  return (
    <div id="skills" className="skills_container">
      <h1 >SKILLS</h1>
      <div className="skills_container_child">
        {skills.map((skill,index) => {
          return (
            <div data-aos={index%2===0 ? 'flip-left':'flip-right'} className="grid_box">
              <img  src={`images/${skill.imageSrc}`} />
              <h4>{skill.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;



