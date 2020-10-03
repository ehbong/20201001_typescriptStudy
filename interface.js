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
//# sourceMappingURL=interface.js.map