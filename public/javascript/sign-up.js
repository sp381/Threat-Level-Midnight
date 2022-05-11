async function createSignupHandler(event) {
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
        document.location.replace('/')
      } else {
        alert(response.statusText);
      }
    }
};

const signupButton = document.querySelector("#create-signup");
  if(signupButton) {
    signupButton.addEventListener("click", createSignupHandler);
  }; 
