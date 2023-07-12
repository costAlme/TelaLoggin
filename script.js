const password = document.getElementById('password')
const username = document.getElementById('username')

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault()
    valid = true 
    // add your checks here :
     
    const password_value = password.value
    const username_value = username.value

    if (username_value.length < 5 || password_value.length < 12) {
        alert('O formulário não foi enviado: \n - Um campo não é válido.')
        valid = false
    }

    if(valid){
    alert('O formulário foi preenchido. \n Prosseguiremos com o envio')}
    // submit the form if everything is valid :
    // if (valid event.target.submit();
})


