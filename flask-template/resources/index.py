from flask_restful import Resource
from flask import current_app

class index(Resource):
    def get(self):
        return current_app.send_static_file('index.html')