# Day1 Assignment

### Store 5 employees’ data in one array (ID, FirstName, LastName, Address, Salary). Do the operation searching by indexnumber, EmployeeID, Insert the employee, delete the employee from the Array. Create one more array emp and join the value with above array. When display list combine firstname and lastname as fullname, From the address field flatnumber, city, state and should be splited.PF should be computed and total salary should be display. 

&nbsp;
####  Here Create first Array to Store the records of 5 elements. Array containe the Employee Object of Array 
```JavaScript
var employee : Array<any> = []
```
&nbsp;

### Functionality
1. Search : search the employee using employee id using Array method `find()` so its return the `object` if employee is available other wise `no Employee Found`

2. Insert New Employee Object : insert the new data of employee using Array method `push()` so Add new data at last position of Employee Array 
* ```JavaScript
    var new_employee : any = {
    Id : 9,
    fname:"Rutika",
    lname:"Sorthiya",
    address : "204 Ahmedabad Gujrat 370001",
    salary : 21000 
    }
    employee.push(new_employee)
    ```


3. Delete the particular Employee using Employee Id : For delete particular employee we using the `Filter()` method of Array so in `Employee` variable contains the All Employee apart From deleted employee
*  ```JavaScript
      employee =  employee.filter(item => item !==   employee[value_id]) 
      ```
4. Employee Object contain the fname and lname now we want the full name of Employee using fname and lname for using `forEach()` loop and `String tamplet`
* ```JavaScript
     var fullname : Array<string> = [];
     employee.forEach((value : any)=>{
     value.fullname =`${value.fname} ${value.lname}`
     fullname.push(`${value.fname} ${value.lname}`)
     });
  ```

5. Employee Object Contains the Address which has whole address with flat no , city , state and pincode number . now our requirement is split the flat no , city and state and Add in Employee Object and in new Array
* ```JavaScript
     employee.forEach(Update_address);
    function Update_address(value : any){
    temp = value.address.split(' ');
    value.flat = temp[0]
    value.city = temp[1]
    value.state = temp[2]
    value.pin = temp[3]
    flat.push(temp[0])
    city.push(temp[1])
    state.push(temp[2])
    pin.push(temp[3])
    }
    ```

6. Find the PF of Employee Object using `map()` method of array
* ```JavaScript
     const PF : Array<number> = employee_salary.map((item)=>{
        return ((item * 12)/100)
     })
     console.log(PF)
    ```
### Final Output :
final output in Employee object containes the fullname, flat, city, state and pin 
### Example
```
[
  {
    id: 1,
    fname: 'Arazu',
    lname: 'Kaneriya',
    address: '101 Rajkot Gujrat 360004',
    salary: 40000,
    fullname: 'Arazu Kaneriya',
    flat: '101',
    city: 'Rajkot',
    state: 'Gujrat',
    pin: '360004'
  }
]
```
