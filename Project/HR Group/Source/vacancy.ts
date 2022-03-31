interface Vacancies{
    vacancy_Id : number
    vacancy_name: string
    vacancy_no : number  
    showVacancie():string
}

export var vacancy = [
    {
        vacancy_Id : 100,
        vacancy_name : "ASP.NET",
        vacancy_no : 15
    },
    {
        vacancy_Id : 101,
        vacancy_name : "React",
        vacancy_no : 10
    },
    {
        vacancy_Id : 102,
        vacancy_name : "Nodejs",
        vacancy_no : 12
    },
    {
        vacancy_Id : 103,
        vacancy_name : "Android",
        vacancy_no : 8
    },
]


export class Vacancy implements Vacancies{
    vacancy_Id : number;
    vacancy_name: string;
    vacancy_no : number  
    constructor(theVacancy_Id : number , theVacancy_name : string , theVacancy_no : number){
        this.vacancy_Id = theVacancy_Id;
        this.vacancy_name = theVacancy_name;
        this.vacancy_no = theVacancy_no;
    }
    showVacancie(): string {
        if(this.vacancy_no > 0){
            console.table([
                [this.vacancy_Id,this.vacancy_name,this.vacancy_no]
            ])
        }else{
            return `0 Vacancy In ${this.vacancy_name} field`
        }
    }
}




