/**
 * 다양한 형태 함수 체크 
 */

// 1. 콜백함수 => 비동기 처리에 가장 핵심적이 형태
// 함수의 매개변수 중에 함수가 존재한다. 그런 함수를 콜백함수라고 부른다. 
const cbTest = (callback:(x:number) =>void):void => {
    console.log('hi')
    callback(100)
    console.log('hi2')
}

// 함수의 매개변수로 함수가 들어왔다. => 콜백, 화살표 함수, 표현식문 
cbTest((x) => console.log(`${x} 콜백함수가 호출되었다 `))

// 2. 중첩함수 
//      함수 내부에 함수가 중첩적으로 구현되어 있다. 
//      현재 사용 이유는 해당 함수 내부에서만 사용하기 위함이다 (현재) 
const calc = ( value:number, cb: (arg:number)=>void ):void => {
    // add20은 2개의 수치를 받아서 더해주고, 리턴하는 함수이다. 
    // 중첩함수로 화살표 함수 형태 제공 
    const add20 = (x:number, y:number):number => x + y 
    // 중첩 함수로 표준 함수 형태 제공 
    function multi(a:number, b:number) {
        return a * b 
    }
    let result = multi(add20(10, 11), value) 
    cb (result) 
}
calc(100, (res:number)=>console.log(`최종결과 ${res}`))

// 3. 클로저 
//      - 함수 내부에 함수가 존재 (중첩함수) 
//      - 함수가 리턴하는 것인 함수 자체 (고차함수) 
//      - 함수 자체는 pure(순수)해야한다. (순수함수)
//          독립적으로 사용가능, 어떤 코드에 들어가도 동일하게 구동(독립적) => 전역변수   사용x
//      - 위의 요소들을 최대한 결합하여서 최대로 좁혀서 표현 + 함수 시그니쳐 
//      3-1 구현 예시
const addX = (a:number): ( (arg:number) => number) => (b:number):number => a + b 
console.log(addX(1)(2))

//      3-2 풀어 쓰기 
//      3-2-1 함수 타입 생성, 함수 시그니처로 수치를 입력 => 수치를 반환 
type AA1 = (arg:number) => number 
//      3-2-2 함수 구현 
//          addX2라는 함수는 함수를 리턴하는 함수이다. 단 리턴하는 함수는 AA1처럼 생겨야한다. 
const addX2 = (a:number):AA1 => {
    // 중첩 함수 => 내부에만 존재, 내부에서만 사용 => 이름 => _이름 
    const _nextFunc: AA1 = (b:number):number => a + b 
    // 고차 함수 => 중첩 함수가 리턴 
    return _nextFunc
}

console.log(addX2(1)(2))

//      3-3 풀어쓰기 2
const addX3 = (a:number):AA1 => (b:number):number => a + b 
const addX4 = (a:number):( (arg:number) => number) => (b:number): number => a + b 

