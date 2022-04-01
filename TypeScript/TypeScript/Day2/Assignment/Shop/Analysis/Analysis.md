# Day2 Assignment

### There is a retail shop which need to manage the inventory, whenever some purchase is being made product quantity should be reduced, if quanity is less than 5 reorder request should be raised.Design an interface and classes for the same.

1. Interfaces allow you to specify what methods a class should implement. so For `Shop` create a `interface` wich cantaines the `Product name`, `product quantiity`,`product price` and also two methods `getQuantity()` and `checkQuantity()` . One method for get the current quantity of products . And Other for check the quantity of Products.

2. For Different `Categories` craete one class `Class Catogories` so we can implement the `Product interface`. This `Categories Class` implement the whole variable and methods also contains own attributs and methods . Here `Categories name` is attribute of `Categories Class`. 
* Implement the all attributes using the `Constructor of  Categories` which get the value when `Class Object` created 

* Implement the `getQuantity()` method which get the quantity from user and deduct from current Quantity and `Update the Product Quantity` and call the `checkQuantity()`

* Implement the `CheckQuntity()` for checking the `Product Quantity greater than 5 or not` If Shop has stoke of product then `Customer Can Buy Product` else `Alert to Shopkeeper for Update the Products`
* ```JavaScript
        checkQuantity(){
        if(this.quantiity < 5){
        console.log(`Please Add more ${this.name} as Per Customer Request ***`)
        }else{
        console.log(`Customer Purchase ${this.remaining} ${this.name} from ${this.cname} Category`)
        }
        };
   ```

3. create a Object for `Mobile Product` as a Example,
```JavaScript
   let mobile = new Categories(8000,207,"Redmi not 7 Pro","Electronics")     
```   
* this object call the `getQuantity()` method to sent the product quantity . and update according . Here `getQuantity` call to `checkQuantity()` method to checking the product availiblity and display message accordingly.
```JavaScript
    mobile.getQuantity(118);
```
As a Example :
### Output1
```
Customer Purchase 118 Redmi not 7 Pro from Electronics Category
```
Now Again Custmor get this Product but no available so its alert to Shop for update the product quantity
``` JavaScript
    mobile.getQuantity(118);
```
### Output2
```
Please Add more Redmi not 7 Pro as Per Customer Request ***
```

4. create other Object for `books product` as a Example,
``` JavaScript
    let book = new Categories(129,20,"Learning How To Fly - Life Lessons for the Youth","Books")
    book.getQuantity(15);
    book.getQuantity(15);
```
### Output1
```
Customer Purchase 15 Learning How To Fly - Life Lessons for the Youth from Books Category
```
### Output2
```
Please Add more Learning How To Fly - Life Lessons for the Youth as Per Customer Request ***
```