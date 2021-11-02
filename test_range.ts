import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { range } from "./range.ts";

const tests = [
  () => assertEquals(range(1, 2), [1, 2]),
  () => assertEquals(range("a", "b"), ["a", "b"]),
  () => assertEquals(range("A", "C"), ["A", "B", "C"]),
  () => assertEquals(range("A", "D"), ["A", "B", "C", "D"]),
  () => assertEquals(range("A", "D", 2), ["A", "C"]),
  () => assertEquals(range("A", "F", 3), ["A", "D"]),
  () => assertEquals(range(1, 10, 2), [1, 3, 5, 7, 9]),
];

for (const test of tests) {
  Deno.test(test.toString(), test);
}
