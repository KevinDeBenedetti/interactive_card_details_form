<script setup>
import Footer from './components/Footer.vue'
import { ref } from 'vue'
import CreditCard from './components/CreditCard.vue'
import CreditCardForm from './components/CreditCardForm.vue'

let cardData = ref({
  cardName: null,
  cardNumber: null,
  cardMonth: null,
  cardYear: null,
  cardCvc: null,
});

</script>

<template>

  <main class="w-full max-w-[375px] desktop:max-h-full mx-auto z-10 desktop:flex">

    <img class="w-full h-[240px] absolute top-0 left-0 desktop:hidden" src="/images/bg-main-mobile.png" alt="background">

    <img class="w-[483px] absolute top-0 left-0 hidden desktop:flex" src="/images/bg-main-desktop.png" alt="background">

    <CreditCard :cardData="cardData" />

    <CreditCardForm :cardData="cardData" />
    
  </main>

  <Footer/>

</template>

<style scoped>

</style>
