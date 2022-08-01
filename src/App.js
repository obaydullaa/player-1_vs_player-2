
/**
 * 1. get input
 * 2. check this input valid or invalid
 * 3. 
 */
import { useState } from "react";
import ScoreCard from "./Components/ScoreCard";

function App() {

  const [inputText, setInputText] = useState(10); 
  const [playerOn, setPlayerOn] = useState(0); 
  const [playerTwo, setPlayerTwo] = useState(0); 
  const [tractClass1, setTractClass1] = useState(false); 
  const [tractClass2, setTractClass2] = useState(true); 

 
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setInputText(evt.target[0].value)
    evt.target[0].value = '';
  }

  const playerBtnOn = () => {
    setPlayerOn((prevValue) => prevValue + 1)
    setTractClass1(true)
  }

  const playerBtnTwo = () => {
    setPlayerTwo((prevValue) => prevValue + 1)
    setTractClass2(false)
  }

  // const {inputText} = 
  return (
    
    <div className='container'>
      <ScoreCard inputText={inputText}/>
      <div className="players">
        <h3>Player-On : {playerOn}</h3>
        <h3>Player-Two: {playerTwo}</h3>
      </div>
        <form className="form-wrap" onSubmit={handleSubmit}>
          <input required='required' type="number" placeholder="Enter Your Score Number"  id="input"/>
          <button className="btn">Submit</button>
      </form>
      <div className="player-btn-wrap">
        <button className={`btn player-btn ${playerOn ? 'disablepOn': ''}`} onClick={playerBtnOn}>Player 01</button>
        <button className={`btn player-btn ${playerTwo ? 'disablepTwo': ''}`} onClick={playerBtnTwo}>Player 02</button>
        <button className="btn reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default App;
