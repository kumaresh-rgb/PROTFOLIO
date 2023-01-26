import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { useTypewriter } from "react-simple-typewriter";
import "../css/Body.css";
import Bodyprop1 from "./BodyProp1";





function Body() {
  const [text] = useTypewriter({
    words: ["I'm Kumaresh ", "Frontend", "Developer "],
    loop: true,
    cursor: "",
    cursorStyle: "_",
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return ( 
    <div className="Main_body">
 
    </div>
  );
}

export default Body;

// </div>
// <div className="moving">
//     <span className="new">{text}</span>
//     </div>
// <div className="bodyprops">
//   <Bodyprop1/></div>
