//return object with:
//average = totalSum / array.length
//min = smallest number
//max = largest number
//length = array.length

function analyzeArray(array) {
  const object = {
    average: function (array) {
      let sum = 0;
      array.forEach((number) => {
        sum += number;
      });
    },
  };

  return object;
}
