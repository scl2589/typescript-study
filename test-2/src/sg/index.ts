/**
 * 개별 모듈, 대표 모듈 섞어서 표현
 * - 개별 모듈: export
 * - 대표 모듈: export default 
 */

 // 세미콜론은 넣어도 되나, type이나 esNext에서는 세미콜론을 생략하는 것이 기본이다 
 // es5: 세미콜론을 넣는 것이 기본 

export let pi:number = 3.14; 
let pi2: number = 3.142;
let pi3: number = 3.143;

// 개별 모듈화 그룹화
export {
    pi2,
    pi3
}

// 대표 모듈화 
export default class Pcr2 {
}

export class Pcr3{}