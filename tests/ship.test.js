const Ship = require('../src/scripts/ship');

describe('ship', () => {
  it('has length properties', () => {
    const testShip = new Ship(2);
    const testShip2 = new Ship(3);
    const testShip3 = new Ship(4);
    const testShip4 = new Ship(5);
    expect(testShip.length).toEqual(2);
    expect(testShip2.length).toEqual(3);
    expect(testShip3.length).toEqual(4);
    expect(testShip4.length).toEqual(5);
  });

  it('has hit point array', () => {
    const testShip = new Ship(5);
    expect(testShip.hitsIndex()).toEqual([]);
  });

  it('has a hit method', () => {
    const testShip = new Ship(2);
    testShip.hit(1);
    expect(testShip.hitsIndex()).toEqual([1]);
    const testShip2 = new Ship(5);
    testShip2.hit(2);
    testShip2.hit(5);
    testShip2.hit(5);
    testShip2.hit(1);
    testShip2.hit(4);
    testShip2.hit(4);
    testShip2.hit(4);
    testShip2.hit(3);
    expect(testShip2.hitsIndex()).toEqual([1, 2, 3, 4, 5]);

    const testShip3 = new Ship(4);
    testShip3.hit(1);
    testShip3.hit(3);
    testShip3.hit(4);
    expect(testShip3.hitsIndex()).toEqual([1, 3, 4]);
  });

  it('no change when hit method takes a illegal parameter', () => {
    const testShip = new Ship(2);
    testShip.hit(5);
    testShip.hit(15);
    testShip.hit(-25);
    testShip.hit(null);
    testShip.hit();
    expect(testShip.hitsIndex()).toEqual([]);
  });

  it('has isSunk() method', () => {
    const testShip = new Ship(3);
    testShip.hit(1);
    testShip.hit(2);
    testShip.hit(3);
    expect(testShip.isSunk()).toEqual(true);

    const testShip2 = new Ship(4);
    testShip2.hit(1);
    testShip2.hit(3);
    expect(testShip2.isSunk()).toEqual(false);
  });
});
