// Bài 1
var toTal = 0;
var far = 122;
var money;
if (far < 0) {
  console.log("nhập lại");
} else {
  if (far > 0 && far <= 1) {
    money = 15000;
  } else if (far > 1 && far <= 5) {
    money = 13500;
  } else if (far > 5) {
    money = 11000;
  } else if (far > 120) {
    money = (11000 * 10) / 100;
  }
  toTal = far * money;
  console.log(`Số tiền đi ${far}km là ${toTal}đ`);
}
// bài 2

var kWh = 16;
var price = 0;
var toTalElectric;

if (kWh < 0) {
  console.log(`số ${kWh} không hợp lệ`);
} else {
  if (kWh > 0 && kWh <= 50) {
    price = 1.678;
    toTalElectric = price * kWh;
  } else if (kWh >= 51 && kWh <= 100) {
    price = 1.734;
    toTalElectric = 1.678 * 50 + price * (kWh - 50);
  } else if (kWh >= 101 && kWh <= 200) {
    price = 2.014;
    toTalElectric = 50 * 1678 + 50 * 1734 + price * (kWh - 100);
  } else if (kWh >= 201 && kWh <= 300) {
    price = 2.536;
    toTalElectric = 50 * 1678 + 50 * 1734 + 100 * 2014 + price * (kWh - 200);
  } else if (kWh >= 301 && kWh <= 400) {
    price = 2.834;
    toTalElectric =
      50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + price * (kWh - 300);
  } else {
    price = 2.927;
    toTalElectric =
      50 * 1678 +
      50 * 1734 +
      100 * 2014 +
      100 * 2536 +
      100 * 2.834 +
      price * (kWh - 400);
  }
  console.log(`Tổng số tiền phải đóng là ${toTalElectric}đ`);
}
// bài 3
var n = 5;
var sum = 0;
for (var i = 1; i <= n; i++) {
  sum += i * (i + 1);
}

console.log(sum);
// Bài 4

function check(number) {
  // var checkk = true;
  if (number <= 1) {
    console.log(`${number} không la so nguyen to`);
    return false;
  } else {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        console.log(`${number} k la so nguyen to`);
        return false;
      }
    }
  }
  if (number) {
    console.log(`${number} la so nguyen to`);
  }
}
check(1);

// bài 5
function draw(n) {
  var start = 1;
  for (var i = 1; i <= n; i++) {
    var prinf = "";
    for (var j = 1; j <= i; j++) {
      prinf += start + " ";
      start++;
    }
    console.log(prinf);
  }
}
draw(6);

// bài 6
var rowChess = 8;
function drawChess(n) {
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0)) {
        document.write(
          `<span style ="display: inline-block; width: 50px; height: 50px; background: #000"></span>`
        );
      } else {  
        document.write(
          `<span style ="display:inline-block; width:50px;height:50px"></span>`
        );
      }
    }
    document.write("<br/>");
  }
}

drawChess(8);

// bài 8
var n=5;
var x=1;
var toTalVariable=0;
for(var i =1; i<=n;i++){
    x /=i;
    toTalVariable += x;
}
console.log(toTalVariable)
