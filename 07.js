function exploreLand(grid, row, col, visited) {
  if(row < 0 || row >= grid.length) return 0
  if(col < 0 || col >= grid[row].length) return 0

  if(grid[row][col] !== 'L') return 0

  const positionKey = `${row}-${col}`
  if(visited.has(positionKey)) return 0

  visited.add(positionKey)

  let size = 1

  size += exploreLand(grid, row+1, col, visited)
  size += exploreLand(grid, row-1, col, visited)
  size += exploreLand(grid, row, col+1, visited)
  size += exploreLand(grid, row, col-1, visited)

  return size
}

function minimumIsland(grid) {
  let smallerLand = Infinity
  const visited = new Set()
  for(let row = 0; row < grid.length; row ++) {
    for(let col = 0; col < grid[row].length; col ++) {
      const isLand = grid[row][col] === 'L'
      if(isLand) {
        const sizeOfLand = exploreLand(grid, row, col, visited)
        if(sizeOfLand > 0 && smallerLand > sizeOfLand) {
          smallerLand = sizeOfLand
        }
      }
    } 
  }
  return smallerLand
}


const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W']
]
console.log(minimumIsland(grid))