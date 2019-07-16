const { isCoorFormat,turnToCoorString } = require('../src/scripts/utils');

describe('utils', () => {
  it('checks coordinate Format', () => {
    expect(isCoorFormat('2j')).toEqual(true);
    expect(isCoorFormat('2J')).toEqual(true);
    expect(isCoorFormat('10B')).toEqual(true);
    expect(isCoorFormat('12j')).toEqual(false);
    expect(isCoorFormat('10Q')).toEqual(false);
    expect(isCoorFormat(12)).toEqual(false);
    expect(isCoorFormat(null)).toEqual(false);
    expect(isCoorFormat(undefined)).toEqual(false);
  });

  it('turnToCoorString method should turn and x and y coordinate to valid grid format', () => {
    expect(turnToCoorString(6, 3)).toEqual('6C');
    expect(turnToCoorString(6, 13)).toEqual(undefined);
    expect(turnToCoorString(77, 345)).toEqual(undefined);
    expect(turnToCoorString(10, 1)).toEqual('10A');
    expect(turnToCoorString(9, 7)).toEqual('9G');
  });
});
