import axios from 'axios'

const API_BASE = 'https://cnodejs.org/api/v1/'

const handleStatus = (res) => {
  return res.data
}
const handleResponse = (res) => {
  if (res.success) {
    return Promise.resolve(res.data)
  } else {
    return Promise.reject(res)
  }
}
const get = (url, params = {}) => {
  let queryString = []

  Object.keys(params).forEach(key => params[key] && queryString.push(`${key}=${params[key]}`))
  if (queryString.length > 0) {
    queryString = queryString.join('&')
    url += `?${queryString}`
  }

  url = API_BASE + url

  return axios
    .get(url)
    .then(handleStatus)
    .then(handleResponse)
    .catch(error => {
      console.log(error)
    })
}
const post = (url, params = {}) => {
  url = API_BASE + url
  return axios
    .post(url, params)
    .then(handleStatus)
    .then(handleResponse)
    .catch(error => {
      console.log(error)
    })
}

module.exports = {
  getTopicsList (tab) {
    return get('topics', {tab})
  },

  getTopicsPost (id) {
    return get('topics/' + id)
  }
}
