const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')
//value是字符串, 用+号饮食转换成Number
let ticketPrice = +movieSelect.value

//更新座位数及总票价
function updateSelectedCount(){
  //获取已选座位的数组
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  //map()方法会像forEach()那样遍历一个数组, 然后对每项处理后返回一个新的数组
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

  const selectedSeatsCount = selectedSeats.length
  count.innerText = selectedSeatsCount.toString()
  total.innerText = (selectedSeatsCount * ticketPrice).toString()
}

//保存电影索引值和票价
function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('SelectedMovieIndex', movieIndex)
  localStorage.setItem('selectedMoviePrice', moviePrice)
}

//监听电影下拉框
movieSelect. addEventListener('change', e => {
  ticketPrice = +e.target.value
  setMovieData(e.target.selectedIndex, e.target.value)
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