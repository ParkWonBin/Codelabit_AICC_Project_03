# 0. DB 설정 및 npm 다운로드
### npm 다운로드
```
sudo yum install -y nodejs
```

### 도커 설치 및 로그인
```shell
# Docker 버전 확인
docker -v

# 없다면 설치
sudo yum update -y
sudo yum install docker -y
sudo service docker start

# 최신 버전 리눅스 시스템의 시스템 관리자로 서비스(데몬) 관리 
# 주로 CentOS 7이상, Ubuntu 15.0.4 이상에서 사용한다.
sudo systemctl start docker

# Docker 서비스가 시스템 부팅 시 자동으로 시작되도록 설정하는 명령어
sudo systemctl enable docker

# Docker Hub에 로그인하기 위한 명령 | sudo 안하면 로그인 안됨
sudo docker login
# Username: Docker Hub 가입했을 때 유저 이름
# Password: 기억 안나면 hub.docker.com 에서 계정정보 재설정
# https://hub.docker.com/
```

### 도커로 oracle 11g 설치
```shell
# 터미널 위치 : [ec2-user@ip-172-x-x-x ~]$
# 오라클 이미지를 Docker Hub에서 검색합니다.
sudo docker search oracle-xe-11g

# 검색된 이미지를 다운로드합니다.
sudo docker pull jaspeen/oracle-xe-11g

# 다운로드한 이미지를 확인합니다.
sudo docker image ls

# Oracle 데이터베이스를 실행하기 위해 컨테이너를 생성하고 포트를 연결합니다.
sudo docker run --name oracle11g -d -p 1521:1521 jaspeen/oracle-xe-11g
sudo docker start oracle11g

# 생성한 컨테이너에 접속하여 내부로 진입합니다.
sudo docker exec -it oracle11g bash

# 컨테이너 내부로 진입후 터미널 위치를 확인하세요.
# docker(root)의 오라클 컨테이너(084b14536100-컨테이너 생성시 랜덤으로 부여됨)
```

### 도커로 oracle에서 계정 생성 및 외부 접근 권한 설정

```shell
# 터미널 상태 : [ec2-user@ip-172-x-x-x ~]$
# AWS EC2 인스턴스의 host 계정 상태입니다. 
# docker > oracle 컨테이너로 진입합니다. 
sudo docker exec -it oracle11g bash

# 터미널 상태 : root@084b14536100: 
# 여기는 docker(root)의 오라클 컨테이너(084b14536100) 내부입니다.
# 'su' 명령어(switch user)를 사용하여 사용자를 변경합니다.
su - oracle

# 터미널 상태 : oracle@084b14536100: 
# sysdba 계정으로 sqlpus 프로그램에 진입합니다.
sqlplus / as sysdba

# 계정 생성 (*은 삭제하고 내용 넣으세요.)
CREATE USER *계정명* IDENTIFIED BY *비번* DEFAULT TABLESPACE users TEMPORARY TABLESPACE temp;
GRANT CONNECT, RESOURCE, dba TO *아이디*;

# AWS에서 보안>정책 에서 1521 포트 0.0.0.0 으로 열어놓으면 접근 가능.
```

# 1. React 프로젝트 빌드
```shell
# React 프로젝트로 이동
## 프로젝트의 package.json 에 설정된 모든 모듈 다운로드
npm install
## react 개발한거 html,css,js로 출력
npm run build
```

# 2. Express 수행
node 프로세스 수행
```bash
# Express 프로젝트로 이동
## 프로젝트의 package.json 에 설정된 모든 모듈 다운로드
npm install 
## pm2 다운로드
npm install pm2 -g
pm2 start app.js --name myapp
```

# 3. python 프로젝트 수행
```bash
# Flask 프로젝트로 이동
sudo yum update -y
sudo yum install python3 -y
sudo yum install python3-pip -y

# 프로젝트 관련 라이브러리 다운로드
pip3 install Flask Flask-Cors flask_restful 
pip3 install python-dotenv 
pip3 install requests
pip3 install geopy

# 프로젝트 수행시키기
pip3 install gunicorn
sudo lsof -i:5000
gunicorn --workers 3 --bind 0.0.0.0:5000 app:app
```

# 4. Nginx 설정

### Nginx 설치
```shell
# nginx 이미지 다운로드
sudo docker pull nginx

# 80,443 포트로 실행
sudo docker run -d --name my-nginx -p 80:80 -p 443:443 my-nginx
```

### Nginx 실행
```bash
# 생성한 nginx 컨테이너 실행
sudo docker start my-nginx

# nginx 들어가기
sudo docker exec -it my-nginx bash

# vim 다운로드
apt-get update
apt-get install vim -y

# 서버 설정 수정하기 (엔드포인트에 따른 root 경로 지정)
vim etc/nginx/conf.d/default.conf
```

### 
```conf
server {
    listen 443 ssl;
    server_name aicc3.wbpark.app;

    ssl_certificate 도커_컨태이너_경로/fullchain.pem;
    ssl_certificate_key 도커_컨태이너_경로/privkey.pem;

    # HSTS 설정
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    location / {
            proxy_pass http://본인AWS내부IP:4000;
    }

}
```

### Nginx 재실행
```shell
# 헬스체크
nginx -t

# nginx 설정 갱신 요청
nginx -s reload

# nginx 컨테이너에서 host(AWS EC2 인스턴스)위치로 탈출
exit

# 관리자 권한으로 해당 컨테이너 재실행
sudo docker restart my-nginx
```
