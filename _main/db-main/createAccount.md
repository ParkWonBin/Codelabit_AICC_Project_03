### 계정생성
Run SQL command Line 실행
```bash
# 관리자 권한으로 접속
CONN /AS sysdba 

# 계정 생성
# 예시 ID : open_api
# 예시 PW : 1234
CREATE USER open_api IDENTIFIED BY 1111;

# 계정 권한 등록
GRANT CONNECT TO open_api;
GRANT RESOURCE TO open_api;
GRANT dba TO open_api;
```