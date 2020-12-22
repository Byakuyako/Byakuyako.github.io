const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')
//value是字符串, 用+号饮食转换成Number
let ticketPrice = +movieSelect.value

//更新座位数及总票价
function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  const selectedSeatsCount = selectedSeats.length
  count.innerText = selectedSeatsCount.toString()
  total.innerText = (selectedSeatsCount * ticketPrice).toString()
}

//监听电影下拉框
movieSelect. addEventListener('change', e => {
  ticketPrice = e.target.value
  updateSelectedCount()
})

//绑定座位点击事件, 时间冒泡
container.addEventListener('click', e => {
  // console.log(e.target)
  //使用classList数组的contains方法, 检测数组中是否包含某一项
  if (e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')){
    //使用classList 的toggle方法, 有则删除, 无则加入
    e.target.classList.toggle('selected')
    updateSelectedCount()
  }
})