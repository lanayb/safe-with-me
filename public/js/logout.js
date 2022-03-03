const logout = async () => {
    const res = await fetch('/api/login/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    }); 

    if(res.ok) {
        document.location.replace('/');
    } else {
        alert('failed to logout');
    }
};

document.querySelector('#logout')
.addEventListener('click', logout);

