/**
 * 타입스크립트의 기본 타입 (타입스크립트는 소문자로 시작하고, 자바스크립트는 대문자로 시작한다) 
 * any : 자바스크립트와 호환성 제공
 * number  -> Number : 수치
 * boolean -> Boolean: 불리언
 * string  -> String : 문자열
 * object  -> Object : 객체 타입
 * undefined         : ts에서는 타입, 변수값 초기화 하지 않은 경우
*/


// ES5
var a = 'hi'

// ESNext
let b = 100
const c = 'hello'

// ts
// 타입 주석(type annotation) 추가
// let or const 변수명[:타입주석] = 초기값 
let t1:number = 5
let t2:boolean = true 
let t3:string = 'hello'
let t4:object = {}
console.log(a, b, c, t1, t2, t3, t4)

// t1은 수치만 값으로 받을 수 있기 떄문에 에러가 난다
// 이런 부분들이 명확성을 제시할 수 있으며, -> 의도를 정확하게 알 수 있다. -> 이것이 ts를 사용하는 이유이다.
// t1 = false 

// 5. 타입 추론 
// js와 호한을 위해서 타입 주석을 생략할 수 있다.
// 컴파일러가 초기값을 보고 타입을 추론한다
let i1 = 1; 

// 6. any
let x: any = 0;
x = 'hi'
x = true 
// ts를 사용할 이유가 ?...

// 7.undefined 
let y: undefined = undefined 
let y2: undefined
let y3: number
let y4: object 
let y5: any
let y6: boolean 
let y7: string 
console.log(y, y2, y5)
// number, object 변수는 사용하기 전에 반드시 초기화 한다. 
// console.log(y3, y4, y6, y7) 

// 8. 계층도
// 최상위: any


// 값형: number, boolean, string
// 객체형: object > interface, class, ...

// 최하위: undefined
// 어떤 타입도 undefined를 자식 타입으로 본다 => 어떤 타입도 undefined 체킹시 오류가 없다.


// 상수: 값 변경 불가
const MAX_LEN: number = 1000 