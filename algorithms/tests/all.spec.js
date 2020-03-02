import { binarySearch } from "../binary-search";
import { quickSort } from "../quick-sort";
import { breadthFirst } from "../breadth-first";
import { dijkstra } from "../dijkstra";
import { knapsack } from "../dynamic-programming";

describe("Binary search", () => {
  test("works with numbers", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBeTruthy();
  });
  test("works with numbers not in the list", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 13)).toBeFalsy();
  });
  test("works with strings", () => {
    expect(
      binarySearch(
        [
          "abc",
          "baby",
          "catastrophe",
          "delicat",
          "everglow",
          "fancy",
          "gros",
          "humble"
        ],
        "baby"
      )
    ).toBeTruthy();
  });
  test("works with strings not in the list", () => {
    expect(
      binarySearch(
        [
          "abc",
          "baby",
          "catastrophe",
          "delicat",
          "everglow",
          "fancy",
          "gros",
          "humble"
        ],
        "crayon"
      )
    ).toBeFalsy();
  });
});

describe("Quick sort", () => {
  test("numbers", () => {
    expect(quickSort([8, 4, 3, 7, 9, 1, 2, 5, 6])).toStrictEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);
  });
});

describe("Breath first", () => {
  test("finds shortest", () => {
    let connections = [
      { name: "Chaeryeong", selected: false, connexions: ["Yuna"] },
      { name: "Yuna", selected: true, connexions: ["Ryujin"] },
      { name: "Ryujin", selected: true, connexions: [] }
    ];

    expect(breadthFirst(connections[0], connections)).toBe("Yuna");
  });

  test("finds shortest path", () => {
    let connections = [
      {
        name: "Chaeryeong",
        selected: false,
        connexions: ["Lia", "Hwang", "Ryujin"]
      },
      { name: "Lia", selected: false, connexions: ["Yuna"] },
      { name: "Hwang", selected: false, connexions: [] },
      { name: "Ryujin", selected: true, connexions: [] },
      { name: "Yuna", selected: true, connexions: [] }
    ];

    expect(breadthFirst(connections[0], connections)).toStrictEqual("Ryujin");
  });

  test("does not loop forever", () => {
    let connections = [
      { name: "Ryujin", selected: false, connexions: ["Yuna"] },
      { name: "Yuna", selected: false, connexions: ["Ryujin"] }
    ];
    expect(breadthFirst(connections[0], connections)).toBeUndefined();
  });
});

describe("Dijkstra", () => {
  test("finds shortest", () => {
    let connexions = {
      start: [
        { name: "a", weight: 5 },
        { name: "b", weight: 2 }
      ],
      a: [
        { name: "c", weight: 4 },
        { name: "d", weight: 2 }
      ],
      b: [
        { name: "a", weight: 8 },
        { name: "d", weight: 7 }
      ],
      c: [
        { name: "d", weight: 6 },
        { name: "end", weight: 3 }
      ],
      d: [{ name: "end", weight: 1 }],
      end: []
    };

    expect(dijkstra("start", "end", connexions)).toStrictEqual({
      path: "start, a, d, end",
      total: 8
    });
  });
});

describe("Dynamic programming", () => {
  test("solving the knapsack problem", () => {
    let options = [
      { name: "water", weight: 3, value: 10 },
      { name: "book", weight: 1, value: 3 },
      { name: "food", weight: 2, value: 9 },
      { name: "jacket", weight: 2, value: 5 },
      { name: "camera", weight: 1, value: 6 }
    ];

    expect(knapsack(6, options)).toStrictEqual(25);
    //TODO return object list also
  });
});
