import React from 'react'
import PlayerUser from './PlayerUser'


export default function ScoreTable(props) {
  return (
    <div>
      <h2>Score Table</h2>

      {props.playersArr.map((val,index) => {
        return <PlayerUser allData = {val} index = {index} key={index} />
      })}



    </div>
  )
}
