<script setup>
defineProps({
  cardData: Object
})
</script>

<template>
  <section class="h-[240px] desktop:h-[500px] relative desktop:static">

    <div class="bg-[url('/images/bg-card-back.png')] bg-contain bg-no-repeat h-full max-h-[157px] desktop:max-h-[245px] w-full max-w-[286px] desktop:max-w-[447px] absolute top-[32px] desktop:top-[469px] right-[16px] desktop:right-0 desktop:left-[256px]">

      <p v-if="cardData.cvc" class="absolute text-white text-start text-[9px] top-[70px] right-[34px]">{{ cardData.cvc }}</p>
      <p v-else class="absolute text-white text-start text-[9px] top-[70px] right-[34px]">000</p>

    </div>

    <div class="bg-[url('/images/bg-card-front.png')] bg-contain bg-no-repeat h-full max-h-[157px] desktop:max-h-[245px] w-full max-w-[285px] desktop:max-w-[447px] absolute top-[121px] desktop:top-[187px] left-[17px] desktop:left-[164px] text-white">

      <img class="h-[30px] absolute top-[17.6px] left-[19px]" src="/images/card-logo.svg" alt="Card logo">

      <p v-if="cardData.number" class="absolute top-[84.6px] left-[19px] text-[18px] tracking-[2.2px]">{{ cardData.number }}</p>
      <p v-else class="absolute top-[84.6px] left-[19px] text-[18px] tracking-[2.2px]">0000 0000 0000 0000</p>

      <p v-if="cardData.name" class="absolute bottom-[20.6px] left-[19px] text-[9px] uppercase">{{ cardData.name }}</p>
      <p v-else class="absolute bottom-[20.6px] left-[19px] text-[9px] uppercase">Jane APPLESEED</p>

      <p v-if="cardData.month || cardData.year" class="absolute bottom-[20.6px] right-[20.89px] text-[9px] uppercase"> {{ cardData.month }}/{{ cardData.year }}</p>
      <p v-else class="absolute bottom-[20.6px] right-[20.89px] text-[9px] uppercase">00/00</p>

    </div>

  </section>
</template>

<style scoped>

</style>