from flask_restful import Resource

class addData(Resource):
    def get(self):
        # 이 리스트는 실제로 데이터베이스나 다른 저장소를 사용할 때 대체될 수 있습니다.
        data = [
            {"번호": 1, "건물면적": 52.89, "용도지역": "제3종일반주거", "위도": 37.58446, "경도": 126.99869, "주소": "명륜2가", "주소지역": "종로구"},
        ]

        return data


    def add_data(self, new_data):
        # 새 데이터에 '번호' 항목 추가
        new_data['번호'] = len(self.data) + 1
        self.data.append(new_data)
        return self.data