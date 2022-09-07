import React from 'react'
import Xicon from './icons/Xicon'
import Oicon from './icons/Oicon'
const BoardCard = ({user="nouser", active,index,handelClick}) => {
  return (
    <div onClick={()=>handelClick(index)} className={`card ${active && user==="x" && "Shadow-blue"} ${active && user==="o" && "Shadow-yellow"} ${!active ? "Shadow-gray" :"active"}`}>
    {user==="x" && <Xicon color={active && "dark"} size="lg"/>}
    {user==="o" && <Oicon color={active && "dark"} size="lg"/>}
    </div>
  )
}

export default BoardCard
