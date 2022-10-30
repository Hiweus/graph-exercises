/**
 * In this case only using BFS is enough to make works
 * Because the cost to go from one node to his neighbor is constant
 * 
 * In cases where there's different weights between nodes there's a need to sort "queue" based on "cost" 
 * And always get the lowest cost in "queue" to explore first
 * 
 * In this way when the destination is found for the first time is always the shortest path
 * because you went always by the optimal route
 */
function getShortestPathLength(graph, source, destination) {
  const visited = new Set()
  const queue = [{node: source, cost: 0}]
  while(queue.length > 0) {
    const current = queue.pop()
    visited.add(String(current.node))
    if(String(current.node) === String(destination)) {
      return current.cost
    }

    for(const neighbor of graph[current.node]) {
      if(visited.has(String(neighbor))) continue
      queue.unshift({
        node: neighbor,
        cost: current.cost + 1
      })
    }
  }
  
  return -1
}

function makeGraph(edges) {
  const graph = {}
  for(const [x,y] of edges) {
    if(!graph[x]) graph[x] = []
    if(!graph[y]) graph[y] = []
  
    graph[x].push(y)
    graph[y].push(x)
  }
  return graph
}

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]
const graph = makeGraph(edges)
console.log(getShortestPathLength(graph, 'w', 'z'))