export default function columnCheck({num, column, board, currentColor}){
  //has bug if 4 red or black pieces in the-column you win doesnt matter if in a row
  let currentColumnCheck = board
    .map(row => row[column])
    .filter(item => item === currentColor)
    .length

  // console.log(currentColor + ': column: ' + currentColumnCheck);

  if(currentColumnCheck === 4){
    return true
  }

  return false
}
