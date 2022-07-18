const form = document.getElementById('form')
const activate = document.getElementById('activate')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkInputs()
})


function checkInputs(){
    const activateValue = activate.value.trim()
    if(activateValue === ""){
        setError(activate,"User Id  Required")
    }
    else if (activateValue.length < 11){
        setError(activate,"user id should be 11 digits")
    }
    else{
        setSuccess(activate,"success")
    }
}



function setError(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // add error message inside small
    small.innerText = message;
    
    formControl.className = 'form-controller error'
}

function setSuccess(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message;
    formControl.className = 'form-controller success'
}