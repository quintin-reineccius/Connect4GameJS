export default function rowCheck({num, column, board, currentColor}){
  //has bug if 4 red or black pieces in the-column you win doesnt matter if in a row
  let currentRowCheck = board[num]
    .filter(value => value === currentColor)
    .length

  console.log(currentColor +': row: ' + currentRowCheck);

  if(currentRowCheck === 4){
    return true
  }

  return false
}
