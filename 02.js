function hasPath(graph, source, destination) {
  const visited = new Set()
  const stack = [source]
  while(stack.length > 0) {
    const current = stack.pop()
    visited.add(current)

    if(current === destination) {
      return true
    }

    for(const neighbor of graph[current]) {
      if(!visited.has(neighbor)) {
        stack.push(neighbor)
      }
    }
  }

  return false
}


const graph = {
  i: ['j', 'k'],
  j: ['i'],
  k: ['i', 'm', 'l'],
  m: ['k'],
  l: ['k'],
  o: ['n'],
  n: ['o'],
}

console.log(hasPath(graph, 'j', 'm'))