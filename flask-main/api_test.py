import requests
import xmltodict

access_key = '68raIsLdC4XXFhjBlvluVMt+3UTguCEPFuYMoCNKbJPeIMVejtK1JojcJCcz78KXkSh0BIV4DdqqREyNIkM7yA=='

def get_request_url():
    url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcNrgTrade'
    params = {'serviceKey': access_key, 'LAWD_CD': '11110', 'DEAL_YMD': '201511'}

    response = requests.get(url, params=params)
    return response.text

raw_xml = get_request_url()
parsed_dict = xmltodict.parse(raw_xml)

# 예쁘게 출력
import json
print(json.dumps(parsed_dict, indent=4, ensure_ascii=False))