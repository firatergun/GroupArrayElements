const { groupArrayElements } = require('./groupArrayElements');

test('Should split [1,2,3,4,5] into 4 sub-arrays', () => {
    const result = groupArrayElements([1, 2, 3, 4, 5], 4);
    expect(result).toHaveLength(4);
});

test('Should split [1,2,3,4,5,6,7,8,9,10] into 3 sub-arrays', () => {
    const expected = [ [ 1, 2, 3, 4 ], [ 5, 6, 7 ], [ 8, 9, 10 ] ];
    const result = groupArrayElements([1,2,3,4,5,6,7,8,9,10], 3);
    expect(result).toEqual(expected);
    expect(result).toHaveLength(3);
});

test('Should split [1,2,3,4,5] into 5 sub-arrays', () => {
    const result = groupArrayElements([1, 2, 3, 4, 5], 5);
    expect(result).toHaveLength(5);
});

test('Should split [1,2,3,4] into 3 sub-arrays', () => {
    const expected = [ [ 1, 2 ], [ 3 ], [ 4 ] ];
    const result = groupArrayElements([1, 2, 3, 4], 3);
    expect(result).toEqual(expected);
    expect(result).not.toHaveLength(4);
});

test('Should return undefined for empty array', () => {
    const result = groupArrayElements([], 3);
    expect(result).toBeUndefined();
});

test('Should return undefined for N=0 or N=-1', () => {
    const resultZero = groupArrayElements([1, 2, 3, 4, 5, 6, 7], 0);
    const resultNegative = groupArrayElements([1, 2, 3, 4, 5, 6, 7], -1);

    expect(resultZero).toBeUndefined();
    expect(resultNegative).toBeUndefined();
});

test('Should default to N=1 for empty N', () => {
    const expected = [[1, 2, 3, 4, 5, 6, 7]];
    const result = groupArrayElements([1, 2, 3, 4, 5, 6, 7]);
    expect(result).toEqual(expected);
});