module.exports = {
  buttons: [
    [...document.querySelectorAll(".row1 > td > button")],
    [...document.querySelectorAll(".row2 > td > button")],
    [...document.querySelectorAll(".row3 > td > button")],
    [...document.querySelectorAll(".row4 > td > button")],
    [...document.querySelectorAll(".row5 > td > button")],
    [...document.querySelectorAll(".row6 > td > button")],
  ],
  board: [
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
  ],
  wins: {
    red: 0,
    black: 0,
    draw: 0,
  },
  winner: document.getElementById('winner'),
  whosTurn: document.getElementById('whos-turn'),
}
