/**
 * ESNext
 * - function이 아닌 => (화살표) 함수 사용 
 * 
 * TS
 * - 화살표 함수 뒤쪽에 { } 이 부분을 유연/ ESNexxt 공통
 * 
 * 함수 내부 
 * - 실행문 : execution statement
 *      - return을 표시, 무엇을 반환하는지 명확하게 표현 
 * - 표현식문: expression statement
 *      - return을 생략, 구체적으로 표현하지는 않는다. 
 * - ES5: 실행문 지향적
 * - ESNext, TS: 실행문, 표현식문 동시 지향적
 *      - 다중 패러다임 언어 
 */

// 1. 실행문 
function isRun( a: number, b: number):boolean {
    return a > b 
}

// 1-1. ESNext, TS 스타일, 화살표 함수 구현, return 포함, 익명함수 => 실행문 구현 
const isRun2 = ( a:number, b:number ): boolean => {
    return a > b
}

// 1-2. ESNext, TS 스타일, 화살표 함수 구현,익명함수 => 표현식으로 구현 
const isRun3 = ( a:number, b:number ): boolean => a > b

/**
 * 함수 표현식 = 함수 선언부 + 함수 구현부 
 * - parameter : 파라미터, 매개변수 => 함수를 정의할때 표현한다. 
 * - argument : 인자, 인수  => 함수를 호출할때 전달하는 값을 표현한다. 
 * - 혼용해도 관계없음 
 */

// 2. JS 함수 형태 
//      2-1. 표준함수
function a() {
    console.log(1)
}
//      2-2. 화살표함수 
const b = () => {
    console.log(2)
}

a() 
b() 


// 3. TS 에서는 함수는 타입 주석을 추가한다. (ES5, ESNExt 대비)
// 표준함수
function a1(x:number, y:number) {
    console.log(x + y)
}

// 화살표 함수
const b1 = (x:number, y:number) => {
    console.log(x + y)
}

a1(1, 2)
b1(1, 2)

//4. void 타입
// 값을 반환하지 않는다 
function add5(x:number, y:number):void {
    console.log(x + y)
}

// 5. 함수 시그니처(function signature) => 함수의 타입
// 함수의 타입을 잡아서 여러개의 함수를 만들때 공통된 형식을 부여한다면 (6번에 묘사) 
// 아래 표현은 1회성 표현 
let fSig:() => void = function():void {
    console.log('함수 시그니처 적용')
}

let fSig2 = function():void {
    console.log('함수 시그니처 적용')
}

fSig() 
fSig2() 

// 6. type 키워드를 이용하여 함수 시그니처의 별칭 생성 => 특정 형태의 함수 타입형 생성 
//  6-1 타입 생성
//      type 타입명 = 함수 시그니처 
type sgFunc = (x:string, y?:number) => void 
//  6-2 . 함수 타입을 활용하여 함수 생성
const f10:sgFunc = function (a:string, b?:number ):void {}
const f11:sgFunc = function (c:string, d?:number ): void {}
//  6-3. 함수 호출 
f10( 'hi' )
f11('hello', 100)

// 7. 흔한 표현은 아닌데, undefined 관련 내용
//  undefined는 모든 타입의 가장 하위 타입으로, 어떤 타입이던 undefined를 받을 수 있다.
//  함수의 매개변수에 여러 타입을 주는 경우    
interface IManable {
    name: string 
}
function getName(n:IManable|null|undefined) {
    // null 조건을 배제 (설정) 
    return n != undefined ? n.name: 'unknown'
}
console.log(getName({ name: 'hi'}))
console.log(getName(undefined))