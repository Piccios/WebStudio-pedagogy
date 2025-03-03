<template>

    <div>
        <h1>Welcome to your safe space!</h1>
        <p>Discover our products</p>
        <img src="../assets/clinical-psychology-doctor-with-patient-on-couch-3847440743.jpg" alt="psychologist img" />
    </div>

    <div>
        <h2>Our experts</h2>
        <ul>
            <li v-for="doctor in doctors" :key="doctor.id">
            {{ doctor.name }}
            </li>
        </ul>
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