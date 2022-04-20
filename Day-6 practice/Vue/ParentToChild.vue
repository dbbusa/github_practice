<template lang="">
    <div>
        <h1>{{msg}} {{name}}</h1>
    </div>
</template>
<script>
export default {

    name : 'ParentChild',
    props : {
     msg:String,
     name:String},
}
</script>
<style lang="">
    
</style>