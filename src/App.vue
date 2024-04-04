<script setup>
import { onMounted,ref, watch,reactive,provide, computed } from 'vue';
import axios from 'axios'

import HeaderSection from './components/HeaderSection.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'

const items = ref([])
const cart = ref([])

const drawerOpen = ref(false)

const totalPrice = computed(
  ()=> cart.value?.reduce((acc,el)=> acc + el.price,0)
)


const closeDrawer = ()=>{
  drawerOpen.value = false
}
const openDrawer = ()=>{
  drawerOpen.value = true
}
const addToCart = (item)=>{
    cart.value.push(item)
    item.isAdded = true

}
const removeFromCart = (item)=>{
    cart.value = cart.value.filter((el)=> el.id !== item.id )
    item.isAdded = false
}
const onClickAddPlus = (item)=>{
  if(!item.isAdded ){
    addToCart(item)
  }else{
    removeFromCart(item)
  }
}
const filters = reactive({
  sortBy:'title',
  searchQuery:''
})
const onChangeSelect = (e)=>{
  filters.sortBy = e.target.value
}
const onChangeSearchInput = (e)=>{
  filters.searchQuery = e.target.value
}
const fetchFavorites = async ()=>{
try {
    const {data:favorites} = await axios.get('https://b71d9efcf989be11.mokky.dev/favorites')

    items.value = items.value.map((el)=>{

      const favorite = favorites.find(favorite => favorite.favoriteId === el.id)

      if(!favorite){
        return el
      }

      return {
        ...el,
        isFavorite:true,
        favoriteId:favorite.id
      }

    } )

  } catch (error) {
    console.log(error)
  }
}
const fecthItems = async()=>{
try {
  const params = {
    sortBy:filters.sortBy,

  }
  if(filters.searchQuery){
    params.title =  `*${filters.searchQuery}*`
  }

    const {data} = await axios.get('https://b71d9efcf989be11.mokky.dev/items',{
      params
    })
    items.value = data.map((el)=> ({
      ...el,
      isfavorite:false,
      isAdded:false,
      favoriteId:null
    }))
  } catch (error) {
    console.log(error)
  }
}
const addToFavorite = async (item)=>{
  try {
    if(!item.isFavorite){
      const obj = {favoriteId:item.id}
      item.isFavorite = true

      const {data} = await axios.post('https://b71d9efcf989be11.mokky.dev/favorites',obj)

      item.favoriteId = data.id

    }else{
      item.isFavorite = false

      await axios.delete('https://b71d9efcf989be11.mokky.dev/favorites/'+item.favoriteId)
      item.favoriteId = null
    }
  } catch (error) {
    console.log(error);
  }
}
onMounted(async()=>{
  await fecthItems()
  await fetchFavorites()
})
watch(filters,fecthItems)


provide('cart',{closeDrawer,openDrawer,cart,addToCart,removeFromCart})

 </script>

<template>
  <div className="mt-14 w-4/5 max-w-7xl m-auto rounded-3xl shadow-xl bg-white">
    <HeaderSection :total-price="totalPrice" @open-drawer="openDrawer"/>
    <div className="p-10">
      <div class="flex justify-between items-center">
        <h2 className="text-3xl font-bold mb-5">Все кроссовоки</h2>
        <div class="flex gap-4">
          <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none" name="" id="">
            <option value="title">По названию</option>
            <option value="price">По цене(дешевые)</option>
            <option value="-price">По цене(дорогие)</option>
          </select>
            <div class="relative">
              <img class="absolute left-3 top-3" src="/search.svg" alt="">
              <input @input="onChangeSearchInput" class="border border-gray-200 focus:border-gray-400 rounded-md py-2 pl-10 pr-4 outline-none" placeholder="Поиск...">
            </div>
        </div>
      </div>
      <div class="mt-10">

        <CardList @on-click-add-plus="onClickAddPlus" @add-to-favorite="addToFavorite" :items="items"/>
      </div>
    </div>
  </div>
 <Drawer v-if="drawerOpen"/>
</template>
