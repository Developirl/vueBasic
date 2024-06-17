<template>
    <div>
        <input type="text" v-model="firstName"/>
        <input type="text" v-model="lastName"/>
        <h1>{{lastName}}</h1>
        <h1>{{fullname}}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                firstName : "mino",
                lastName : "Min",
                fullname : this.firstName + ' ' + this.lastName
            };
        }
    }
</script>