const form = document.getElementById('form')
const oldPassword = document.getElementById('old-password')
const newPassword = document.getElementById('new-password')
const confirmNew = document.getElementById('confirm-password')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  const oldPasswordValue = oldPassword.value.trim()
  const newPasswordValue = newPassword.value.trim()
  const confirmPasswordValue = confirmNew.value.trim()
  if (oldPasswordValue === '') {
    setError(oldPassword, 'Old password required')
  } else {
    setSuccess(oldPassword, 'success')
  }

  if (newPasswordValue === '') {
    setError(newPassword, 'New password required')
  } else {
    setSuccess(newPassword, 'success')
  }
  if (confirmPasswordValue === '') {
    setError(confirmNew, 'Old password required')
  } else if (confirmPasswordValue === newPasswordValue) {
    setSuccess(confirmNew, 'success')
  } else {
    setError(confirmNew, 'Password does not match ')
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
