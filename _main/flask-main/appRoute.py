from flask_restful import Api

def route_app(app):
    api = Api(app)

    # 경로없이 들어오면 정적 파일 보여주기
    from page.Index import Index
    api.add_resource(Index,'/')
    
    from api.getData import getData
    api.add_resource(getData,'/getData')

    from api.getData2 import getData2
    api.add_resource(getData2,'/getData2')
    
    from api.getGeoData import getGeoData
    api.add_resource(getGeoData,'/getGeoData')

    from api.testAPI import testAPI
    api.add_resource(testAPI,'/testAPI')
    

    return api