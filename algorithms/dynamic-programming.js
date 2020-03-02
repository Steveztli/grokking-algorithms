export const knapsack = (size, options) => {
  const grid = initPossibilitiesGrid(options, size);

  grid.forEach((pos, index) => {
    const currentOption = options[index];
    pos.forEach((_, columnIndex) => {
        const maxValue = getMaxValue(grid[index - 1], currentOption, columnIndex);
      pos[columnIndex] = {picks: maxValue.picks, value: maxValue.value}
    });
  });

  return grid[options.length - 1][size - 1];
};

const getMaxValue = (previousValue, currentOption, columnIndex) => {
  return [
    getValueForCurrentOption(currentOption, previousValue, columnIndex),
    getPreviousOptionValue(previousValue, columnIndex)
  ].reduce((one, two) =>  {
   return   (one.value > two.value ? one : two)
  });
};

const getValueForCurrentOption = (currentOption, previousValue, columnIndex) => {
  if (currentOption.weight <= columnIndex + 1) {
    const unusedSize = columnIndex - currentOption.weight;
    const prevOptionValue = getPreviousOptionValue(previousValue, unusedSize);
    return {picks: [currentOption.name].concat(prevOptionValue.picks), value: currentOption.value + prevOptionValue.value }
  }
  return {picks: [], value: 0}
};

const getPreviousOptionValue = (previousValue, columnIndex) => {
  return previousValue != undefined && previousValue[columnIndex] != undefined ? previousValue[columnIndex] : {picks: [], value: 0};
};

function initPossibilitiesGrid(options, size) {
  return new Array(options.length).fill(0).map(() => new Array(size).fill(0));
}
