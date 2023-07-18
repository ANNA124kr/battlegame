import React from 'react'

export default function PlayerUser(props) {
  return (
    <div className='PlayerUserDiv' >
      <p style={{color:'#FADA5E' , fontSize:'22px'}} >{props.allData.nameUser}</p>
        
        <p >Games: {props.allData.games}</p>
        <p >Wins: {props.allData.wins}</p>
        <p >Looses: {props.allData.loose}</p>
    </div>
  )
}
