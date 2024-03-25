<script setup>
import Card from './Card.vue';

 defineProps({
  items:Array
  })

const emit = defineEmits(['addToFavorite'])

</script>

<template>
<div className="grid grid-cols-4 gap-5">
      <Card :onClickFavorite="() => emit('addToFavorite', item)" v-for="item in items"  :key="item.id"  :id="item.id" :isFavorite="item.isFavorite" :isAdded="true" :price="item.price" :title="item.title" :imageUrl="item.imageUrl"/>
    </div>
</template>
