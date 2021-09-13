/**
 * 타입스크립트 창에서 모듈 가져요기
 * - 모듈화
 * - 모듈을 가져와서 사용하기
*/

 // 1. 모듈 가져오기
// import 가져올 요소 from 출처
// import (개별요소) from 출처
// import 대표요소 from 출처
// import 대표요소, {개별요소} from 출처
import {myRand, /*, MAX_AGE <- 에러 */} from './util'
 
console.log(myRand(10))

// 2. 모듈 가져오기
// 원본이름 as 별칭 
// 별칭: 이름이 같아서, 직관적이지 않아서, 기타 이유로 별칭을 붙인다.
import Pcr2, {pi, pi2, pi3 as pii, Pcr3} from './sg'
console.log( new Pcr2(), pi, pi2, pii, new Pcr3())


// 3. All에 있는 모듈을 가져오기
import C, * as All from './sg/All'

console.log(All.G.t)


// 4. Third-party 모듈
// import xxx from '상대경로' <= 직접 만든 모듈 
// import xxx from '모듈명(이름)' <= third-party 모듈 (별도로 설치한 모듈)


//5. 노드의 기능 사용시
// import xxx from '노드'
// 기본적인 노드 표현식으로 모듈 가져오기가 안된다.
// npm i --save-dev @types/node
// yarn add -D @types/node 
const fs = require('fs');
import * as fs2 from 'fs'

