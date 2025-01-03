import React from 'react'
import PlayerCard from './PlayerCard'

function Players({players}) {
  return (
    <div className="pl">
      {players.map((el)=><PlayerCard player={el}/>)}
    </div>
  )
}

export default Players
