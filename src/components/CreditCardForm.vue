<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps(['cardData']);

let errors = ref({
  name: null,
  number: null,
  month: null,
  year: null,
  cvc: null,
});

let submitted = ref(false);

const validateNonEmpty = (field) => {
  if (!props.cardData[field] || props.cardData[field] === '') {
    return 'Can\'t be blank';
  } else {
    return null;
  }
};

const validateNonEmptyAndNumber = (field) => {

  const error = validateNonEmpty(field);

  if (!error) {
    const data = props.cardData[field].replace(/\s/g, '');
    if (isNaN(data)) {
      return 'Wrong format, numbers only';
    }
  } else {
    return error;
  }
};

const validateCardholderName = (field) => {
  const error = validateNonEmpty(field);

  if (!error) {
    if (!/^[a-zA-Z\s]+$/.test(props.cardData[field])) {
      return 'Invalid cardholder name';
    }
    return null;
  } else {
    return error;
  }
};

const validateCardNumber = (field) => {
  const error = validateNonEmptyAndNumber(field);

  if (!error) {
    const cardNumberValue = props.cardData[field].replace(/\s/g, '');
    if (cardNumberValue.length !== 16) {
      return 'Invalid card number length';
    }
    return null;
  } else {
    return error;
  }
};

const validateMonth = (field) => {
  const error = validateNonEmptyAndNumber(field);

  if (!error) {
    const monthValue = parseInt(props.cardData[field], 10);
    if (monthValue < 1 || monthValue > 12) {
      return 'Enter a valid month';
    }
    return null;
  } else {
    return error;
  }
};

const validateYear = (field) => {
  const error = validateNonEmptyAndNumber(field);

  if (!error) {
    const yearValue = parseInt(props.cardData[field], 10);

    const currentYear = new Date().getFullYear() % 100;

    if (yearValue < currentYear || (yearValue >= (currentYear + 3))) {
      return 'Enter a valid year';
    }
    return null;
  } else {
    return error;
  }
};

const validateCvc = (field) => {
  const error = validateNonEmptyAndNumber(field);

  if (!error) {
    const cvcValue = props.cardData[field].replace(/\s/g, '');
    if (cvcValue.length !== 3) {
      return 'Invalid CVC';
    }
    return null;
  } else {
    return error;
  }
};

const validateInput = () => {
  errors.value.name = validateCardholderName('name');
  errors.value.number = validateCardNumber('number');
  errors.value.month = validateMonth('month');
  errors.value.year = validateYear('year');
  errors.value.cvc = validateCvc('cvc');

  console.log(errors.value);
};

const handleSubmit = () => {
  validateInput();

  if (!Object.values(errors.value).some((error) => error !== null)) {
    console.log('Start cleaning');
    const cleanedData = {
      name: encodeURIComponent(props.cardData.name),
      number: encodeURIComponent(props.cardData.number.replace(/\s/g, '')),
      month: encodeURIComponent(props.cardData.month),
      year: encodeURIComponent(props.cardData.year),
      cvc: encodeURIComponent(props.cardData.cvc.replace(/\s/g, '')),
    };

    // Send cleanedData to the backend

    console.log('Cleaned Data:', cleanedData);
    submitted.value = true;

    errors.value = {
      name: null,
      number: null,
      month: null,
      year: null,
      cvc: null,
    };
  }
};

// Format number during typing
const formatCardNumber = (event) => {
  const input = event.target;
  let value = input.value;
  value = value.substring(0, 19);

  // Format the value in groups of 4 with spaces
  value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

  // Update the input value
  input.value = value;
};
</script>

<template>
  <section class="mt-[91px] flex px-[24px]">

<!--  Validation form  -->
    <div v-if="submitted" class="w-full max-w-[327px] flex flex-col items-center justify-center">

      <img src="/images/icon-complete.svg">

      <div class="mt-[35px] text-[28px] text-deepViolet tracking-[3.422px]">THANK YOU !</div>

      <div class="text-[18px] text-purblishGrey">We’ve added your card details</div>

      <button class="w-full mt-[48px] mb-[45px] h-[53px] rounded-[8px] bg-deepViolet text-white text-[18px]">Continue</button>

    </div>

<!--  Form  -->
    <div v-else class="w-full max-w-[327px]">

      <p class="inputLabel">CARDHOLDER NAME</p>

      <input class="w-full" type="text" v-model="cardData.name" placeholder="e.g. Jane Appleseed">

      <span v-if="errors.name" class="error">{{ errors.name }}</span>

      <p class="mt-[20px] inputLabel">CARD NUMBER</p>

      <input class="w-full" type="text" maxlength="19" v-model="cardData.number" @input="formatCardNumber" placeholder="e.g. 1234 5678 9123 0000">

      <span v-if="errors.number" class="error">{{ errors.number }}</span>

      <div class="mt-[20px] flex">

        <div class="min-w-[152px]">

          <p class="inputLabel">EXP. DATE (MM/YY)</p>

          <div class="flex">

            <input class="w-full max-w-[72px]" type="text" maxlength="2" v-model="cardData.month" placeholder="MM">

            <input class="w-full max-w-[72px] ml-[8px]" type="text" maxlength="2" v-model="cardData.year" placeholder="YY">

          </div>

          <span v-if="errors.month || errors.year" class="error">{{ errors.month || errors.year }}</span>

        </div>

        <div class="ml-[11px] w-full max-w-[164px]">

          <p class="inputLabel">CVC</p>

          <input class="w-full max-w-[164px] min-w-[62px]" type="text" maxlength="3" v-model="cardData.cvc" placeholder="e.g. 123">
          <span v-if="errors.cvc" class="error">{{ errors.cvc }}</span>

        </div>

      </div>

      <button @click="handleSubmit" class="w-full mt-[28px] mb-[45px] h-[53px] rounded-[8px] bg-[var(--Deep-Violet)] text-white text-[18px]">Confirm</button>

      <div>

      </div>

    </div>

  </section>
</template>

<style scoped>
.error {
  font-size: 12px;
  color: var(--Red);
  margin-top: 9px;
}
.inputLabel {
  color: var(--Deep-Violet, #21092F);
  font-feature-settings: 'clig' off, 'liga' off;

  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

input {
  margin-top: 9px;
  padding-left: 16px;
  height: 45px;
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--Light-Grey, #DFDEE0);
  color: var(--Deep-Violet, #21092F);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 18px;
}

input::placeholder {
  opacity: 0.25;
}
</style>