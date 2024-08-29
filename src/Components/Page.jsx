import React from 'react'
import Dice from './Dice'
import Board from './Board'
import "../CSS/Page.css"
const Page = () => {
  return (
    <>
    <div className="body">
    {/* <Board classNam="Board" /> */}
    <Dice classNam="Dice" />
    </div>
    </>

  )
}

export default Page