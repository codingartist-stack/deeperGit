//return object with:
//average = totalSum / array.length
//min = smallest number
//max = largest number
//length = array.length

function analyze(array) {
  let sum = 0;
  const sortedArray = array.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    sum += sortedArray[i];
  }

  const average = sum / array.length;
  const min = sortedArray[0];
  const max = sortedArray[sortedArray.length - 1];

  const length = array.length;

  const object = {
    average,
    min,
    max,
    length,
  };

  console.log(object);
  return object;
}

module.exports = analyze;
