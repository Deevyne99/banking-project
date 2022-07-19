const prevBtn = document.querySelectorAll('.prev-btn')
const nextBtn = document.querySelectorAll('.next-btn')
const progress = document.getElementById('progress')
const formSteps = document.querySelectorAll('.form-step')
const form = document.getElementById('form')
const progStep = document.querySelectorAll('.progress-step')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const phone = document.getElementById('phone-number')
const DOB = document.getElementById('DOB')
const gender = document.getElementById('gender')
const state = document.getElementById('state')
const city = document.getElementById('city')
const address = document.getElementById('address')
const account = document.getElementById('account-type')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const phoneValue = phone.value.trim()
  const DOBValue = DOB.value.trim()
  const genderValue = gender.value.trim()
  const stateValue = state.value.trim()
  const cityValue = city.value.trim()
  const addressValue = address.value.trim()
  const accountValue = account.value.trim()
  if (firstNameValue === '') {
    setError(firstName, 'First Name is required')
  } else if (allLetter(firstName)) {
    setSuccess(firstName, 'success')
  } else {
    setError(firstName, 'Invalid input')
  }

  if (lastNameValue === '') {
    setError(lastName, 'Last Name is required')
  } else if (allLetter(lastName)) {
    setSuccess(lastName, 'success')
  } else {
    setError(lastName, 'Invalid input')
  }

  if (emailValue === '') {
    setError(email, 'email is required')
  } else if (ValidateEmail(email)) {
    email.setCustomValidity('')
    setSuccess(email, 'success')
  } else {
    email.setCustomValidity('email.@example/com')
    setError(email, 'looks like this is not a valid email')
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
  if (DOBValue === '') {
    setError(DOB, 'Date of Birth required')
  } else {
    setSuccess(DOB, 'success')
  }
  if (genderValue === '') {
    setError(gender, 'Gender is required')
  } else {
    setSuccess(gender, 'success')
  }
  if (stateValue === '') {
    setError(state, 'state is required')
  } else if (allLetter(state)) {
    setSuccess(state, 'success')
  } else {
    setError(state, 'Invalid input')
  }
  if (cityValue === '') {
    setError(city, 'City is required')
  } else if (allLetter(city)) {
    setSuccess(city, 'Invalid input')
  } else {
    setSuccess(city, 'success')
  }
  if (accountValue === '') {
    setError(account, 'Account is required')
  } else {
    setSuccess(account, 'success')
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

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
    return true
  }

  return false
}

function allLetter(lastName) {
  var letters = /^[A-Za-z]+$/
  if (lastName.value.match(letters)) {
    return true
  } else {
    return false
  }
}

function allLetter(state) {
  var letters = /^[A-Za-z]+$/
  if (state.value.match(letters)) {
    return true
  } else {
    return false
  }
}

function allLetter(city) {
  var letters = /^[A-Za-z]+$/
  if (city.value.match(letters)) {
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

let formStepNum = 0

nextBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepNum++
    updateForm()
    updateProgressBar()
  })
})
prevBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepNum--
    updateForm()
    updateProgressBar()
  })
})

function updateForm() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains('form-active') &&
      formStep.classList.remove('form-active')
  })
  formSteps[formStepNum].classList.add('form-active')
  console.log(formStepNum)
}
function updateProgressBar() {
  progStep.forEach((progressStep, indx) => {
    if (indx < formStepNum + 1) {
      progressStep.classList.add('progress-step-active')
    } else {
      progressStep.classList.remove('progress-step-active')
    }
  })
  const progressActive = document.querySelectorAll('.progress-step-active')

  progress.style.width =
    ((progressActive.length - 1) / (progStep.length - 1)) * 100 + '%'
}

function allnumber(phone) {
  var letters = /^[0-9]*$/
  if (phone.value.match(letters)) {
    return true
  } else {
    return false
  }
}
