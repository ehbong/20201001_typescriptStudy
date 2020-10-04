"use strict";
/** @format */
function printLabel(labeledObj) {
    console.log("printLabel", labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
// 함수가 정의될때 정의한 최소한의 프로퍼티가 있는지 타입이 맞는지만 검사
printLabel(myObj);
function printLabel2(labeledObj) {
    console.log("printLabel2", labeledObj.label);
}
var myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);
// 함수의 매개변수 () 뒤에 :자료형 은 리턴 타입
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log("mySquare", mySquare);
// 초기 할당
var p1 = { x: 10, y: 20 };
//p1.x = 5; // 오류!
var a = [1, 2, 3, 4];
// 읽기 전용 배열
var ro = a;
// ro[0] = 12; // 오류!
// ro.push(5); // 오류!
// ro.length = 100; // 오류!
// a = ro; // 오류!
// 형변환해서 넣기
a = ro;
// 인스턴스로 함수타입 변수를 선언하고
var mySearch;
// 해당 변수에 함수를 넣음 인터페이스에서 정한 매개변수와, 리턴 타입이 맞지않으면 오류
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// 타입 추론도 가능함.
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
//# sourceMappingURL=interface.js.map