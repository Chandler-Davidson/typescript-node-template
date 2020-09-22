import { largeGroupPositions } from "./index";

// test("Test 1", () => {
//   expect(largeGroupPositions('abbxxxxzzy')).toStrictEqual([[3,6]]);
// });

// test("Test 2", () => {
//   expect(largeGroupPositions("abc")).toStrictEqual([]);
// });

// test("Test 3", () => {
//   expect(largeGroupPositions('abcdddeeeeaabbbcd')).toStrictEqual([[3,5],[6,9],[12,14]]);
// });

test("Test 4", () => {
  expect(largeGroupPositions('aaa')).toStrictEqual([[0, 2]]);
});
