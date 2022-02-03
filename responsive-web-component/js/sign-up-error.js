const form = document.getElementsByClassName('sign-up-form')[0]
const errorElement = document.getElementsByClassName('error')
const errorHead = errorElement[0]
const errorBody = errorElement[1]
const email = document.getElementById('email')
const password = document.getElementById('password')
const retypedPassword = document.getElementById('retyped-password')
const fullname = document.getElementById('fullname')
const selectionBox = document.getElementsByClassName('select')[0]
const checkBox = document.getElementsByClassName('checkbox')[0]
const button = document.getElementsByClassName('sign-up-button')[0]

form.addEventListener('submit', (e) => {

    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push("• An email is required")
    } 

    if (password.value.length <= 8) {
        messages.push("• Password must be longer than 8 characters")
    }

    if (retypedPassword.value != password.value) {
        messages.push("• Passwords much match")
    }

    if (fullname.value === '' || fullname.value == null) {
        messages.push("• A name is required")
    }

    if (!fullname.value.match(' ')) {
        messages.push("• Your full name is required")
    }

    if (selectionBox.value === 'Select your age') {
        messages.push("• Your age range is required")
    }

    if (!checkBox.checked) {
        messages.push("• Please agree to the terms and conditions")
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        errorHead.innerText = "Please fix the following:"
        errorBody.innerText = messages.join('\n')
    }
})