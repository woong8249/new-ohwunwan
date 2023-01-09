# New-Ohwunwan

## Description

아래는 코드스테이츠 파이널 프로젝트 코드리뷰 이후 제가 느낀 문제점과 개선 사항을 기술했습니다 .

1.  **잘못된 요청에 대한 유효성 검사가 매우 부족함**<br><br>
        <b><span style="color:red">개선사항</span></b><br>
- <b><span style="color:blue">express-validator library</span></b>이용<br>
- 컨트롤러에서 유효성검사코드를 분리해 valodator계층을 만듬.
    <br>
    <br>

2.  **에러 처리가 매우 부족함 (잘못된 라우트 접근 시, 예기치 못한 에러 발생 시)**

- 만약 에러 발생이 되었을 때 최후의 보루로 응답해 줄 수 있는 코드가 없음
- 비동기적 에러 발생에 대한 처리가 없음
- 예기치 못한 에러로 앱이 터졌을 때 처리가 없음(앱을 재시작하는 코드 작성 예정중)
  <br>
  <br>
  <b><span style="color:red">개선사항</span></b><br>
-   <b><span  style="color:blue">express-async-errors library</span></b> 이용(비동기 에러 캐치) <br>
- 잘못된 경로 응답(404)

    ``` js
      //  server/loaders/express.js
      //----잘못 된 경로입력시----
      app.use((req, res, next) => {
          res.status(404).end();
      });
      //----에러케치 (비동기 에러도 잡을 수 있음 )    ("express-async-errors";)----
      app.use((err, req, res, next) => {
          if (err instanceof MulterError) {
          return res.status(400).json({ message: err.code });
          } else if (err.status < 500) {
          return res.status(err.status).json({ message: err.message });
          } else if (err.message === "Multipart: Boundary not found") {
          return res.status(406).json({ message: err.message });
          } else {
          console.error("!!!error!!!", err);
          res.status(500).json({ message: "sorry. something is wrong" });
          }
      });
    ```

<br>
<br>

3. **인증과 인가에 대한 미들웨어가 빈약함**

- 인증에 대한 api를 만들어두었지만<br>
   인증 api의 요청 응답 이후 다시 요청을 하기 때문에 플로가 매우 비효율적임<br><br>

   <b><span style="color:red">개선사항</span></b><br>
- 로그인 되어있는지 확인하기 위한 전용 api (get auth/me)와 <br>
   미들웨어를 이용해 인증과 인가 확인을 하게끔 설계하함

   ```js
   //  server/router/post

   //게시물을 생성하는경우 로그인 되어있는지 확인하는 과정 거침
   router.post(
     "/:postType",
     isLogin,
     validateCreateBefore,
     upload_array,
     validateCreateAfter,
     postController.createPost
   );
   // 게시물을 수정하는경우 isAuth라는 미들웨어로 본인의 게시물인지 확인하는 과정을 거침
   router.put(
     "/:postType",
     isLogin,
     validateUpdate,
     isAuth,
     postController.updatePost
   );
   ```

4. **개발 환경 분리가 되어있지 않음**<br><br>
   <b><span style="color:red">개선사항</span></b><br>
 - <b>cross-env libray</b> 이용해 개발환경을 분리함<br><br>
5. **controller계층의 복잡함**

   유효성 검사부터 비즈니스 로직까지 한꺼번에 담고 있다 보니 가독성이 매우 떨어짐

   응답 유형이 200, 400, 500 모두 담겨있어 분리작업이 필요함
   <br>
   <br>
   <b><span style="color:red">개선사항</span></b><br><br>
계층을 세분화해 역할을 분담함
- router 계층 (라우팅 분산)<br>
-  validator 계층 (유효성 검사 : 잘못된 요청의경우 400대응답)<br>
-  controller(sevice계층 호출후 응답 코드만 작성) 계층<br>
-  service 계층(비지니스 로직 작성)<br>
-  data 계층(DB 접근)<br>
<br>
<br>

6. **보안 취약**

- cookie에 로그인 검증 토큰을 담아 전달하는 방식이기에 secure 옵션과 httpOnly 옵션을 적용해 xss 공격에는 대비를 했지만,<br>csrf 공격에 대비하지 못함.
   <br>

  <b><span style="color:red">개선사항</span></b><br>
- CSRFCHEK. <br>
   데이터를 생성,변경,삭제하는 경우
   CSRF토큰을 이용해 검증함
