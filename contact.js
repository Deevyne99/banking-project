const form = document.getElementById('form')
const fullname = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  const nameValue = fullname.value.trim()
  const emailValue = email.value.trim()
  const messageValue = message.value.trim()

  if (nameValue === '') {
    setError(fullname, 'Name cannot be empty')
  } else if (allLetter(fullname)) {
    setSuccess(fullname, 'success')
  } else {
    setError(fullname, 'Please Enter your Name')
  }

  if (emailValue === '') {
    setError(email, 'email cannot be empty')
  } else if (ValidateEmail(email)) {
    email.setCustomValidity('')
    setSuccess(email, 'success')
  } else {
    email.setCustomValidity('email.@example/com')
    setError(email, 'looks like this is not a valid email')
  }
  if (messageValue === '') {
    setError(message, 'Message cannot be empty')
  } else if (messageLetter(message)) {
    setSuccess(message, 'success')
  } else {
    setError(message, 'Please Enter your Message')
  }
}

function setError(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')
  // add error message inside small
  small.innerText = message

  formControl.className = 'form-controller error'
}
function setSuccess(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')
  // add error message inside small
  small.innerText = message

  formControl.className = 'form-controller success'
}

function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
    return true
  }

  return false
}

function allLetter(fullname) {
  var letters = /^[a-zA-Z\s]*$/g
  if (fullname.value.match(letters)) {
    return true
  } else {
    return false
  }
}

function messageLetter(message) {
  var letters = /^[a-zA-Z\s]*$/g
  if (message.value.match(letters)) {
    return true
  } else {
    return false
  }
}
