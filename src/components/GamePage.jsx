import React, {useState} from 'react'
import Card from './Card'
import cardWall from './images/wallCard.jpg'
import { useNavigate } from 'react-router-dom'

// let playerPoint = 0 , computerPoint = 0


export default function GamePage(props) {

    const nav = useNavigate()
    
    // index and count of game
    const [index,setIndex] = useState(0)
    const [count, setCount] = useState(1)
    
    //computer and  player  points 
    const [computerPoint, setComputerPoint] = useState(0)
    const [playerPoint, setPlayerPoint] = useState(0)

    //next card func
    const nextCard = () => {
    
    setCount(count + 1)
    
    //cards value 
    if (props.computer.cardArr[index] > props.player.cardArr[index] ) {
        setComputerPoint(computerPoint + 1);
        // playerPoint++
    }else if (props.computer.cardArr[index] < props.player.cardArr[index]) {
        setPlayerPoint(playerPoint + 1);
        // computerPoint++
    }
    

    //End of the Game
    if (index == 25) {
        
        // props.player.games++
        props.setGames(props.games + 1)
        
        if (playerPoint > computerPoint) {
            props.player.lastGame = 1
            props.setWins(props.wins + 1 ) 
            props.player.wins++
        }
        else if (playerPoint < computerPoint) {
            props.player.lastGame = 2
            props.setLoose(props.loose + 1 )
            props.player.loose++ 

        }
        else{
            props.player.lastGame = 0
        }
        // playerPoint = 0;
        // computerPoint = 0; 
        setComputerPoint(0)
        setPlayerPoint(0)

        props.setPlayerDeck([])
        props.setComputerDeck([])
        nav('/game/war/score')
        
    }
    
    else{
        console.log(playerPoint,computerPoint);
        setIndex(index +1)
    }
    
    
}



return (
    <div className='play' >
        <div className="computer"> 
        <h1 className='playeName' >{props.computer.nameUser}</h1>
        </div>

        <div className="count"> 
        <h2 style={{fontSize: '42px'}} > N.O {count} </h2>
        </div>
        
        <div className="point">
        <p> Computer : {computerPoint}</p>
        <p> {props.player.nameUser} : {playerPoint}</p>
        </div>
        
        <div className="card">
        <Card val = {props.computer.cardArr[index]} />
        <Card val = {props.player.cardArr[index]} />
        </div>


        <div className='deck' onClick={nextCard} >
            <img style={{ width: '100px' , height: '150px' , border:'solid 1px white'}} 
            src= {cardWall} alt="Card wallpepper" />
        </div>

        <div className="user">  
        <h1 className='playeName' >{props.player.nameUser}</h1>
        </div>
        
    </div>
)
}
