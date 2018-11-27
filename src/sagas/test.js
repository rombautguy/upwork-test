import { put } from 'redux-saga/effects'
import { api } from '../services/api'

export const getCourses = function* getCourses(action) {
  try {
    const response = yield api.getCourses()
    response
      ? yield put({
          type: 'GET_COURSES_SUCCEEDED',
          data: response
        })
      : yield put({ type: 'GET_COURSES_FAILURE' })
  } catch (e) {
    yield put({ type: 'GET_COURSES_FAILURE' })
  }
}

export const getCourseById = function* getCourseById(action) {
  try {
    const response = yield api.getCourseById(action.payload)
    response
      ? yield put({
          type: 'GET_COURSE_BY_ID_SUCCEEDED',
          data: response
        })
      : yield put({ type: 'GET_COURSES_FAILURE' })
  } catch (e) {
    yield put({ type: 'GET_COURSES_FAILURE' })
  }
}
