async function login(event) {
  event.preventDefault()
  console.log('hello world');
  const email = document.querySelector('#email-login').value
  const password = document.querySelector('#password-login').value
  console.log(email);
  console.log(password);

  fetch('/api/users/login', {
    method: 'post',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    }
  }).then(function () {
    document.location.replace('/')
  }).catch(function (error) {
    console.log('Error inside login.js catch');
    console.log(error);
  })
}


//document query selector of login form 

document.querySelector('#login-button').addEventListener('click', login)
