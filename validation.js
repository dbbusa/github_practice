function validateData() {
    const city = ['rajkot', 'surat', 'pune', 'mumbai'];

    const empId = document.getElementById('empId').value.trim();
    const empName = document.getElementById('empName').value.trim();
    const empAge = document.getElementById('empAge').value.trim();
    const empGender = document.getElementsByName('empGender');
    const empDesignation = document.getElementById('empDesignation').value.trim();
    const empSalary = document.getElementById('empSalary').value.trim();
    const empLocation = document.getElementById('empLocation').value.trim();
    const empEmail = document.getElementById('empEmail').value.trim();
    const empDOJ = document.getElementById('empDOJ').value.trim();
    const empContact = document.getElementById('empContact').value.trim();

    const regexDate = new RegExp("([0-9]{2})-([0-9]{2})-([0-9]{4})");
    const regexContact = new RegExp("([0-9]{10})");
    const regexEmail = new RegExp("([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+");
    const regexEmpId = new RegExp("(?=\d*[a-zA-Z]*\d*).{5,}");
    const regexEmpName = new RegExp("[a-zA-Z]+");
    const regexEmpAge = new RegExp("[0-9]{2}");

    let flagId = 0;
    let flagName = 0;
    let flagAge = 0;
    let flagGender = 0;
    let flagDes = 0;
    let flagSal = 0;
    let flagLoc = 0;
    let flagEmail = 0;
    let flagDoj = 0;
    let flagContact = 0;

    if (empId == "") {
        document.getElementById('errEmpId').innerHTML = "Employee ID is Required";
        flagId = 0;
    } else if (!regexEmpId.test(empId)) {
        document.getElementById('errEmpId').innerHTML = "Employee ID must be at least 5 character long Should Contain Numbers and Alphabet only";
        flagId = 0;
    }
    else {
        document.getElementById('errEmpId').innerHTML = "";
        flagId = 1;
    }

    if (empName == "") {
        document.getElementById('errEmpName').innerHTML = "Employee Name is Required";
        flagName = 0;
    } else if (!regexEmpName.test(empName)) {
        document.getElementById('errEmpName').innerHTML = "Employee Name Should contain Alphabets only";
        flagName = 0;
    } else {
        document.getElementById('errEmpName').innerHTML = "";
        flagName = 1;
    }

    if (empAge == "") {
        document.getElementById('errEmpAge').innerHTML = "Employee Age is Required";
        flagAge = 0;
    } else if (!regexEmpAge.test(empAge) || empAge > 60) {
        document.getElementById('errEmpAge').innerHTML = "Employee Age Should be Number and Shoul be lesser than 60 year";
        flagAge = 0;
    }
    else {
        document.getElementById('errEmpAge').innerHTML = "";
        flagAge = 1;
    }


    if (!(empGender[0].checked || empGender[1].checked || empGender[2].checked)) {
        document.getElementById('errEmpGender').innerHTML = "Employee Gender is Required";
        flagGender = 0;
    }else{
        document.getElementById('errEmpGender').innerHTML = "";
        flagGender = 1;
    }


    if (empDesignation == "") {
        document.getElementById('errEmpDesignation').innerHTML = "Employee Designation is Required";
        flagDes = 0;
    } else if (!regexEmpName.test(empDesignation)) {
        document.getElementById('errEmpDesignation').innerHTML = "Designation Should be Alphabet";
        flagDes = 0;
    }
    else {
        document.getElementById('errEmpDesignation').innerHTML = "";
        flagDes = 1;
    }


    if (empSalary == "") {
        document.getElementById('errEmpSalary').innerHTML = "Employee Salary is Required";
        flagSal = 0;
    } else if (!regexEmpAge.test(empSalary)) {
        document.getElementById('errEmpSalary').innerHTML = "Employee Salary Should be Numbers";
        flagSal = 0;
    } else {
        document.getElementById('errEmpSalary').innerHTML = "";
        flagSal = 1;
    }

    if (empLocation == "") {
        document.getElementById('errEmpLocation').innerHTML = "Employee Location is Required";
        flagLoc = 0;
    } else {
        document.getElementById('errEmpLocation').innerHTML = "";
        flagLoc = 1;
    }

    if (empEmail == "") {
        document.getElementById('errEmpEmail').innerHTML = "Employee Email is Required";
        flagEmail = 0;
    } else if (!regexEmail.test(empEmail)) {
        document.getElementById('errEmpEmail').innerHTML = "Employee Email Should be Valid";
        flagEmail = 0;
    } else {
        document.getElementById('errEmpEmail').innerHTML = "";
        flagEmail = 1;
    }

    if (empDOJ == "") {
        document.getElementById('errEmpDOJ').innerHTML = "Employee Date of Joining is Required";
        flagDoj = 0;
    } else if (!regexDate.test(empDOJ)) {
        document.getElementById('errEmpDOJ').innerHTML = "Employee Date of Joining must be in the form of DD-MM-YYYY";
        flagDoj = 0;
    } else {
        document.getElementById('errEmpDOJ').innerHTML = "";
        flagDoj = 1;
    }

    if (empContact == "") {
        document.getElementById('errEmpContact').innerHTML = "Employee Contact is Required";
        flagContact = 0;
    }else if(!regexContact.test(empContact)){
        document.getElementById('errEmpContact').innerHTML = "Employee Contact should be of 10 digit";
        flagContact = 0;
    }else{
        document.getElementById('errEmpContact').innerHTML = "";
        flagContact = 1;
    }

    if (flagId == 0 || flagName == 0 || flagAge == 0 || flagGender == 0 || flagDes == 0 || flagSal == 0 || flagLoc == 0 || flagEmail == 0 || flagDoj == 0 || flagContact == 0)
        return false;
    else
        return true;

}