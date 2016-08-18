import { expect } from 'chai'
import userMove from '../modules/user-move'
import { buttons, board, whosTurn } from '../modules/config'

describe('userMove', () => {
  it('first move: should drop red game piece to the bottom of the board if a user clicks the top row', () => {
    userMove(0, 0)

    expect(buttons[5][0].classList.contains('red')).to.equal(true)
    expect(buttons[5][0].disabled).to.equal(true)
    expect(board[5][0]).to.equal('red')
    expect(whosTurn.innerHTML).to.equal('Black\'s Turn')
  })

  it('second move: should drop black game piece in the middle of the bottom row if a user clicks the 4th row', () => {
    userMove(3, 3)

    expect(buttons[5][3].classList.contains('black')).to.equal(true)
    expect(buttons[5][3].disabled).to.equal(true)
    expect(board[5][3]).to.equal('black')
    expect(whosTurn.innerHTML).to.equal('Red\'s Turn')
  })

  it('third move: should drop red game piece on top of are black game piece in the middle of the bottom row if a user clicks the 4rd row', () => {
    userMove(3, 3)

    expect(buttons[4][3].classList.contains('red')).to.equal(true)
    expect(buttons[4][3].disabled).to.equal(true)
    expect(board[4][3]).to.equal('red')
    expect(whosTurn.innerHTML).to.equal('Black\'s Turn')
  })
})
