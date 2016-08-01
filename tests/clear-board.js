import { expect } from 'chai'
import clearBoard from '../modules/clear-board'

//needs refactoring
describe('Clear Board', () => {
  it('should clear game board', () => {
    let winner = document.getElementById('winner')
    let buttons = [
      [...document.querySelectorAll(".row1 > td > button")],
      [...document.querySelectorAll(".row2 > td > button")],
      [...document.querySelectorAll(".row3 > td > button")],
      [...document.querySelectorAll(".row4 > td > button")],
      [...document.querySelectorAll(".row5 > td > button")],
      [...document.querySelectorAll(".row6 > td > button")],
    ]
    let board = [
      ['red','black','red','black','red','black','red'],
      ['black','red','black','red','black','red','black'],
      ['red','black','red','black','red','black','red'],
      ['black','red','black','red','black','red','black'],
      ['red','black','red','black','red','black','red'],
      ['black','red','black','red','black','red','black'],
    ]

    winner.innerHTML = 'Red Wins'
    buttons.forEach(row => {
      row.forEach(column => {
        column.className = 'red'
        column.disabled = true
      })
    })

    clearBoard({ buttons, board, winner })

    expect(winner.innerHTML).to.equal('')

    expect(board[0][0] && buttons[0][0].disabled && buttons[0][0].classList.contains('red', 'black')).to.equal(false)
    expect(board[0][3] && buttons[0][3].disabled && buttons[0][3].classList.contains('red', 'black')).to.equal(false)
    expect(board[0][6] && buttons[0][6].disabled && buttons[0][6].classList.contains('red', 'black')).to.equal(false)

    expect(board[1][0] && buttons[1][0].disabled && buttons[1][0].classList.contains('red', 'black')).to.equal(false)
    expect(board[1][3] && buttons[1][3].disabled && buttons[1][3].classList.contains('red', 'black')).to.equal(false)
    expect(board[1][6] && buttons[1][6].disabled && buttons[1][6].classList.contains('red', 'black')).to.equal(false)

    expect(board[2][0] && buttons[2][0].disabled && buttons[2][0].classList.contains('red', 'black')).to.equal(false)
    expect(board[2][3] && buttons[2][3].disabled && buttons[2][3].classList.contains('red', 'black')).to.equal(false)
    expect(board[2][6] && buttons[2][6].disabled && buttons[2][6].classList.contains('red', 'black')).to.equal(false)

    expect(board[3][0] && buttons[3][0].disabled && buttons[3][0].classList.contains('red', 'black')).to.equal(false)
    expect(board[3][3] && buttons[3][3].disabled && buttons[3][3].classList.contains('red', 'black')).to.equal(false)
    expect(board[3][6] && buttons[3][6].disabled && buttons[3][6].classList.contains('red', 'black')).to.equal(false)

    expect(board[4][0] && buttons[4][0].disabled && buttons[4][0].classList.contains('red', 'black')).to.equal(false)
    expect(board[4][3] && buttons[4][3].disabled && buttons[4][3].classList.contains('red', 'black')).to.equal(false)
    expect(board[4][6] && buttons[4][6].disabled && buttons[4][6].classList.contains('red', 'black')).to.equal(false)

    expect(board[5][0] && buttons[5][0].disabled && buttons[5][0].classList.contains('red', 'black')).to.equal(false)
    expect(board[5][3] && buttons[5][3].disabled && buttons[5][3].classList.contains('red', 'black')).to.equal(false)
    expect(board[5][6] && buttons[5][6].disabled && buttons[5][6].classList.contains('red', 'black')).to.equal(false)
  })
})
