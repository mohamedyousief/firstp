import React from 'react'
import Restart from './Restart'
import Win from './Win'

const Model = ({model,mode,winner,handelRest,handelNextRound,setShowModel}) => {
    
  return (
    <>
    {model && (
        <div className='model'>
        <div className='model__content'>
            <div className='container'>
                {mode==="winner" && <Win winner={winner} handelRest={handelRest} handelNextRound={handelNextRound}/>}
                {mode==="start" && <Restart setShowModel={setShowModel} handelRest={handelRest}/>}
            </div>
        </div>
    </div>
    )}
    </>
  )
}

export default Model
