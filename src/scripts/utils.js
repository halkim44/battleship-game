/* eslint-disable no-param-reassign */
const isCoorFormat = str => /^([1-9]|10)[A-J]$/i.test(str);

function turnToCoorString(x, y) {
  if (y > 0 && y < 11) {
    return x + String.fromCharCode(64 + y);
  }
  return undefined;
}

module.exports = {
  isCoorFormat,
  turnToCoorString,
};