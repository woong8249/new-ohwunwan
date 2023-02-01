# New-Ohwunwan

# ※ Overview

1. Description
2. Improvements

# 🙋🏽‍♂️ Description

코드 스테이츠 파이널 프로젝트 ohwunwan에서 많은 아쉬움을 느껴<br>

당시 팀원과 처음부터 다시 리팩토링해보았습니다.<br>

현재 서버 API 개발과 테스트가 완료되었고, 프런트 개발과 테스트가 완료되면 배포할 예정입니다.

뿐만 아니라 단계를 나누어 점진적으로 계속해서 리팩토링해 나갈 예정입니다.

<b>자세한 내용은 [DevLog](https://hypnotic-geography-1af.notion.site/new-ohwunwan-11137c909f2849399b587f09371d76e9)를 확인해주세요</b>

## Directory Structure(only server)

```bash
server
    ├── node_modules
    └── src
        ├── api
        ├── config
        ├── controllers
        ├── data
        ├── loders
        ├── middlewares
        ├── migration
        ├── services
        ├── validator
        └── utils
```

# ⭐️Improvements

## 1. 에러처리 개선

- **express-validator library**
  해당 라이브러리를 이용해 비동기적 에러 캐치가능하게함
- **유효성검사 계층을 추가**
  validator계층을 거치도록 설계해 예상할수있는 에러를 사전에 차단함
- **잘못된 경로 접근**
  존재하지 않는 경로의 요청을 응답하는 코드 추가
- **한 곳에서 에러 집중적**으로 처리
  각 컨트롤러의 끝에서 처리하던 에러코드를 throw후
  마지막 app.use에서 처리할수있게 설계

<br>

## 2. 계층분리

- **validator, service 계층 추가 ⇒스파게티 방지 및 관심사분리**

  기존 route - controller- model 계층에 validator,service 계층을 추가해

  아래와같이 세분화함

  route- validator-controller-service-data

  기존 컨트롤러에서 유효성검사와 비지니스로직 응답코드 모두 담겨있어

  이에대한 관심사를 분리시킴

  <br>

## 3. 미들웨어의 이용

- **미들웨어를 이용한 인증,인가 체크**
  `get: auth/me` api를 통해 로그인 유무를 체크 할 수 있고,
  인증 인가를 체크해야하는 각 요청은 `isLogin` , `isAuth` 미들웨어를
  거치도록 설계

<br>

## 4. 스키마 통합

- **아래와같이 9개의 테이블 3개로 통합**

  컬럼이 하나만달라 분리해 관리하던 테이블들에 공통컬럼을 추가해

  구분할수있게하고 통합함

  [비슷한 테이블 통합](https://www.notion.so/bede1515e1ee4bd0a6d14179be0619a4)

  <br>

## 5. 개발환경 분리

- **env, config.js 이용(오타방지 & 미입력 방지)**
- **cross-env libray** **이용 개발환경을 분리함**

<br>

## 6. app과 서버의 분리

- nodejs 서비스의 시작 단계를 loaders 폴더에 따로 분리해서 사용

- app.js 파일에 모든 미들웨어나 시작에 필요한 것들을 다 작성해 줬었는데 이를 분리함

  <br>

## 7. 보안강화

- hash를 이용한 DB 유저정보 암호화
- CSRF token이용한 CSRF attack 대비

<br>

## 8. swagger를 이용한 api 명세화

- swagger를 이용해 api doc을 명세화하고 api 테스트 가능하개함

<br>

## 9. 기능추가

- 대댓글 기능 추가
- 댓글좋아요기능 추가
- 관리자 와 기능추가
