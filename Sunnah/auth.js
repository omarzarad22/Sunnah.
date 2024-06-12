




document.getElementById('logs').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const messagecontainer = document.getElementById('messagecontainer');
    

    // Dummy credentials for demonstration purposes
    const validUsername = 'omar';
    const validPassword = '12345678';

    // Check the credentials
    if (username === validUsername && password === validPassword) {
    message.textContent = 'Log in Succesfull';}
    else
    {
message.textContent = 'Invalid Username or Password';
    }
    messagecontainer.style.display = 'block';

    setTimeout(() => {
        messagecontainer.style.display = 'none';
    },3000);
    



    });











