export const initialTestState = {
  tabIndex: '1',
  courses: []
}

export default function testReducer(state = initialTestState, action) {
  console.log('reducer', action)
  switch (action.type) {
    case 'SET_CURRENT_TAB':
      return {
        ...state,
        tabIndex: action.payload
      }
    case 'GET_COURSES_SUCCEEDED':
      return {
        ...state,
        courses: action.data
      }
    default:
      return state
  }
}
