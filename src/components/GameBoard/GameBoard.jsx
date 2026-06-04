import "./GameBoard.css";
import { WordGuess } from "./WordGuess";

export const GameBoard = ({ guesses, maxNumGuesses = 5, wordSize = 5 }) => {
  const numGuesses = guesses ? guesses.length : 0;
  console.log(maxNumGuesses - numGuesses);
  console.log(guesses);
  const guessesArray = [
    ...(guesses || []),
    ...Array.from({ length: maxNumGuesses - numGuesses }),
  ];
  return (
    <div className="gameBoardWrapper">
      {guessesArray.map((guess, index) => (
        <WordGuess row={index} guess={guess} maxWordLength={wordSize} />
      ))}
    </div>
  );
};
