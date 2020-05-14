<template>
  <div class="custom-switch" :class="{ 'custom-switch--active': isChecked }" @click="$emit('click')">
    <div class="custom-switch__control"></div>
  </div>
</template>

<script>

export default {
  name: 'CustomSwitch',

  props: {
    isChecked: {
      type: Boolean,
      required: true
    }
  },
  
  data: () => ({})
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.custom-switch {
  position: relative;
  flex-shrink: 0; 
  width: 40px;
  height: 25px;
  border-radius: 14px;
  border: 1px solid #353535;

  &__control {
    position: absolute;
    left: 2px;
    top: 1px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #353535;
    background-color: white;
  }

  &--active {
   & .custom-switch__control {
     left: auto;
     right: 2px;
   } 
  }
}

</style>
