// dispatch({ type: 'ADD' , data: 새로운 데이터 }) -> actioin = 1
export function userReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data]
    case 'REMOVE':
      return state.filter(user => user.id !== action.data.id)
    default:
      // 어떤 작업을 수행하다 에러가 났는지 확인
      throw new Error(`${action.type}`)
  }
}
