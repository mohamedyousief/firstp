import React, { useEffect, useState } from 'react'
import BOard from './componants/board/Board'
import Model from './componants/Model/Model'
import Start from './componants/start/Start'
import calcBestMove,{ calcWin } from './calcSquaer'

const App = () => {
  //ALL state
  const[model ,setShowModel ]=useState(false)
  const[mode,setMode]=useState("winner")//winner or start
  const[screen,setscreen]=useState('start')//start or game
  const[activeUser,setActiveUser]=useState("x")//x or o
  const[playMode,setPlayMode]=useState("user")//user or cpu
  const[squares,setSquares]=useState(new Array(9).fill(''))
  const[nextX,setNextX]=useState(false)
  const[winner,setWinner]=useState(null)
  const [winnerLine, setWinnerLine] = useState(null);
  const[tries,setTries]=useState({x:0,o:0})
  useEffect(() => {
    //check if cpu turn
    let currentUser = nextX ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser && !winner) {
      cpuNextMove(squares);
    }
    checkNoWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextX, winner, screen]);
  //All state
// asdawlmd;as,da
  //function

  function cpuNextMove (sqrs){
    let bestmove = calcBestMove(sqrs, activeUser === "x" ? "o" : "x");
    let ns = [...squares];
    ns[bestmove] = !nextX ? "x" : "o";
    setSquares(ns);
    setNextX(!nextX);
    checkWinner(ns);
  }

  function checkNoWinner ()  {
    if(winner) return
    const moves = squares.filter((sq) => sq === "");
    if (moves.length === 0) {
      setWinner("no");
      setShowModel("true");
      setMode("winner");
    }
  };

  function handelRest(){
    setSquares(new Array(9).fill(''))
    setNextX(false)
    setWinner(null)
    setWinnerLine(null)
    setActiveUser("x")
    setTries({x:0,o:0})
    hideModel()
    setscreen("start")
  }

  function handelNextRound(){
    setSquares(new Array(9).fill(''))
    setNextX(winner==='x')
    setWinner(null)
    setWinnerLine(null)
    hideModel()
  }

  function checkWinner(arr){
    const isWinner=calcWin(arr)
    if(isWinner){
      setWinner(calcWin(arr).winner)
      setWinnerLine(calcWin(arr).line)
      const tr={...tries}
      tr[isWinner.winner]+=1
      setTries(tr)
      showModel()
      setMode("winner")
    }
  }
  
  function handelClick(ix){
    if (squares[ix] || winner) {
      return;
    }
    const turn=nextX ?"o" : "x"

    if(playMode==='cpu' && turn !== activeUser) return

    let arr=[...squares]
    arr[ix]=!nextX ? "x" : "o"
    setSquares(arr)
    setNextX(!nextX)
    checkWinner(arr)
  }

  function changeMode(mode){
    setPlayMode(mode)
    setscreen('game')
  }
  function showModel(){
    setShowModel(true)
  }
  function hideModel(){
    setShowModel(false)
  }

  function handelRestr(){
    showModel()
    setMode("start")
  }
  //function
  return (
    <div className='App'>
      <div className='container'>
        { screen === "start" && <Start activeUser={activeUser} playMode={playMode} setActiveUser={setActiveUser} changeMode={changeMode} setPlayMode={setPlayMode}/> }
        { screen === "game" && <BOard lines={winnerLine} tries={tries} nextX={nextX} handelClick={handelClick} squares={squares} handelRestr={handelRestr} /> }
      </div>
      <Model handelNextRound={handelNextRound} handelRest={handelRest} winner={winner} model={model} mode={mode} setShowModel={setShowModel}  />
    </div>
  )
}

export default App
