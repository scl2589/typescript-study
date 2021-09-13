/**
 * 클래스, 객체, 인터페이스
 * - 객체지향 프로그래밍
 * - 함수지향 프로그래밍
 * - Object 타입 -> 객체, 인터페이스 응용
 * - Object는 성향상 any와 비슷한 성격을 가진다. 
 */

// 일반적인 object 타입의 어떤 객체도 OK
let obj:object = {
    name: 'sg',
    age: 30
}

console.log(obj)

obj = {
    name: 'sg2',
    age: 100
}
console.log(obj)

obj = {
    name: 'sg3'
}
console.log(obj)

// interface => 객체의 타입{스타일}을 정의한다.
/**
 * interface 이름 {
 *  속성명, 타입주석,
 *  ...
 * }
 * 항상 대문자로 시작한다(이름)
 */

interface IBook {
    // name은 문자열로 받겠다
    name: string,
    age: number
}


interface IBook2 {
    // 속성을 한줄로 표현시 => ; 를 구분자로 사용한다
    name: string; age: number; 
}

// 인터페이스 사용
// 인터페이스는 객체의 타입이다!
let book:IBook = {
    //book은 IBook에 들어있는 인터페이스의 타입을 따라간다는 뜻이다.
    name: '타입',
    age: 10
}
console.log(book)

/**
 * 구성 요소는 반드시 누락 없이 표현되어야 한다
 
let book2:IBook = {
    //book은 IBook에 들어있는 인터페이스의 타입을 따라간다는 뜻이다.
    name: '타입',
    // age: 10
}
console.log(book)
*/

// 선택적 옵션이 가능한가?
// 필수 속성, 옵션 속성을 지정하는 것이 가능한가?
// 기호 => ?
interface IBookEx {
    name: string,
    age: number,
    pages?:number
}

let book2:IBookEx = {
    name: 'sg',
    age: 10
}

let book3:IBookEx = {
    name: 'sg',
    age: 10,
    pages: 500
}
console.log(book2, book3)

// 익명 인터페이스 -> 1회성 사용
// 재사용 불가
let book4:{
    name: string,
    age: number,
    pages?:number
} = {
    name: 'sg',
    age:10,
    pages: 500 
}
console.log(book4)


/**
 * Class
 * - private, public, protected, implements, extends 키워드 사용 등 
 * - java, C#과 유사 
 * class 이름 구현/상속 {
 *  [private | public | protected] 속성명[:타입주석]
 * }
 */

 // ES5
 // @ts-nocheck: ts에서 문법체크를 하지 않겠다 (X)
// class Book {
//     name: string
//     age: number
//     pages: number
// }


// ts 클래스 스타일
/*
    class 이름 {
        // 생성자 -> 주로 멤버 변수 초기화
            // 생성자의 인자에서 멤버 변수를 표현 (권장)
        // 멤버 변수 
        // 멤버 변수 (메소드)
    }
*/
// 가장 간결한 형태 
class Person{
    constructor(public name:string, public age?:number){}
}
let p1:Person = new Person('sg', 100)
let p2:Person = new Person('sg')
console.log(p1, p2)

class Person2 {
    name: string 
    age?:number 
    constructor( name:string, age?:number) {
        this.name = name 
        this.age = age
    }
}

let p3: Person2 = new Person2('sg', 100)
let p4: Person2 = new Person2('sg')
console.log(p3, p4)

// 인터페이스를 구현한 클래스
// 인터페이스는 객체의 타입을 제시한다 => 구현하는 클래스는 반드시 그 내부에 있는 속성을 표현해야 한다 -> 제약 계식
interface IPersonEx {
    n: string
    age?:number 
}

class Person3 implements IPersonEx {
    // 인터페이스 속성 중 옵션 항목은 미구현해도 문제없다.
    constructor(public n:string){}
}

class Person4 implements IPersonEx {
    constructor(public n: string, public age?:number){}
}

// 추상 클래스
// abstract
// 추상 클래스는 단독으로 객체를 만들 수 없고, 상속 받아서 직접 구현해야 객체 생성이 가능
// 추상 클래스 내부에는 선언된 요소, 구현된 요소가 혼재되어 있다.
abstract class AbPerson5 {
    abstract name: string
    constructor(public age?:number){}
    abstract getName():void 
    // 멤버 함수 => function (x) - function이 없는 형태 
    getAge():void{
        // 클래스 내부에서 멤버를 접근할 때는
        // this.멤버
        console.log(this.age)
    }
}

// 클래스 상속 (exftends)
class Person5 extends AbPerson5 {
    constructor(public name: string, public age?:number){
        super()
    }
    getName(): void{}
}

// static 정적 속성 
// 객체를 생성하지 않아도, 직접 접근해서 사용 가능하다
// => 유틸리티, app 내에서 고유한 1개의 함수, 기능으로 존재하는 경우
// node는 여러번 import ~ 사용해도, 한 번 올라온 모듈을 캐싱을 통해 재사용된다.
class A{
    static value: number = 1
    static age() {
        console.log('ji')
    }
}
// 객체 생성 없이 소속을 밝히고 사용한다.
console.log(A.age(), A.value)

/**
 * 객체 구조 분해
 * - 객체 비구조화 할당
 * - 객체 타입을 만드는 이유 -> 변수와 의도를 명확하게 부여 
 */

 // 사람의 이름
 // 제품의 이름 
 // xxx의 이름 => 변수도 많아지고, 코드도 길어지고, 관리도 힘들어지고, ....
 let personName, productName; 

 // 인터페이스를 통해서 그 의도가 같더라도, 소속을 달리하여 관리하면 편리하다.
 interface IPerson10 {
     name10: string
     name11: string 
     name12: string 
     name13: string 
 }
 interface IProduct {
     name: string
 }

let m:IPerson10 = {name10: 'SG', name11: 'SG1', name12: 'SG2', name13:'SG3'}
let p:IProduct = {name: 'PCR'}
console.log(m.name10, p.name)

// 표현이 같다 => 변수처럼 뽑아서 사용하고 싶다면?
// 객체 비구조화 할당은 객체의 속성들 중 필요한 것만 뽑아서 처리가 가능하다. 
let { name10, name12 } = m
console.log( name10, name12) 

// rest operator: 잔여 연산자
// name11은 변수에 할당, 나머지 모든 것은 etc에 할당
const { name11, ...etc } = m
console.log(name11)
console.log(etc)

// spread operator : 전개 연산자 
// 객체 전체를 포함시킨다. 
// m 객체와 p 객체를 합쳐서 새로운 객체를 생성한다.
let tmp = { ...m, ...p }
console.log(tmp)

// 객체는 직접 만들어선 넣을 수 있다. 
let tmp2 = {...tmp, ...{p:1001}}
console.log(tmp2)

/**
 * 타입 변환
 * - type conversion: 아래 2개념을 모두 포함한다
 *  = type casting: 명시적 형변환
 *  = type coercion: 암묵적 형변환 
 * 
 * - 타입스크립트는 2가지 형태로 제공
 *   = (타입 > 객체) 
 *   = (객체 as 타입)
 */

 interface IName{
     name: string 
 }
 let t2:object = { name: 'hello'}
 console.log(t2)
 // object 타입은 name 속성이 없다. -> 접근이 불가하다. 
//  console.log(t2.name)

// 타입을 부여하지 않고, 강제 변환으로 처리하고 싶다
let t3 = (<IName>t2).name 