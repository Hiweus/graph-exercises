function getConnectedNodes(graph, source) {
  const stack = [source]
  const visited = new Set()

  while(stack.length > 0) {
    const current = stack.pop()
    visited.add(+current)

    for(const neighbor of graph[current]) {
      if(!visited.has(neighbor)) {
        stack.push(neighbor)
      }
    }
  }

  return visited
}

function countConnectedComponents(graph) {
  let total = 0
  const visited = new Set()
  for(const node in graph) {
    if(visited.has(+node)) {
      continue
    }

    const connectedNodes = getConnectedNodes(graph, node)
    connectedNodes.forEach(i => visited.add(+i))
    total++
  }

  return total
}

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

console.log(countConnectedComponents(graph))