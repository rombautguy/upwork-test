// import axios from 'axios'
import { courses } from './data.js'

// const apiRequest = axios.create({
//   baseURL: "https://test.com/"
// })

// const getHeaders = token => ({
//   Authorization: 'Bearer ' + token
// })

export const api = {
  getCourses: () => {
    return new Promise((resolve, rejects) => {
      resolve(courses)
    })
    // let endPoint = ''
    // return apiRequest.get(endPoint)
  },
  getCourseById: id => {
    return new Promise((resolve, rejects) => {
      resolve(courses.filter(course => course.id === id)[0])
    })
  }
}
