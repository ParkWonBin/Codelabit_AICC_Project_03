### 계정생성 리눅스
```shell
# 다운로드한 도커 이미지 조회
sudo docker image ls

# Oracle 데이터베이스를 실행하기 위해 컨테이너를 생성하고 포트를 연결합니다.
sudo docker start oracle11g

# 생성한 컨테이너에 접속하여 내부로 진입합니다.
sudo docker exec -it oracle11g bash

# 'su' 명령어(switch user)를 사용하여 사용자를 변경합니다.
su - oracle

# sysdba 계정으로 sqlpus 프로그램에 진입합니다.
sqlplus / as sysdba

CREATE USER **** IDENTIFIED BY **** DEFAULT TABLESPACE users TEMPORARY TABLESPACE temp;
GRANT CONNECT, RESOURCE, dba TO ****;
```


### 계정생성 윈도우
Run SQL command Line 실행
```sql
-- 관리자 권한으로 접속
CONN /AS sysdba 

-- 계정 생성
CREATE USER open_api IDENTIFIED BY 1111;

-- 계정 권한 등록
GRANT CONNECT TO open_api;
GRANT RESOURCE TO open_api;
GRANT dba TO open_api;
```