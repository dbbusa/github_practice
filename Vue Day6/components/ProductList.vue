<template lang="">
  <div>
    <h4 class="text-center text-secondary text-uppercase">Product List</h4>
    <hr />
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
        <tr v-for="value in datas" v-bind:key="value">
          <td>{{ value.name }}</td>
          <td>{{ value.qty }}</td>
          <td>{{ value.amount }}</td>
          <td>{{ value.discount }}</td>
          <td>{{ value.totals }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
    props:{
        datas : Array
    }
};
</script>
<style scoped></style>
