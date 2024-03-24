<script setup>
import Card from './Card.vue';

  defineProps({
  items:Array
  })

const onClickAdd = () =>{
  alert('add')
}
const onClickFavorite = () =>{
  alert('favorite')
}

</script>

<template>
<div className="grid grid-cols-4 gap-5">
      <Card v-for="item in items" :key="item.id" :onClickAdd="onClickAdd" :onClickFavorite="onClickFavorite" :id="item.id" :isFavorite="true" :isAdded="true" :price="item.price" :title="item.title" :imageUrl="item.imageUrl"/>
    </div>
</template>
