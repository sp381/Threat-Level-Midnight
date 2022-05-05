async function login(event) {
    event.preventDefault() 
    console.log('hello world');
    const email = document.querySelector('#exampleInputEmail1').value 
    const password = document.querySelector('#exampleInputPassword1').value 
    console.log(email);
    console.log(password);

    fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
            email,
            password, 
        }), 
        headers: {
            "Content-Type": "application/json", 
        }
    }).then(function() {
        document.location.replace('/dashboard')
    }).catch(function(error) {
        console.log('Error inside login.js catch');
        console.log(error);
    })
}


//document query selector of login form 

document.querySelector('#login-form').addEventListener('submit', login)