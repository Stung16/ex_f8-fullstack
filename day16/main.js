// Bài 1
var a= 16;
var b= 6;
 a = a+b;//a=16+6=22
 b = a-b;//b=22-6=16
 a= a-b;
 console.log(`a=${a},b=${b}`)
//  bài 2
var S=10+20+(5**10)/2;
console.log(S);
// Bài 3
var a= 2;
var b=3;
var c=4;
console.log(Math.max(a,b,c));
// bài 4
var a= -1;
var b= 2;
var c=a*b > 0 ? console.log("2 số cùng dấu"): console.log("2 số trái dấu");
// bài 5
var a=10,
    b=6,
    c=4,
     d;
    if(a>=b){
        d=a;
        a=b;
        b=d;
    }
    if(a>=c){
        d=a;
        a=c;
        c=d;
    }
    if(b>=c){
        d=b;
        b=c;
        c=d;
    }
console.log(`a=${a},b=${b},c=${c}`)