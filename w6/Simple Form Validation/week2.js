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

