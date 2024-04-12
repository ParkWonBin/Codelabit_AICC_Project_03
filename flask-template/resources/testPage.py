from flask_restful import Resource
from flask import render_template, make_response


class testPage(Resource):
    def get(self):
         return make_response(render_template('test_page.html', message='Test Page'))
