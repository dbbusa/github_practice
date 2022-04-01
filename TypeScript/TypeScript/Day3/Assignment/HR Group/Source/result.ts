import * as Applicant from './Applicant'

var result : string[] = ["Selected","Rejected","Selected","Rejected","Rejected"]
var name : Array<any> =[]

for(let i = 0 ; i<Applicant.applicat_list.length ; i++){
    var x = new Applicant.Applicant_categoories()
    var y1 =  x.applicants(Applicant.applicat_list[i])
    name.push(y1[0])
}
export function schedule(){
    console.table([name,result])
}
