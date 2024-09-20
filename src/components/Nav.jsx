import { useState } from "react";


const Nav = () => {
const [menu,setMenu]=useState(false)


const handleMenu=(()=>{
setMenu(!menu)
})


  return (
    <div  className=" nav">
      <div className="left">Portfolio</div>
      <i onClick={handleMenu} className={`open_menu fa-solid fa-bars ${menu ? 'hide' : ''}`}></i>
      <ul style={{"zIndex":"222"}}  className={`right ${menu ? 'show' : ''}`}>
       <li><a href="#home">Home</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#skills">Skills</a></li>
       <li><a href="#projects">Projects</a></li>
       <li><a href="#contact">Contact</a></li>
       <i onClick={handleMenu} className="close_menu fas fa-times"></i>
      </ul>
    </div>
  );
};

export default Nav;
