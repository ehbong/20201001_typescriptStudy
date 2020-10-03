/** @format */

function printLabel(labeledObj: { label: string }) {
  console.log("printLabel", labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
// 함수가 정의될때 정의한 최소한의 프로퍼티가 있는지 타입이 맞는지만 검사
printLabel(myObj);

// 인터페이스를 사용할때도 동일
interface LabeledValue {
  label: string;
}

function printLabel2(labeledObj: LabeledValue) {
  console.log("printLabel2", labeledObj.label);
}

let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);

// 선택적 프로퍼티
interface SquareConfig {
  color?: string;
  width?: number;
}
// 함수의 매개변수 () 뒤에 :자료형 은 리턴 타입
function createSquare(config: SquareConfig): SquareConfig {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

console.log("mySquare", mySquare);

// 읽기 전용 프로퍼티
interface Point {
  readonly x: number;
  readonly y: number;
}
// 초기 할당
let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // 오류!

let a: number[] = [1, 2, 3, 4];
// 읽기 전용 배열
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // 오류!
// ro.push(5); // 오류!
// ro.length = 100; // 오류!
// a = ro; // 오류!

// 형변환해서 넣기
a = ro as number[];

// 변수는 const 프로퍼티는 readonly
