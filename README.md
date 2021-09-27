# 일정

- 09/13

  - 타입스크립트 개요
  - 개발환경 구축 (test-1)
  - 모듈 가져오기 (test-2)
  - 타입, 변수, 상수 (test-3)
  - 클래스, 객체, 인터페이스 (test-4)
  - 함수, 클래스 메소드 (test-5)
  - 배열, 튜플

- 09/27 -> 고급 표현
  - 함수, 클래스 메소드
  - 배열, 튜플
  - 반복기, 생성기
  - 비동기 처리 -> sqlite 연동 async ~ await, Promise
- 3일차
  - 함수 고급 구성
  - 제네릭
  - 람다 (유동적)
  - 모나드 (유동적)
  - 타입스크립트 기반 리액트 적용 + 리덕스
  - 현재 프로젝트 기반
    - 신규 프로젝트 진입 작업
    - 세부 설정 파일들 역할 이해
  - 간단하게 프로토 구성해서 빌드

# 타입스크립트 개요

## 타입스크립트 종류

- ES5(ECMASCript 6)
  - 표준스크립트 2009
- ESNext(Moden Script)
  - 2015~ 1년 주기로 신규 문법들을 적용해서 발표
  - ES6(ECMA 2015 or ES2015)
  - ES6 ~ ECMAScript-2021 (현재)
- TypeScript
  - ESNext + TypeScript
  - history
    - MS 개발. 2012년도. 오픈소스 개발
    - C# 영향을 많이 받음
    - 구글 Angular 2.x 정식 채택 → 주류 언어
    - 자바스크립트 시장 62% 정도 점유율
    - 코드의 명확성을 부여 : 도입의 이유

## 문법 범위

- ES5 < ESNext < Typescript

## 스크립트 구동시 명령 형태

- ESNext
  - ESNext(_.js) → Babel (바벨, 트랜스파일러: transpiler) → ES5 (_.js)
  - 최신 문법으로 작성한 코드를 babel을 통해서 호환 코드로 변경한다.
    - 왜 최신문법이냐? 생산성을 위함이다.
- TypeScript
  - Typescript(**.js) →TSC(Typescript Compiler) → ES5(**.js)
- 최종적으로 구동되는 형태는 ES5이다!!!

## 개발 환경 구축

- node 설치
  - [node-js.org](http://node-js.org)
    - node 입력하면 화면으로 들어갈 수 있고, `ctrl + c` 누르면 빠져나갈 수 있다.
  - [npm-js.org](http://npm-js.org)
    - 써야할 third-party 모듈을 검색할 수 있다.
    - 내가 만든 모듈을 업로드해서 개별 프로젝트에 배포시킬 수 있다.
- vscode 설치
- 컴파일러 설치
  - package manager 를 이용하여 설치
  - package manager 원조는 npm
    - npm은 노드를 설치하면 바로 사용 가능
    - npm을 설치하면 보안체크없이 다 설치를 해버린다.
      - Third Party 사용 시 체킹이 안된다. - 안전한가? 적절한가? - 리스크 존재!
  - 이후, yarn 이 생김
    - npm을 통해서 설치를 해야 함
    - 최근에는 보안적인 문제 때문에 yarn 선호
  - 설치 명령어
    - `npm i -g yarn typescript ts-node`
    - 추가옵션
      - i: install
      - -g: global ⇒ PC 내에 어느 위치에 있떤 해당 모듈은 사용 가능하다.
      - -D, —save-dev: 프로젝스 생성 후 그 내부에서만 사용 시 설치하는 명령으로, 배포시에는 포함이 되지 않고, 개발할 때만 사용하는 모듈이다.
      - —save: 해당 프로젝트에서만 사용, 배포 시 포함되는 모듈
        - package.json 내부에 자동적으로 기록이 된다 (모듈과 버전이 함께 기록된다)
    - `npm i -g yarn` 이후, `yarn global add typescript ts-node`

# TypeScript 컴파일 및 구동법

- 타입스크립트 모듈 이용
  - 타입스크립트용 컴파일러
    - _.ts → _.js 트랜스 컴파일 진행
    - _.ts → tsc _.ts → _.js → node _.js → 결과
- ts-node 모듈 이용
  - ts를 즉시 설정
  - _ts → ts-node _.ts → 결과
  - \*.js 는 build를 할 떄 생성, 평상시에는 바로 구동시킨다.

# 프로젝트 생성

- `mkdir test-1`
- `cd test-1`
- node 프로젝트 초기화
  - node프로젝트를 초기화하면 산출물이 있다. → 이것이 `package.json` 이다.
  - 산출물: package.json/ node 프로젝트에서 가장 먼저 살펴 볼 구성 파일이다.
  - 명령어: npm init —y
  - 단, 텍스트 파일이므로 언제든지 편집해서 넣어도 된다.
- typescript 프로젝트 초기화
  - 산출물: `tsconfig.json` / 타입스크립트의 트랜스 컴파일에 관련된 설정 파일
  - 명령어: tsc —init
  - 만약 permission 관련 문제가 발생하면
    - 관리자 권한 > powershell 구동 > Set-ExecutionPolicy Unrestricted > y
- build 시 \*.js 가 저장될 위치 수정
  - tsconfig.json 오픈
    - outDir 지정 → `"outDir": "./dist"`로 수정
  - 차후는 좀 더 많은 설정 필요
- 코드 생성
  - mkdir -src
  - cd src
  - index.ts 생성
    - touch index.ts: 리눅스
  - 코드 작성
    - console.log('hello ts')
- 설정 및 빌드 → 명령어 필요
  - 명령어 등록 (최초 1회, 필요 시 추가)
  - package.json > scripts
    - "명령어 이름": "명령어 엔트리포인트"
      - 엔트리포인트로 폴더를 지정하면 index로 된 파일을 찾는다
    - "dev": "ts-node src"
    - "build": "tsc && node dist"
- 실행: 현재 프로젝트 폴더 위치에서 진행
  - npm
    - npm run dev
  - yarn (추천)
    - yarn dev
- 빌드 ts → js (ES5)
  - npm
    - `npm run build`
  - yarn
    - `yarn build`
- 최종 산출물

  - `build/index.js`

  ***

  ***

  `"use strict";`

  `console.log('hello ts')`

  ***

  - javascript 엄격 모드로 생성

# 개발 환경

- scoop 환경
- scoop 밑에서 모든 필요한 tool, node 등등이 설치되고 관리가 된다.

# 소스 공유

- https://me2.kr/oz6qa
