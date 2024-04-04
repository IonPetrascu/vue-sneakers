<script setup>
import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
defineProps({
  vatPrice:Number,
  totalPrice:Number
})
</script>


<template>
  <div class="flex z-10 justify-end bg-black bg-opacity-70 fixed top-0 left-0 w-full h-full">
    <div class="bg-white p-8 w-[385px] z-20 flex flex-col over " >
      <DrawerHead/>
      <CartItemList/>

      <div class="mt-auto pt-5">
        <div>
        <div class="flex justify-between items-center gap-2">
          <span>Итого:</span>
          <div class="flex-1 mb-2 self-end border-b-2 border-dashed "></div>
          <b >{{ totalPrice }}руб. </b>
        </div>
        <div class="flex justify-between items-center gap-2">
          <span>Налог 5%: </span>
          <div class="flex-1 mb-2 self-end border-b-2 border-dashed "></div>
          <b >{{ vatPrice }} руб. </b>
        </div>
        </div>
       <button :disabled="totalPrice ? false : true" @click="()=> emit('createOrder')" class="disabled:bg-gray-300 mt-6 group relative w-full rounded-[18px] text-white py-5 font-semibold text-xl bg-[#9dd458] ">
        Оформить заказ
        <svg class="group-hover:right-6 transition-all absolute right-8 top-[50%] -translate-y-[50%]" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
       </button>

      </div>
    </div>
  </div>
</template>
