<template>
    <div class="container mt-5">
        <h2 class="text-center text-primary">Scrivimi pure! Ti rispondero' quanto prima!</h2>

        <form @submit.prevent="sendEmail" class="bg-light p-4 shadow rounded">
            <div class="mb-3">
                <label class="form-label">Nome</label>
                <input v-model="form.name" class="form-control" placeholder="Il tuo nome" required>
                <p v-if="errorMessage.name" class="text-danger">{{ error.name }}</p>
            </div>

            <div class="mb-3">
                <label class="form-label">Numero di telefono</label>
                <input v-model="form.number" class="form-control" placeholder="Il tuo numero di telefono"
                    @input="sanitizePhone" required>
                <p v-if="errors.number" class="text-danger">{{ errors.number }}</p>
            </div>

            <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="form.email" type="email" class="form-control" placeholder="La tua email" required>
                <p v-if="errorMessage.email" class="text-danger">{{ error.email }}</p>
            </div>

            <div class="mb-3">
                <label class="form-label">Messaggio</label>
                <textarea v-model="form.message" class="form-control" placeholder="Il tuo messaggio"
                    required></textarea>
                <p v-if="errorMessage.message" class="text-danger">{{ error.message }}</p>
            </div>

            <button type="submit" class="btn btn-primary w-100" :disabled="isSubmitting">Invia Messaggio</button>
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
            errors: {
                name: '',
                email: '',
                number: '',
                message: ''
            },
            successMessage: '',
            errorMessage: '',
            isSubmitting: false
        };
    },
    methods: {
        validateName() {
            if (!this.form.name) {
                this.errors.name = "Il nome è obbligatorio";
            } else {
                this.errors.name = "";
            }
        },
        validateEmail() {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(this.form.email)) {
                this.errors.email = "Inserisci un indirizzo email valido";
            }
            if (this.form.mail && this.form.mail.includes("@")) {
                this.errors.email = "";
            } else {
                this.errors.email = "Inserisci un indirizzo email valido";
            }
        },
        validatePhone() {
            const phonePattern = /^\+?[0-9]{7,15}$/; // Accetta solo numeri, opzionale il + iniziale
            if (!phonePattern.test(this.form.number)) {
                this.errors.number = "Inserisci un numero di telefono valido";
            } else {
                this.errors.number = "";
            }
        },
        validateMessage() {
            if (this.message.lenght < 10) {
                this.errors.message = "Il messaggio deve contenere almeno 10 caratteri";
            } else {
                this.errors.message = "";
            }
        },
        sanitizePhone() {
            this.form.number = this.form.number.replace(/[^0-9+]/g, ''); // Permette solo numeri e il "+"
        },
        validateForm() {
            this.validateName();
            this.validateEmail();
            this.validatePhone();
            this.validateMessage();

            //Se ci sono errori, blocca l'invio del messaggio
            if (this.errors.name || this.errors.email || this.errors.number || this.errors.message) {
                this.errorMessage = "Per favore, correggi gli errori prima di inviare.";
                return;
            }
            this.sendEmail();
        },
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
                    this.errors = { name: "", email: "", number: "", message: "" };
                })
                .catch(error => {
                    console.error("Errore nell'invio:", error);
                    this.errorMessage = "Si è verificato un errore. Riprova più tardi.";
                })
                .finally(() => {
                    this.isSubmitting = false;
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

.text-danger {
    font-size: 0.9rem;
    margin-top: 5px;
}
</style>