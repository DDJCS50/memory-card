import "../styles/main.css";
import { useState } from "react";

function Page() {
  const [score, setScore] = useState(0);

  return (
    <>
      <header>
        <div className="title">
          <h1>Memory Card Game</h1>
          <p>Catch em all without catching two of the same!</p>
        </div>
        <Score playerScore={score}></Score>
      </header>
      <main>
        <CardContainer score={score} setScore={setScore}></CardContainer>
      </main>
      <footer></footer>
    </>
  );
}

function Score({ playerScore }) {
  let highScore = 10;

  return (
    <div className="scoreContainer">
      <h2>Score: {playerScore}</h2>
      <h2>High Score: {highScore}</h2>
    </div>
  );
}

function CardContainer({ score, setScore }) {
  const [stateArray, setStateArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div className="cardBox">
      <Card score={score} setScore={setScore} value={0} stateArray={stateArray} setStateArray={setStateArray}></Card>
      <Card score={score} setScore={setScore} value={1} stateArray={stateArray} setStateArray={setStateArray}></Card>
      <Card score={score} setScore={setScore} value={2} stateArray={stateArray} setStateArray={setStateArray}></Card>
      <Card score={score} setScore={setScore} value={3} stateArray={stateArray} setStateArray={setStateArray}></Card>
      <Card score={score} setScore={setScore} value={4} stateArray={stateArray} setStateArray={setStateArray}></Card>
      <Card score={score} setScore={setScore} value={5} stateArray={stateArray} setStateArray={setStateArray}></Card>
      <Card score={score} setScore={setScore} value={6} stateArray={stateArray} setStateArray={setStateArray}></Card>
      <Card score={score} setScore={setScore} value={7} stateArray={stateArray} setStateArray={setStateArray}></Card>
      <Card score={score} setScore={setScore} value={8} stateArray={stateArray} setStateArray={setStateArray}></Card>
      <Card score={score} setScore={setScore} value={9} stateArray={stateArray} setStateArray={setStateArray}></Card>
    </div>
  );
}

function Card({ score, setScore, value, stateArray, setStateArray }) {
  function handleClick() {
    setScore(score + 1);
    setStateArray(randomizer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  }

  return (
    <div
      className="card"
      onClick={() => {
        handleClick();
      }}
    >
      {stateArray[value]}
    </div>
  );
}

function randomizer(arr) {
  let tempArr = [];
  while (tempArr.length < arr.length) {
    let indexHolder = Math.floor(Math.random() * 10);
    if (arr.includes(indexHolder) == true && tempArr.includes(indexHolder) == false) {
      tempArr.push(indexHolder);
    }
  }
  return tempArr;
}

export { Page };
