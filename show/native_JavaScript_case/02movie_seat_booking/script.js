const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')
//value是字符串, 用+号饮食转换成Number
let ticketPrice = +movieSelect.value


//初始化渲染座位和影片
populateUi()

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
  localStorage.setItem('selectedMovieIndex', movieIndex)
  localStorage.setItem('selectedMoviePrice', moviePrice)
}

//封装函数获取本地数据并渲染样式
function populateUi(){
  //获取座位信息
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
  if (selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1){
        seat.classList.add('selected')
      }
    })
  }
  //获取影片信息
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
  console.log(selectedMovieIndex)
  if (selectedMovieIndex !== null){
    movieSelect.selectedIndex = selectedMovieIndex
  }
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
//设置初始座位和总票价
updateSelectedCount()