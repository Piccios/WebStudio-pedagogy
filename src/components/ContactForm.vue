<template>
    <div class="container mt-5">
        <h2 class="text-center text-primary">Scrivimi pure! Ti rispondero' quanto prima!</h2>

        <form @submit.prevent="sendEmail" class="bg-light p-4 shadow rounded">
            <div class="mb-3">
                <label class="form-label">Nome</label>
                <input v-model="form.name" class="form-control" placeholder="Il tuo nome" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="form.email" type="email" class="form-control" placeholder="La tua email" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Messaggio</label>
                <textarea v-model="form.message" class="form-control" placeholder="Il tuo messaggio"
                    required></textarea>
            </div>

            <button type="submit" class="btn btn-primary w-100">Invia Messaggio</button>
        </form>

        <p v-if="successMessage" class="alert alert-success mt-3">{{ successMessage }}</p>
        <p v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</p>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            },
            successMessage: '',
            errorMessage: ''
        };
    },
    methods: {
        sendEmail() {
            const serviceID = "service_4aqp9bh";  // Sostituisci con il tuo Service ID
            const templateID = "template_h02ex6s"; // Sostituisci con il tuo Template ID
            const userID = "l.picchi050896@gmail.com";  

            emailjs.send(serviceID, templateID, this.form, userID)
                .then(() => {
                    this.successMessage = "Messaggio inviato con successo!";
                    this.form.name = "";
                    this.form.email = "";
                    this.form.message = "";
                })
                .catch(error => {
                    console.error("Errore nell'invio:", error);
                    this.errorMessage = "Si è verificato un errore. Riprova più tardi.";
                });
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
}
</style>