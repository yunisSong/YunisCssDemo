import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://mockapi.eolink.com/Pmb3GSYa04906aabe09e922807cd33cf458f15361292ff9',
  timeout: '2000'
})

export const post = (url, data = {}) => {
  console.log(url)
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'content-type': 'application/json'
      }
    }).then((resonse) => {
      resolve(resonse)
    }, (err) => {
      reject(err)
    })
  })
}

export const get = (url, data = {}) => {
  console.log(url)
  return new Promise((resolve, reject) => {
    instance.get(url, data, {
      headers: {
        'content-type': 'application/json'
      }
    }).then((resonse) => {
      resolve(resonse)
    }, (err) => {
      reject(err)
    })
  })
}
