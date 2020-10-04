const button = document.querySelector('button');        
const small = document.querySelector('small');
const input = document.querySelector('#message');
button.addEventListener('click', () => {
    const message = input.value;
    if (message === null || message === '' || message === undefined) {
        small.textContent = 'Enter a message';
        return;
    }
    button.disabled = true;
    deliverMessage(message);
})

const deliverMessage = (message) => {
    setTimeout(() => {
        const status = document.querySelector('#status');
        status.textContent = "Last message delivered.";
        const heading = document.querySelector('#delivered__message');
        heading.textContent = message;
        document.getElementById('message').value = '';
        button.disabled = false;
    }, 2000);
}

input.addEventListener('blur', (event) => {
    if (event.currentTarget.value) {
        small.textContent = '';
    };
})

