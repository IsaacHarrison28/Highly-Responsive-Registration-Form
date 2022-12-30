const inputName = document.getElementById('name');
const emailInput = document.getElementById('email');
const password = document.getElementById('password');
const checkPassword = document.getElementById('confirmPassword');
const submit = document.getElementById('submitBtn');
const message = document.getElementById('message');
const emailMessage = document.getElementById('message-2');
const passwordMessage = document.getElementById('message-3');


let runFunction = () => {
    let inputValue = inputName.value;
    let secondValue = emailInput.value;
    if(inputValue.length === 0){
        inputName.style.cssText = 'border: 2px solid red;'
        message.innerText= "Please Enter Your Name!"
    }else if(secondValue.length === 0){
        emailInput.style.cssText = 'border: 2px solid red;'
        emailMessage.innerText = "Please Your Email Address!"
    }else if(password.value !== checkPassword.value){
        password.style.cssText = 'border: 2px solid red;'
        passwordMessage.innerText = "Passwords do not match!"
    }
};

let passwordCondition = () => {
    if(password.value.length < 5){
        passwordMessage.innerText = "Password cannot be less than 6 digits!";
    }
}


let clearPasswordMessage = () => {
    if( passwordMessage.innerText = "Password cannot be less than 6 digits!" ){
        passwordMessage.innerText = " "
    }
}



password.addEventListener('click', clearPasswordMessage)
checkPassword.addEventListener('click', passwordCondition)
submit.addEventListener('click', runFunction);