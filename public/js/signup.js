const signupFormHandler = async (event) => {
    event.preventDefault();

const username = document.querySelector('#username').value.trim();
const password = document.querySelector('#password').value.trim();
const age = document.querySelector('#Age').value.trim();

if( username && password && age ) {
        const res = await fetch('/api/signup/userSignup', {
        method: 'POST',
        body: JSON.stringify({
            username, 
            password, 
            age
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

const submitBtn = document.getElementById('signup-submit');
submitBtn.addEventListener('click', signupFormHandler);

// document
// .getElementById('.signup-form')
// .addEventListener('submit', signupFormHandler);

// const signupBtn = document.getElementById('signupBtn');

// signupBtn.onclick = () => {
//     console.log('yay, working!!!');
// };