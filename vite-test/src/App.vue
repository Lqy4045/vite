<template>
  <div class="warpper">hello vue</div>
  <p>{{ num }}</p>
  <button @click="add">+</button>
</template>
<script setup>
import { ref } from "vue";
let num = ref(1);
function add() {
  num.value += 1;
}
</script>
<style lang="less">
.warpper {
  color: var(--blueColor);
}
</style>
