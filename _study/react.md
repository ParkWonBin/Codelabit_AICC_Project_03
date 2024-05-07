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
    ],
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
import { BrowserRouter } from 'react-router-dom';
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

# 로컬 스토리티지 
개발자도구 Application 에 들어가서 확인할 수 있다.
1.key-Value 형태로 저장 가능
2.5MB까지 문자열만 저장 가능
3.브라우저 청소하기 전까지 반영구적으로 남아 있음

#### 로컬 스토리지가 세션 스토리지와 다른점 
로컬 스토리지는 반영구적으로 데이터를 저장한다.
세션 스토리지는 브라우저를 끄면 날라감.(휘발성)

```js
localStorage.setItem('key','value')
localStorage.getItem('key')
localStorage.removeItem('key')

sessionStorage.setItem('key','value')
sessionStorage.getItem('key')
sessionStorage.removeItem('key')

// 로컬 스토리지는 문자열만 저장되기 때문에 편법으로 
// JSON.stringify(obj_a) 해서 저장함.
// JSON.parse(str_a) 로 꺼내서 사용한다.
```

# react qurey
리액트 쿼리 라이브러리 
- ajax 성공/실패시 html 보여주려먼
- 몇초마다 자동으로 ajax 요청 보여주려면
- 실패시 몇 초 후 요청 재시도 하려면 
- prefetch  하려면
이것도 마찬가지로 철치 후 index.js 에 설정을 해준다.
실시간 sns, 코인거래소, 등등 실시간 프로그램 쓸 때나 사용한다.
```npm install react-query```
리엑트 쿼리 특징으로, 이전에 서버에 요청한 내역 있으면, 
요청 보낼 떄, 미리 이전 요청 결과를 화면에 바로 표시한 후 
해당 요청 결과 응답받으면 해당 응답으로 갱신해주기도 함.
보다 빠르게 화면이 보여지는 느낌을 줄 수 있다.

```js
// index.js
//...
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

```js
//App.js 
//...
let result = useQuery(()=>{
  return axios.get('url').then(a=> a.data)
  // userQuery 사용하면 틈만나면 자동으로 refetch 해준다.
  // 만약에 useQuery 안에서 실패(에러)나면 3번 자동으로 재시도 해준다.

},{staleTime:2000 // 2초마다 자동으로 가져옴. 자동으로 해주지만 간격 설정도 가능.
  }
)
result.data // 성공했을 때 가져오는 데이터 파악 가능
result.isLoading //성공/실패/로딩중 쉽게 파악 가능 
result.error // 실패했을 떄 True가 됨
//...

return (
  <div>
    {result.isLoading && '로딩중'}
    {result.error && '에러남'}
    {result.data && result.data.name }
  </div>
)

```

### 리액트 개발자 도구
componets 탭이 새로 생긴다. props, hooks 에 현재 상태 다 나온다. 
해당 UI가 어떤 컴퍼넌트인지, 몇번쨰 라인에서 사용됬는지 나온다.
성능 검사도 할 수 있다. 일부러 느린 컴퍼넌트 만든 뒤,
리엑트 개발자도구 들어가서 불꽃모양 누르고 녹화 후 화면 변경 시도하면 보인다.
대부분의 성능저하는 서버 응답 기다리는 시간이니 참고바람.

### 리덕스 개발자 도구
크롬확장 앱 중 redux 개발자도 설치하면 전체 state랑 redux 내용 볼 수 있다. 

### laze import 
리엑트는 하나의 JS 파일로 만들기 때문에 로딩 속도가 매우 느리다. 

```js 
import {lazy, Suspence} from 'react'

// 이렇게 쓰면 해당 컴퍼넌트 사용과 무관하게 항상 파일 가져오므로 느려짐.
import Detail from './routes/Detail.js'
import Cart from './routes/Cart.js'

// 이렇게 써야 해당 컴퍼넌트 사용될 때, 그제서야 파일을 가져오므로 로딩 속도가 빠름
const Detail = lazy(()=> import('./routes/Detail.js'))
const Cart = lazy(()=> import('./routes/Cart.js'))

