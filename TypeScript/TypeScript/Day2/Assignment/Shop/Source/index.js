var Categories = /** @class */ (function () {
    function Categories(thePrize, theQuantity, theName, theCName) {
        this.price = thePrize;
        this.quantiity = theQuantity;
        this.name = theName;
        this.cname = theCName;
    }
    Categories.prototype.getQuantity = function (quantity) {
        this.quantiity = this.quantiity - quantity;
        this.remaining = quantity;
        this.checkQuantity();
    };
    Categories.prototype.checkQuantity = function () {
        if (this.quantiity < 5) {
            console.log("Please Add more ".concat(this.name, " as Per Customer Request ***"));
        }
        else {
            console.log("Customer Purchase ".concat(this.remaining, " ").concat(this.name, " from ").concat(this.cname, " Category"));
        }
    };
    ;
    return Categories;
}());
var mobile = new Categories(8000, 207, "Redmi not 7 Pro", "Electronics");
mobile.getQuantity(118);
mobile.getQuantity(118);
console.log('');
var camero = new Categories(36000, 100, "Canon EOS 1500D DSLR Camera", "Electronics");
camero.getQuantity(50);
camero.getQuantity(40);
camero.getQuantity(11);
console.log('');
var book = new Categories(129, 20, "Learning How To Fly - Life Lessons for the Youth", "Books");
book.getQuantity(15);
book.getQuantity(15);
console.log('');
