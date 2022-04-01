"use strict";
exports.__esModule = true;
exports.schedule = void 0;
var Applicant = require("./Applicant");
var time = ["9:00:00", "9:30:00", "10:00:00", "10:30:00", "11:00:00"];
var name = [];
for (var i = 0; i < Applicant.applicat_list.length; i++) {
    var x = new Applicant.Applicant_categoories();
    var y1 = x.applicants(Applicant.applicat_list[i]);
    name.push(y1[0]);
}
function schedule() {
    console.table([name, time]);
}
exports.schedule = schedule;
