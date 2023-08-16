원티드 프리온보딩 인턴십 과제

- 이름 : 김상목

- 실행 방법

1. 폴더에 git clone https://github.com/SangmokKIM1994/wanted-pre-onboarding-backend.git
   명령어를 실행 해 준다.
2. 라이브러리 설치를 위해 npm install 명령어 실행
3. src 폴더안에 .env 생성후 https://drive.google.com/file/d/1fo-UG-hTAtxYOZ9-sz5GgRC4LjKgv876/view?usp=sharing 텍스트 파일의 내용 붙여넣기

4. cd src >> node app.js 실행 후

   `3000번 포트로 서버가 열렸습니다.
MySQL 연결 성공
현재 커넥션 개수: 1`

   콘솔에 위의 내용이 표시되면 실행 준비 완료

5. 크롬이나 웨일을 이용해서 localhost:3000/api 접속 후

   "서버 연결이 완료되었습니다."

   이 문구가 보이면 실행 준비 완료

6. postman이나 Thunder client를 이용해 api명세서에 작성된 기능들을 확인한다.

- erd : https://drive.google.com/file/d/1qCIUzYjKGq3wzn9lEGr3A6UsW0I1qAyk/view?usp=sharing

- 유튜브주소 : https://youtu.be/2w1mxzjHcgo

- 구현 방법 및 이유
  백엔드

Node.js는 비동기식 I/O와 이벤트 주도 아키텍처로 빠른 네트워크 애플리케이션 개발을 지원합니다. Express.js는 간결하고 효율적인 웹 프레임워크로, 라우팅 및 미들웨어를 제공하여 웹 애플리케이션 개발을 효과적으로 할 수 있습니다. 이러한 이유로 Node.js와 Express.js를 선택하여 개발을 진행했습니다.

데이터베이스

MySQL2는 MySQL 데이터베이스와의 연동을 위해 높은 성능을 제공하는 라이브러리입니다. Sequelize는 ORM을 제공하여 데이터베이스 모델을 자바스크립트 객체로 다루는 편리함을 제공합니다. 이를 통해 데이터베이스 연동 및 쿼리 작성을 더 간편하게 할 수 있습니다. 이러한 장점으로 MySQL2와 Sequelize를 선택하여 데이터베이스를 관리하고자 했습니다.

기타

bcrypt: 사용자 비밀번호의 안전한 저장을 위해 bcrypt를 선택했습니다. 해시화된 비밀번호를 저장함으로써 보안을 강화할 수 있습니다.
dotenv: 민감한 환경 변수를 .env 파일에 저장하여 외부에 노출되지 않도록 보안을 유지하고, 다양한 환경에서 설정을 관리하기 위해 dotenv를 선택했습니다.
joi: 사용자 입력 데이터의 유효성 검사를 통해 데이터의 무결성을 유지하고 잘못된 데이터가 데이터베이스에 저장되는 것을 방지하기 위해 joi를 선택했습니다.
jsonwebtoken: 사용자 인증 및 권한 부여를 위해 JWT를 선택했습니다. 토큰 기반 인증을 통해 보안성을 높일 수 있습니다.
nodemon: 개발 중 코드 변경 시 서버를 자동으로 재시작함으로써 생산성을 높이고 개발 효율성을 높이기 위해 nodemon을 선택했습니다.

- API명세서 : https://drive.google.com/file/d/11E9ljWBRk9uD0l4ucN6J8ZqBjAWPrr2U/view?usp=sharing
