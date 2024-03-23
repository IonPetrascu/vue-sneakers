<script setup>
import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'
</script>

<template>
  <div className="mt-14 w-4/5 max-w-7xl m-auto rounded-3xl shadow-xl bg-white">
    <Header />
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-5">Все кроссовоки</h2>
      <CardList/>
    </div>
  </div>
  <Drawer/>
</template>
