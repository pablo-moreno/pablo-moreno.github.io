<template>
<dl>
  <dd 
    class="percentage" 
    :class="`percentage-${Math.round(item.value)}`" 
    v-for="item in items" 
    :key="item.id"
  >
    <span class="text">
      {{ item.description }}
    </span>
  </dd>
</dl>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      validator(items) {
        return items.every(item => item.id !== undefined && 
                                   item.description !== undefined && 
                                   item.value !== undefined)
      }
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
dl {
  display: flex;
  background-color: white;
  flex-direction: column;
  max-width: 100%;
  position: relative;
  padding: 20px;
  margin-top: 0;
}

dt {
  align-self: flex-start;
  max-width: 100%;
  font-weight: 700;
  display: block;
  text-align: center;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 20px;
  margin-left: 130px;
}

.text {
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 40px;
  width: 130px;
  background-color: white;
  position: absolute;
  left: 0;
  justify-content: flex-end;
}

@for $i from 1 through 100 {
  .percentage-#{$i}:after {
    $value: ($i * 1%);
    width: $value;
  }
}

.percentage {
  font-size: .8em;
  line-height: 1;
  text-transform: uppercase;
  height: 40px;
  margin-left: 130px;
  background: repeating-linear-gradient(
    to right,
    #ddd,
    #ddd 1px,
    #fff 1px,
    #fff 5%
  );
  
  &:after {
    content: "";
    display: block;
    background-color: #703d99;
    width: 50px;
    margin-bottom: 10px;
    height: 90%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color .3s ease;
    cursor: pointer;
  }
  &:hover,
  &:focus {
    &:after {
       background-color: #896da0; 
    }
  }
}

@for $i from 1 through 100 {
  .percentage-#{$i} {
    &:after {
      $value: ($i * 1%);
      width: $value;
    }
  }
}

.percentage:after {
  content: "";
  display: block;
  background-color: #703d99;
}
</style>
