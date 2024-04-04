
<script setup>
import { defineProps } from 'vue';

defineProps({
  imageUrl:String,
  title:String,
  price:Number,

})

const emit = defineEmits(['addToCart'])
</script>

<template>
  <div class="flex mb-4 items-center gap-5 justify-between w-full border p-5 rounded-xl border-slate-200">
    <img className="w-[70px] h-[70px]" :src="imageUrl" alt="Sneaker">
    <div>
        <h3 class="font-normal text-base mb-2">{{ title }}</h3>
        <span class="font-bold text-base">{{ price }} руб.</span>
    </div>
        <img @click="()=> emit('addToCart')" class="w-8 h-8 cursor-pointer self-end" src="/close.svg" alt="sneaker">
  </div>
</template>
