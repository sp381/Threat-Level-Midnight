async function createSignupHandler(event) {
    event.preventDefault();
    console.log('hello world');

    const username = document.querySelector('#create-username').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#create-password').value.trim();
    console.log(username);
    console.log(email);
    console.log(password);
    
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
        document.location.href = "/";
      } else {
        alert(response.statusText);
      }
    }
  }

  const signupButton = document.querySelector("#create-signup");
  if(signupButton) {
    signupButton.addEventListener("click", createSignupHandler);
  }; 
