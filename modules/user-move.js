import { buttons, board, whosTurn } from './config'
import checkMove from './check-move'

let currentColor

export default function userMove(row, column){
  if(currentColor === 'red') {
    currentColor = 'black'
    whosTurn.innerHTML = 'Red\'s Turn'
  }else {
    currentColor = 'red'
    whosTurn.innerHTML = 'Black\'s Turn'
  }

  //wtf why does this work definely needs refactoring
  let num = 5

  if (buttons[num][column].disabled === true){
    num -= 1
  }
  if (buttons[num][column].disabled === true){
    num -= 1
  }
  if (buttons[num][column].disabled === true){
    num -= 1
  }
  if (buttons[num][column].disabled === true){
    num -= 1
  }
  if (buttons[num][column].disabled === true){
    num -= 1
  }

  buttons[num][column].className = currentColor
  buttons[num][column].disabled = true
  board[num][column] = currentColor

  checkMove({num, column, board, currentColor})
}
