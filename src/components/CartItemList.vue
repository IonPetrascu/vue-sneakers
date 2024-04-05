<script setup>
import { inject } from 'vue';
import CartItem from './CartItem.vue';

const {cart,removeFromCart} = inject('cart')



</script>


<template>
   <div class="pt-8 overflow-y-auto h-[713px]" >
      <CartItem :key="item.id" v-for="item in cart" :title="item.title" @remove-from-cart="()=> removeFromCart(item)" :imageUrl="item.imageUrl" :price="item.price"/>
      </div>
</template>
