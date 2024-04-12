from flask_restful import Api

def route_app(app):
    api = Api(app)

    # 경로없이 들어오면 정적 파일 보여주기
    from resources.index import index
    api.add_resource(index, '/')

    # 웹페이지 보여줄거 있으면 이렇게 처리
    from resources.testPage import testPage
    api.add_resource(testPage, '/testPage')

    # API 보여줄거 있으면 이렇게 처리
    from api.testAPI import testAPI
    api.add_resource(testAPI, '/testAPI')

    return None