//....
return (
  <div>
    <Suspense fallback={<div>로딩중임</div>}> 
      {/*Detail 함수? 컴퍼넌트 불러오기 전까지, Suspense 컴퍼넌트의 fallback을 임시로 띄워줌*/}
      <Detail shoes={shoes}/>
    </Suspense>>
  </div>
)
```


### 자식 컴퍼넌트의 재랜더링 방지
기본적으로 부모 컴퍼넌트가 재랜더링 되면 자식 컴퍼넌트가 모두 재랜더링 된다.
만약 Child가 성능이 안좋은 컴퍼넌트면 재랜더링 하는데 속도가 느려질 것이다.
```js
import {memo, useState, useMemo} from 'react'
// 이렇게 하면 재랜더링됨
// function Child(){
//   console.log('재렌더링됨')
//   return <div>자식임</div>
// }

// 이렇게 memo 로 감싸면 재랜더링 방지
// memo 가 있으면 꼭 필요할 때만 재렌더링됨
// 정확히는 특정 상황(props 가 변할 때만) 재렌더링 해줌
// 그말은 props가 변했는지 여부를 검사하는데 시간이 든다는 것이므로 꼭 필요할 때만 쓰도록 하자.
let Child = memo(function(){
  console.log('재렌더링됨')
  return <div>자식임</div>
})
function Cart(){
  let state = useSelector(state=>state) // redux 사용
  let dispatch = useDispatch() // redux 사용
  let [cout, setCount] = useState(0)

  // 아니면 이렇게 useMemo 를 써서 Memo 사용과 동일하게 만들 수 있다. dependancy 관리는 이게 편하다.
  let result = useMemo(()=>{return 함수()}, [dependancyList])
  return (
    <div>
      <Child/>
      <button onclick={()=>{setCount(count+1)}}>+</button>
    </div>
  )
}
```


### 성능관련 Transition
1.useState에서 set으로 state 변경 시,
react 18버전 이후부터는 근처에 있는 state 변화는 바로바로 바꾸지 않고 한번에 모아서 처리한다.
2.useTransition 으로 늘니 컴포넌트의 성능을 향상시킬 수 있다.

조작 후 0.2초 이내에 동작이 없으면 사용자는 느린 사이트라고 인지하고 떠나게 된다.
```js
import {useState, useTransition, useDeferredValue} from 'react'

//0값 1만개 생성
let a = new Array(10000).fill(0);

function App(){
  let [name,setName] = useState('')
  let [isPending, startTransition] = useTransition()
  // startTransition 는 그냥 인수로 전달받은 함수의 수행시점을 늦춰준다.
  // 성능이 느린 함수를 늦게 처리하고, 빠른 작업을 먼저 수행하므로 응답이 빨라진 느낌을 준다.
  // isPending 이란, startTransition 가 아직 처리중일 떄 True 이고, 종료되면 False 이다.

  // setter를 인수로 주면서 늦게 처리할 때는 startTransition를 이용하고.
  // getter를 인수로 주면서 늦게 처리할 때는 useDeferredValue를 사용한다.
  let state = useDeferredValue(name)
  // 이렇게 하면 위의 state 라는 변수를 부를 때 마다, name state 가져오는 처리를 나중에 처리하도록 해준다.
  return(
    <div className="App">
      <input onChange={(e)=>{ 
        startTransition(()=>{
          // 해당 state가 변경됨에 따라 화면이 늦게 뜨기 때문에.
          // 중요한 동작을 다 수행한 다음에 해당 함수를 실행하게 하다.
          // 가령 사용자의 키보드 이벤트, 키보드 변화 이벤트에 대한 화면처리를 끝내고.
          // 그 다음에 아래 함수를 실행시키므로, 사용자는 끊김이 없다는 착각을 하게 된다.
          setName(e.target.value)
        })
        }}/>
      {
        isPending? '로딩중' : 
        a.map(()=>{
          return <div>{state} {name}</div>
        })
      }
    </div>
  )
}

```

