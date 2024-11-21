import { createElement, useState } from 'react'
import './App.css'

function App() {
  const [Board, setBoard] = useState(['','','','','','','','',''])
  const [Player, setPlayer] = useState("X")

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <div id="grid">
        {Board.map(cell => {
          Cell = createElement("p")
          Cell.addEventListener(onclick, () => {
            Cell.textContent = {Player}
            setPlayer()
          })
          return Cell
        })}
      </div>
    </>
  )
}

export default App
