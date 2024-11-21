import { useState } from 'react'
import './App.css'

function App() {
  const [board, setBoard] = useState([{id: 1, text: ''}, {id: 2, text: ''}, {id: 3, text: ''} ,{id: 4, text: ''} ,{id: 5, text: ''} ,{id: 6, text: ''} ,{id: 7, text: ''} ,{id: 8, text: ''}, {id: 9, text: ''}])
  const [turn, setTurn] = useState(0)

  const PlayerMove = (id) => {
    console.log(board)
    console.log(id)
    console.log(turn)
    const NewBoard = board.map(cell => {
      if (cell.id === id && cell.text === '') { // Ensure the cell is empty
        setTurn(turn + 1)
        return { ...cell, text: turn % 2 ? 'X' : 'O' }; // Update the cell
      }
      return cell;
    })
    setBoard(NewBoard)
  }

  const clearBoard = () => {
    const NewBoard = board.map(cell => {
      return {...cell, text: ''}
    })
    setBoard(NewBoard)
  }

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <div id="grid">
        {board && board.map(cell => {
          return (
            <div key={cell.id} className='cells' onClick={() => {
              PlayerMove(cell.id)
            }}>{cell.text}</div>
          )
        })}
      </div>
      <button onClick={() => clearBoard()}>Clear</button>
    </>
  )
}

export default App