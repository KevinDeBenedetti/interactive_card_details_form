<script setup>
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
import CreditCard from '@/components/CreditCard.vue'
import CreditCardForm from '@/components/CreditCardForm.vue'

/*let cardName = ref(null);
let cardNumber = ref(null);
let cardMonth = ref(null);
let cardYear = ref(null);
let cardCvc = ref(null);*/

let cardData = ref({
  cardName: null,
  cardNumber: null,
  cardMonth: null,
  cardYear: null,
  cardCvc: null,
/*  nameError: null,
  numberError: null,
  monthError: null,
  yearError: null,
  cvcError: null,*/
});

</script>

<template>

  <main class="w-full max-w-[375px] desktop:max-h-full mx-auto z-10 desktop:flex">

    <img class="w-full h-[240px] absolute top-0 left-0 desktop:hidden" src="/images/bg-main-mobile.png" alt="background">

    <img class="w-[483px] absolute top-0 left-0 hidden desktop:flex" src="/images/bg-main-desktop.png" alt="background">

    <CreditCard :cardData="cardData" />

    <CreditCardForm :cardData="cardData" />

    <!--  Cards  -->
<!--    <section class="h-[240px] relative">

      <div class="bg-[url('/images/bg-card-back.png')] bg-contain bg-no-repeat h-full max-h-[157px] w-full max-w-[286px] absolute top-[32px] right-[16px]">

        <p v-if="cardCvc" class="absolute text-white text-start text-[9px] top-[70px] right-[34px]">{{ cardCvc }}</p>
        <p v-else class="absolute text-white text-start text-[9px] top-[70px] right-[34px]">000</p>

      </div>

      <div class="bg-[url('/images/bg-card-front.png')] bg-contain bg-no-repeat h-full max-h-[157px] w-full max-w-[285px] absolute top-[121px] left-[17px] text-white">

        <img class="h-[30px] absolute top-[17.6px] left-[19px]" src="/images/card-logo.svg" alt="Card logo">

        <p v-if="cardNumber" class="absolute top-[84.6px] left-[19px] text-[18px] tracking-[2.2px]">{{ cardNumber }}</p>
        <p v-else class="absolute top-[84.6px] left-[19px] text-[18px] tracking-[2.2px]">0000 0000 0000 0000</p>

        <p v-if="cardName" class="absolute bottom-[20.6px] left-[19px] text-[9px] uppercase">{{ cardName }}</p>
        <p v-else class="absolute bottom-[20.6px] left-[19px] text-[9px] uppercase">Jane APPLESEED</p>

        <p v-if="cardMonth || cardYear" class="absolute bottom-[20.6px] right-[20.89px] text-[9px] uppercase"> {{ cardMonth }}/{{ cardYear }}</p>
        <p v-else class="absolute bottom-[20.6px] right-[20.89px] text-[9px] uppercase">00/00</p>

      </div>

    </section>-->


<!--  Form fields  -->
<!--    <section class="mt-[91px] flex px-[24px]">

      <div class="w-full max-w-[327px]">

        <p class="inputLabel">CARDHOLDER NAME</p>

        <input class="w-full" type="text" v-model="cardName" placeholder="e.g. Jane Appleseed">

        <p class="mt-[20px] inputLabel">CARD NUMBER</p>

        <input class="w-full" type="text" v-model="cardNumber" placeholder="e.g. 1234 5678 9123 0000">

        <div class="mt-[20px] flex">

          <div class="min-w-[152px]">

            <p class="inputLabel">EXP. DATE (MM/YY)</p>

            <div class="flex">

              <input class="w-full max-w-[72px]" type="text" v-model="cardMonth" placeholder="MM">

              <input class="w-full max-w-[72px] ml-[8px]" type="text" v-model="cardYear" placeholder="YY">

            </div>


          </div>

          <div class="ml-[11px] w-full max-w-[164px]">

            <p class="inputLabel">CVC</p>

            <input class="w-full max-w-[164px] min-w-[62px]" type="text" v-model="cardCvc" placeholder="e.g. 123">

          </div>

        </div>

        <button class="w-full mt-[28px] h-[53px] rounded-[8px] bg-[var(&#45;&#45;Deep-Violet)] text-white text-[18px]">Confirm</button>

        <div>

        </div>

      </div>

    </section>-->

  </main>

  <Footer/>

</template>

<style scoped>

</style>
