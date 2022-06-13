import axios from 'axios'

export const post = (url, data = {}) => {
  console.log(url)
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'https://mockapi.eolink.com/Pmb3GSYa04906aabe09e922807cd33cf458f15361292ff9',
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
