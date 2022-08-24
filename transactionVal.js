const form = document.getElementById('form')
const accountNumber = document.getElementById('account-number')
const accountName = document.getElementById('account-name')
const amount = document.getElementById('amount')
const cashierId = document.getElementById('cashier-id')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  const acctNumberValue = accountNumber.value.trim()
  const accountNameValue = accountName.value.trim()
  const amountValue = parseFloat(amount.value.trim())
  const cashierValue = cashierId.value.trim()
  if (acctNumberValue === '') {
    setError(accountNumber, 'Account Number Required')
  } else if (allnumber(accountNumber)) {
    if (acctNumberValue.length !== 14) {
      setError(accountNumber, 'Account Number should be 14 digits')
    } else {
      setSuccess(accountNumber, 'success')
    }
  } else {
    setError(accountNumber, 'invalid input')
  }
  if (accountNameValue === '') {
    setError(accountName, 'Account Name is required')
  } else if (allLetter(accountName)) {
    setSuccess(accountName, 'success')
  } else {
    setError(accountName, 'Invalid input')
  }
  if (amountValue === '') {
    setError(amount, 'Amount Required')
  } else if (allamount(amount)) {
    setSuccess(amount, 'success')
  } else {
    setError(amount, 'Invalid amount ')
  }

  if (cashierValue === '') {
    setError(cashierId, 'Staff ID Required')
  } else if (allnumber(cashierId)) {
    if (cashierValue.length !== 14) {
      setError(cashierId, 'Staff ID should be 14 digits')
    } else {
      setSuccess(cashierId, 'success')
    }
  } else {
    setError(accountNumber, 'invalid input')
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

function allLetter(accountName) {
  var letters = /^[A-Za-z]+$/
  if (accountName.value.match(letters)) {
    return true
  } else {
    return false
  }
}
function toFloat(amount) {
  var letters = /(^-?\d\d*\.\d\d*$)|(^-?\.\d\d*$)/
  if (amount.value.match(letters)) {
    return true
  } else {
    return false
  }
}

function allnumber(accountNumber) {
  var letters = /^[0-9]*$/
  if (accountNumber.value.match(letters)) {
    return true
  } else {
    return false
  }
}

function allnumber(cashierId) {
  var letters = /^[0-9]*$/
  if (cashierId.value.match(letters)) {
    return true
  } else {
    return false
  }
}
function allamount(amount) {
  var letters = /(^-?\d\d*\.\d\d*$)|(^-?\.\d\d*$)/
  if (amount.value.match(letters)) {
    return true
  } else {
    return false
  }
}
