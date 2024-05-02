```
npm install dotenv
```


### 이미 해당 프로세스 쓰고 있을 떄 파워쉘로 끄기
```powershell
netstat -aon | findstr :4000
taskkill /PID [프로세스_번호] /F
```

kako apiKey 지키려고 express에서 apikey 사용해서 script 줌
#### api/kakoMaps.js
```js
const router = require('express').Router();
const axios = require('axios')

router.get('/', async (req, res) => {
    const url = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_API_KEY}&libraries=services,clusterer`;
    
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching address:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
```


### Run SQL Command Line
계정 생성
```
# 관리자 권한으로 접근
CONN /AS sysdba 

# 유저생성
CREATE USER open_api IDENTIFIED BY 1111;

#권한 설정
GRANT CONNECT TO open_api;
GRANT RESOURCE TO open_api;
GRANT dba TO open_api;
```

### SQL Developer
테이블 생성
```sql
DROP TABLE posts;
DROP TABLE users;
DROP SEQUENCE user_seq;


CREATE TABLE users (
    idx NUMBER PRIMARY KEY,
    user_id VARCHAR2(100),
    user_pw VARCHAR2(255)
);

CREATE SEQUENCE user_seq
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

CREATE TABLE posts (
    id NUMBER PRIMARY KEY,
    title VARCHAR2(255),
    content CLOB,
    author NUMBER,
    CONSTRAINT fk_author
        FOREIGN KEY (author)
        REFERENCES users(idx)
        ON DELETE SET NULL  
        -- 사용자가 삭제되면 관련 게시물의 author를 NULL로 설정
);

select * from users;
select * from posts;
```