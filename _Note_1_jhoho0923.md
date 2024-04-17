

# 2024.04.11.(목)
주요내용 : 
1. vscode 설정
2. api 권한신청 - OpenAPI 부동산
3. api 권한신청 - 외환 거래 송금 서비스 관련
4. api 사용 - getRTMSDataSvcNrgTrade 테스트(pytohn)
5. 프로젝트 계획
6. 서비스기획 - 외환관련

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

5. 프로젝트 기획 
   아이템, 프로젝트 방향 설정
   레퍼런스 사이트 찾아보기
   페르소나 기법 적용
   사용자 행동변수 도출해보기
   페르소나 만들어보기
   페르소나별 사용자 시나리오 
   만들어보기
   페르소나별 잠재 요구사항 도출하기
 
   API 자동문서화 도구 Swagger에 대해 알아보자.(REST API 자동 문서 도구) 
   [Swagger 관련 URL 주소](https://swagger.io/)
   [외환거래 서비스 및 블록체인 거래소 업비트 OpenAPI 관련주소](https://docs.upbit.com/reference/%EB%B6%84minute-%EC%BA%94%EB%93%A4-1)


  페르소나 기법을 적용하라! 
  인사담당자가 보았을때 뭔가 기술적인 스킬을 어필할 수 있는것이 담당자로 하여금 포트폴리오의 다양한 기술들이 
  적용된 부가 서비스 항목들이 들어간다면 담당자가
  보이기에 긍정적인 시그널을 줄수 있지 않을까? 라고 추론해본다.

  페르소나 기법이란? 니즈를 파악한 후 결여된 항목을 보완, 개선하여 중점 요소를 파악 후 그 해당 사항이나 서비스 및 기능들을  추가하여 결함 및 부족한 부분을 상충하는 행위를 뜻한다. 

  우리가 해야 할 프로젝트의 중심주제는 무엇인가?
  팀 인원들과 각 직무에 관한 회의를 통하여 알아보도록 하자.


  # 프로젝트 방향성을 결정하는데 있어서
  #  고민해 봐야할 사항들..
    아이템 선정이 중요하다.( 컨셉, 주제, 아젠다등..) , 
    프로젝트 방향 
    – 공공사업을 주제로 할것인가?
    – 민간 주도형 서비스를 주제로  할것인가?
    – 수치형 데이터 주제를 가지고 통계자료를 보여줄 수 있는 서비스 방향성을 정할것인가?
    – 교육 서비스 관련 주제로 방향을 잡을것인가?
    – 공익을 목적으로 프로파간다적 세론을 가진 교의 목적의 서비스 인가?
    – 위치 데이터를 가지고 GPS(Grobal Position System)를 
      이용한 기능등이 추가된 위치기반의 웹 종합서비스인가? 
    – 법률적 데이터를 가지고,  다양한 법률 자문을 구할 수 있는 법률 상담 서비스 인가?
    – 대중교통을 이용하는 사용자에게 예상 도착 시간,      
      교통 정보등을 제공 받을수 있는  대중교통 종합 서비스인가? 


6. 서비스기획 - 외환관련
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


7. 부동산 매매 거래 웹 서비스 관련 
   - 일반적으로 거래비용은 거래가액에 비교해서 3% 초반 수준으로 낮다.
   - 부동산 거래 매매에서 비용항목중 가장 큰 비중을 차지하는 부분은 
     바로 중개수수료다. 
   - 부동산 거래의 안전장치를 확보하기 위해 권원보험 및 에스크로우 결재등
      
       