import React, { useState } from "react";
import "../CSS/Dice.css";

var data= ["dice1","dice2","dice3","dice4","dice5","dice6"];
var check =true;
const Dice = () => {
  const [Name, setName] = useState('dicestop');
  const [text,settext] = useState("Reset")
  const Roll = () => {
    if(check){
      setName("dicestop")
      settext("Roll")
      check=false;
    }
    else{
      var random = Math.floor((Math.random()*5));
      console.log(random+1);
      setName(data[random])
      settext("Reset")
      // setName((oldname)=>(oldname === "dicestop"? data[random]:"dicestop"))
      check=true;
    }
  };
  return (
    <>
      <div className="body">
        <div className="box">
          <div className={Name}>
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>
          <button className="btn" onClick={Roll}>
            {text}
          </button>
        </div>
      </div>
    </>
  );
};

export default Dice;
