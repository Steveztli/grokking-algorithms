import { myBreadthFirst } from '../my-breadth-first';

describe('My smart breath first', () => {
    test('finds shortest with correct number of steps', () => {
      let connections = [
        {name: 'Itzy', val: false, links: ['Red Velvet']},
        {name: 'Red Velvet', val: true, links: []}
      ]
  
      expect(myBreadthFirst(connections[0], connections)).toStrictEqual({"nodes": "Itzy, Red Velvet", "steps": 2});
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
  
      expect(myBreadthFirst(connections[0], connections)).toStrictEqual({"nodes": "Itzy, Everglow, BlackPink, Gidle, Red Velvet", "steps": 5});
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
  
      expect(myBreadthFirst(connections[0], connections)).toStrictEqual({"nodes": "Itzy, Momoland, Red Velvet", "steps": 3});
    });
  });