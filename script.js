const error = document.getElementById('email-error')

let emailIsValid = false;

const emailError = ()=> {
    if (!emailIsValid) {
        error.classList.add("error-active")
    } else {
        error.classList.remove('error-active')
    }
}

emailError()