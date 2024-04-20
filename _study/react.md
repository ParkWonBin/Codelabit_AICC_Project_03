# 라우터 관련
```js
return <Route>
    <Link to="/detail">
    <Link to="/detail">

    <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
    <Route path="/cart" element={<Cart/>} />
</Route>
```
----
# life cycle 관련
## useEffect 설명
useEffect :
컴퍼넌트가 마운트, 업데이트 될 때 실행되는 훅

useEffect는 랜더링이 모두 끝난 뒤에 실행된다. 
ㄴ html 부터 보여주고 싶을 때, 오래걸리는 코드를 useEffect안에 넣는다.
ㄴ 랜더링 끝난 다음에 수행하니까. 랜더링만 빠르게 쓰게 하려고.

### 어원
왜 useEffect라 하는거, 
부작용(side Effect 에서 온 말이다. 부작용처림 생긴다고.)

### 제약조건
useEffect에 제약조건을 걸게 되면
컴퍼넌트가 변할 때마다 실행되는게 아니라
해당 디펜던시가 변경될 때마다 동작하게 된다.
(useEffect 함수 내 2번째 인자(state 배열))

### clean up function
cleanUpFunc는 
- useEffect 의 return 부분에 입력한다.
- useEffect 돌기 전에 먼저 수행된다.
- mount시 실행 안되고, unmount 시에는 실행됨

```js
let [getCount, setCount] = useState(0)
const cleanUpFunc = () =>{
    console.log("cleanUp");
}

const dependancyList = [getCount]
useEffect(()=>{
    console.log("test");
    // 희안하게 cleanup Function 은 return에 넣는다.
    // useEffect 내부가 돌기 전에 cleanUpFunc이 먼저 수행된다.
    return cleanUpFunc
},dependancyList)
```

##### 타이머 예시코드
```js
let [getCount, setCount] = useState(0)
useEffect(()=>{
    // 2초 뒤에 alert 띄우는 코드
    let a = setTimeout(()=>{
        alert("test")
    },2000)
    return ()=>{
        // 여러번 시행될 때를 대비해서, 
        // uesEffect가 실행되기 전에 기존 timeout 먼저 제거.
        // return에 입력한 cleanUp 함수가 돌고난 다음에야 위의 내용이 실행됨
        clearTimeout(a)
    }
})
```


### 라이프 사이클 내 교통정리
```js
useEffect(()=>{ }) // 재렌더링마다 코드 실행됨
useEffect(()=>{ },[]) // 디팬던시 비어있으므로, 마운트 될 때만 1번 수행됨
useEffect(()=>{ return ()=>{
    // 코드작성
}},[]) // 디팬던시 비었고, useEffect 비었으므로, 언마운트 될 때 1번만 수행됨
```

### 클리너를 이용한 state 변경
리엑트18 이상부터는 automatic batching 이라고, 
근처에서 state 변경이 여러건 있으면, 
호출될 때마다 상태 바꾸는 게 아니라 최종적으로 한 번만 state 바꿔줌.
따라서 Automatic batching 피해서 애니메이션을 이렇게 짤 수 있음

animation 예시
```css
.start {opacity:0}
.end {opacity:1; transition:opacity 0.5s}
```

```js
function animationTag({상태}){
    let [fade, setFade] = useState('')
    
    useEffect(()=>{
        let a = setTimeout(()=>{setFade('end')},10)
        return ()=>{
            clearTimeout(a)
            setFade('')
        }
    },[상태])

    return (<div className={'start'+fade}> 내용 </div>)
    }
```

---
# axios
프로미스 요청 2개 다 완료된 후에 뭔가 하고 싶을 떄
axios 라이브러리에서 json을 js-object나 array로 변환해주기 때문에 그냥 써도 됨.
```js
<button onClick={()=>{
    axios.get('url')
    .then((res)=>{
        let copy = [...shoes, ...res.data];
        // 항상 뭔가 받아아서 state 갱신할 때는 복사본 만들어서 하는 게 좋음.
        setShoes(copy);
    })

    // 라이브러리 안쓰고 하는법
    fetch('url1')
    .then(res=>res.json) // 직접 사용하면 json 변환 직접 해줘야해서 귀찮긴함.
    .then(data=>{ 
        // 작업할 내용ㅇ
     })


    Promise.all([ axios.get('/url1'), axios.get('/url2')])
    .then((res)=>{
        //do something
    })

}}>

```
---
# props 쓰기 싫을 때
1. constext API 사용
2. Redux 등 외부 라이브러리 사용

