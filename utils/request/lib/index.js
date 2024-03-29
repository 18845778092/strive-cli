const axios = require('axios')

const BASE_URL = process.env.STRIVE_CLI_BASE_URL || 'http://localhost:3000'

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

request.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(err)
  }
)

module.exports = request
