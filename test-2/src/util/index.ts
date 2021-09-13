/*
* export 변수, 상수, 함수, 클래스, 인터페이스
* - 개별 요소 모듈화
* - 이렇게 표시한 요소들은 ㅗ이부에서 참조하여 사용이 가능하다.
*/

// 상수
const MAX_AGE = 100 

// 외부 참조용 함수
// max 는 함수의 매개변수인데, 타입이 number이다.
// 그래서 숫자만 들어온다 (입력값에 제약을 부여한것이다.)
// MAX_AGE는 기본값을 부여 -> 함수 호출 시 인자값을 생략해도 된다.
// 변수명: 타입 => 스칼라, swift 언어들이 유사성을 가진다. 
// :number 는 리턴 타입 명시 -> 함수 선언 부분 끝에 위치하게 된다 
export function myRand(max:number = MAX_AGE) {
    // 타입스크립트는 문법이 엄격하다는 것이 보인다
    return Math.ceil( Math.random()*max)
}

// 내부용 함수 
function log(msg:string):void {
    console.log(msg)
}