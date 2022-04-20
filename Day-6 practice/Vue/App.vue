<template>
 <div>
    <ParentChild v-bind:name="name" msg="Welcome"> </ParentChild>
    <input type="text" v-model="name">
 </div>
</template>

<script>
import ParentChild from './components/ParentToChild.vue'

export default {
  name: 'App',
  data(){
    return{
      name: ""
    };
  },
  components: {
    ParentChild,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
