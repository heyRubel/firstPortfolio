import "./Experience.css";
import datas from "../Data/experience.json";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Experience = () => {
useEffect(()=>{
AOS.init({ duration: 1000,  offset: 240 ,  mirror: false,});
},[])

  return (
    <div id="experience" className="experience">
      <h1>EXPERIENCE</h1>
      {datas.map((data,index) => (
        <div data-aos={index%2===0 ? 'fade-right':'fade-left'}  key={data.id} className="experience_box">
          <div className="left">
            <img src={`images/${data.imageSrc}`} />
          </div>

          <div className="right">
            <h1 style={{ fontSize: "27px" }}>{ data.role}</h1>
            <pre style={{fontSize:'20px'}}>

              <span style={{color:'yellowgreen'}}>{ data.startDate}</span> 
             <span  style={{color:'yellowgreen'}}>{ data.endDate}</span> 
             <br />
              <span>{` ${data.location}` }</span>
            </pre>

            <h4  style={{color:'yellow',letterSpacing:'2px'}}>{data.experiences[0]}</h4>
            <h4  style={{color:'yellow',letterSpacing:'2px'}}>{data.experiences[1]}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

 export default Experience;

