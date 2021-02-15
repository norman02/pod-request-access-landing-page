const error = document.getElementById('email-error')

const isEmail = (email)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validate = () => {
    const inputEmail = document.getElementById('email').value 
    if (isEmail(inputEmail)) {
        error.classList.remove('error-active')
    } else {
        error.classList.add('error-active')

    }
}

document.getElementById('submit').addEventListener( 'click', (e)=> {
    e.preventDefault()
    validate()
})