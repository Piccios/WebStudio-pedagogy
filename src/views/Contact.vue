<template>
    <div>
        <h1>
            Contact us!
        </h1>
        <form @submit.prevent="sendMessage">
            <input type="text" v-model="name" placeholder="Your name" />
            <textarea v-model="message" placeholder="Your message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                name: '',
                message: ''
            };
        },
        methods: {
            sendMessage(){
                alert(`Hello ${this.name}, your message is: ${this.message}`);
            }
        }
    }
</script>

<style scoped>
</style>