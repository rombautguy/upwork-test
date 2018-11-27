export function setCurrentTab(tabIndex) {
  return {
    type: 'SET_CURRENT_TAB',
    payload: tabIndex
  }
}

export function getCourses() {
  return {
    type: 'GET_COURSES'
  }
}
