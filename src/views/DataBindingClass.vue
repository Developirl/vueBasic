<template>
    <!-- <div class="container" :class="{'active' : isActive, 'text-red' : hasError}"> -->
    <div class="container" :class="[activeClass, errorClass]">
        Class Binding
    </div>
</template>

<script>
    export default{
        data(){
            return{
                // isActive : true,
                // hasError : false
                activeClass: 'active',
                errorClass: 'text-red'
            };
        }
    }
</script>

<style>
    .container {
        width: 100%;
        height: 200px;
    }
    .active {
        background-color: yellow;
        font-weight: bold;
    }
    .text-red {
        color: red;
    }
</style>