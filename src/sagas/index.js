import { takeLatest } from 'redux-saga/effects'
import { getCourses } from './test'

function* mySaga() {
  yield takeLatest('GET_COURSES', getCourses)
}

export default mySaga
