const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();

})

function checkInputs(){
 const emailValue = email.value.trim()
 const passwordValue = password.value.trim()
 
 if (emailValue === ""){
     setError(email,"email cannot be empty")
 }
 else if(ValidateEmail(email)){
     
       email.setCustomValidity("")
       setSuccess(email,"Success")
     }
     else{
         email.setCustomValidity("email.@example/com")
         setError(email,"looks like this is not a valid email")
   }
  
if(passwordValue === ''){
      setError(password,'Password cannot be empty')
}
else{
     setSuccess(password,"success")
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