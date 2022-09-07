import React from 'react'
import Oicon from '../icons/Oicon'
import Xicon from '../icons/Xicon'

const Start = ({setActiveUser,activeUser,changeMode}) => {
  return (
    <div className='start'>
      <div className='start__header'>
        <Xicon/>
        <Oicon/>
      </div>
      <div className='card shadow-gray'>
        <h1 className='text-lg'>pick player 1'st mark</h1>
        <div className='start__player'>
            <span className={activeUser==="x"?'start__player--active':""} onClick={()=>setActiveUser('x')}>
                <Xicon color={activeUser==="x"?"dark":"light"}/>
            </span>
            <span className={activeUser==="o"?'start__player--active':""} onClick={()=>setActiveUser('o')}>
                <Oicon color={activeUser==="o"?"dark":"light"}/>
            </span>
        </div>
        <p className='text-light'>remember : x goas frist</p>
      </div>
      <div className='start__btns'>
        <button className='btn btn-yellow' onClick={()=>changeMode('cpu')}>new game (vs cpu)</button>
        <button className='btn btn-blue' onClick={()=>changeMode('user')}>new game (vs player)</button>
      </div>
    </div>
  )
}

export default Start
