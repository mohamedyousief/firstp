import React from 'react'
import BoardCard from '../BoardCard'
import Oicon from '../icons/Oicon'
import Xicon from '../icons/Xicon'
import Ricon from '../Ricon'

const Board = ({squares,handelClick ,nextX,tries,winner,winnerLine,handelRestr}) => { 
  return (
    <div className='board'>
      <div className='bord__header'>
        <div>
          <Xicon/>
          <Oicon/>
        </div>
        <div className='bord__turn'>
          {!nextX ? <Xicon color="light" size="sm"/> : <Oicon color="light" size="sm"/>}
          turn
        </div>
        <div>
          <button className='btn btn-sm board__rest' onClick={handelRestr}><Ricon/></button>
        </div>
      </div>
      <div className='board__body'>
        {squares.map((sq,ix)=>(
          <BoardCard key={ix} index={ix} user={sq} active={winner && winnerLine && winnerLine.includes(ix)} handelClick={handelClick}/>
        ) )}
      </div>
      <div className='board__footer'>
        <div className='card bg-blue'>
          <p className='text-light'>x(player)  </p>
          <strong className='text-2xl'>{tries.x}</strong>
        </div>
        <div className='card bg-light'>
          <p className='text-light' style={{color:"#1f3640"}}>tries</p>
          <strong className='text-2xl'>{tries.x+tries.o}</strong>
        </div>
        <div className='card bg-yellow'>
          <p className='text-light'>o(cpu)</p>
          <strong className='text-2xl'>{tries.o}</strong>
        </div>
      </div>
    </div>
  )
}

export default Board
