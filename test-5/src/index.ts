/**
 * 함수 표현식 
 *  - JS = 함수형 언어 스킴 (scheme) + 프로토타입 기반 객체 지향 언어 self
 *  - 이것을 모델로 만든 언어 
 *  - TS는 이 특성을 모든 계승 
 *  - 함수 = Function class의 인스턴스이다.
 */

// 1. 함수는 객체이다
let add = new Function( 'a', 'b', 'return a + b' )
console.log( add(1, 2) )
// 이렇게 만들어도 된다. 함수의 원형을 고찰 

// 2. 함수 표현식 : function expression 
// 손쉽게 함수를 구현하자 
// 리터럴, 연산, 변수, 함수 호출 등등 다양한 기능을 복합적으록 구성 
let add2 = function (a:number, b:number) {
    return a + b
}
console.log( add2(1, 2))

// 3. 계산법 
// 조급한 (eager) 계산법 (evaluation) => 1 + 2 => 3으로 바로 처리 
// 느긋한 (lazy) 계산법 (evaluation) => function add(a, b) {return a + b} => a, b가 무엇으로 들어올지 모르기 때문에 바로 연산 불가 
// 이런 계산법들이 함수에 그대로 적용되어서 처리 -> 함수는 느긋한 계산법이 적용


// 4. 익명함수, 함수에 이름이 없다 (Anonymous function) 
// 다른 요소의 부속, 콜백함수, 등등... 하나의 요소처럼 사용
let add3 = function (a: number, b: number) {
    return a + b 
}

// 5. 표준 함수 
function add4(a: number, b: number): number {
    return a + b
}

//6. 함수를 변수로 받을 때 주로 const (상수) 사용
// const 권장, 동상 바뀔일이 없다.  
let f1 = () => {} 
const f2 = () => {} 