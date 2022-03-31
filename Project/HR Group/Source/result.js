"use strict";
exports.__esModule = true;
exports.schedule = void 0;
var Applicant = require("./Applicant");
var result = ["Selected", "Rejected", "Selected", "Rejected", "Rejected"];
var name = [];
for (var i = 0; i < Applicant.applicat_list.length; i++) {
    var x = new Applicant.Applicant_categoories();
    var y1 = x.applicants(Applicant.applicat_list[i]);
    name.push(y1[0]);
}
function schedule() {
    console.table([name, result]);
}
exports.schedule = schedule;
