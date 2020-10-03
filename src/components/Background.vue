<template>
  <div class="background" :style="{'background-color': backgroundColor}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
  }
}
</script>
<style lang="scss" scoped>
.background {
  display: flex;
  width: 100%;
  padding: 4em;
}
</style>