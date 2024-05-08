
# 1. docker
### 상태 확인
```shell 
sudo docker ps -a
```
### DB, Nginx 열기
```shell
sudo docker start oracle11g
sudo docker start my-nginx
```

# 2. React 빌드 (필요시)
```shell
# npm install
npm run build
```

# 2. Express 수행
```shell
# npm install
# npm install pm2 -g
pm2 start app.js
```
# 3. flask  수행
```shell
# sudo yum update -y
# sudo yum install python3 -y
# sudo yum install python3-pip -y
# pip3 install Flask Flask-Cors flask_restful 
# pip3 install python-dotenv 
# pip3 install geopy
# pip3 install requests

# pip3 install gunicorn
gunicorn --workers 3 --bind 0.0.0.0:5000 app:app
```