# Day3 Assignment

### This project is aimed at developing a web-based and central Recruitment Process System for the HR Group for a company. Some features of this system will be creating vacancies, storing Applicants data, Interview process initiation, Scheduling Interviews, Storing Interview results for the applicant and finally Hiring of the applicant. Reports may be required to be generated for the use of HR group.

In this Project we wants the Whole Procee of hiring for Hr Team Managment. So in this I create seprate module files for each and every process .



&nbsp;
1.  Vacancy
* Now All knows process start from vacancy if HR shows the vacancy then Applicant gives the Application so In first File I create a `Vacancy Interface` thats give the blueprint of vacancy. in this `Vacancy Interface` has `Vacancy Id`, `Vacancy Name` and `Vacancy no` so that All the applicant give their Application according to vacancy name and Id .

* If there is no vacancy given by HR then Show 0 vacancy in particular field.

&nbsp;
2. Applicant
* Shows the Vacancy Applicant gives their Application to Commpany . In this Application I create one more interface for Applicant `Applicant Interface` which contains the `Applicant name`, `Applicant email`, `Applicant Choice`, `Applicant degree`.

* Then All this `Applicant Data` forwarded to Hr team and show the All the `Applicant List`.

&nbsp;
3. Interview
* After Getting all the application, HR Schedule the interview for Applicant so that create a `Interview schedule function` to show the `Interview Timing For Applicant`.

&nbsp;
4. Result
* After Completing the interview process , Company select the Applicant who pass the interview. so that create a module to show the `Selected Applicant Result`
