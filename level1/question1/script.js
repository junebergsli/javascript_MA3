function validateForm() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var phoneNumber = document.getElementById("pnumber").value;
    var email = document.getElementById("email").value;
    
    //Used the RFC2822 Email Validation
    var emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    //Regular expression for Norwegian phone number consisting of 8 digits
    var phoneReg = /^([0-9]{8})$/;

    //Validate that the first and last name is not empty 
    if (firstName == "") {
        document.getElementById("info").innerHTML = "Your first name can't be empty!";
        document.getElementById("fname").focus();
        return false;
    }else { //Cleares the "error"-message when entered correctly
        document.getElementById('info').innerHTML = ""; 
    }

    if (lastName == "") {
        document.getElementById("info").innerHTML = "Your last name can't be empty!";
        document.getElementById("lname").focus();
        return false;
    }else { //Cleares the "error"-message when entered correctly
        document.getElementById('info').innerHTML = "";
    }

    //Regex expressions to validate the telephone and email address   
    if (phoneReg.test(phoneNumber) == false) {
        document.getElementById("info").innerHTML = "Please type in a Norwegian phonenumber, 8 digits.";
        document.getElementById("pnumber").focus();
        return false;
    }else { //Cleares the "error"-message when entered correctly
        document.getElementById('info').innerHTML = "";
    }

    if (emailReg.test(email) == false) {
        document.getElementById("info").innerHTML = "Please type in a valid email address.";
        document.getElementById("email").focus();
        return false;
    }else { //Cleares the "error"-message when entered correctly
        document.getElementById('info').innerHTML = "";
    }

    //If every step is validated, you can submit the form. A confirmation will show.
    if (confirm("We have validatet your information. Do you want to submit?")) {
        document.getElementById("submit-yes").innerHTML = "The form is submitted!";
        return false;
    }else { //If you cancel the prompt
        document.getElementById("submit-no").innerHTML = "The form is NOT submitted";
        return false;
    }

}