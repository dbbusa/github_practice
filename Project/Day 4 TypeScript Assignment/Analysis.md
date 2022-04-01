# Assignment

### Question
- Store 5 Employee Data(ID, Name, City, DOJ) in one Array. Search the employee with ID.

- Search the employees who has joined after year 2020

- Search the employee who has joined after year 2020 and stays in Mumbai city

### Solution
- Firstly Create one array which has (id,name,city,doj)

```
const Array = [
    {id: , name: , city: , doj: new Date()},
    {id: , name: , city: , doj: new Date()},
    {id: , name: , city: , doj: new Date()},
    {id: , name: , city: , doj: new Date()},
]
``` 
##
- Find the Emplyee Whoes Id=1

```
var search = array.find(e => e.id === 1)
console.log(search)
``` 

- Find the Employee Whoes joined after year 2020

``` 
for(let i=0; i< Array.length;i++){
    var d = Employee1[i].doj
    d.getFullYear()
    var e = d.getUTCFullYear()
    if(e > Number(2020)){
        console.log(Employee1[i].name + "Joining Year : " + e)
    }
}
```

- Find the Employee Whoes joined after year 2020 and stays in Mumbai city

```
for(let j=0; j< Array.length;j++){
    var f = Employee1[j].doj
    f.getFullYear()
    var g = f.getUTCFullYear()
    var h = Employee1[j].city
    if(g > Number(2020) && h === 'Mumbai'){
        console.log(Employee1[j].name + "Joining Year : " + g + ", " + "City : " + h )
    }
}
```
