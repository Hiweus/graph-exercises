function hasPath(graph, origin, target) {
  const stack = [origin]
  while(stack.length > 0) {
    const current = stack.pop()

    if(current === target) {
      return true
    }

    for(const neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }

  return false
}


const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

console.log(hasPath(graph, 'f', 'k'))