import { buttons, board, winner, wins } from './config'
import userMove from './user-move'
import clearBoard from './clear-board'
import clearScores from './clear-scores'

let clearBoardButton = document.getElementById('clearBoard')
let clearScoresButton = document.getElementById('clearScores')

export default function addOnclicks(){
  let row = 0
  let column = 0

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].forEach(button => {
      if(column === 7) {
        column = 0
        row++
      }
      column++

      button.onclick = function(column, row) {
        return () => userMove(column - 1, row)
      }(column, row)
    })
  }

  clearBoardButton.onclick = () => clearBoard({ buttons, board, winner })
  clearScoresButton.onclick = () => clearScores({ buttons, board, winner, wins })
}
