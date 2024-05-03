# from ~ inport 는 현재 프로젝트 폴더/파일 확인 후 없으면 모듈 찾아 봄. 이름 안겹치게 할 것.
from appInitSetting import create_app
from appRoute import route_app
from dotenv import load_dotenv

load_dotenv()  # .env 파일 로드
app = create_app()
api = route_app(app)

CONFIG = {
    'host': 'localhost',
    'port': 5001, 
    'debug': True
}

# app.run : Flask 서버 구동, 기본 포트 5000번
if __name__ == "__main__":
    print( f"서버 실행 |  http://localhost:{CONFIG['port']}")
    app.run(**CONFIG)
