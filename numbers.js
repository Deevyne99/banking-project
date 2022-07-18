const form = document.getElementById('form')
const activate = document.getElementById('activate')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  const activateValue = activate.value.trim()
  if (activateValue === '') {
    setError(activate, 'Account Number Required')
  } else if (allLetter(activate)) {
    if (activateValue.length !== 11) {
      setError(activate, 'Account Number should be 11 digits')
    } else {
      setSuccess(activate, 'success')
    }
  } else {
    setError(activate, 'invalid input')
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
  small.innerText = message
  formControl.className = 'form-controller success'
}

function allLetter(lastName) {
  var letters = /^[0-9]*$/
  if (activate.value.match(letters)) {
    return true
  } else {
    return false
  }
}
