# 라우터 관련
- 
```js
return <Route>
    <Link to="/detail">
    <Link to="/detail">

    <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
    <Route path="/cart" element={<Cart/>} />
</Route>
```

# 리덕스 설치
<!-- npm install @reduxjs/toolkit react-redux  터미널 설치 -->
- redux store.js(자바스크립트 파일을 만들고) 보관이 가능하다.
- 모든 컴포넌트들이 props 없이 state 공유 가능
- 모든 컴포넌트들이 직접 state에 <App/>, <Detail/>,<Cart>빼서 사용할수 있다
- 리액트 구인시 대부분 Redux 요구


# 파일생성 셋팅
- redux store.js
```js
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { }
}) 
```

- index.js
<!-- <Provider store={store}> 쓰기 -->

 <!-- index.js -->
```js
import { Provider } from 'react-redux'
import store from './store.js'
import { QueryClient, QueryClientProvider } from "react-query"
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvier client={QueryClient}>
    <Provider store ={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvier>
)
```

# 리덕스는 왜 쓰는가?
- 컴포넌트간 state 공유 편해짐
- 모든 state들이 직접 통신해서 갖다 쓰는것이다.

# Redux state 보관하는법

```js
let user = createSlice({
  name : 'user'
  initialState : 'kim'
})


// 이 전체 코드 설명하자면 state 만들고 등록을 한것이다.

export default configureStore({
  reducer: {
    user : user.reducer   // << 등록해야 사용 가능 (많은 컴포넌트들이 빼서 사용가능하다.)
  }
}) 
```


 # Cart.js
 - Redux store 꺼내는법 
 ```js
 import { useSelector } from "react-redux"

function Cart(){
  let a = useSelector((state) => { return state } )
  console.log(a)

  return (생략)
}
```