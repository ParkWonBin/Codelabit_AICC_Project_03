from flask_restful import Resource
from flask import render_template, make_response

class Index(Resource):
    def get(self):
        html = render_template('Index.html')
        
        # make_response를 사용하여 응답 객체 생성
        response = make_response(html)
        response.headers['Content-Type'] = 'text/html'
        return response