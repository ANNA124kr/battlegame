
import './App.css';
import { HashRouter as BrowserRouter , Routes , Route} from 'react-router-dom'
import { useState } from 'react';
import GamePage from './components/GamePage';
import ScorePage from './components/ScorePage';
import HomePage from './components/HomePage';
import ScoreTable from './components/ScoreTable';


let player, computer

function App() {

//===========================================================================

// Score Table
const [table, setTable] = useState(false)

// show table func
const showTable = () => {
  if (table) {
    return <ScoreTable playersArr = {playersArr} />
  }
}

// change state of table (open / closed)
const change = () => {
  setTable(!table)
}

// player with the bigest number of wins
const theBigest = () => {
  playersArr.sort((a,b) => (b.wins - a.wins))
}

//===========================================================================

// player's wins , loose , Games
const [games , setGames] = useState(0)
const [wins , setWins] = useState(0)
const [loose , setLoose] = useState(0)

//===========================================================================

//add player
const [playersArr , setPlayersArr] = useState([])

// add player func
const addPlayer = (player) =>{
  setPlayersArr([...playersArr, { nameUser:player.nameUser,
    games: games,  
    wins:wins, 
    loose: loose}])
  }
  
//===========================================================================

//CardDeck 
  const [playerDeck,setPlayerDeck] = useState([])
  const [computerDeck,setComputerDeck] = useState([])
  
  // Game creating
  const initGame = (nameUser) => {
    
    //deal cards checking
    // let p = new CardDeck()
    // let x = p.dealCard()
    // let y = p.dealCard()
    
    let cardArr = new CardDeck();
let playerDeck = [] , computerDeck = []

for(let i = 0; i< 26; i++){
  playerDeck.push(cardArr.dealCard())
  computerDeck.push(cardArr.dealCard())
} 
player = new Player (nameUser, playerDeck)
computer = new Player ('Computer', computerDeck)
setPlayerDeck(playerDeck)
setComputerDeck(computerDeck)

}

//===========================================================================

return (
  <div className="App">

      <BrowserRouter>
      
      <Routes>

        <Route path='/' element = { <HomePage 
                                      start = {initGame} 
                                      playersArr = {playersArr} 
                                      setTable = {setTable}
                                      change = {change} />  } />

        <Route path='/game/war' element = { <GamePage 
                                              player = {player} computer = {computer} 
                                              setPlayerDeck = {setPlayerDeck} 
                                              setComputerDeck = {setComputerDeck}
                                              setWins = {setWins} setLoose = {setLoose} 
                                              setGames = {setGames} wins = {wins} 
                                              loose = {loose} games = {games} /> } />

        <Route path='/game/war/score' element = { <ScorePage  
                                                    player = {player}
                                                    start = {initGame} add = {addPlayer} 
                                                    wins = {wins} loose = {loose} 
                                                    setWins = {setWins} setLoose = {setLoose}
                                                    setGames = {setGames} /> } />

      </Routes>

      {showTable()}
      {theBigest()}
      
      </BrowserRouter>

    </div>
  );
}

export default App;


class Player{

  wins = 0;
  loose = 0;
  games = 0;
  lastGame = 0;

  constructor (nameUser,cardArr){
    this.nameUser = nameUser;
    this.cardArr = cardArr;
  }
}

// card's deck
class CardDeck{
  cards = [];
  constructor(){
  this.initCard();
  }

  // 56 cards // 1-14 // each number of card 4 times // [1,1,1,1,2,2,2,2,..14]
initCard(){
  for(let i = 1; i<14; i++){
    for(let j = 0; j<4; j++){
      this.cards.push(i)
    }
  }
}

// deal card's deck to two players
dealCard(){
  // debugger
  let rand = Math.floor(Math.random()*this.cards.length)
  let card = this.cards.splice(rand,1);
  return card[0];
}

}
