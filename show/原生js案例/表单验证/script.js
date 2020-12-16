//获取元素
// const  document = window.document
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


//输入处理函数
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

//添加事件监听
form.addEventListener('submit', function(e){
  e.preventDefault()
  // console.log(username.value)
  if(username.value === ''){
    showError(username, '用户名为必填项')
    console.log(1)
  }else{
    showSuccess(username)
    console.log(2)
  }

  if(email.value === ''){
    showError(email, '邮箱为必填项')
    console.log(1)
  }else if (!isValidEmail(email.value)){
    showError(email, '邮箱格式错误')
    console.log(2)
  }else{
    showSuccess(email)

  }

  if(password.value === ''){
    showError(password, '密码为必填项')
    console.log(1)
  }else{
    showSuccess(password)
    console.log(2)
  }

  if(password2.value === ''){
    showError(password2, '确认密码为必填项')
    console.log(1)
  }else{
    showSuccess(password2)
    console.log(2)
  }
})

// console.log(form)