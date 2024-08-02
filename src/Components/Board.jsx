import React from 'react'
import board from "/Images/ludo_board.jpg"
import "../CSS/Board.css"
const Board = () => {
  return (
    <>
    <img className='board' src={board} alt="board" />
    </>
  )
}

export default Board