export const WordGuess = ({ row, guess, maxWordLength }) => {
  if (guess === null || guess === undefined) {
    return (
      <div className="wordRow">
        {Array.from({ length: maxWordLength }, (_, index) => (
          <div key={`${row}_${index}`} className="cell"></div>
        ))}
      </div>
    );
  }
  return (
    <div className="wordRow">
      {guess.map((val, index) => (
        <div key={`${row}_${index}`} className={`cell ${val.status}`}>
          {val.letter}
        </div>
      ))}
    </div>
  );
};
