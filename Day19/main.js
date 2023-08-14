var numbers = [-2, 3, 6, 16, 5, -9];

// BÀI1
var getNumberMaxMin = function (arr) {
  let maxValue = arr.reduce(function (max, number) {
    return max < number ? number : max;
  });

  let minValue = arr.reduce(function (min, number) {
    return min > number ? number : min;
  });
  console.log(`Giá trị lớn nhất trong mảng là: ${maxValue}`);
  console.log(`Giá trị nhỏ nhất trong mảng là: ${minValue}`);
};
getNumberMaxMin(numbers);

// BÀI 2
var TBC = function (arr) {
  let sum = 0,
    count = 0;
  numbers.forEach(function (value) {
    if (check(value)) {
      sum += value;
    }
  });
  function check(value) {
    if (value < 2) {
      return false;
    }
    for (var i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    count++;
    return true;
  }
  return sum / count;
};
console.log(TBC(numbers));

// BÀI3

var newArr = [1, 6, 2, 10, 1, 2, 16];

function getArr(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
    // console.log(index,item);
  });
}
console.log(getArr(newArr));

// BÀI4
var customrs = [1, 5, 3, 9, 4, 16];
var element = 2;

function addElement(arr) {
    var newCustomrs = [];
    newCustomrs[newCustomrs.length] = element;
    for (var index in customrs) {
      newCustomrs[newCustomrs.length] = customrs[index];
    }
    return newCustomrs.sort(function (a, b) {
      return a - b;
    });
}
console.log(addElement(customrs));
