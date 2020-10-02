"use strict";
/** @format */
console.log("hello");
// 불리언
var isDone = false;
// 숫자
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// 문자열
var color = "blue";
color = "red";
// color = 111; 오류
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month.";
// 배열
var list = [1, 2, 3];
var arrayList = [1, 2, 3];
// 튜플
// 튜플 타입으로 선언
var x;
// 초기화
x = ["hello", 10]; // 성공
// 잘못된 초기화
// x = [10, "hello"] // 오류
console.log(x[0].substring(1)); // 성공
// console.log(x[1].substring(1)) // number 속성이기 때문에 오류
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// any 와 Object는 비슷하지만 같지 않다.
//notSure.ifItExists(); // 성공, ifItExists 는 런타임엔 존재할 것입니다.
//notSure.toFixed(); // 성공, toFixed는 존재합니다. (하지만 컴파일러는 검사하지 않음)
//let prettySure: Object = 4;
//prettySure.toFixed(); // 오류: 프로퍼티 'toFixed'는 'Object'에 존재하지 않습니다.
var notSureList = [1, true, "free"];
notSureList[1] = 100;
// Never
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message) {
    throw new Error(message);
}
// Object
// object는 원시 타입이 아닌 타입을 나타냅니다. 예를 들어, number, string, boolean, bigint, symbol, null, 또는 undefined 가 아닌 나머지를 의미합니다.
function create(o) {
    console.log(o);
}
create({ prop: 0 }); // 성공
create(null); // 성공
// create(42); // 오류
// create("string"); // 오류
// create(false); // 오류
// create(undefined); // 오류
// 형변환
var someValue = "this is a string";
var strLength = someValue.length;
strLength = someValue.length;
//# sourceMappingURL=index.js.map