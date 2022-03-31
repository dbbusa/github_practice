export interface Applicant{
   name : string;
   email : string;
   choice : number;
   degree : string 
}

var x : Array<any> = [];
export class Applicant_categoories{
      applicants(applicants : Applicant){
        x = [applicants.name,applicants.email,applicants.choice,applicants.degree]
        return x;
       }
}
export let applicat_list = [
    {
        name : "Arazu",
        email : "aarzoo2228@gmail.com ",
        choice : 101,
        degree : "IT"
        },
      {
        name : "Akshay Sangani",
        email : "akshay11@gmail.com ",
        choice : 100,
        degree : "IT"
        },
      {
        name : "Panthil Malaviya",
        email : "pm1228@gmail.com ",
        choice : 101,
        degree : "IT"
        },
      {
        name : "Dhruvi Koladia",
        email : "dkoladia@gmail.com ",
        choice : 102,
        degree : "CE"
      },
      {
        name : "Smit Dankhara",
        email : "smitdankhara@gmail.com ",
        choice : 104,
        degree : "CE"
      }              
]
