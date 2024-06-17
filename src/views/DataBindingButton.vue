<template>
    <div>
        <input type="text" v-model="textValue">
        <button type="button" v-bind:disabled="textValue==''" @click="clean">Click</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                textValue : ''
            }
        },
        methods : {
            clean(){
                this.textValue = "다른 말을 적어라";
            }
        }
    }
</script>