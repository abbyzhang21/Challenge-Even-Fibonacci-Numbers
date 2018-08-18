/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  var sum = 0;
  let arr = [1, 2];
  let i = 0;
  while (arr[i] + arr[i + 1] <= maxFibValue) {
    // arr[i] = arr[i - 1] + arr[i - 2];
    arr.push(arr[i] + arr[i + 1]);
    i++;
  }
  sum = arr.filter(elem => elem % 2 === 0).reduce((acc, sum) => {
    return acc + sum;
  });

  return sum;
}
// console.log(_sumFibs(10));

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;

  //define your base case, validate your input

  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
