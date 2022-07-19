// 查找 class 为 container 的元素下面 ，class 为 panel 的元素
const panelItems = document.querySelectorAll(".container > .panel");
// 原代码
// panelItems.forEach(item => {
//     item.addEventListener('click',() => {
//         [].filter.call(item.parentElement.children,el => el !== item).forEach(el => el.classList.remove('active'));
//         item.classList.add('active')
//     });
// });

// 循环监听点击事件。
panelItems.forEach(item => {
  item.addEventListener('click',syClick);
});

// 1 找出 active
// 2 判断当前点击的是不是 active
// 3. 如果是，return
// 4. 如果不是，去除 active，当前点击的item加 active

// 查找当前正活跃的item
function findActive()  {

  const allItems = document.querySelectorAll(".container > .panel");
  let activeItem = null
  allItems.forEach(item => {
    if (item.classList.contains("active")) {
      activeItem = item
    }
  })
  return activeItem
}

function syClick() {
  console.log("点击事件");
  let active = findActive()
  if (this == active) {
    console.log("已激活");
    return
  }
  active.classList.remove("active")
  this.classList.add("active")

}