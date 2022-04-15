<template>
  <div>
    <div class="container pt-5 mt-4">
    <h3 class="text-center text-uppercase">Day6 Assignment</h3> <hr/>
    <div class="row">
      <div class="col-md-8">
        <product-list :datas ='datas'></product-list>
      </div>
      <div class="col-md-4">
        <h4 class="text-center text-secondary">Enter Product Details</h4>
        <div class="mb-3">
          <label for="productname" class="form-label">Product Name : </label>
          <input type="text" class="form-control" id="productname" v-model="pname">
        </div>
        <div class="mb-3">
          <label for="productqty" class="form-label">Product Quantity : </label>
          <input type="text" class="form-control" id="productqty" v-model="pqty">
        </div>
        <div class="mb-3">
          <label for="productamount" class="form-label">Product Amount : </label>
          <input type="text" class="form-control " id="productamount" v-model="pamount">
        </div>       
        <button class="btn btn-primary" v-on:click="submit()">Submit</button>
      </div>
    </div>
</div>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'


export default {
  name: 'App',
  components: {
    ProductList
     
  },
  data() {
    return {
      pname  : '',
      pqty  : '',
      pamount  : '',
      pdiscount  : (this.pamount * 5)/100,
      

      total  : 0,
      datas  : [],
      product_list  : {}
    }
  },
  methods: {
    submit()  {
    this.total = (Number(this.pamount) - Number((this.pamount * 5)/100))
    console.log(this.total)
    this.product_list =  {
      name : this.pname,
      qty : this.pqty,
      amount : this.pamount,
      discount : (this.pamount * 5)/100,
      totals : this.total
    } 
    this.datas.push(this.product_list)
    console.log(this.datas)
  }
  },
}
</script>

<style>

</style>
