function getAllConnectedNodes(graph, current, visited) {
  if(visited.has(String(current))) return 0
  visited.add(String(current))

  let sum = 1
  for(const neighbor of graph[current]) {
    sum += getAllConnectedNodes(graph, neighbor, visited)
  }

  return sum
}

function countLargestComponent(graph) {
  const visited = new Set()
  let bigger = 0
  for(const node in graph) {
    if(visited.has(String(node))) continue
    
    const currentCount = getAllConnectedNodes(graph, String(node), visited)
    
    if(currentCount > bigger) {
      bigger = currentCount
    }


  }
  return bigger
}



const graph = {
  0: [1, 5, 8],
  1: [0],
  5: [0, 8],
  8: [0, 5],

  4: [2, 3],
  2: [4, 3],
  3: [2, 4],
}

console.log(countLargestComponent(graph))