import React from 'react'

export default function Card(props) {
  return (
    <div style={{border: '1px solid black' , width: '100px' , height: '150px',
    marginBottom: '10px' , backgroundColor: 'white' , color: '#003B15'}} >
            <h1 style={{color: 'black',marginTop: '40px'}} > {props.val} </h1>
    </div>
  )
}
