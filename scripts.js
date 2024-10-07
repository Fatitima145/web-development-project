//contactForms is what I called it in the html code.
document.getElementById('contactForms').addEventListener('submit', function(event) {
    event.preventDefault();

    //should validate the form when you submit it.
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all the fields!');    //sends a message if you haven't done all the fields.
    } else {
        alert('Your form was submitted!');   //after you click send, you should see this message pop up.
        document.getElementById('contactForms').reset(); // resets the form after you press ok on the message that pops up.
    }
});