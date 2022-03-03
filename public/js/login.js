const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#usernameInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
    
    if( username && password ) {
        const res = await fetch('/api/login/userLogin', {
        method: 'POST',
        body: JSON.stringify({
            username, password
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if(res.ok) {
        document.location.replace('/homepage');
    } else {
        alert('failed to login');
    }
}

};


const submit = document.getElementById('login-submit');
submit.addEventListener('click', loginFormHandler);

// document.querySelector('.login-form')
// .addEventListener('submit', loginFormHandler);

