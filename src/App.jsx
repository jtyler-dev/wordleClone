import { useState, useRef } from "react";
import "./App.css";
import { PlayAgainScreen } from "./components/PlayAgainScreen";
import { GameBoard } from "./components/GameBoard";

const SECRET_WORD = "sword";
const MAX_WORD_LENGTH = 5;
const GameState = {
  PLAYING: "PLAYING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
};

function App() {
  const ref = useRef(null);
  const [gameState, setGameState] = useState(GameState.PLAYING);
  const [guesses, setGuesses] = useState([]);

  const onGuess = () => {
    const NormalizedSecretWork = SECRET_WORD.toUpperCase();
    if (ref.current) {
      const currGuess = ref.current.value.toUpperCase();
      if (currGuess.length === MAX_WORD_LENGTH) {
        if (currGuess === NormalizedSecretWork) {
          setGameState(GameState.SUCCESS);
        }
        const currGuessCheck = [];
        for (let i = 0; i < currGuess.length; i++) {
          const letter = currGuess[i];
          console.log("----");
          console.log("letter:", letter);
          if (NormalizedSecretWork.indexOf(letter) > -1) {
            // the letter is in the word
            if (NormalizedSecretWork[i] === letter) {
              currGuessCheck.push({
                letter: letter,
                status: "correct",
              });
            } else {
              currGuessCheck.push({
                letter: letter,
                status: "inWord",
              });
            }
          } else {
            // not in the word
            currGuessCheck.push({
              letter: letter,
              status: "incorrect",
            });
          }
        }

        setGuesses((prev) => [...prev, currGuessCheck]);
      }
      ref.current.value = "";
    }
  };

  const onClickPlayAgain = () => {
    setGuesses([]);
    setGameState(GameState.PLAYING);
  };

  if (gameState === GameState.FAIL) {
    return (
      <PlayAgainScreen
        text="You've lost."
        onPlayAgainClick={onClickPlayAgain}
      />
    );
  }

  console.log("gameState: ", gameState);
  return (
    <div>
      <GameBoard guesses={guesses} />
      {gameState === GameState.SUCCESS ? (
        <PlayAgainScreen
          text="You've Won!"
          onPlayAgainClick={onClickPlayAgain}
        />
      ) : (
        <div>
          <input ref={ref} type="text" />
          <button onClick={onGuess}>Make a guess</button>
        </div>
      )}
    </div>
  );
}

export default App;
