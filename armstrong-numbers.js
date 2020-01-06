//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  if (String(number).length === 1) {
    return true;
  } else if (String(number).length === 2) {
    return false;
  } else {
    const numbers = String(number).split('');
    const sum = numbers.reduce((total, integer) => total + Math.pow(Number(integer), String(number).length), 0);
    return sum === number
  }
};
