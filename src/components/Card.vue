<script setup>
  defineProps({
    imageUrl:String,
    title:String,
    price:Number,
    isFavorite:Boolean,
    isAdded:Boolean,
    onClickAdd:Function,
    onClickFavorite:Function,
  })


</script>

<template>
<div className="border bg-white border-slate-100 rounded-xl w-[210px] h-[260px] pt-5 px-8 pb-8 relative hover:-translate-y-1 transition-transform hover:shadow-xl">
        <button @click="onClickFavorite" className="cursor-pointer">
          <img className="absolute left-8 top-8" :src="isFavorite ? '/like-2.svg' :'/like-1.svg'" alt="Like 1">
        </button>
        <img className="w-[133px] h-28" :src="imageUrl" alt="Sneaker">
        <p className="font-normal text-base">{{title}}</p>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
          <span className="font-medium text-sm uppercase text-[#bdbdbd]">Цена:</span>
          <span className="font-bold text-base">{{price}} руб.</span>
          </div>
          <button @click="onClickAdd"  className="cursor-pointer">
            <img :src="!isAdded ? '/plus.svg':'/checked.svg' " alt="Like 1">
          </button>
        </div>
      </div>
</template>
