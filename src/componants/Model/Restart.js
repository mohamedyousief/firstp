import React from 'react'

const Restart = ({setShowModel,handelRest}) => {
  return (
    <div className="restart">
      <h3 className='restart-title'>restart game ?</h3>
      <div className="restart-btn">
        <button className='btn btn-sm' onClick={()=>setShowModel(false)}>no , cancel</button>
        <button className='btn btn-sm btn-yellow' onClick={handelRest}>yes , restart</button>
      </div>
    </div>
  )
}

export default Restart
