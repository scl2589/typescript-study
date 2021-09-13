/**
 * from 에서 경로의 시작점은 entrypoint가 아니라
 * 현재 위치를 말한다. -> 상대 경로로 결정한다.
 */

import JO, {t} from './sub'

let a:string = 'hi'

function b() {
    console.log('hello')
}

//대표는 1개만 가능
export default class C{}

// 모듈 그룹
export {
    a, 
    b, 
    C as CT
}

// 모든 것을 사용한다! =>  *
export * as G from './sub'

// 모듈 그룹은 여러 번 사용이 가능하다.
export {
    JO, 
    // error - 이미 모듈화 되어있음 
    // G 
}
