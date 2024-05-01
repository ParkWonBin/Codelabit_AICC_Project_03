from flask_restful import Resource, request
from geopy.geocoders import Nominatim

class getGeoData(Resource):
    def __init__(self):
        self.geolocator = Nominatim(user_agent='chiricuto')

    def post(self):
        reqQuery = request.json.get('query')
        print(reqQuery)
        getData = self.geolocator.geocode(reqQuery)

        # 응답 만들기
        result = {'isFound': False, 'address': '', 'latitude': '', 'longitude': '', 'boundingbox': []}
        if getData:
            result['isFound'] = True
            result['address'] = getData.address
            result['latitude'] = getData.latitude
            result['longitude'] = getData.longitude
            result['boundingbox'] = getData.raw['boundingbox']
        return result
