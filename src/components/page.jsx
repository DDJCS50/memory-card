import "../styles/main.scss";
import { useEffect, useState } from "react";

function Page() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemonStorage, setPokemonStorage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemonStorage(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <div className="title">
          <h1>Memory Card Game</h1>
          <p>Catch em all without catching two of the same!</p>
        </div>
        <Score playerScore={score} highScore={highScore}></Score>
      </header>
      <main>
        <CardContainer score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} pokemonArray={pokemonStorage}></CardContainer>
      </main>
      <footer></footer>
    </>
  );
}

function Score({ playerScore, highScore }) {
  return (
    <div className="scoreContainer">
      <h2>Score: {playerScore}</h2>
      <h2>High Score: {highScore}</h2>
    </div>
  );
}

function CardContainer({ score, setScore, highScore, setHighScore, pokemonArray }) {
  const [stateArray, setStateArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [clickedArray, setClickedArray] = useState([]);

  return (
    <div className="cardBox">
      <Card
        score={score}
        setScore={setScore}
        pokemonArray={pokemonArray}
        highScore={highScore}
        setHighScore={setHighScore}
        value={stateArray[0]}
        stateArray={stateArray}
        setStateArray={setStateArray}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
      ></Card>
      <Card
        score={score}
        setScore={setScore}
        pokemonArray={pokemonArray}
        highScore={highScore}
        setHighScore={setHighScore}
        value={stateArray[1]}
        stateArray={stateArray}
        setStateArray={setStateArray}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
      ></Card>
      <Card
        score={score}
        setScore={setScore}
        pokemonArray={pokemonArray}
        highScore={highScore}
        setHighScore={setHighScore}
        value={stateArray[2]}
        stateArray={stateArray}
        setStateArray={setStateArray}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
      ></Card>
      <Card
        score={score}
        setScore={setScore}
        pokemonArray={pokemonArray}
        highScore={highScore}
        setHighScore={setHighScore}
        value={stateArray[3]}
        stateArray={stateArray}
        setStateArray={setStateArray}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
      ></Card>
      <Card
        score={score}
        setScore={setScore}
        pokemonArray={pokemonArray}
        highScore={highScore}
        setHighScore={setHighScore}
        value={stateArray[4]}
        stateArray={stateArray}
        setStateArray={setStateArray}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
      ></Card>
      <Card
        score={score}
        setScore={setScore}
        pokemonArray={pokemonArray}
        highScore={highScore}
        setHighScore={setHighScore}
        value={stateArray[5]}
        stateArray={stateArray}
        setStateArray={setStateArray}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
      ></Card>
      <Card
        score={score}
        setScore={setScore}
        pokemonArray={pokemonArray}
        highScore={highScore}
        setHighScore={setHighScore}
        value={stateArray[6]}
        stateArray={stateArray}
        setStateArray={setStateArray}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
      ></Card>
      <Card
        score={score}
        setScore={setScore}
        pokemonArray={pokemonArray}
        highScore={highScore}
        setHighScore={setHighScore}
        value={stateArray[7]}
        stateArray={stateArray}
        setStateArray={setStateArray}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
      ></Card>
      <Card
        score={score}
        setScore={setScore}
        pokemonArray={pokemonArray}
        highScore={highScore}
        setHighScore={setHighScore}
        value={stateArray[8]}
        stateArray={stateArray}
        setStateArray={setStateArray}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
      ></Card>
      <Card
        score={score}
        setScore={setScore}
        pokemonArray={pokemonArray}
        highScore={highScore}
        setHighScore={setHighScore}
        value={stateArray[9]}
        stateArray={stateArray}
        setStateArray={setStateArray}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
      ></Card>
    </div>
  );
}

function Card({ score, setScore, value, highScore, setHighScore, setStateArray, clickedArray, setClickedArray, pokemonArray }) {
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore, setHighScore]);
  function handleClick() {
    setStateArray(randomizer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    if (clickedArray.includes(value) == false) {
      setScore(score + 1);

      setClickedArray([value, ...clickedArray]);
    } else {
      setScore(0);
      setClickedArray([]);
    }
  }

  if (pokemonArray.length == 0) {
    return (
      <div
        className="card"
        onClick={() => {
          handleClick();
        }}
      >
        {value}
        <p></p>
        <img src="" alt="ditto sprite" />
      </div>
    );
  } else if (pokemonArray.length > 0) {
    return (
      <div
        className="card"
        onClick={() => {
          handleClick();
        }}
      >
        {value}
        <p>{pokemonArray[value].name.toUpperCase()}</p>
        <img src={pokemonArray[value].sprites.front_default} alt="pokemon sprite" />
      </div>
    );
  }
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

async function getPokemon() {
  const responses = await Promise.all([
    fetch("https://pokeapi.co/api/v2/pokemon/ditto/").then((r) => r.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/suicune/").then((r) => r.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/charmander/").then((r) => r.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/squirtle/").then((r) => r.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur/").then((r) => r.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/mudkip/").then((r) => r.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu/").then((r) => r.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/staryu/").then((r) => r.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/onix/").then((r) => r.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/gengar/").then((r) => r.json()),
  ]);

  console.log(responses);
  let pokemonObjectArray = responses;
  return pokemonObjectArray;
}

export { Page };
