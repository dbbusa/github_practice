"use strict";
exports.__esModule = true;
exports.applicat_list = exports.Applicant_categoories = void 0;
var x = [];
var Applicant_categoories = /** @class */ (function () {
    function Applicant_categoories() {
    }
    Applicant_categoories.prototype.applicants = function (applicants) {
        x = [applicants.name, applicants.email, applicants.choice, applicants.degree];
        return x;
    };
    return Applicant_categoories;
}());
exports.Applicant_categoories = Applicant_categoories;
exports.applicat_list = [
    {
        name: "Arazu",
        email: "aarzoo2228@gmail.com ",
        choice: 101,
        degree: "IT"
    },
    {
        name: "Akshay Sangani",
        email: "akshay11@gmail.com ",
        choice: 100,
        degree: "IT"
    },
    {
        name: "Panthil Malaviya",
        email: "pm1228@gmail.com ",
        choice: 101,
        degree: "IT"
    },
    {
        name: "Dhruvi Koladia",
        email: "dkoladia@gmail.com ",
        choice: 102,
        degree: "CE"
    },
    {
        name: "Smit Dankhara",
        email: "smitdankhara@gmail.com ",
        choice: 104,
        degree: "CE"
    }
];
