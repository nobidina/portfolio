<template>
  <div class="box" :class="{ 'box--color': isColorMode }">
    <div class="box__front"></div>
    <div class="box__front-lit"></div>
    <div class="box__side  box__side--right"></div>
    <div class="box__side  box__side--left"></div>
    <div class="box__side-lit"></div>
    <div class="box__back"></div>
    <slot />
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'Box',

  computed: {
    ...mapState({
      isColorMode: state => state.isColorMode
    })
  }
}
</script>

<style scoped lang="less">
@import "../../../less/variables.less";

.box {
  cursor: pointer;
  width: 210px;
  height: 180px;
  
  &__front {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    width: 210px;
    height: 180px;
    border: 1px solid @black;
    background-color: @white;

    &::after {
      content: "CSS CAT";
      position: absolute;
      bottom: 23px;
      right: 15px;
      transform: rotate(-25deg);
      box-sizing: border-box;
      max-width: 85px;
      max-height: 85px;
      padding: 10px;
      border: 1px solid @black;
      border-radius: 5px;
      text-align: right;
      font-weight: 600;
      font-size: 0.7em;
      line-height: 1em;
      color: @black;
    }
  }

  &__front-lit {
    position: absolute;
    top: -2px;
    left: -13px;
    transform: skewX(-37deg);
    z-index: 3;
    width: 210px;
    height: 30px;
    border: 1px solid @black;
    background-color: @white;
  }

  &__side {
    position: absolute;
    bottom: -5px;
    transform: skewX(-32deg) rotate(-32deg);
    width: 40px;
    height: 212px;
    border: 1px solid @black;
    background-color: @white;

    &--left {
      z-index: 1;
      left: 3px;
    }

    &--right {
      z-index: 2;
      right: -46px;
    }
  }

  &__side-lit {
    position: absolute;
    top: -14px;
    right: -74px;
    transform: skewX(37deg) rotate(-19deg);
    z-index: 3;
    width: 67px;
    height: 26px;
    border: 1px solid @black;
    background-color: @white;
  }

  &__back {
    position: absolute;
    bottom: 22px;
    left: 47px;
    z-index: 1;
    width: 210px;
    height: 180px;
    border: 1px solid @black;
    background-color: @white;
  }

  &--color {
    & .box__front {
      border-color: @grey;
      background-color: @white-grey;

      &::after {
        border-color: @grey;
        color: @grey;
      }
    }

    & .box__front-lit {
      border-color: @grey;
      background-color: @white-grey;
    }

    & .box__side {
      border-color: @grey;
      background-color: @white-grey;
    }

    & .box__side-lit {
      border-color: @grey;
      background-color: @white-grey;
    }

    & .box__back {
      border-color: @grey;
      background-color: @white-grey;
    }
  }
}

</style>
