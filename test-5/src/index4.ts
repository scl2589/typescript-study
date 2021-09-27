/**
 * 매개 변수의 기본값 지정 
 * 함수의 리턴 타입 지정 
 */
// 1. type
//  - 새로운 타입을 지정, 별칭을 부여
//  - 함수, 객체 형태도 가능
type Person = { name: string, age: number }

// 2. 매개변수 기본값, 사용자정의 객체 타입 리턴 
const madePerson = (name:string, age: number = 40 ):Person => {
    // 객체를 반환하는 형태 
    return {name:name, age:age}
}

// 호출, 파라미터가 누락되면 기본값을 따라간다.
console.log(madePerson('hi'))
console.log(madePerson('hi', 30))

// 함수 구현 부분을 단순하게 표현문으로 처리
// 객체를 반환할 때는 소괄호 ()를 감싸서 처리할 수 있다. 
const madePerson2 = (name: string, age:number = 40):Person => ({ name: name, age: age})
const madePerson2_1 = (name: string, age:number = 40):Person => ({ name, age}) //위 내용을 더 간결하게 표현하는 방법 

/**
 * TS 함수에서 function 함수 내부에서 this 사용 
 * 화살표 함수에서는 this가 사용이 불가하다 (다른 의미로 해석이 된다, 주의가 필요하다)  
 * 
 * 클래스 메소드 형태, 정적요소 
 * 
 * 메소드 체인 
 */

// 1. 클래스 메소드로 점검: 화살표 함수, this 사용
class A {
    value: number = 1
    test:() => void = () => {
        console.log(`value is ${this.value}`)
    }
}
let obj:A = new A() 
obj.test() 

class B {
    // 생성자를 통해서 멤버 변수를 초기화 하는 스타일 TS 스타일이다. 
    constructor(public value: number=1){}
    // 함수명(): 리턴타입{}
    test():void {
        console.log(`value is ${this.value}`)
    }
}

// 2. 클래스 멤버들 중 정적 타입
class C {
    static a:string='hi'
    static display():string {
        return "hello"
    }
}

// 3. 메소드 체인 
//  함수().함수().함수() ...
// 메소드 체인 함수는 내부에서 항상 this를 반환한다.
class MyCalculator {
    constructor(public value: number = 0){} 
    add(value:number) {
        this.value += value
        return this
    } sub(value: number) {
        this.value -= value 
        return this 
    } mul(value:number) {
        this.value *= value 
        return this
    }
}

let cal = new MyCalculator() 
let calRes = cal.add(10).mul(2).sub(3).add(10)
console.log( calRes )