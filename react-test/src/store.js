import { configureStore, createSlice } from '@reduxjs/toolkit'


let user =  createSlice({
    name : 'user1', // userState() 역할임
    initialState : {userId : ''}, // state하나를 slice라고 부름
      reducers : {
    changeName(state, action){
      const userId = action.payload
      return {userId : userId}
    }
  }
})

    export let { changeName } = user.actions  // user.actions  state 변경함수들 남음

// state 만들고 등록 
export default configureStore({
    reducer: {
        user : user.reducer // << 등록해야 사용 가능 
        // (많은 컴포넌트들이 빼서 사용가능하다.)

  }
}) 