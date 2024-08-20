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
  return (
    <div className="cardBox">
      <Card score={score} setScore={setScore}></Card>
      <Card score={score} setScore={setScore}></Card>
      <Card score={score} setScore={setScore}></Card>
      <Card score={score} setScore={setScore}></Card>
    </div>
  );
}

function Card({ score, setScore }) {
  return (
    <div
      className="card"
      onClick={() => {
        setScore(score + 1);
      }}
    ></div>
  );
}

export { Page };
