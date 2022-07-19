const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();

})

function checkInputs(){
 const firstNameValue = firstName.value.trim()
 const lastNameValue = lastName.value.trim()
 const emailValue = email.value.trim()
 const passwordValue = password.value.trim()
 
 if(firstNameValue === ""){
     setError(firstName,'First Name cannot be empty')
 }
 else if(allLetter(firstName)){
    setSuccess(firstName,'success')
 }
 else{
     setError(firstName,'Please Enter your First Name')
 }

 if(lastNameValue === ''){
     setError(lastName,"Last Name cannot be empty")
 }

 else if(allLetter(lastName)){
    setSuccess(lastName,'success')
 }
 else{
     setError(lastName,'Please Enter your Name')
 }
  if(passwordValue === ''){
      setError(password,'Password cannot be empty')
}
else{
     setSuccess(password,'success')
 }

if (emailValue === ""){
    setError(email,"email cannot be empty")
}
else if(ValidateEmail(email)){
    
      email.setCustomValidity("")
      setSuccess(email,'success')
    }
    else{
        email.setCustomValidity("email.@example/com")
        setError(email,"looks like this is not a valid email")
  }
 
}


function setError(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // add error message inside small
    small.innerText = message;
    
    formControl.className = 'form-control error'
}
function setSuccess(input,message){
    const formControl = input.parentElement;
       const small = formControl.querySelector('small');
    // add error message inside small
    small.innerText = message;
 
    formControl.className = 'form-control success'
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
  {
    return (true)
  }

    return (false)
}

function allLetter(lastName)
  {
   var letters = /^[A-Za-z]+$/;
   if(lastName.value.match(letters))
     {
      return true;
     }
   else
     {
     
     return false;
     }
  }
 
 function allLetter(firstName)
  {
   var letters = /^[A-Za-z]+$/;
   if(firstName.value.match(letters))
     {
      return true;
     }
   else
     {
     
     return false;
     }
  }
 