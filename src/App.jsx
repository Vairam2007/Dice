import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [Name, setName] = useState('dice1');
  const Roll = () => {
    var random = Math.floor((Math.random()*5)+1);
    console.log(random);
  // setName("dice2");

  setName((oldname)=>(oldname === "dice1"? "dice2":"dice1"))
  if(random == 0){
    document.getElementsByClassName("dice2");
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
            Roll
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
