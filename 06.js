function getNeighbors(grid, row, col) {
  return [
    { row: row+1, col: col },
    { row: row-1, col: col },
    { row: row, col: col+1 },
    { row: row, col: col-1 },
  ].filter(position => {
    if(position.col < 0 || position.row < 0) return false
    if(position.row >= grid.length || position.col >= grid[position.row].length) return false

    return true
  })
}

function getConnectedLand(grid, row, col) {
  const visited = new Set()
  const stack = [{row, col}]
  while(stack.length > 0) {
    const current = stack.pop()
    const positionKey = `${current.row}-${current.col}`
    visited.add(positionKey)
    for(const neighbor of getNeighbors(grid, current.row, current.col)) {
      
      const isLand = grid[neighbor.row][neighbor.col] === 'L'
      if(!isLand) continue

      const positionKeyNeighbor = `${neighbor.row}-${neighbor.col}`
      if(visited.has(positionKeyNeighbor)) continue

      stack.push(neighbor)
    }
  }

  return visited
}

function islandCount(grid) {
  const visited = new Set()
  let count = 0
  for(let row=0; row<grid.length;row++) {
    for(let col=0; col<grid[row].length;col++) {
      
      const positionKey = `${row}-${col}`
      if(visited.has(positionKey)) continue

      const isLand = grid[row][col] === 'L'
      if(isLand) {
        const connectedLands = getConnectedLand(grid, row, col)
        connectedLands.forEach(key => visited.add(key))
        count++
      }
    }
  }
  return count
}





const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]

console.log(islandCount(grid))