function displayMessage() {
    // represents value in text box
    let msg = document.getElementById('message').value;
    // alert(msg);
    Swal.fire(
        {
            backdrop: false,
            title: 'Reverse Rewind',
            text: msg
        }
    );
}