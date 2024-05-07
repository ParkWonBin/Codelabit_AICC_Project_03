```
npm install dotenv
```
### 행추가하고 바로 idx 받아올 떄
outBind 라는 게 있다.
```js
const sql = `
INSERT INTO users (idx, u_id, u_name, u_pw)
VALUES (user_seq.NEXTVAL, :userId, :userName, :userPw)
RETURNING idx INTO :idx
`;
const bind = {userId, userName, userPw,
    idx: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
};
const result = await connection.execute(sql, bind, { autoCommit: true });
const newUserIdx = result.outBinds.idx[0]; 
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