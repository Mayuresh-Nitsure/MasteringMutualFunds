document.getElementById('signUpForm').onsubmit = async function(event) {
    event.preventDefault();
    const response = await fetch('/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.username.value, password: this.password.value })
    });
    const message = await response.text();
    alert(message);
};

document.getElementById('signInForm').onsubmit = async function(event) {
    event.preventDefault();
    const response = await fetch('/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.username.value, password: this.password.value })
    });
    const message = await response.text();
    alert(message);
};
