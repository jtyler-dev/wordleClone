export const PlayAgainScreen = ({ text, onPlayAgainClick }) => {
  return (
    <div>
      <div>{text}</div>
      <button onClick={onPlayAgainClick}>Play again?</button>
    </div>
  );
};
