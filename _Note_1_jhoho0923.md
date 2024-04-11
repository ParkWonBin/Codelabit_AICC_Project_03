

# 2024.04.11.(목)
주요내용 : 
1. vscode 설정
2. api 권한신청 - OpenAPI 부동상
3. api 권한신청 - 외환 거래 송금 서비스 관련
4. api 사용 - getRTMSDataSvcNrgTrade 테스트(pytohn)
5. 서비스기획 - 외환관련

세부내용 : 
1. vscode 설정
- 다운로드
- 단축키
  - 명령창 : Ctrl+Shift+P
  - 마크다운 미리보기 : [Ctrl+K] + V
- 확장 프로그램 설치
  - Markdown All in One
  - live share

2.api 권한신청 : 
- [국토교통부_상업업무용 부동산 매매 신고 자료](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057267#tab_layer_recommend_data)

- [국토교통부_아파트매매 실거래 상세 자료](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057511)

- [국토교통부_단독/다가구 매매 실거래 자료](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15058022)

- [국토교통부_아파트매매 실거래자료](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057511)

- [국토교통부_아파트 전월세 자료](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15058017)


3.api 권한신청 (외환 거래 송금 서비스 권한 획득 관련 이슈 사항 알려드립니다..)
- 업비트 OpenApi 신분증 확인 되지 않아 OpenAPI 가 사용이 불가하여  현재 권환 획득
하기가 어려움에 있음. 고객 인증 완료후 다시 시도 해 보겠습니다..

4. api 사용 - getRTMSDataSvcNrgTrade 테스트(pytohn)
```python
import requests
import xmltodict

access_key = '보안상 생략'

def get_request_url():
    url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade'
    params = {'serviceKey': access_key, 'LAWD_CD': '11110', 'DEAL_YMD': '201511'}

    response = requests.get(url, params=params)
    return response.text

raw_xml = get_request_url()

# XML을 파싱하여 딕셔너리로 변환
parsed_dict = xmltodict.parse(raw_xml)

# 예쁘게 출력
import json
print(json.dumps(parsed_dict, indent=4, ensure_ascii=False))
```

5. 서비스기획 - 외환관련
외환 (환율) 거래소, 
  대표적인 서비스 : 호가요청, 외한과 관련한 다양한 거래요구 사항이 서비스 가 주된 목적 (달러, 원거래)
  이종통화, 원기타동화거래, 외국환 중개,
  해외중개사 or 네트워크가 제공하는 API를 통해 시스템을 
  구축한다는 의미라고 추론해 볼 수있음.
- 외환 API는 ‘서울 외환시장’을 의미한다. 
- 핵심은 ‘원달러거래’ 이다. 
  외환전자거래 시스템이라고 예측 해볼 수 있다. 
- 증권사가 사용하는 플랫폼을 은행 시스템에 연결하는 
  서비스를 구축하는 사이트도 있다. 
- 위탁 중개 허용 서비스라고 볼 수 도 있을 것이다, 
  환전, 송금 서비스 공급자 제공 기능들을..
- 고객의 송금 대금 , 수납 또는 고객에게 송금되는 대금 서비스등을 목적을 두곤 한다.
- 금융 거래를 주 목적으로 둔 거래현황 모니터링 서비스가 
  중요 업무에 속한다. 
- 거래 절차 간소화가 기본방향이다. 
- 사후 감독 및 감리역량 강화도 통합 플랫폼 서비스에서 
  필요한 부분이라고 할 수 있을것이다. 
- 환전 업무에 따라 필요로한 사항은 환전 사무의 위 수탁, 
- 허용이라고 봐야하는데 그 중점엔 환전신청, 대금, 수령등
  있다.
- 해외송금 플랫폼으로써 고객에게 송금 서비스를  제공한다. 
- 소액 송금 서비스 이용할 수 있는 기능을 갖 춘 사이트이다.
- 송금의 신청 접수, 송금 대금 수납 전달, 지급 및 교환까지 아우러진 송금 사무 서비스 기반의 플랫폼이다. 
- 계좌를 통한 거래가 가능한 서비스다.
- 계좌간의 거래와 송금 대금 수납 전달을 허용한다.
- 고객이 외화계정에 외화를 송금하면 증권사가 원화로 환전하여 국내 거래소에 투자하도록 한다.
- 금융감독원(금감원)이나 한은(한국은행)에게 고객의 신용관련 정보나 개인정보 동의를 전자 서명으로 증빙하여 
  외환거래 서비스를 이용한다. 
- 전반적으로 핀테크 플랫폼이라고 볼 수있으며, 외환 업무 및 거래현황 모니터링 업무를 주로 제공하는 서비스 플랫폼    
  비지니스 모델이다. 