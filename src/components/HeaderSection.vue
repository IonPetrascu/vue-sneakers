<template>
  <div
    className="py-11 px-14 flex items-center justify-between border-b-[1px] border-[#EAEAEA] "
  >
    <div className="flex items-center gap-4">
      <img className="w-10 h-10 " src="/logo.png" alt="Logo" />
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold uppercase">Vue Sneakers</h2>
        <p className="text-[#9d9d9d] text-base">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul className="flex items-center justify-between gap-10">
      <li @click="()=> emit('openDrawer')"
        className="text-[#5c5c5c] text-base font-normal gap-2 flex items-center cursor-pointer hover:text-black"
      >
        <img src="/cart.svg" alt="Cart" />
        <span>1205 руб.</span>
      </li>
      <li
        className=" text-[#5c5c5c] text-base font-normal gap-2 flex items-center cursor-pointer hover:text-black"
      >
        <img src="/heart.svg" alt="Heart" />
        <span>Закладки</span>
      </li>
      <li
        className="text-[#5c5c5c] text-base font-normal gap-2 flex items-center cursor-pointer hover:text-black"
      >
        <img src="/profile.svg" alt="Porfile" />
        <span>Профиль</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const emit = defineEmits(['openDrawer'])

</script>
