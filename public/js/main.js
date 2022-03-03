const entryFormHandler = async (event) => {
    event.preventDefault();

const description = document.querySelector('entry').value.trim();


if(description) {
    const res = await fetch('/api/homepage/entry', {
        method: 'POST',
        body: JSON.stringify({
            description
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if(res.ok) {
        document.location.replace('/homepage');
    } else {
        alert('failed to docment');
    }
}

};

const txt = document.getElementById('entry');
const subBtn = document.getElementById('subBtn');
const userOutput = document.getElementById('userOutput');

function entry () {
    userOutput.innerHTML = txt.value;
    txt.value = '';
}

subBtn.addEventListener('click', entry);

// const SubmitBtn = document.getElementById('SubmitBtn');
// SubmitBtn.addEventListener('click', entryFormHandler);

