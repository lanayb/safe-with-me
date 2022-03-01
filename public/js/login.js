const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    
    if( username && password ) {
        const res = await fetch('api/login/UserLogin', {
        method: 'POST',
        body: JSON.stringify({
            username, password, age
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

document.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);

const loginBtn = document.getElementById('loginBtn');

loginBtn.onclick = () => {
    console.log('yay, login working!!!');
};
