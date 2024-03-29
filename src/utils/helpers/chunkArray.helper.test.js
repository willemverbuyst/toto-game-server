const { chunkArrayHelper } = require('./index');

describe('chunkArrayHelper', () => {
  test('should return an empty array when no arguments are passed', () => {
    expect(chunkArrayHelper()).toEqual([]);
  });
  test('should return an empty array when 2nd argument is not passed', () => {
    expect(chunkArrayHelper([['x'], ['y']])).toEqual([]);
  });
  test('should return an empty array when passed array is empty', () => {
    expect(chunkArrayHelper([], 2)).toEqual([]);
  });
  test('should chunk an array of 10 values with size of 2', () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const size = 2;
    const chunkedArray = chunkArrayHelper(testArray, size);

    expect(chunkedArray).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ]);
  });
  test('should chunk an array of 10 values with size of 3', () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const size = 3;
    const chunkedArray = chunkArrayHelper(testArray, size);

    expect(chunkedArray).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });
  test('should chunk an array of 1 value with size of 3', () => {
    const testArray = [1];
    const size = 3;
    const chunkedArray = chunkArrayHelper(testArray, size);

    expect(chunkedArray).toEqual([[1]]);
  });
});
