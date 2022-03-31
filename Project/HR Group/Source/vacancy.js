"use strict";
exports.__esModule = true;
exports.Vacancy = exports.vacancy = void 0;
exports.vacancy = [
    {
        vacancy_Id: 100,
        vacancy_name: "ASP.NET",
        vacancy_no: 15
    },
    {
        vacancy_Id: 101,
        vacancy_name: "React",
        vacancy_no: 10
    },
    {
        vacancy_Id: 102,
        vacancy_name: "Nodejs",
        vacancy_no: 12
    },
    {
        vacancy_Id: 103,
        vacancy_name: "Android",
        vacancy_no: 8
    },
];
var Vacancy = /** @class */ (function () {
    function Vacancy(theVacancy_Id, theVacancy_name, theVacancy_no) {
        this.vacancy_Id = theVacancy_Id;
        this.vacancy_name = theVacancy_name;
        this.vacancy_no = theVacancy_no;
    }
    Vacancy.prototype.showVacancie = function () {
        if (this.vacancy_no > 0) {
            console.table([
                [this.vacancy_Id, this.vacancy_name, this.vacancy_no]
            ]);
        }
        else {
            return "0 Vacancy In ".concat(this.vacancy_name, " field");
        }
    };
    return Vacancy;
}());
exports.Vacancy = Vacancy;
