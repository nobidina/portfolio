<template>
  <div class="custom-switch" :class="{ 'custom-switch--active': isChecked,  'custom-switch--color': isColorMode }" @click="$emit('click')">
    <div class="custom-switch__control"></div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'CustomSwitch',

  props: {
    isChecked: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    ...mapState({
      isColorMode: state => state.isColorMode
    })
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
  border: 1px solid @black;
  user-select: none;
  -webkit-tap-highlight-color: rgba(200,0,0,0);

  @media @tablet {
    cursor: pointer;
  }

  &__control {
    position: absolute;
    transform: translateX(2px);
    transition: transform 0.1s ease;
    top: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid @black;
    background-color: @white;
  }

  &--active {
   & .custom-switch__control {
     left: auto;
     transform: translateX(20px);
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
