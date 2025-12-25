document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        document.getElementById('response').textContent = "Thanks for reaching out, " + name + "!";
        this.reset();
    } else {
        document.getElementById('response').textContent = "Please fill out all fields.";
    }
});
