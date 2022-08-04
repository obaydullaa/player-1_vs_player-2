import { useEffect, useState } from "react";
import ScoreCard from "./Components/ScoreCard";

function App() {
  // 1. submit click:
  //      a. Get input value
  //      b. valid input input filed (optional)
  //      c. input value show Winning score
  //      d. as Winning score variable
  //      e. hide input and submit btn

  // 2. p1 click
  //      b. Random generate
  //      a. P1 btn Disable, p2 btn Enable
  //      c. show random number in player p1 ui
  //      d. set as p1 variable
  //      e. Check if it matches the winning score
  //      f.    1. Alert pop up message = (Player one is won)
  //            2. Just ignore

  // 3. p2 click
  //      b. Random generate
  //      a. P2 btn Disable, p1 btn Enable
  //      c. show random number in player p2 ui
  //      d. set as p1 variable
  //      e. Check if it matches the winning score
  //      f.    1. Alert pop up message = (Player Two is won)
  //            2. Just ignore

  // 4. Reset btn click:
  //      a. winning score zero
  //      b. enable p1  and p2 score zero
  //      c. show input and submit btn
  //      d. Enable p1 and p2 btn

  const [winningScore, setWinningScore] = useState(7);
  const [winningScoreInput, setWinningScoreInput] = useState("");
  const [isInputHide, setIsInputHide] = useState(false);
  const [playerOneValue, setPlayerOneValue] = useState(0);
  const [playerTwoValue, setPlayerTwoValue] = useState(0);
  const [isPlayerOneBtnHide, setIsPlayerOneBtnHide] = useState(false);
  const [isPlayerTwoBtnHide, setIsPlayerTwoBtnHide] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWinningScore(winningScoreInput);
    setIsInputHide(true);
  };

  const handleChange = (e) => {
    // e.preventDefault();
    setWinningScoreInput(parseInt(e.target.value));
  };

  const handleClickBtn = (e) => {
    if (e.target.innerHTML === "Player 01") {
      setPlayerOneValue(randomNumber(parseInt(winningScore)));
      setIsPlayerOneBtnHide(true);
      setIsPlayerTwoBtnHide(false);
    } else if (e.target.innerHTML === "Player 02") {
      setPlayerTwoValue(randomNumber(parseInt(winningScore)));
      setIsPlayerOneBtnHide(false);
      setIsPlayerTwoBtnHide(true);
    } else {
      setWinningScore(7);
      setWinningScoreInput("");
      setIsInputHide(false);
      setPlayerOneValue(0);
      setPlayerTwoValue(0);
      setIsPlayerOneBtnHide(false);
      setIsPlayerTwoBtnHide(false);
      setWinner(null);
    }
  };

  const randomNumber = (num) => {
    const random = Math.floor(Math.random() * (num + 1));
    return random;
  };

  useEffect(() => {
    return setWinner(() => {
      if (winningScore === playerOneValue) {
        setIsPlayerOneBtnHide(true);
        setIsPlayerTwoBtnHide(true);
        return "Player One";
      }
      if (winningScore === playerTwoValue) {
        setIsPlayerOneBtnHide(true);
        setIsPlayerTwoBtnHide(true);
        return "Player Two";
      }
    });
  }, [winner, playerOneValue, playerTwoValue, winningScore]);

  // useEffect(() => {
  //    return setWinner(() => {
  //       if(winningScore === playerOneValue) return 'Player One'
  //       if(winningScore === playerTwoValue) return 'Player Two'
  //     })

  // },[winner, playerOneValue, playerTwoValue, winningScore])

  return (
    <div className="container">
      {winner && <h1>{winner} is winner</h1>}
      <ScoreCard winningScore={winningScore} />
      <div className="players">
        <h3>Player-One: {playerOneValue} </h3>
        <h3>Player-Two: {playerTwoValue} </h3>
      </div>
      <form className="form-wrap" onSubmit={handleSubmit}>
        <input
          className={`${isInputHide ? "hideinput" : ""}`}
          onChange={handleChange}
          value={winningScoreInput}
          required="required"
          type="number"
          placeholder="Enter Your Score Number"
          id="input"
        />
        <button
          className={`btn ${isInputHide ? "hideinput" : ""}`}
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="player-btn-wrap">
        <button
          className={`btn player-btn ${isPlayerOneBtnHide ? "disableBtn" : ""}`}
          onClick={handleClickBtn}
        >
          Player 01
        </button>
        <button
          className={`btn player-btn ${isPlayerTwoBtnHide ? "disableBtn" : ""}`}
          onClick={handleClickBtn}
        >
          Player 02
        </button>
        <button className="btn reset-btn" onClick={handleClickBtn}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
