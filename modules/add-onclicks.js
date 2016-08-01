import { buttons } from './config'
import userMove from './user-move'

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

  // clearBoardButton.onclick = () => FUNCTION()
  // clearScoresButton.onclick = () => FUNCTION()
}
