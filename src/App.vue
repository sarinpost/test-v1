<template>
  <div>
    <button @click="$router.push({ name: 'q1' })">question 1</button>
    <button @click="$router.push({ name: 'q2' })">question 2</button>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>