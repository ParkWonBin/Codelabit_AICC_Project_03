### 환경 구축
GIT 브런치 : 
- 팀원들 이름으로 브런치를 생성합니다.
- 각자 자신의 브런치에서 작업합니다.
- 테스트가 완료되면 pull Request를 만듭니다. 

---

### React 프로젝트 생성/실행/배포 절차

#### 1. 프로젝트 생성
모듈 설치 : ```install -g```  
해당 PC의 전역 페키디 저장소에 다운로드하는 설정입니다.  
프로젝트명은 "react-{페이지명}" 패턴으로으로 생성합니다.
- 템플릿 모듈 설치 : ```npm install -g create-react-app```
- 프로젝트 생성 : ```npx create-react-app react-main```

#### 2. 프로젝트 실행
- 프로젝트 진입 : ```cd ./react-main/```
- 프로젝트 설치 : ```npm install```
- 프로젝트 실행 : ```npm start```
- 프로젝트 종료(터미널에서) : Ctrl+C

#### 3. 프로젝트 배포
- 프로젝트 진입 : ```cd ./react-main/```
- 프로젝트 배포 : ```npm run build```

프로젝트를 빌드하면 'build' 폴더가 생성된다.  
해당 폴더 안에는 react 프로젝트를 정적파일로 변환한 파일이 들어있다. 변환된 폴더는 express나 github pages 등 정적 호스팅 서버에 등록한다.

---

### Express 프로젝트 생성/실행/배포 절차
프로젝트명은 "express-{서버명}" 패턴으로으로 생성합니다.

#### 1. 프로젝트 생성
- 프로젝트 폴더생성 : ```mkdir express-main```
- 프로젝트 경로진입 : ```cd express-main```
- 프로젝트 초기설정 : ```npm init -y```
- 프로젝트 파일무시 : ```"/node_modules/" | Out-File -Encoding UTF8 .gitignore```
- 프로젝트 모듈설치 : ```npm install express express-session ejs fs-extra path body-parser dotenv moment```
- 프로젝트 서버파일 :
    ```js
    // server.js
    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
    res.send('Hello Express!');
    });

    app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    });
    ```

#### 2. 프로젝트 실행
- 프로젝트 경로진입 : ```cd express-main```
- 프로젝트 환경설치 : ```npm install```
- 프로젝트 서버실행 : ```node server.js```
- 프로젝트 서버종료(터미널에서) : Ctrl+C

#### 3. 프로젝트 배포
해당 폴더를 통째로 AWS등 서버 컴퓨터에 다운로드하고 실행한다.