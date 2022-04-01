# Day4 Assignment

###  Store 5 Employee Data(ID, Name, City, DOJ) in one Array. Search the employee with ID.
### Search the employees who has joined after year 2020S
### earch the employee who has joined after year 2020 and stays in Mumbai city

1. Employee details has Id, Name, City and DOJ. So `Employee Object` Contains the different Type of data so we create a Array with `<any> Type` .`Employee Array` contains the Object of Employee with these Attribute

2. Now using `for loop` find the employee using Employee Id.

3. for finding the employee whose joining after 2020 so Find this employee using `d.getUTCFullYear() > 2020` using `for loop` here `getUTCFullYear` is Date Object.

4. for finding the employee whose joining after 2020 and whose locate to Mumbai so Find this employee using `d.getUTCFullYear() > Number(2020)) && (employee[i].city == "Mumbai")` using `for loop` here `&&` is operator whose return the `Boolean value` if return `true` then `Employee from Mumbai and Joining after 2020`