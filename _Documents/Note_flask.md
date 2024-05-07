# flask
## API key 숨기기
### dotenv
#### 환경변수 설정
```python
from dotenv import load_dotenv
load_dotenv()  
```
#### 환경변수 사용
```python
import os
print(os.getenv("kakao_API"))
```
