# Day3 Practice

### Union | Intersection | Generic

1. Union
* In TypeScript, we can define a variable which can have multiple types of values. In other words, TypeScript can combine one or two different types of data (i.e., number, string, etc.) in a single type, which is called a union type. Union types are a powerful way to express a variable with multiple types. Two or more data types can be combined by using the pipe ('|') symbol between the types.

* Example:
```JavaScript function printId(id : number | string){
    console.log("Your Id is :" + id)
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }
}
```

2. Generic
* TypeScript Generic provids a create resuable components. It create a component that can work with `Variety of data types`

* In generics, we need to write a type parameter `between the open (<) and close (>)` brackets, which makes it strongly typed collections. Generics use a special kind of type variable `<T>` that denotes types. The generics collections contain only similar types of objects.

* a type variable Type to the identity function. This Type allows us to capture the type the user provides (e.g. number), so that we can use that information later.

```JavaScript
    let x =  createPair("arazu","kaneriya")
    console.log(x)
    function identity<Type>(arg: Type): Type {
        return arg;
    }
```

3. Generic Class

* A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

* Example
```JavaScript
    class GenericNumber<NumType>{
    zeroValue : NumType;
    add : (x:NumType, y:NumType) => NumType
}
```