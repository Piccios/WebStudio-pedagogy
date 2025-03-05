<template>

    <div>
        <h1>Benvenuti!</h1>
        <h3>Sono Raffaella Belluomini</h3>
        <p>LA PEDAGOGIA CLINICA E IL CRANIOSACRALE BIODINAMICO IN UN LAVORO INTEGRATO NELL'AIUTO ALLA PERSONA Contattami 3490632534</p>
        <img src="../assets/imgs/clinical-psychology-doctor-with-patient-on-couch-3847440743.jpg" alt="psychologist img" />
    </div>

    <div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            doctors: []
        };
    },
    mounted() {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(response => response.json())
            .then(data => {
            this.products = data;
        })
    .catch(error => console.error('Errore:', error));
    }
}
</script>