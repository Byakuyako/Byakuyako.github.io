//获取元素
// const  document = window.document
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


//结果显示函数
function showError(input, message){
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

function showSuccess(input){
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

//邮箱验证正则
function isValidEmail(email){
  const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return re.test(String(email))
}

//提取控件关键字
function getKeywords(input){
  return input.placeholder.slice(3)
}

//校验输入内容
function checkRequired(inputArr){
  inputArr.forEach(function (input) {
    // console.log(input.value)
    if (input.value.trim() === '') {  //用trim()方法去除字符串首尾空格
      showError(input, `${getKeywords(input)}为必填项`)
    } else {
      showSuccess(input)
    }
  })
}

//添加事件监听
form.addEventListener('submit', function(e){
  e.preventDefault()

  checkRequired([username, email, password, password2])
})