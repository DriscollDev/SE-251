// JavaScript Document
/*
Error Message Formatting

         Upon clicking the submit button, if any of the text input fields are empty or don't meet the RegEx patterns described below the field will:
            Get a red asterix next to it in the <span> tag.
            The label will get changed to red by swapping its class 
            If all is good:
                The <span> will become blank again
                Hint: innerHTML = ``
                The label will turn black

RegEx and Validation Requirements

        First name and last name fields cannot include special characters (excluding dashes). Also, the names should not include underscores.
        The error message should state what went wrong. Here are examples of what the error messages could say:
        Example: Please input a name.
        Example: Your name must not include special characters.
        The email address fields should be valid email addresses.
        Hint: Find an expression to help with this.
        The phone number field must contain a phone number in the following format: xxxxxxxxxx.If all the fields are filled in upon clicking the submission button and...
        The Email and Email Confirm must match.

Once submit is clicked:

    The form div will get hidden by setting its display style to none.

    Construct an object to hold the information from the form and write the object's information onto the confirmation.

    Example of a possible object:

    var person = {
     fname:fNameInput.value,
     lname:lNameInput.value,
     email:emailInput.value,
     phone:phoneInput.value
    }

    The confirmation div will show up with the information from the Object in the following format:
*/

var button = document.querySelector('#submit');
var fNameInput = document.querySelector('#first-name');
var lNameInput = document.querySelector('#last-name');
var emailInput = document.querySelector('#email');
var phoneInput = document.querySelector('#phone');

button.addEventListener('click', function(event) {
    event.preventDefault();
    var error = false;
    var reg = /^[a-zA-Z]+$/;
    var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var regPhone = /^\d{10}$/;
    var errorMessages = {
        name: 'Please input a name.',
        specialChar: 'Your name must not include special characters.',
        email: 'Please input a valid email address.',
        phone: 'Please input a valid phone number.'
    };
    //First Name Validation
    if (fNameInput.value === '') {
        document.querySelector('#fn-error').innerHTML = '*';
        document.querySelector('#fn-label').classList.add('error');
        error = true;
    } else if (!reg.test(fNameInput.value)) {
        document.querySelector('#fn-error').innerHTML = '*';
        document.querySelector('#fn-label').classList.add('error');
        error = true;
    } else {
        document.querySelector('#fn-error').innerHTML = '';
        document.querySelector('#fn-label').classList.remove('error');
    }
    //Last Name Validation
    if (lNameInput.value === '') {
        document.querySelector('#ln-error').innerHTML = '*';
        document.querySelector('#ln-label').classList.add('error');
        error = true;
    } else if (!reg.test(lNameInput.value)) {
        document.querySelector('#ln-error').innerHTML = '*';
        document.querySelector('#ln-label').classList.add('error');
        error = true;
    } else {
        document.querySelector('#ln-error').innerHTML = '';
        document.querySelector('#ln-label').classList.remove('error');
    }
    //Email Validation
    if (emailInput.value === '') {
        document.querySelector('#email-error').innerHTML = '*';
        document.querySelector('#email-label').classList.add('error');
        error = true;
    } else if (!regEmail.test(emailInput.value)) {
        document.querySelector('#email-error').innerHTML = '*';
        document.querySelector('#email-label').classList.add('error');
        error = true;
    } 
    else {
        document.querySelector('#email-error').innerHTML = '';
        document.querySelector('#email-label').classList.remove('error');
    }
    //Phone Validation
    if (phoneInput.value === '') {
        document.querySelector('#phone-error').innerHTML = '*';
        document.querySelector('#phone-label').classList.add('error');
        error = true;
    } else if (!regPhone.test(phoneInput.value)) {
        document.querySelector('#phone-error').innerHTML = '*';
        document.querySelector('#phone-label').classList.add('error');
        error = true;
    } else {
        document.querySelector('#phone-error').innerHTML = '';
        document.querySelector('#phone-label').classList.remove('error');
    }   


    if(!error){
        document.querySelector('#form').style.display = 'none';
        var person = {
            fname:fNameInput.value,
            lname:lNameInput.value,
            email:emailInput.value,
            phone:phoneInput.value
        }
        var confirm = document.querySelector('#confirmation')
        var phoneNum = person.phone.substring(0,3) + '-' + person.phone.substring(3,6) + '-' + person.phone.substring(6,10);
        confirm.innerHTML = `First Name: ${person.fname} <br> Last Name: ${person.lname} <br> Email: ${person.email} <br> Phone: ${phoneNum}`;
        confirm.style.display = 'block';
    }
});