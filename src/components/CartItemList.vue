<script setup>
import { inject } from 'vue';
import CartItem from './CartItem.vue';

const {cart,onClickAddPlus} = inject('cart')



</script>


<template>
   <div class="pt-8 overflow-y-auto" >
        <CartItem :key="item.id" v-for="item in cart" :title="item.title" @add-to-cart="()=> onClickAddPlus(item)" :imageUrl="item.imageUrl" :price="item.price"/>



      </div>
</template>
