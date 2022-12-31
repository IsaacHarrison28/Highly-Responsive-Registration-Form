const form = document.getElementById('main_form')
const nameInput = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const checkPassword = document.getElementById('confirmPassword')
const errorMessage = document.getElementById('message')

form.addEventListener('submit', (e) => {
    let messages = []

    if ( nameInput.value === '' || nameInput.value == null ) {
        messages.push("Please Enter Your Name")
    }

    if(password.value.length < 6){
        messages.push("password required with atleast six digits")
    }

    if( email.value === '' || email.value == null ){
        messages.push("Enter Your Email")
    }

    if( password.value === "password" ){
        messages.push("password cannot be password")
    }

    if( password.value !== checkPassword.value ){
        messages.push("Your password do not match")
    }

    if(messages.length > 0){
        e.preventDefault()
        errorMessage.innerText = messages.join(', ')
    }
    
})