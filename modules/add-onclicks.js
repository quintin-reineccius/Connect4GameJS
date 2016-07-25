import { buttons } from './config'
import userMove from './user-move'

export default function addOnclicks(){
  let row = 0
  let column = 0

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].forEach(button => {
      if(column === 6) {
        column = 0
        row++
      }
      column++

      button.onclick = function(column, row) {
        return () => userMove(column, row)
      }(column, row)
    })
  }
}
