export const dijkstra = (start, end, connexions) => {
  let calculatedList = initCalculatedList(connexions);
  let processedList = [];

  while (processedList.length < calculatedList.length) {
    let node = findCheapestNode(calculatedList, processedList);
    calculatedList = updatesNeighbours(node, connexions, calculatedList);
    processedList.push(node.name);
  }

  let pathConstructionNode = end;
  let path = [];
  let totalWeight = 0;

  while (pathConstructionNode != undefined) {
    path.push(pathConstructionNode);
    if (pathConstructionNode != start) {
      totalWeight += getNode(calculatedList, pathConstructionNode).weight;
    }
    pathConstructionNode = getNode(calculatedList, pathConstructionNode).parent;
  }

  return { path: path.reverse().join(", "), total: totalWeight };
};

const updatesNeighbours = (parent, connexions, calculatedList) => {
  connexions[parent.name].forEach(val => {
    let node = getNode(calculatedList, val.name);
    if (node.weight > val.weight) {
      node.weight = val.weight;
      node.parent = parent.name;
    }
  });
  return calculatedList;
};

const getNode = (calculatedList, node) => {
  return calculatedList.filter(val => val.name == node)[0];
};

const findCheapestNode = (weightList, processedList) => {
  if (processedList.length == 0) {
    return weightList[0];
  }
  return weightList
    .filter(val => !processedList.includes(val.name))
    .reduce(minWeight());
};

function minWeight() {
  return (current, node) => {
    return current.weight < node.weight ? current : node;
  };
}

const initCalculatedList = connexions => {
  let map = [];
  Object.keys(connexions).forEach(val => {
    map.push({ name: val, weight: Infinity, parent: undefined });
  });
  return map;
};
