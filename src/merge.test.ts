import merge from "./merge";

describe('merge function test', () => {
  test('merges three arrays correctly', () => {
    const a = [1, 4, 7];
    const b = [2, 5, 8];
    const c = [9, 6, 3];
    expect(merge(a, b, c)).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  test('handles different lengths', () => {
    const a = [1, 10];
    const b = [2, 3, 4, 5];
    const c = [6];
    expect(merge(a, b, c)).toEqual([1,2,3,4,5,6,10]);
  });

  test('handles empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [1, 2], [])).toEqual([1, 2]);
    expect(merge([], [], [3, 2, 1])).toEqual([1, 2, 3]);
  });

  test('covers v1, v2 and v3 branch selection', () => {
    const a = [1];
    const b = [3];
    const c = [2];
    expect(merge(a, b, c)).toEqual([1,2,3]);
  });

  test('handles duplicates across all arrays', () => {
    const a = [1, 2];
    const b = [2, 2];
    const c = [3, 2];
    expect(merge(a, b, c)).toEqual([1,2,2,2,2,3]);
  });

  test('handles negative numbers', () => {
    const a = [-5, -1];
    const b = [-4, 0];
    const c = [2, -1];

    expect(merge(a, b, c)).toEqual([-5,-4,-1,-1,0,2]);
  });
});
