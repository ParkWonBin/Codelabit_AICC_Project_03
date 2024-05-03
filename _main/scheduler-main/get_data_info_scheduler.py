import time
import json
import threading
from testAPI import testAPI

class GetDataInfoScheduler:
    def __init__(self):
        self.api = testAPI()
        self.running = False

    def budong_info_collector(self):
        deal_ymd = time.strftime("%Y%m")
        
        print(deal_ymd)
        try:
            raw_str_json = self.api.get(deal_ymd)
            print(raw_str_json)

            if raw_str_json:
                raw_json = json.loads(raw_str_json)
            # 다른 데이터 처리 로직 추가
            return raw_json
        except json.JSONDecodeError:
            print("JSON decoding 실패")
        except Exception as e:
            print(f"오류 발생: {str(e)}")

    def budong_data_info_collector(self):
        print('\n부동산 정보 수집 스케줄러 동작\n')
        while self.running:
            self.budong_info_collector()
            print('수집완료')
            time.sleep(3600)  # 1시간 주기로 데이터 수집

    def start_scheduler(self):
        self.running = True
        t = threading.Thread(target=self.budong_data_info_collector, daemon=True)
        t.start()

    def stop_scheduler(self):
        self.running = False
        print("스케줄러 종료 중...")

    def print_main_menu(self):
        print('\n1. 부동산 허가 거래정보 예측 데이터 수집 시작')
        print(' 2. 업데이트 예정')
        print('3. 스케줄러 종료')
        print('* 엔터: 메뉴 업데이트\n')

    def run_menu(self):
        while True:
            self.print_main_menu()
            print('아래행에 메뉴입력: ', end=' ')
            selection = input().strip()
            if selection == '':
                continue
            elif selection.isdigit():
                menu_num = int(selection)
                if menu_num == 1:
                    self.start_scheduler()
                elif menu_num == 2:
                    print('업데이트 예정중입니다.')
                elif menu_num == 3:
                    self.stop_scheduler()
                    break
                elif menu_num == 0:
                    continue

if __name__ == "__main__":
    print('<부동산 거래 정보 데이터수집 스케줄러 프로그램 ver1.0>')
    scheduler = GetDataInfoScheduler()
    scheduler.run_menu()