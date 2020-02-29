import { binarySearch } from './binary-search';
import { quickSort } from './quick-sort';
import { breadthFirst } from './breadth-first';

describe('Binary search', () => {
  test('works with numbers', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9], 7)).toBeTruthy();
  });
  test('works with numbers not in the list', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9], 13)).toBeFalsy();
  });
  test('works with strings', () => {
    expect(binarySearch(["abc","baby","catastrophe","delicat","everglow","fancy","gros","humble"], "baby")).toBeTruthy();
  });
  test('works with strings not in the list', () => {
    expect(binarySearch(["abc","baby","catastrophe","delicat","everglow","fancy","gros","humble"], "crayon")).toBeFalsy();
  });
});

describe('Quick sort', () => {
  test('numbers', () => {
    expect(quickSort([8,4,3,7,9,1,2,5,6])).toStrictEqual([1,2,3,4,5,6,7,8,9]);
  });
});

describe('Breath first', () => {
  test('finds shortest with correct number of steps', () => {
    let connections = [
      {name: 'Itzy', val: false, links: ['Red Velvet']},
      {name: 'Red Velvet', val: true, links: []}
    ]

    expect(breadthFirst(connections[0], connections)).toStrictEqual({"nodes": "Itzy, Red Velvet", "steps": 2});
  });

  test('finds shortest path', () => {
    let connections = [
      {name: 'Itzy', val: false, links: ['Everglow']},
      {name: 'Red Velvet', val: true, links: []},
      {name: 'Momoland', val: false, links: ['Red Velvet']},
      {name: 'Everglow', val: false, links: ['BlackPink']},
      {name: 'BlackPink', val: false, links: ['Gidle']},
      {name: 'Gidle', val: false, links: ['Red Velvet', 'Momoland']}
    ]

    expect(breadthFirst(connections[0], connections)).toStrictEqual({"nodes": "Itzy, Everglow, BlackPink, Gidle, Red Velvet", "steps": 5});
  });

  test('finds shortest path of all possibilities', () => {
    let connections = [
      {name: 'Itzy', val: false, links: ['Everglow', 'Momoland']},
      {name: 'Red Velvet', val: true, links: []},
      {name: 'Momoland', val: false, links: ['Red Velvet']},
      {name: 'Everglow', val: false, links: ['BlackPink']},
      {name: 'BlackPink', val: false, links: ['Gidle']},
      {name: 'Gidle', val: false, links: ['Red Velvet', 'Momoland']}
    ]

    expect(breadthFirst(connections[0], connections)).toStrictEqual({"nodes": "Itzy, Momoland, Red Velvet", "steps": 3});
  });
});