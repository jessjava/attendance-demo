<style scoped>

</style>
<template>
    <div class="index">
        Hello Welcome
        <!-- <Button type="ghost" @click="handleStart">hello</Button> -->
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    };
</script>