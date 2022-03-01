const signupFormHandler = async (event) => {
    event.preventDefault();

const username = document.querySelector('#username').value.trim();
const password = document.querySelector('#password').value.trim();
const age = document.querySelector('#age').value.trim();

if( username && password && age ) {
        const res = await fetch('api/signup/UserSignup', {
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
        alert('failed to signup');
    }
}

};

document.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);

const signupBtn = document.getElementById('signupBtn');

signupBtn.onclick = () => {
    console.log('yay, working!!!');
};