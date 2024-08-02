import React from 'react'
import board from "/Images/ludo_board.jpg"
import "../CSS/Board.css"
import red1 from "/Images/red1.png"
import red2 from "/Images/red2.png"
import red3 from "/Images/red3.png"
import red4 from "/Images/red4.png"
import blue1 from "/Images/blue1.png"
import blue2 from "/Images/blue2.png"
import blue3 from "/Images/blue3.png"
import blue4 from "/Images/blue4.png"
import green1 from "/Images/green1.png"
import green2 from "/Images/green2.png"
import green3 from "/Images/green3.png"
import green4 from "/Images/green4.png"
import yellow1 from "/Images/yellow1.png"
import yellow2 from "/Images/yellow2.png"
import yellow3 from "/Images/yellow3.png"
import yellow4 from "/Images/yellow4.png"

// import Dice from './Dice'

const Board = () => {
  return (
    <>
  
    <div className="board-lay">

      <img className='board' src={board} alt="board" />
      <div className="red">
        <img className='red1' src={red1}/>
        <img className='red2' src={red2}/>
        <img className='red3' src={red3}/>
        <img className='red4' src={red4}/>
      </div>
      <div className="green">
        <img className='green1' src={green1}/>
        <img className='green2' src={green2}/>
        <img className='green3' src={green3}/>
        <img className='green4' src={green4}/>
      </div>
      <div className="blue">
        <img className='blue1' src={blue1}/>
        <img className='blue2' src={blue2}/>
        <img className='blue3' src={blue3}/>
        <img className='blue4' src={blue4}/>
      </div>
      <div className="yellow">
        <img className='yellow1' src={yellow1}/>
        <img className='yellow2' src={yellow2}/>
        <img className='yellow3' src={yellow3}/>
        <img className='yellow4' src={yellow4}/>
      </div>
    </div>
    </>
  )
}

export default Board