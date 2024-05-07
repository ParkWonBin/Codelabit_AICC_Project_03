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


<!-- state들을 보관하는 파일 -->
```js 
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { }
}) 
``` 
- index.js가서
<!-- <Provider store={store}> 쓰기 -->

```js
import { Provider } from "react-redux";
import store from './store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
); 
```

# 리덕스는 왜 쓰는가?
- 컴포넌트간 state 공유 편해짐
- 모든 state들이 직접 통신해서 갖다 쓰는것이다.

# Redux state 보관하는법

```js
import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({ // userState() 역할임
  name : 'user',
  initialState : 'kim' // state하나를 slice라고 부름
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

 - Redux store 변경하는법
```js
let user = createSlice({
  name : 'user',
  initialState : 'kim',
  reducers : {
    changeName(state){
      return 'john ' + state
    }
  }
}) 
// user.actions // state 변경함수들 남음
export let {changeName} = user.actions // 만든 함수 export 해야함
  ```


  # Redux statwe가 object/array일 경우 변경하는법
  ```js
  let user = createSlice({
  name : 'user',
  initialState : {name : 'kim', age : 20}
  reducers : {
    changeName(state){
      state.name = 'park'
    },
    increase(state){
      state.age += 1
    },
  }
}) 
```


# 데이터 바인딩
- state만들고 <Cart>보여주기
  
```js

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
})

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
}) 
```

```js
<tbody>
  {
    state.cart.map((a, i)=>
      <tr key={i}>
        <td>1</td>
        <td>{state.cart[i].name}</td>
        <td>{state.cart[i].count}</td>
        <td>안녕</td>
      </tr>
     )
   }
</tbody> 
```

# state가 array/object인 경우 변경방법

- cart.js에서
```js
return(

  <h6>{state.user.name}{state.user.age}의 장바구니</h6> // 버튼 누르면 age가 +1이 되는 기능
  <button onClick={()=>{dispatch(increase())}}>버튼</button>   
  //  state가 object/array면 return 없이 직접 수정 가능
)
```

