import { expect } from 'chai'
import addOnclicks from '../modules/add-onclicks'

describe('Add Onclicks', () => {
  it('should add onclicks', () => {
    let clearBoardButton = document.getElementById('clearBoard')
    let clearScoresButton = document.getElementById('clearScores')
    let buttons = [
      [...document.querySelectorAll(".row1 > td > button")],
      [...document.querySelectorAll(".row2 > td > button")],
      [...document.querySelectorAll(".row3 > td > button")],
      [...document.querySelectorAll(".row4 > td > button")],
      [...document.querySelectorAll(".row5 > td > button")],
      [...document.querySelectorAll(".row6 > td > button")],
    ]

    addOnclicks()

    expect(typeof clearBoardButton.onclick).to.equal('function')
    expect(typeof clearScoresButton.onclick).to.equal('function')

    expect(typeof buttons[0][0].onclick).to.equal('function')
    expect(typeof buttons[0][3].onclick).to.equal('function')
    expect(typeof buttons[0][6].onclick).to.equal('function')

    expect(typeof buttons[1][0].onclick).to.equal('function')
    expect(typeof buttons[1][3].onclick).to.equal('function')
    expect(typeof buttons[1][6].onclick).to.equal('function')

    expect(typeof buttons[2][0].onclick).to.equal('function')
    expect(typeof buttons[2][3].onclick).to.equal('function')
    expect(typeof buttons[2][6].onclick).to.equal('function')

    expect(typeof buttons[3][0].onclick).to.equal('function') 
    expect(typeof buttons[3][3].onclick).to.equal('function')
    expect(typeof buttons[3][6].onclick).to.equal('function')

    expect(typeof buttons[4][0].onclick).to.equal('function')
    expect(typeof buttons[4][3].onclick).to.equal('function')
    expect(typeof buttons[4][6].onclick).to.equal('function')

    expect(typeof buttons[5][0].onclick).to.equal('function')
    expect(typeof buttons[5][3].onclick).to.equal('function')
    expect(typeof buttons[5][6].onclick).to.equal('function')

  })
})
