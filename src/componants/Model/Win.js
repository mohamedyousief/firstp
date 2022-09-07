import React from 'react'
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'
const Win = ({winner,handelRest,handelNextRound}) => {
  return (
    <div className="score">
        {winner && winner !== "no"?(
          <>
            <p>you win!</p>
          <h3 className={`score-title ${winner==='o' ? "text-yellow" : "text-blue"}`}>
            {winner==="x"?<Xicon/>:<Oicon/>} taks the round
          </h3>
          </>
          )
        : 
          (
          <h3 className='score-title'>no winner</h3>
          )
        }
        
        <div className="score__btns">
            <button className="btn btn-sm " onClick={handelRest}>quit</button>
            <button className="btn btn-sm btn-yellow" onClick={handelNextRound}>next round </button>
        </div>
    </div>
  )
}

export default Win
