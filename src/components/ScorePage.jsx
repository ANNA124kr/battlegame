import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function ScorePage(props) {

    const nav = useNavigate()

    //new Game func
    const newGame = () => {
        props.start(props.player.nameUser)
        nav('/game/war')
    }

    //Exit from Game func
    const exit = () => {
    props.add(props.player)
    props.setWins(0)
    props.setLoose(0)
    props.setGames(0)
    nav('/')

    }


    //Result of Game
    const checkScore = () => {
        if (props.player.lastGame == 0) {
            return <h1> Draw </h1>
        }
        else if (props.player.lastGame == 1){
            return <h1 style={{color:'#D5E98E'}} > Win!! </h1>
        }
        else {
            return <h1 style={{color: '#97EEBA'}} > Loose </h1>
        }
    }


    return ( 
    <div >
        {checkScore()} 
    {/* <h1> {props.player.loose} - {props.player.wins} </h1> */}
    <h1> {props.wins} - {props.loose} </h1>
    <button onClick={newGame} >Again</button>
    <button onClick={exit}>Exit</button>
    </div>
)}
