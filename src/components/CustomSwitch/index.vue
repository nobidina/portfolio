<template>
  <div class="custom-switch" :class="{ 'custom-switch--active': isChecked,  'custom-switch--color': isColorMode }" @click="$emit('click')">
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
    },
    isColorMode: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.custom-switch {
  position: relative;
  flex-shrink: 0; 
  width: 45px;
  height: 26px;
  border-radius: 14px;
  border: 1px solid #353535;

  @media @tablet {
    cursor: pointer;
  }

  &__control {
    position: absolute;
    left: 2px;
    top: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid @black;
  }

  &--active {
   & .custom-switch__control {
     left: auto;
     right: 2px;
    } 
  }

  &--color {
    border-color: @blue;
    background-color: @blue;

    & .custom-switch__control {
      border-color: @blue;
      background-color: @white;
    }
  }
}

</style>
