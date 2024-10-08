document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
        // You can add logic to send form data to the server using Node.js
        document.getElementById('contactForm').reset();
    }
});
