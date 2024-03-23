<script setup>
import Cart from './Cart.vue';
const onClickAdd = () =>{
  alert('add')
}
const onClickFavorite = () =>{
  alert('favorite')
}
</script>

<template>
<div className="grid grid-cols-4 gap-5">
      <Cart :onClickAdd="onClickAdd" :onClickFavorite="onClickFavorite" :isFavorite="true" :isAdded="true" :price="5000" title="Мужские Кроссовки Nike Blazer Mid Suede" imageUrl="./sneakers/sneakers-1.jpg"/>


    </div>
</template>
