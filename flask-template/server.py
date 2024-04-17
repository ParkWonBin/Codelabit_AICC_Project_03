# init 에서 설정한 Flask 객체 가져오기
from init import create_app
app = create_app()

# app.run : Flask 서버 구동, 기본 포트 5000번
if __name__ == "__main__":
    serverConfig = {
        'host': 'localhost',
        'port': 4000, 
        'debug': True
    }
    print( f"서버 실행 |  http://localhost:{serverConfig['port']}")
    app.run(**serverConfig)
