
const text = String.fromCodePoint(0x20BB7)
for (const i of text) {
  console.log(i)
}

const basket = {
  count: '',
  onSale: ''
}
// $('#result') jqurery 查找ID 为 result 的元素
// $('#result').append(`
//   There are <b>${basket.count}</b> items
//    in your basket, <em>${basket.onSale}</em>
//   are on sale!
// `)
''.append(
`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`)

function fn () {
  return 'Hello World'
}
''.append(
`foo ${fn()} bar`
)

const func = (name) => `Hello ${name}!`
func('Jack') // "Hello Jack!"

// https://es6.ruanyifeng.com/#docs/function
