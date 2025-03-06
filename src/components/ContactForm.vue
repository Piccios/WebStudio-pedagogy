<template>
    <div class="container mt-5">
        <h2 class="text-center text-primary">Scrivimi pure! Ti rispondero' quanto prima!</h2>

        <form @submit.prevent="sendEmail" class="bg-light p-4 shadow rounded">
            <div class="mb-3">
                <label class="form-label">Nome</label>
                <input v-model="form.name" class="form-control" placeholder="Il tuo nome" required>
            </div>

            <div class="mb-3">
                <label class="form-label">Numero di telefono</label>
                <input v-model="form.number" class="form-control" placeholder="Il tuo numero di telefono" required>
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
import emailjs from '@emailjs/browser';


export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                number: '',
                message: ''
            },
            successMessage: '',
            errorMessage: ''
        };
    },
    methods: {
        sendEmail() {
            const serviceID = "service_4aqp9bh";  // Sostituisci con il tuo Service ID
            const templateID = "template_iz6drkg"; // Sostituisci con il tuo Template ID
            const userID = "lIWO28Xp95B-wx001"; // Sostituisci con il tuo la Public Key  

            emailjs.init(userID); // Inizializza EmailJS

            emailjs.send(serviceID, templateID, this.form)
                .then(() => {
                    this.successMessage = "Messaggio inviato con successo! Grazie per avermi contattato. Ti risponderò al più presto.";
                    this.form.name = "";
                    this.form.email = "";
                    this.form.number = "";
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