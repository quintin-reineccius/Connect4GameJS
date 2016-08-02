import rowCheck from './row-check'
import columnCheck from './column-check'

export default function checkMove(data){
  if (rowCheck(data)) return console.log('win');
  if (columnCheck(data)) return console.log('win');
}
