export const initialTestState = {
  tabIndex: '1',
  courses: [],
  sideNavExpanded: true
}

export default function testReducer(state = initialTestState, action) {
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
    case 'SET_SIDENAV':
      return {
        ...state,
        sideNavExpanded: !state.sideNavExpanded
      }
    default:
      return state
  }
}
