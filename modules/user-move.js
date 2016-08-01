import { buttons, board, whosTurn } from './config'

let currentColor

export default function userMove(column, row){
  if(currentColor === 'red') {
    currentColor = 'black'
    whosTurn.innerHTML = 'Red\'s Turn'
  }else {
    currentColor = 'red'
    whosTurn.innerHTML = 'Black\'s Turn'
  }

  buttons[row][column].className = currentColor
  board[row][column] = currentColor
}
