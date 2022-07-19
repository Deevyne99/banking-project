const form = document.getElementById('form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const address = document.getElementById('address')
const phone = document.getElementById('phone-number')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const addressValue = address.value.trim()
  const phoneValue = phone.value.trim()

  if (firstNameValue === '') {
    setError(firstName, 'First Name cannot be empty')
  } else if (allLetter(firstName)) {
    setSuccess(firstName, 'success')
  } else {
    setError(firstName, 'Please Enter your First Name')
  }

  if (lastNameValue === '') {
    setError(lastName, 'Last Name cannot be empty')
  } else if (allLett(lastName)) {
    setSuccess(lastName, 'success')
  } else {
    setError(lastName, 'Please Enter your Name')
  }
  if (phoneValue === '') {
    setError(phone, 'Phone Number Required')
  } else if (allnumber(phone)) {
    if (phoneValue.length !== 11) {
      setError(phone, 'Phone Number should be 11 digits')
    } else {
      setSuccess(phone, 'success')
    }
  } else {
    setError(phone, 'invalid input')
  }
  if (addressValue === '') {
    setError(address, 'Address cannot be empty')
  } else if (alladdress(address)) {
    setSuccess(address, 'success')
  } else {
    setError(address, 'Please Enter your Address')
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

function allLetter(firstName) {
  var letters = /^[A-Za-z]+$/
  if (firstName.value.match(letters)) {
    return true
  } else {
    return false
  }
}
function allLett(lastName) {
  var letters = /^[A-Za-z]+$/
  if (lastName.value.match(letters)) {
    return true
  } else {
    return false
  }
}

function alladdress(address) {
  var letters = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/
  if (address.value.match(letters)) {
    return true
  } else {
    return false
  }
}

function allnumber(phone) {
  var letters = /^[0-9]*$/
  if (phone.value.match(letters)) {
    return true
  } else {
    return false
  }
}
