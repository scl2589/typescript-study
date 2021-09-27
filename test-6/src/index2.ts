/**
 * 배열을 다루는 함수들 구현
 * - fold: 배열 내부 멤버들의 총합산하는 함수 
 * - filter: 배열 내부의 특정 조건에 만족하는 데이터만 모은다 (필터링한다)
 * - map: 배열 내부의 멤버들을 일일이 접근해서 특정 처리를 수행 
 * 기본조건 
 * - 스프레드 연산을 통한 배열 생성 
 * - 재귀적 호출
 * - 필요시 for문 사용 등은 자유롭게!!
 * 
 * 함수형 프로그래밍은 선언형 프로그래밍과 밀접한 적합력을 가진다. 
 * - 명령형: cpu에 친화적인 저수준 스타일  
 * - 선언형: range, fold, map, filter 등 지금 만드는 방식 유사. 인간에 친화적 -> 성능, 최적화 밀접 
 * */

const rangeX = (from:number, to:number):number[] => from<to? [from,...range(from+1, to)] : [] 
let rawData:number[] = rangeX(1, 101) // 1, 100 
console.log(rawData)

// 1. fold : 누적합, T이긴 한데, 가급적 수치만 적용 (염두) 

const fold = <T>(arr:T[], cb:(result:T, value: T)=>T, initValue: T) => {
    // 현재 누적된 결과는 초기값으로 세팅 => 0 
    let result0: T = initValue 
    // 배열에서 한개씩 뽑아서 처리한다 
    for (let arr_v of arr) {
        // 콜백함수를 호출해서 누적값에 신규값을 더했다. (콜백을 부를정도의 복잡성은 없는데) 
        // 확장성을 위해서 처리하였다. 
        result0 = cb(result0, arr_v)
    }
    return result0
}
// 콜백함수는 누적된 결과를 담는 그릇에 새로운 값을 넣어서 더해주는 역할이다. 
let res = fold(rawData, (result, value) => result + value, 0)
console.log(res)

// 2. filter : 조건에 맞는 멤버만 모은다 (필터링)
//      배열이 가지고 있는 기본 기능을 wrapping하는 느낌으로 활용한다. 
const filter = <T>(arr:T[], cb:(value:T)=>boolean ):T[] =>{
    let result: T[]=[] 
    // 조건에 일치하는 멤버만 모아서 리턴 
    for (let arr_v of arr) {
        if (cb( arr_v )) {
            result = [...result, arr_v]
        }
    }
    return result
}
// 특정 수치가 짝수인지 체크하는 함수 
const isEven = (n:number):boolean => n%2 == 0
console.log(filter(rawData, isEven))

// 3. map: 멤버들 전체를 업데이트한다. 
//  T[] 재료 => map => V[] 출력 
const map = <T, V>(arr:T[], cb:(value:T)=> V):V[]=>{
    let result:V[] = [] 
    for (let arr_v of arr) {
        result = [...result, cb(arr_v)]
    }
    return result 
}
// 모든 구성을 제곱해서 뽑아라 
console.log(map(rawData, v => v*v))