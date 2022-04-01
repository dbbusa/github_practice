function validateDateDOB(eleId, errMsg) {
    let inpDateObj = document.getElementById(eleId);
    let inpDate = inpDateObj.value.trim();
    const month31 = [1, 3, 5, 7, 8, 10, 12];
    const month30 = [4, 6, 9, 11];
    let results = "";
    let isLeapYear = false;
    var dateReg = new RegExp("([0-9]{4})-([0-9]{2})-([0-9]{2})");

    if (inpDate == "") {
        results += "Please Enter Date";
        return false;
    } else if (!dateReg.test(inpDate)) {
        results += "Invalid Date, Please Enter Valid date";
        return false;
    }
    else {
        results = "";
        var datePart = inpDate.split('-');

        var mm = parseInt(datePart[1]);
        var dd = parseInt(datePart[2]);
        var yyyy = datePart[0];

        var tempYear = parseInt(yyyy);

        if (tempYear % 4 == 0 && tempYear % 100 == 0 || tempYear % 400 == 0)
            isLeapYear = true;

        if (mm > 12) {
            results += "Invalid Month Please Enter Valid Month";
            return false;
        }
        else if (month31.includes(mm) && dd > 31) {
            results += "Invalid Date, Date Should be in 31";
            return false;
        }
        else if (month30.includes(mm) && dd >= 31) {
            results += "Invalid Date, Date Should be in 30";
            return false;
        }
        else if (isLeapYear && dd > 29 && mm == 2) {
            results += "Invalid Date, Date Should be in 29";
            return false;
        }
        else if (!isLeapYear && dd > 28 && mm == 2) {
            results += "Invalid Date, Date Should be in 28";
            return false;
        }
        else
            results = "";
        return true;
    }
    document.getElementById(errMsg).innerHTML = results;
}
function validateEmail(eleId, errMsg) {
    const emailEle = document.getElementById(eleId).value.trim();
    const regexEmail = new RegExp("([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+");

    if (emailEle == "") {
        document.getElementById(errMsg).innerHTML = "Email is Required";
        return false;
    } else if (!regexEmail.test(emailEle)) {
        document.getElementById(errMsg).innerHTML = "Email Should be Valid";
        return false;
    } else {
        document.getElementById(errMsg).innerHTML = "";
        return true;
    }
}
function validatePhone(eleId, errMsg) {
    const phone = document.getElementById(eleId).value.trim();
    const regexContact = new RegExp("^([0-9]{10})$");

    if (phone == "") {
        document.getElementById(errMsg).innerHTML = "Phone Number is Required";
        return false;
    } else if (!regexContact.test(phone)) {
        document.getElementById(errMsg).innerHTML = "Phone Number should be of 10 digit";
        return false;
    } else {
        document.getElementById(errMsg).innerHTML = "";
        return true;
    }
}
function validateRequiredFiels(eleId, errMsg) {
    const content = document.getElementById(eleId).value.trim();

    if (content == "") {
        document.getElementById(errMsg).innerHTML = "This Field is Required";
        return false;
    } else {
        document.getElementById(errMsg).innerHTML = "";
        return true;
    }
}
function validateUsername(eleId, errMsg) {
    const userName = document.getElementById(eleId).value.trim();
    const regexUserName = new RegExp("(?=\d*[a-zA-Z]*\d*).{5,}");

    if (userName == "") {
        document.getElementById(errMsg).innerHTML = "Username is Required";
        return false;
    } else if (!regexUserName.test(userName)) {
        document.getElementById(errMsg).innerHTML = "Username must be at least 5 character long Should Contain Numbers and Alphabet only";
        return false;
    }
    else {
        document.getElementById(errMsg).innerHTML = "";
        return true;
    }
}
function validateAge(eleId, errMsg) {
    const age = document.getElementById(eleId).value.trim();
    const regexage = new RegExp("[0-9]{2}");

    if (age == "") {
        document.getElementById(errMsg).innerHTML = "Age is Required";
        return false;
    } else if (!regexage.test(age) || age > 60) {
        document.getElementById(errMsg).innerHTML = "Age Should be Number and Shoul be lesser than 60 year";
        return false;
    }
    else {
        document.getElementById(errMsg).innerHTML = "";
        return true;
    }

}

function validatePassword(eleId, errMsg) {
    const password = document.getElementById(eleId).value.trim();
    const regexEmail = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$@!*#%&]).{8,}");

    if (password == "") {
        document.getElementById(errMsg).innerHTML = "Password is Required";
        return false;
    } else if (!regexEmail.test(password)) {
        document.getElementById(errMsg).innerHTML = "Password field Must Contain Uppercase letter, Lowercase letter, Number, And Special Characters and must be 8 charecters long";
        return false;
    } else {
        document.getElementById(errMsg).innerHTML = "";
        return true;
    }
}

function validateRePassword(eleId1, eleId2, errMsg) {
    const password = document.getElementById(eleId1).value.trim();
    const repassword = document.getElementById(eleId2).value.trim();

    if (repassword == "") {
        document.getElementById(errMsg).innerHTML = "Re Password is Required";
        return false;
    } else if (password != repassword) {
        document.getElementById(errMsg).innerHTML = "Password Does Not Match";
        return false;
    } else {
        document.getElementById(errMsg).innerHTML = "";
        return true;
    }
}



function validateAllLogin(ele1, ele2, result) {

    if (!validateUsername(ele1, result) || !validatePassword(ele2, result)) {
        return false;
    } else {
        return true;
    }
}

function validateAllRegister(result) {

    if (!validateAge('age', result) || !validateDateDOB('dob', result) || !validateEmail('email', result) || !validatePassword('password', result) || !validateRePassword('password', 'repassword', result) || !validateUsername('username', result) || !validatePhone('phone', result))
        return false;
    else
        return true;
} 