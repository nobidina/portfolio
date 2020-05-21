<template>
  <section class="custom-section" :class="{ 'custom-section--color':  isColorMode }">
    <div class="custom-section__inner" :class="{ 'custom-section__inner--cartoon-wrapper': cartoon }">
      <slot />
      <cat class="custom-section__cat" v-if="cartoon === 'cat'" :animation="catAnimation" />
      <cat-in-box class="custom-section__cat-in-box" v-if="cartoon === 'cat-in-box'" />
    </div>
  </section>
</template>

<script>

import Cat from '@/components/cartoons/Cat';
import CatInBox from '@/components/cartoons/CatInBox';

import { mapState } from 'vuex';

export default {
  name: 'CustomSection',

  components: {
    Cat,
    CatInBox
  },

  props: {
    // available animation 'cat' or 'cat-in-box'
    cartoon: {
      type: String,
      default: ""
    }
  },

  data: () => ({
    catAnimation: 'ball'
  }),

  computed: {
    ...mapState({
      isColorMode: state => state.isColorMode
    })
  }
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.custom-section {
  position: relative;
  z-index: 1;
  margin-bottom: 4px;
  border-radius: 30px;

  @media @tablet {
    border-radius: 50px;
  }

  &__inner {
    z-index: 2;
    padding-top: 40px;
    padding-bottom: 40px;
    border-radius: 30px;
    background-color: @whitesmoke;

    @media @tablet {
      padding-top: 50px;
      padding-bottom: 50px;
      border-radius: 50px;
    }

    @media @desktop {
      padding-top: 90px;
      padding-bottom: 90px;
    }

    &--cartoon-wrapper {
      position: relative;
      padding-bottom: 280px;

      @media @tablet {
        padding-bottom: 320px;
      }

      @media @desktop {
        padding-bottom: 90px;
        padding-right: 60%;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    z-index: -1;
    width: 50%;
    height: 100%;
  }

  &:nth-child(even) {
    padding-right: 20px;

    @media @tablet {
      padding-right: 30px;
    }

    @media @desktop {
      padding-right: 70px;
    }

    &::before {
      right: -1px;
      border-top: 1px solid @grey;
      border-bottom: 1px solid @grey;
      border-right: 1px solid @grey;
      border-left: 1px solid @whitesmoke;
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
      box-shadow: 0 2px 0 0 @white,
                  0 -2px 0 0 @white,
                  2px 0 0 0 @white,
                  0 3px 0 0 @grey,
                  0 -3px 0 0 @grey,
                  3px 0 0 0 @grey;
    }
  }

  &:nth-child(odd) {
    padding-left: 20px;

    @media @tablet {
      padding-left: 30px;
    }

    @media @desktop {
      padding-left: 70px;
    }

    &::before{
      left: -1px;
      border-top: 1px solid @grey;
      border-bottom: 1px solid @grey;
      border-left: 1px solid @grey;
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
      box-shadow: 0 2px 0 0 @white,
                  -2px 0 0 0 @white,
                  0 -2px 0 0 @white, 
                  0 3px 0 0 @grey,
                  0 -3px 0 0 @grey,
                  -3px 0 0 0 @grey;
    }
  }

  &:first-child {
    padding-left: 20px;
    padding-right: 20px;

    @media @tablet {
      padding-left: 30px;
      padding-right: 30px;
    }

    @media @desktop {
      padding-left: 70px;
      padding-right: 70px;
    }

    &:before {
      content: none;
    }
  }

  &:nth-child(2) {
    &::after{
      content: "";
      position: absolute;
      top: -44px;
      left: 50%;
      width: 40px;
      height: 40px;
      border-bottom: 1px solid @lightslategrey;
      border-left: 1px solid @lightslategrey;
      border-bottom-left-radius: inherit;
      box-shadow: 0 2px 0 0 @white,
                  -2px 0 0 0 @white,
                  -1px 3px 0 0 @lightslategrey, 
                  -3px 1px 0 0 @lightslategrey;
    }

    & .custom-section__inner::after {
      content: "";
      position: absolute;
      top: -40px;
      left: calc(50% - 10px);
      width: 40px;
      height: 40px;
      background-color: @whitesmoke;

      @media @tablet {
        left: 50%;
      }
    }
  }

  &:last-of-type {
    min-height: 300px;

    &::after{
      content: "";
      position: absolute;
      bottom: -5px;
      left: 50%;
      z-index: 2;
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      background: url("./img/ball.svg") no-repeat center center;
      background-size: contain;
    }
  }

  &--color {
    & .custom-section__inner {
      background-color: @white;
    }

    &:nth-child(even) {
      &::before {
        border-top: 1px solid @grey;
        border-bottom: 1px solid @grey;
        border-right: 1px solid @grey;
        box-shadow: 0 2px 0 0 @white,
                    0 -2px 0 0 @white,
                    2px 0 0 0 @white,
                    0 3px 0 0 @grey,
                    0 -3px 0 0 @grey,
                    3px 0 0 0 @grey;
      }
    }

    &:nth-child(odd) {
      &::before{
        border-top: 1px solid @grey;
        border-bottom: 1px solid @grey;
        border-left: 1px solid @grey;
        box-shadow: 0 2px 0 0 @white,
                    -2px 0 0 0 @white,
                    0 -2px 0 0 @white, 
                    0 3px 0 0 @grey,
                    0 -3px 0 0 @grey,
                    -3px 0 0 0 @grey;
      }
    }

    &:nth-child(2) {
      background-color: @white;

      &::after {
        border-bottom: 1px solid @grey;
        border-left: 1px solid @grey;
        box-shadow: 0 2px 0 0 @white,
                    -2px 0 0 0 @white,
                    -1px 3px 0 0 @grey, 
                    -3px 1px 0 0 @grey;
        background-color: @white;
      }

      & .custom-section__inner::after {
        background-color: @white;
      }
    }

    &:last-of-type {
      &::after{
        background-image: url("./img/ball-color.svg");
      }
    }
  }

  &__cat {
    position: absolute;
    right: calc(50% - 150px);
    bottom: 49px;
    user-select: none;
    -webkit-tap-highlight-color: rgba(200,0,0,0);
  }

  &__cat-in-box {
    position: absolute;
    right: 50%;
    bottom: -2px;
    transform: translateX(123%);
  }
}

</style>
