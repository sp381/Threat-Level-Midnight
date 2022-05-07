
async function signupFormHandler(event) {
  event.preventDefault();
  
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  
  
  
  if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('Sign Up Successful');
        document.location.replace('/movies')
        
      } else {
        alert(response.statusText);
      }
    }
}
  
  document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);

  
  //SARAH'S CODE
  //   async function login(event) {
//     event.preventDefault() 
//     console.log('hello world');
//     const email = document.querySelector('#exampleInputEmail1').value 
//     const password = document.querySelector('#exampleInputPassword1').value 
//     console.log(email);
//     console.log(password);

//     fetch('/api/user/login', {
//         method: 'post',
//         body: JSON.stringify({
//             email,
//             password, 
//         }), 
//         headers: {
//             "Content-Type": "application/json", 
//         }
//     }).then(function() {
//         document.location.replace('/dashboard')
//     }).catch(function(error) {
//         console.log('Error inside login.js catch');
//         console.log(error);
//     })
// }


// //document query selector of login form 

// document.querySelector('#login-form').addEventListener('submit', login)