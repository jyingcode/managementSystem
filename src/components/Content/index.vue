<template>
  <div class="first">
    购物系统
    <button @click="checkout('/dashbaord/index/header')">点击</button>
    <button @click="checkout('/dashbaord/index/test')">确定</button>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    checkout(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
.first {
  height: 800px;
  font-size: 20px;
  color: aqua;
  margin: 0 auto 0;
}
</style>
