import { expect } from 'chai'
import clearScores from '../modules/clear-scores'
import { buttons, board, winner } from '../modules/config'

describe('Clear Scores', () => {
  it('should clear scores', () => {
    let wins = {
      red: 5,
      black: 8,
      draw: 2,
    }

    clearScores({ buttons, board, winner, wins })

    expect(wins['red']).to.equal(0)
    expect(wins['black']).to.equal(0)
    expect(wins['draw']).to.equal(0)
  })
})
