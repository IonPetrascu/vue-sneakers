<script setup>
import Card from './Card.vue';
import { defineProps } from 'vue';
 defineProps({
  items:Array,
  })

const emit = defineEmits(['addToFavorite','onClickAddPlus'])


</script>

<template>
<div className="grid grid-cols-4 gap-5">
      <Card :onClickAdd="()=> emit('onClickAddPlus',item)" :onClickFavorite="() => emit('addToFavorite', item)" v-for="item in items" :is-added="item.isAdded" :key="item.id"  :id="item.id" :isFavorite="item.isFavorite"  :price="item.price" :title="item.title" :imageUrl="item.imageUrl"/>
    </div>
</template>
