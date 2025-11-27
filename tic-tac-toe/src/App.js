import {useState} from 'react';
// function Square({value}){
//   function handleClick(){
//     console.log("clicked");
//     console.log(value);
//   }

//   return <button className="square" onClick={handleClick}>{value}</button>
// }
// export default function Board() {
//   return (
//     <>
//       <div className="board-row">
//         <Square value = "1"/>
//         <Square value = "2"/>
//         <Square value = "3"/>
//       </div>
//       <div className="board-row">
//         <Square value = "4"/>
//         <Square value = "5"/>
//         <Square value = "6"/>
//       </div>
//       <div className="board-row">
//         <Square value = "7"/>
//         <Square value = "8"/>
//         <Square value = "9"/>
//       </div>
//     </>
//   );
// }

function Square({value , onSquareClick}){
  // const[value,setValue] = useState(null);

  // function handleClick(){
  //   if(value === 'X'){
  //     alert('already clicked');
  //   }
  //   else{
  //     setValue('X');
  //     console.log('clicked');
  //   }
  // }
  return(
    // <button className="square" onClick = {handleClick}>{value}</button>
    <button className="square" onClick = {onSquareClick}>{value}</button>
  );
}

function Board({xIsNext, squares, onPlay}) {
  // const[xIsNext, setXIsNext] = useState(true);
  // const[squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    const nextSquares = squares.slice();// why make a copy?
    if(xIsNext){
      nextSquares[i] = 'X';
    }
    else{
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
    // console.log(i + "clicked");
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner : " + winner;
  }
  else{
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value = {squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value = {squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value = {squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i=0 ; i<lines.length ; i++){
    const[a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

export default function Game(){
  const[xIsNext, setXIsNext] = useState(true);
  const[history, setHistory] = useState([Array(9).fill(null)]);// it's meaning?
  const currentSquares = history[history.length - 1];
  const [pastMove, setPastMove] = useState(false);

  function handlePlay(nextSquares){
    setHistory([...history,nextSquares]);
    setXIsNext(!xIsNext);
  }

  function HandleMove(boardState, move){
    console.log(history[move]);
    // currentSquares = history[move];
    setPastMove(true);
    return(
      <div>
        setXIsNext(xIsNext);
      <Board xIsNext = {xIsNext} squares = {boardState} onPlay = {handlePlay}/>
      </div>
      // {currentSquares} = {history[move]} 
    );
  }
 

  const moves = history.map((boardState, move) => {
    let status ;
    if(move > 0){
      status = "go to move" + move;
    }
    else{
      status = "go to start";
    }
    return(
      <>
      <button onClick = {() => HandleMove(boardState, move)}>{status}</button>
      <br></br>
      </>
    );
  })






  
  return(
    <div className = "game">
      <div className = "game-board">
        <Board xIsNext = {xIsNext} squares = {currentSquares} onPlay = {handlePlay} pastClicked = {pastMove}/>
      </div>
      <div className = "game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

 