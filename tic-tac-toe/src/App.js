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

export default function Board() {
  const[squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    console.log(i + "clicked");
    setSquares(nextSquares);
  }
  return (
    <>
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

 