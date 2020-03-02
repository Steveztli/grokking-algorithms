export const knapsack = (size, options) => {
  const grid = initPossibilitiesGrid(options, size);

  grid.map((pos, index) => {
    const currentOption = options[index];
    pos.map((_, columnIndex) => {
      pos[columnIndex] = getMaxValue(grid[index - 1], currentOption, columnIndex);
    });
  });

  return grid[options.length - 1][size - 1];
};

const getMaxValue = (previousValue, currentOption, columnIndex) => {
  return [
    getValueForCurrentOption(currentOption, previousValue, columnIndex),
    getPreviousOptionValue(previousValue, columnIndex)
  ].reduce((one, two) => (one > two ? one : two));
};

const getValueForCurrentOption = (currentOption, previousValue, columnIndex) => {
  if (currentOption.weight <= columnIndex + 1) {
    const unusedSize = columnIndex - currentOption.weight;
    return currentOption.value + getPreviousOptionValue(previousValue, unusedSize);
  }
};

const getPreviousOptionValue = (previousValue, columnIndex) => {
  return !!previousValue ? previousValue[columnIndex] : 0;
};

function initPossibilitiesGrid(options, size) {
  return new Array(options.length).fill(0).map(() => new Array(size).fill(0));
}
