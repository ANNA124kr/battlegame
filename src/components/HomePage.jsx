import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function HomePage(props) {

    const nav = useNavigate()

    const [nameUser, setNameUser] = useState('')
    const valid = () =>{
        if (nameUser.length < 2) {
            alert('Please, Enter min 2 symbols')
        }
        else{
            props.start(nameUser)
            nav('/game/war')

        }
    }

    
    return (
    <div>
        <h1 style={{color: '#FDFD96'}} >Ready for War!</h1>
        
        <input onChange={(e)=> {setNameUser(e.target.value)}} type="text" placeholder=' Enter Your Name' maxLength={10} /> <br />
        <button onClick={() => {props.change()}} >Score Table</button>
        <button onClick={ () => {props.setTable(false) ; valid()} } >Start</button>
    </div>
    )
}
