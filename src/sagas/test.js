import { put } from 'redux-saga/effects'
import { api } from '../services/api'

export const getCourses = function* getCourses(action) {
  console.log('saga')
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
