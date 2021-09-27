/**
 * 배열 기초 
 *  - JS/TS에서 n개의 데이터를 다루는 가장 기본적인 형태  
 */
// 1. js 배열 
// 특징
//  - 길이 지정없이 생성할 수 있다. 
let arr = new Array() // 동적구성 => 차후에 멤버 추가시 적합한 형태 
let arr2 = []         // 정적구성 => 생성시 멤버들을 추가하여 구성형태 적합 
// 단, 상호 호환은 가능하나 각각 적합한 형태로 사용한다. 
console.log(arr.length) //0

// 멤버 추가
arr.push(1) 
arr.push(2)
arr2.push(1)
arr2.push(2)
console.log(arr.length, arr2.length) 
console.log(arr, arr2) // [1, 2] <= 배열의 형태 확인 

// 2. 생성시 이미 멤버가 존재한다면 
let arr3 = [1, 2, 3]
console.log(arr3) // [1, 2, 3]

// 3. 배열은 객체이다 
let a = [1, 2]
let b = { name: 'hi' }
console.log(Array.isArray(a), Array.isArray(b)) // true false 

// 4. TS 배열 
//  JS 배열은 구성원들의 타입이 달라도 OK 
//  TS 배열은 구성원들의 타입이 동일 
//  타입[] 
let arr4: number[] = [1, 2, 3, 4, /*'hi'*/] // 동일 타입만 구성 가능하므로, hi는 불가 
type IPerson       = { name: string, age?:number}

let arr5:IPerson[] = [{name: 'Jane'}, {name: 'John', age: 10}] // age는 필수가 아니므로 age가 없어도 문제가 나타나지 않는다.
console.log(arr4, arr5) // [ { name: 'Jane'}, { name: 'John', age:10 }]

// 5. 배열을 리턴하는 함수의 예시 
// 5. 배열의 기능을 직접 구성해보자 (기존 기능을 wrapping하는 느낌 )
//  split: 주어진 문자열을 구분자를 기준으로 분해해서 배열로 리턴하는 함수 
const split = (str:string, sep:string=''):string[] => str.split(sep)
console.log( split('helloworld'))
console.log (split('h-e-l-l-o-w-o-r-l-d', '-'))

// 6. 배열값 추출 => 인덱싱 
// 배열명[ 인덱스 ]
let ss = split('helloworld') 
console.log(ss[0], ss[3]) //h l
console.log(ss[-1]) // undefined => 역방향 인덱싱 처리 안됨 = 정방향으로만 처리한다 (index >= 0) 

// 7. 배열의 비구조화 할당 (rest, spread operator) 
let arr6:number[] = [1, 2, 3, 4, 5]
//  7-1. rest 
let [first, second, ...rest] = arr6 
console.log( first, second, rest)// 1 2 [3, 4, 5]
// 7-2. spread: 배열을 원본을 카피 (deep, 원본에 영향을 미치지 않음) : 새로운 배열을 만든다.
//  여기서는 2개의 배열을 합쳐서 한 개의 배열로 만듦 
console.log([ ...arr6, 100, ...rest]) // [1, 2, 3, 4, 5, 100, 3, 4, 5]

// 8. for ~ in 
// 배열에 접근해서 데이터를 추출한다 (순차적으로) 
for (let index in arr6) {
    console.log(index, arr6[index])
}

// 9. for ~ of 
for (let value of arr6) {
    console.log(value) 
}

// 10. 범요 ㅇ타입에 적용하는 경우 
// 어떤 타입이 들어와도 처리되게끔 처리 
// 제네릭 방식 => <T>
//      10-1. 배열의 멤버수 리턴
const arrLen = <T>(arr:T[]):number => arr.length 
//      10-2. 다양한 타입의 배열 준비 
let n:number[] = [1, 2, 3]
let s: string[] = ['hi']
let o:IPerson[] = [{ name: '1'}, { name: '2'}]
//      10-3. 어떤 타입이던 범용적으로 적용되는 함수를 만든다면? 
console.log(arrLen(n), arrLen(s), arrLen(o))
//      10-4. 리턴 타입도 제네릭 
//          제네릭 표현시 T는 대표성을 의미하고,어떤 이름도 가능
//          같은 이름은 전부 같은 타입이다.
const arrLen2 = <T1>(n:T1):T1 => n 
// 타입을 표시하거나 생략 가능 
console.log( arrLen2(1), arrLen2(true), arrLen2<string>('hi'))

// 11. range() 함수 만들어본다.
//      스프레드 연산자, 배열생성, 재귀적 호출 
//      range(1, 3) => [1, 2]
//      range(1,5) => [1, 2, 3, 4]
//      연속 수가 생성되는 함수, for문이 아닌 위의 기술을 이용하여서 구성 
const range = (from:number, to:number):number[] => {
    return from < to ? [from, ...range(from+1, to) ]: []
}

let resArr: number[] = range(1, 10) 
console.log(resArr)