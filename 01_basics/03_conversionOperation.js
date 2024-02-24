let score = "mohit";

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
//console.log(valueInNumber); // it will pring NaN but if we initialize the score with 2, here it will print 2

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "mohit";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "mohit" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// // *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " mohit";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

//console.log(((3 + 4) * 5) % 3);

// console.log(+true);   //1
// console.log(+false) //0
// console.log(+"");  //0
// console.log(+"f");  //NaN

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter; // or this gameCounter++ it wont affect the output
//console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
