import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

function Product_list(props){
 return(
    <div>
       <h4 class="text-center text-secondary text-uppercase">Product List</h4> <hr/>
<table class="table table-responsive table-striped" aria-label="Products">
    <thead>
        <tr>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Actual Amount</th>
            <th>Discount</th>
            <th>Product Discount Amount</th>
        </tr>
    </thead>
    <tbody>
        {props.products.map( item =>
            (
              <tr key={item}>
                  <td>{item.Name}</td>
                  <td>{item.Quantity}</td>
                  <td>{item.Amount}</td>
                  <td>{item.Discount}</td>
                  <td>{item.Total}</td>
              </tr>
            )
        )}
    </tbody>
</table>
    </div>
  );
}


function App() {

  const [pname , setPname] = useState('')
  const [pqty , setPqty] = useState('')
  const [pamount , setPamount] = useState('')

  function handleName(e){
    e.preventDefault();
    setPname(e.target.value)
  }

  function handleQty(e){
    e.preventDefault();
    setPqty(e.target.value)
  }

  function handleAmount(e){
    e.preventDefault();
    setPamount(e.target.value)
  }

  let [products , setProducts] = useState([]);

  let data = {};
  data = {
    Name : pname,
    Quantity : pqty,
    Amount : pamount,
    Discount : Number(pamount) * 0.05,
    Total : Number(pamount) - (Number(pamount) * 0.05)
  }

  function submit(){
    let oldProductList = products;
    oldProductList.push(data)
    setProducts([...oldProductList])
  }



  return (
    <div class="container pt-5 mt-4">
    <h3 class="text-center text-uppercase">Day6 Assignment</h3> <hr/>
    <div class="row">
      <div class="col-md-8">
        <Product_list products={products}></Product_list>
      </div>
      <div class="col-md-4">
        <h4 class="text-center text-secondary">Enter Product Details</h4>
        <div class="mb-3">
          <label for="productname" class="form-label">Product Name : </label>
          <input type="text" class="form-control" id="productname" value={pname} onChange={handleName} />
        </div>
        <div class="mb-3">
          <label for="productqty" class="form-label">Product Quantity : </label>
          <input type="text" class="form-control" id="productqty" value={pqty} onChange={handleQty} />
        </div>
        <div class="mb-3">
          <label for="productamount" class="form-label">Product Amount : </label>
          <input type="text" class="form-control " id="productamount" value={pamount} onChange={handleAmount} />
        </div>       
        <button class="btn btn-primary" onClick={submit}>Submit</button>
      </div>
    </div>
</div>
  );
}

export default App;
