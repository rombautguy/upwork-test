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

export function getCourseById(id) {
  return {
    type: 'GET_COURSE_BY_ID',
    payload: id
  }
}

export function setSideNav() {
  return {
    type: 'SET_SIDENAV'
  }
}
