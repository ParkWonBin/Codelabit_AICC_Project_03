아래 항목대로 문서를 정리하고 리팩토링을 진행합니다.

### React
#### 사용 가능한 변수 저장소 명세
  - `index.html`에서 `<script>` 태그로 불러온 객체
  - 다른 JavaScript 파일에서 가져온 변수, 함수, 객체
  - 컴포넌트 내에서 JavaScript 문법으로 정의한 변수
  - 컴포넌트 내 `useState`로 생성한 state
  - 컴포넌트 내 props로 전달받아 사용하는 state
  - 컴포넌트 내 `useEffect`를 사용한 부수 효과(side effects) 관리
  - 리덕스의 `createSlice`로 만들고 `useSelector`로 전달받은 state
  - 라우터의 `useNavigate` 및 `useLocation`을 사용한 state 관리
  - 브라우저의 URL에서 `useSearchParams`으로 추출한 변수
  - 브라우저의 cookie에 저장된 JSON 변수
  - 브라우저의 local storage에 저장된 JSON 변수
  - 브라우저의 session storage에 저장된 JSON 변수
  - 서버 캐시에 대해 CRUD 작업을 수행하는 변수
  - 서버를 통해 데이터베이스에 대해 CRUD 작업을 수행하는 변수
  - Context API를 사용하여 컴포넌트 트리 전체에 걸쳐 변수 전달
  - 사용자 정의 Hooks를 통한 로직 및 state 관리
  - `React Query`를 사용한 서버 상태 관리
    - 서버 상태 데이터를 캐시하고, 데이터 동기화 및 업데이트 관리
    - 데이터 로딩 상태와 에러를 효과적으로 핸들링

#### React.memo 사용
  - `React.memo`로 감싼 컴포넌트
    - 컴포넌트의 props가 변경되지 않는 한 리렌더링을 방지함으로써 성능 최적화 가능
## 파일 구조 및 네이밍 규칙 명세
프로젝트의 호출 순서와 UI 트리 구조에 따라 폴더 구조를 구성하는 방법에 대한 설명입니다.

--- 

### 네이밍 규칙
- **숫자 코드**와 **부모 컴포넌트의 이름**을 사용하여 폴더를 구성합니다.
- **숫자 코드 정의**:
  - 코드 구성: 3글자 코드로, [0-9a-zA-Z] 범위의 문자를 사용합니다.
  - 자리 의미: 코드 내 위치는 UI 트리 구조상의 깊이를 나타냅니다.
  - 숫자 의미: '0'번에서 시작하는 컴포넌트의 자식 컴포넌트는 [1-9a-zA-Z]로 이어지는 넘버링을 사용합니다.
  - 숫자 부여: UI에서의 호출 순서나 개발된 순서에 따라 숫자를 부여합니다.
- **폴더 예시**:
  - App 컴포넌트의 직계 자식 컴포넌트는 `000_App` 폴더에 저장합니다.
  - `000_App` 폴더 내의 Main 컴포넌트의 직계 자식은 `100_Main` 폴더에 저장합니다.
  - `100_Main` 폴더 내의 컴포넌트들의 부모는 `000_App/Main.js` 입니다.
  - `xx0_Test` 폴더 내의 컴포넌트들의 부모는 `x00_/Test.js` 입니다.

### 예시 폴더 구조
- `000_App`
  - Navigator.js
  - Main.js
  - Footer.js
  - Chatbot.js
- `100_Main`
  - About.js
  - Login.js
  - Board.js
  - Static.js
  - Map.js
- `110_Login`
  - UserLoginForm.js
  - UserCreateForm.js
  - UserUpdateForm.js
  - UserDeleteForm.js
  - OauthKakaoForm.js
- `120_Board`
  - TablePostList.js
  - PostCreateForm.js
  - PostReadDetail.js
  - PostUpdateForm.js
- `121_PostReadDetail`
  - PostDetailView.js
  - CommentCreateForm.js
  - CommentDisplayTree.js
- `130_Static`
  - FormGetData.js
  - DisplayTable.js
  - DisplayPieChart.js
  - DisplayKakaoMap_130.js
- `140_Map`
  - SearchAddressForm.js
  - DisplayKakaoMap_140.js
- `200_Chatbot`
  - ChatInputForm.js
  - DisplayMessages.js
- `Axios_Express`
  - ...
- `Axios_Flask`
  - ...
- `util`
  - ...
이 구조는 `component` 폴더를 1단계 깊이로 유지하여 각 컴포넌트에서 `../fetch` 폴더를 통해 서버나 데이터베이스로의 요청을 처리하는 함수들을 쉽게 접근할 수 있게 합니다. 또한, `../util` 폴더에는 재사용 가능한 순수 함수를 저장하여 효율적인 코드 관리를 돕습니다.


### express 
passport 써보기
비밀번호 암호화해서 집어넣
JWT, Session 방식 로그인 인증 자세히 알아보기
결제모듈 관련해서도 한번 잘 조사해보기
