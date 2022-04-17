import React from "react";
import '../styles/Introduction.css';
import Introduction from "./Introduction";
import Objective from "./Objective";
import Experience from "./Experience";
import ExperianceContent from "./ExperianceContent";
import Education from "./Education";
import EducationContent from "./EducationContent";
import Skills from "./Skills";
import SkillsContent from "./SkillsContent";
const CV = () => {
    return (
        <>
        <div  class = "row">
       <div class="col col-md-3 offset-1">
        <Introduction />
       </div> 
       <div class="col col-md-5">
       <Objective />
       </div> 
        </div>
      

        <div  class = "row">
       <div class="col col-md-3 offset-1">
        <Experience />
       </div> 
       <div class="col col-md-5">
       <ExperianceContent />
       </div> 
        </div>
      
      
        <div  class = "row">
       <div class="col col-md-3 offset-1">
        <Education />
       </div> 
       <div class="col col-md-5">
       <EducationContent />
       </div> 
        </div>

        <div  class = "row">
       <div class="col col-md-3 offset-1">
        <Skills />
       </div> 
       <div class="col col-md-5">
       <SkillsContent />
       </div> 
        </div>
      

        </>
    )
}
export default CV;