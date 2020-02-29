export const myBreadthFirst = (startNode, connexions) => {
    return recursiveBreathFirst(startNode, connexions, 0);
  };
  
  const recursiveBreathFirst = (startNode, connexions, steps) => {
    if (startNode.val) {
      return { steps: ++steps, nodes: startNode.name };
    }
  
    let result = startNode.links.map(band => recursiveBreathFirst(getBand(connexions, band), connexions, steps))
                                .reduce(minSteps);
  
    result.nodes = startNode.name + ", " + result.nodes;
    result.steps = ++result.steps;
  
    return result
  };
  
  const getBand = (connexions, band) => {
    return connexions.filter(val => val.name === band)[0];
  };
  
  const minSteps = (node, current) => {
    return node.steps < current.steps ? node : current;
  }
  