interface Products{
    name : string;
    price : number;
    quantiity : number;
    getQuantity(quantiity : number);
    checkQuantity() 
}

class Categories implements Products{
    price: number;
    quantiity: number;
    name: string;
    cname:string;
    remaining:number;
    constructor(thePrize : number,theQuantity : number,theName :string,theCName :string){
        this.price = thePrize;
        this.quantiity = theQuantity;
        this.name = theName;
        this.cname = theCName
    }
    getQuantity(quantity: number){
        this.quantiity = this.quantiity - quantity;
        this.remaining = quantity
    }
    checkQuantity(){
        if(this.quantiity < 5){
            console.log("Please Add more Products as Per Customer Request")
        }else{
            console.log(`Customer Purchase ${this.remaining} ${this.name} from ${this.cname} Category`)
        }
    };
}
let mobile = new Categories(8000,207,"Redmi not 7 Pro","Electronics")
mobile.getQuantity(118);
mobile.checkQuantity();
mobile.getQuantity(118);
mobile.checkQuantity();