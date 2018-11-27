import { takeLatest } from 'redux-saga/effects'
import { getCourses, getCourseById } from './test'

function* mySaga() {
  yield takeLatest('GET_COURSES', getCourses)
  yield takeLatest('GET_COURSE_BY_ID', getCourseById)
}

export default mySaga
