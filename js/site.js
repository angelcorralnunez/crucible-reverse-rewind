// App Controller / Entry Point
function getValues() {
    // get the users input
    // decide what to do with it
    
    
}

// Business Logic
function reverseString(message) {
    // take a string, return it in reverse
    
    
}
// View Function
function displayString(reverseMessage) {
    // show the string on the page / assign text input to reverseMessage
    document.getElementById('msg').textContent = reverseMessage;
    // you want to remove the class d-none to get the alert to show / display
    document.getElementById('alert').classList.remove('d-none')
}

    Swal.fire(
        {
            backdrop: false,
            title: 'Reverse Rewind',
            text: msg
        }
    );