constext API 단점 : 
- 스태이트 변경 시 불필요한 렌더링이 많이 됨
- 다른 컴퍼넌트에서 해당 스테이트 재사용하고 싶을 때 이슈됨

## constext API 사용법
##### App.js
App.js에서 설정 필요
```js
import {createContext, useState} from 'react'
//...

export let Context1 = createContext()

function App(){
    let [test,setTest] = useState("")
    //...
    <Context1.Provider value={{공유를원하는State들,test}}>
        <Test> 내부 컴퍼넌트들에서 해당 state 사용.</Test>
    </Context1.Provider>
}

```
##### components/Test.js
```js
//...
import {useContext, useState} from 'react'
import {Context1} from './../App.js'

function Test(porps){
    const {test} = useContext(Context1) // 여기 객체로 state들 들어감
}
```


## Redux
Redux 사용하면 컴포넌트들이 props 없이 state 공유 가능
redux_store.js 파일 하나 넣고, 거기에서 state를 모두 관리하는 것임
react 구인시 redux 요구하는 경우가 많다.

##### store.js
```js
import { configureStore, createSlice } from '@reduxjs/toolkit'
// 입력 예시
let user = createSlice({ // useState 만들듯이 하나 만들면 됨
    name:'name',
    initialState : 'kim'
    // 조회만 할거면 이렇게 설정해도 무방
})
let stock = createSlice({ // useState 만들듯이 하나 만들면 됨
    name:'stock',
    initialState : [
        {'id':0, 'name':'상품A', 'amount':2},
        {'id':1, 'name':'상품B', 'amount':4},
    ]
    reducer:{ // 수정 필요시 setter 함수를 여기에 넣어놓는다. setter 여러개 만들 수 있음.
        increse(state, action){
            // 첫째 인수는 해당 State의 값.(this같은 느낌)
            // 둘쨰 인수 부터가 밖에서 입력받는 인수.
            // 수정은 바로 접근해서 수정 가능 
            const targetId = action.payload
            const idx = state.findIndex((x)=>{return x.id === targetId})
            state[idx].amount += 1
            // payload 를 써야 dispatch에서 전달받은 인자의 값을 가져올 수 있음.
            return 
        }
    }
})
// 이렇게 외부로 내보내줘야 밖에서 쓸 수 있음.
// actions에는 해당 Slice의 모든 reducer (setter)가 key:value로 있음.
export {increse} = stock.actions

export default configureStor({
    reducer : {
        user: user.reducer,
        stock: stock.reducer
    }
})
```

##### index.js
```js
//...
// 초기 설정
import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BorowerRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import store from './store.js';

const root = ReactDOM.createRoot(documnet.getElementById('root'));
root.render(
    //<React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />
            {/*이렇게 세팅하면 App과 모든 자식은 store 사용 가능.*/}
        </BrowserRouter>
    </Provider>
    //</React.StrictMode>
)
```
##### componets/Test.js
```js
// 사용 예시 
import {useSelector, useDispatch} from 'react-redux'
import {increse} from './../store.js';

function Test(){
    let state = useSelector((state) => {return state})
    let dispatch = useDispatch()
    
    return (
    <div>
        <button onclick={()=>{dispatch(increse(1))}}> 증가 </button>
    </div>
    )
}
```

# if문 페턴
```js 
// 1. 컴퍼넌트 안에서 
function Component() {
  if ( true ) {
    return <p>참이면 보여줄 HTML</p>;
  } 
  return null;
} 

// 2. 삼항연산자
function Component() {
  return (
    <div>
      {
        1 === 1
        ? <p>참이면 보여줄 HTML</p>
        : null
      }
    </div>
  )
} 

// 3. && 연산자로 if 역할 대신하기
function Component() {
  return (
    <div>
      { 1 === 1 && <p>참이면 보여줄 HTML</p> }
    </div>
  )
}

// 4. switch / case 조건문
function Component2(){
  var user = 'seller';
  switch (user){
    case 'seller' :
      return <h4>판매자 로그인</h4>
    case 'customer' :
      return <h4>구매자 로그인</h4>
    default : 
      return <h4>그냥 로그인</h4>
  }
}

// 5. object/array 자료형 응용 
var 탭UI = { 
  info : <p>상품정보</p>,
  shipping : <p>배송관련</p>,
  refund : <p>환불약관</p>
}

function Component() {
  var 현재상태 = 'info';
  return <div>{탭UI[현재상태]}</div>
} 
```
