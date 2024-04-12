from flask import Flask
from flask_cors import CORS

# 라우팅 정보는 파일 분리해서 따로 관리
from route import route_app

def create_app():
    # Flask 객체 초기화
    app = Flask(__name__)

    # 정적 파일 디렉토리 설정
    app.static_folder = 'public'
    
    # URL 경로의 prefix 제거
    app.static_url_path = ''

    # CORS 적용
    CORS(app)  

    # 라우터 설정
    route_app(app)

    # 설정 완료된 객체 리턴
    return app
