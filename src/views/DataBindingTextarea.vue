<template>
    <div>
        <!-- <textarea>{{message}}</textarea> eslint 에러 -->
        <textarea v-model="message"></textarea>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: "여러 줄을 입력할 수 있는 Textarea입니다."
        };
    }
}
</script>