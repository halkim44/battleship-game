class Ship {
  constructor(num) {
    const hitPoint = [];
    this.length = num;

    this.hitsIndex = () => hitPoint;
    
    this.hit = (hitIndex) => {
      if (hitIndex > 0
        && hitIndex <= num
        && hitPoint.indexOf(hitIndex) === -1) {
        hitPoint.push(hitIndex);
        hitPoint.sort();
      }
    };
    
    this.isSunk = () => {
      if (hitPoint.length === num) {
        return true;
      }
      return false;
    };
  }
}

module.exports = Ship;
