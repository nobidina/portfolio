<template>
  <div
    class="cat"
    :class="{ 
      'cat--color': isColorMode, 
      'animation-ball': isAnimationBallActive,
      'animation-box': isAnimationBoxActive
      }"
    @click="animateBallCat"
    >
    <div class="cat__decor"></div>
    <div class="cat__head">
      <div class="cat__face"></div>
      <div class="cat__ear  cat__ear--left"></div>
      <div class="cat__ear  cat__ear--right"></div>
      <div class="cat__eye  cat__eye--left"></div>
      <div class="cat__eye  cat__eye--right"></div>
      <div class="cat__nose">
        <div class="cat__whisker  cat__whisker--left"></div>
        <div class="cat__whisker  cat__whisker--right"></div>
      </div>
    </div>
    <div class="cat__body">
      <div class="cat__front-paw  cat__front-paw--left"></div>
      <div class="cat__front-paw  cat__front-paw--right"></div>
      <div class="cat__back-paw  cat__back-paw--left"></div>
      <div class="cat__back-paw  cat__back-paw--right"></div>
      <div class="cat__tail"></div>
    </div>
    <div class="cat__decor cat__decor--bottom"></div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'Cat',

  props: {
    // available animation 'ball' or 'box'
    animation: {
      type: String,
      default: ''
    },
    isAnimationBoxActive: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    isAnimationBallActive: false
  }),

  computed: {
    ...mapState({
      isColorMode: state => state.isColorMode
    })
  },

  methods: {
    animateBallCat () {
      if (this.animation === 'ball') {
        if (this.isAnimationBallActive === true) {
          return;
        } this.isAnimationBallActive = true;
      
        setTimeout(() => {
          this.isAnimationBallActive = false;
        }, 8000)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "../../../less/variables.less";

.cat {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 80px;

  @media @tablet {
    cursor: pointer;
  }
  
  &__head {
    position: relative;
    width: 80px;
    height: 70px;
    margin-bottom: -4px;
    border-radius: 24px;
  }

  &__face {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    border-radius: 30px;
    border: 1px solid @black;
    background-color: @white;
  }

  &__ear {
    position: absolute;
    top: -2px;
    z-index: 1;
    width: 40px;
    height: 25px;
    border: 1px solid @black;
    background-color: @white;

    &::after {
      content: "";
      position: absolute;
      top: 12px;
      left: -1px;
      z-index: 1;
      width: 40px;
      height: 25px;
      border: 1px solid @black;
      background-color: @white;
    }

    &--left {
      left: 5px;
      transform: skewY(30deg);

      &::after {
        transform: skewY(30deg);
      }
    }

    &--right {
      left: 32px;
      transform: skewY(-30deg);

      &::after {
        transform: skewY(-30deg);
      }
    }
  }

  &__eye {
    position: absolute;
    top: 20px;
    z-index: 3;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid @black;
    background-color: @white;

    &::after {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      z-index: 4;
      width: 14px;
      height: 13px;
      border-radius: 50%;
      background-color: @black;

      @media @desktop {
        height: 12px;
        top: 2px;
        left: 1px;
      }
    }

    &--left {
      left: 18px;
    }

    &--right {
      right: 18px;
    }
  }

  &__nose {
    position: absolute;
    top: 41px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    border-top: 7px solid @black;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
      width: 1px;
      height: 7px;
      background-color: @black;
    }

    &::after {
      content: "";
      position: absolute;
      top: 5px;
      left: -3px;
      z-index: 3;
      width: 10px;
      height: 1px;
      background-color: @black;
    }
  }

  &__whisker {
    position: absolute;
    top: -12px;
    z-index: 3;
    width: 45px;
    height: 1px;
    background-color: @grey;

    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 0;
      z-index: 3;
      width: 45px;
      height: 1px;
      background-color: @grey;
    }

    &::before {
      top: 20px;
    }

    &::after {
      top: 8px;
    }

    &--left {
      left: -55px;
      transform: rotate(16deg);

      &::before {
        transform: rotate(-21deg);
      }

      &::after {
        transform: rotate(-8deg);
      }
    }

    &--right {
      left: 10px;
      transform: rotate(-16deg);

      &::before {
        transform: rotate(21deg);
      }

      &::after {
        transform: rotate(8deg);
      }
    }
  }

  &__body {
    width: 65px;
    height: 115px;
    border-top-right-radius: 70px;
    border-top-left-radius: 70px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 1px solid @black;
    background-color: @white;
  }

  &__front-paw {
    position: absolute;
    bottom: -9px;
    z-index: 3;
    width: 16px;
    height: 70px;
    border-right: 1px solid @black;
    border-bottom: 1px solid @black;
    border-left: 1px solid @black;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    background-color: @white;

    &--left {
      left: 20px;
    }

    &--right {
      right: 20px;
    }
  }

  &__back-paw {
    position: absolute;
    bottom: -7px;
    z-index: 2;
    width: 20px;
    height: 16px;
    border: 1px solid @black;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: @white;

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }
  }

  &__tail {
    position: absolute;
    bottom: 0px;
    right: 26px;
    z-index: -1;
    width: 150px;
    height: 20px;
    transform: skew(-45deg) rotate(180deg);
    border-top: 1px solid @black;
    border-right: 1px solid @black;
    border-bottom: 1px solid @black;
    border-bottom-right-radius: 17px;
    border-top-right-radius: 10px;
    background-color: @white;

    @media @desktop {
      right: -80px;
      transform: skew(-45deg) rotate(0);
      width: 130px;
    }
  }

  &__decor {
    position: absolute;
    top: 107px;
    left: 172px;
    border-bottom: 140px solid #d3d3d3;
    border-right: 7px solid transparent;
    border-left: 10px solid transparent;
    border-top: 0px solid transparent;
    transform: rotate(-55deg) scale(0);
    z-index: -3;

    &::after,
    &::before {
      content: "";
      position: absolute;
      border-bottom: 130px solid #b1b1b1;
      border-right: 10px solid transparent;
      border-left: 7px solid transparent;
      border-top: 0px solid transparent;
    }

    &::after {
      transform: rotate(-60deg);
      left: 86px;
      top: -20px;
      border-bottom: 100px solid #b1b1b1;
      border-bottom-color: #81888f;
    }

    &::before {
      left: 50px;
      transform: rotate(-30deg);
      border-bottom: 150px solid #b1b1b1;
      border-left: 10px solid transparent;
    }

    &--bottom {
      transform: rotate(140deg) scale(0);
      top: auto;
      left: -50px;
      bottom: 78px;

      &::after {
        transform: rotate(-66deg);
        left: 67px;
        top: -38px;
      }
    }
  }

  &--color {
    & .cat__decor {
      border-bottom-color: @blue;

      &::after {
        border-bottom-color: @blue;
      } 

      &::before {
        border-bottom-color: @blue;
      } 
    }

    & .cat__face {
      border-color: @orange;
      background-color: @orange;
      box-shadow: -1px 0 0px 0px @white,
                  1px 0 0px 0px @white;
    }

    & .cat__ear {
      background-color: @orange;
      border-color: @orange;
      box-shadow: -1px 0 0px 0px @white,
                  1px 0 0px 0px @white;

      &::after {
        border-color: @orange;
      }
    }

    & .cat__eye {
      border-color: @black;

      &::after {
         background-color: @black;
      }
    }

    & .cat__whisker {
      background-color: @white;

      &::after,
      &::before {
        background-color: @white;
      }
    }

    & .cat__body {
      border-color: @orange;
      background-color: @orange;
      box-shadow: -1px 0 0px 0px @white,
                  1px 0 0px 0px @white;
    }

    & .cat__front-paw {
      border-color: @white;
      background-color: @orange;
    }

    & .cat__back-paw {
      border-color: @white;
      background-color: @orange;
    }

    & .cat__tail {
      border-color: @white;
      background-color: @orange;
      
    }
  }
}

  &.animation-ball {
    animation-name: ball-cat;
    animation-duration: 7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;

    .cat__head,
    .cat__ear--left::after,
    .cat__ear--right::after,
    .cat__eye,
    .cat__eye::after,
    .cat__nose,
    .cat__front-paw--left,
    .cat__front-paw--right,
    .cat__back-paw--left,
    .cat__back-paw--right,
    .cat__tail {
      animation-duration: 7s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
    }

    .cat__head {
      animation-name: ball-cat-head;
    }

    .cat__ear--left::after {
      animation-name: ball-cat-left-ear;
    }

    .cat__ear--right::after {
      animation-name: ball-cat-right-ear;
    }

    .cat__eye::after {
      animation-name: ball-cat-eyes-after;
    }

    .cat__eye {
      animation-name: ball-cat-eyes;
    }

    .cat__nose {
      animation-name: ball-cat-nose;
    }

    .cat__front-paw--left {
      animation-name: ball-cat-front-left-pow;
    }

    .cat__front-paw--right {
      animation-name: ball-cat-front-right-pow;
    }

    .cat__tail {
      animation-name: ball-cat-tail;
    }
  }

  &.animation-box {
    animation-name: box-cat;
    animation-duration: 10s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;

    & .cat__head,
    & .cat__ear--left::after,
    & .cat__ear--right::after,
    & .cat__eye,
    & .cat__eye::after,
    & .cat__nose,
    & .cat__front-paw--left,
    & .cat__front-paw--right,
    & .cat__back-paw--left,
    & .cat__back-paw--right,
    & .cat__tail,
    & .cat__decor,
    & .cat__decor--bottom {
      animation-duration: 10s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
    }

    & .cat__decor {
      animation-name: box-cat-decor-top;
    }

    & .cat__decor--bottom {
      animation-name: box-cat-decor-bottom;
    }

    & .cat__head {
      animation-name: box-cat-head;
    }

    & .cat__ear--left::after {
      animation-name: box-cat-left-ear;
    }

    & .cat__ear--right::after {
      animation-name: box-cat-right-ear;
    }

    & .cat__eye::after {
      animation-name: box-cat-eyes-after;
    }

    & .cat__eye {
      animation-name: box-cat-eyes;
    }

    & .cat__nose {
      animation-name: box-cat-nose;
    }

    & .cat__front-paw--left {
      animation-name: box-cat-front-left-pow;
    }

    & .cat__front-paw--right {
      animation-name: box-cat-front-right-pow;
    }

    & .cat__back-paw--left {
      animation-name: box-cat-back-left-pow;
    }

    & .cat__back-paw--right {
      animation-name: box-cat-back-right-pow;
    }

    & .cat__tail {
      animation-name: box-cat-tail;
    }

    &.cat--color {
    .cat__back-paw--left {
      animation-duration: 10s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      animation-name: box-cat-back-left-pow-color;
    }
    .cat__back-paw--right {
      animation-duration: 10s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      animation-name: box-cat-back-right-pow-color;
    }
  }
  }

// ball

@keyframes ball-cat {
  0% {
    transform: translate(0, 0);
  }
  2%, 6% {
    transform: translate(0, -10px);
  }
  6%, 100% {
    transform: translate(0, 0);
  }
}

@keyframes ball-cat-left-ear {
  0% {
    transform: skewY(30deg);
  }
  2%, 88% {
    transform: skewY(27deg) translateX(4px);
  }
  94%, 100% {
    transform: skewY(30deg) translateX(0);
  }
}

@keyframes ball-cat-right-ear {
  0% {
    transform: skewY(-30deg);
  }
  2%, 88% {
    transform: skewY(-28deg) translateX(-4px);
  }
  94%, 100% {
    transform: skewY(-30deg) translateX(0);
  }
}

@keyframes ball-cat-eyes {
  0%, 80% {
    transform: none;
    height: 15px;
  }
  85%, 87% {
    transform: translate(0, 10px);
    height: 0;
  }
  93%, 100% {
    transform: none;
    height: 15px;
  }
}

@keyframes ball-cat-eyes-after {
  0%, 2% {
    transform: translate(0, 0);
    width: 14px;
    height: 13px;
  }
  2%, 15% {
    transform: translate(0, 0);
    width: 13px;
    height: 13px;
  }
  17%, 80% {
    transform: translate(-1px, 1px);
    width: 13px;
    height: 13px;
  }
  85%, 87% {
    transform: translate(-1px, 1px);
    width: 14px;
    height: 0;
  }
  93%, 100% {
    transform: translate(0, 0);
    width: 14px;
    height: 13px;
  }
}

@keyframes ball-cat-head {
  0%, 37% {
    transform: none;
  }
  47%, 60% {
    transform: translate(-15px, 16px);
  }
  70%, 100% {
    transform: none;
  }
}

@keyframes ball-cat-nose {
  0%, 47% {
    transform: translate(-50%, 0);
  }
  48% {
    transform: translate(-50%, -1px);
  }
  49% {
    transform: translate(-50%, -1px);
  }
  50% {
    transform: translate(-50%, 0);
  }
  51% {
    transform: translate(-50%, 0);
  }
  52% {
    transform: translate(-50%, -1px);
  }
  53% {
    transform: translate(-50%, -1px);
  }
  54%, 100% {
    transform: translate(-50%, 0);
  }
}

@keyframes ball-cat-front-left-pow {
  0%, 73% {
    transform: none;
  }
  78% {
    transform: translateY(-7px);
  }
  83%, 100% {
    transform: translateY(0);
  }
}

@keyframes ball-cat-front-right-pow {
  0%, 78% {
    transform: none;
  }
  83% {
    transform: translateY(-7px);
  }
  88%, 100% {
    transform: translateY(0);
  }
}

@keyframes ball-cat-tail {
  0% {
    transform: skew(-45deg) rotate(180deg) translate(0, 0);
  }
  2%, 37% {
    transform: skew(-16deg) rotate(240deg) translate(100px, 55px);
  }
  50% {
    transform: skew(-16deg) rotate(270deg) translate(100px, 46px);
  }
  60% {
    transform: skew(-16deg) rotate(240deg) translate(100px, 55px);
  }
  70% {
    transform: skew(-16deg) rotate(270deg) translate(100px, 46px);
  }
  80%, 98% {
    transform: skew(-16deg) rotate(240deg) translate(100px, 55px);
  }
  100% {
    transform: skew(-45deg) rotate(180deg) translate(0, 0);
  }
}

//box

@keyframes box-cat-left-ear {
  0% {
    transform: skewY(30deg);
  }
  3%, 100% {
    transform: skewY(27deg) translateX(4px);
  }
}

@keyframes box-cat-right-ear {
  0% {
    transform: skewY(-30deg);
  }
  3%, 100% {
    transform: skewY(-28deg) translateX(-4px);
  }
}

@keyframes box-cat-decor-top {
  0%, 56.25% {
    transform: rotate(-55deg) scale(0) translate(0, 0);
  }
  57%, 57,5% {
    transform: rotate(-55deg) scale(1) translate(-1px, -1px);
  }
  58%, 58,5% {
    transform: rotate(-55deg) scale(1) translate(1px, 1px);
  }
  60%, 60.5% {
    transform: rotate(-55deg) scale(1) translate(-1px, -1px);
  }
  61%, 61.5% {
    transform: rotate(-55deg) scale(1) translate(1px, 1px);
  }
  62%, 62.5% {
    transform: rotate(-55deg) scale(1) translate(-1px, -1px);
  }
  63%, 63.5% {
    transform: rotate(-55deg) scale(1) translate(1px, 1px);
  }
  64%, 64.5% {
    transform: rotate(-55deg) scale(1) translate(-1px, -1px);
  }
  65%, 65.5% {
    transform: rotate(-55deg) scale(1) translate(1px, 1px);
  }
  66%, 66.1% {
    transform: rotate(-55deg) scale(1) translate(-1px, -1px);
  }
  66.25%, 100% {
    transform: rotate(-55deg) scale(0) translate(0, 0);
  }
}

@keyframes box-cat-decor-bottom {
  0%, 56.25% {
    transform: rotate(140deg) scale(0) translate(0, 0);
  }
  57%, 57,5% {
    transform: rotate(140deg) scale(1) translate(-1px, -1px);
  }
  58%, 58,5% {
    transform: rotate(140deg) scale(1) translate(1px, 1px);
  }
  60%, 60.5% {
    transform: rotate(140deg) scale(1) translate(-1px, -1px);
  }
  61%, 61.5% {
    transform: rotate(140deg) scale(1) translate(1px, 1px);
  }
  62%, 62.5% {
    transform: rotate(140deg) scale(1) translate(-1px, -1px);
  }
  63%, 63.5% {
    transform: rotate(140deg) scale(1) translate(1px, 1px);
  }
  64%, 64.5% {
    transform: rotate(140deg) scale(1) translate(-1px, -1px);
  }
  65%, 65.5% {
    transform: rotate(140deg) scale(1) translate(1px, 1px);
  }
  66%, 66.1% {
    transform: rotate(140deg) scale(1) translate(-1px, -1px);
  }
  66.25%, 100% {
    transform: rotate(140deg) scale(0) translate(0, 0);
  }
}

@keyframes box-cat {
  0%, 5% {
    transform: translate(50%, 0);
  }
  15%, 40% {
    transform: translate(50%, -31px);
  }
  43%, 47% {
    transform: translate(50%, -21px);
  }
  50% {
    transform: translate(50%, -41px);
  }
  55% {
    transform: translate(50%, -120px) rotate(-50deg);
    transform-origin: bottom left;
  }
  55.625% {
    transform: translate(40%, -132px) rotate(-57deg);
    transform-origin: bottom left;
  }
  56.25%, 66.25% {
    transform: translate(30%, -145px) rotate(-65deg);
    transform-origin: bottom left;
  } 
  66.875% {
    transform: translate(20%, -157px) rotate(-72deg);
    transform-origin: bottom left;
  }
  67.5% {
    transform: translate(10%, -170px) rotate(-80deg);
    transform-origin: bottom left;
  }
  68.125% {
    transform: translate(-10%, -170px) rotate(-82deg);
    transform-origin: bottom left;
  }
  68.75% {
    transform: translate(-10%, -170px) rotate(-85deg);
    transform-origin: bottom left;
  } 
  69.375% {
    transform: translate(-20%, -170px) rotate(-87deg);
    transform-origin: bottom left;
  }
  70% {
    transform: translate(-30%, -170px) rotate(-90deg);
    transform-origin: bottom left;
  } 
  70.625% {
    transform: translate(-40%, -167px) rotate(-92deg);
    transform-origin: bottom left;
  }
  71.25 {
    transform: translate(-50%, -165px) rotate(-95deg);
    transform-origin: bottom left;
  } 
  71.875% {
    transform: translate(-60%, -162px) rotate(-97deg);
    transform-origin: bottom left;
  }
  72.5% {
    transform: translate(-70%, -160px) rotate(-100deg);
    transform-origin: bottom left;
  } 
  73.125%{
    transform: translate(-70%, -129px) rotate(-97deg);
    transform-origin: bottom left;
  }
  73.75% {
    transform: translate(-70%, -98px) rotate(-95deg);
    transform-origin: bottom left;
  }
  74.375% {
    transform: translate(-70%, -67px) rotate(-92deg);
    transform-origin: bottom left;
  }
  75% {
    transform: translate(-70%, -36px) rotate(-90deg);
    transform-origin: bottom left;
  }
  83% {
    transform: translate(-140%, -36px) rotate(-90deg);
    transform-origin: bottom left;
  }
  98% {
    transform: translate(-140%, -36px) rotate(-90deg);
    transform-origin: bottom left;
  }
  100% {
    transform: translate(-250%, 0);
    transform-origin: bottom right;
  }
}

@keyframes box-cat-head {
  0%, 50% {
    transform: none;
  }
  56.25%, 66.25% {
    transform: rotate(65deg) translate(50px, -30px);
  }
  75%, 85% {
    transform: rotate(65deg) translate(50px, -30px);
  }
  90%, 98% {
    transform: rotate(26deg) translate(17px, -2px);
  }
  100% {
    transform: rotate(0deg) translate(0, 0);
  }
}

@keyframes box-cat-eyes {
  0%, 85% {
    transform: translateX(0);
  }
  90%, 98% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes box-cat-eyes-after {
  0%, 18% {
    transform: translate(0, 0);
    width: 14px;
    height: 12px;
  }
  28%, 92% {
    transform: translate(-1px, -1px);
    width: 12px;
    height: 14px;
  }
  98% {
    transform: translate(2px, 1px);
    width: 12px;
    height: 12px;
  }
  100% {
    transform: translate(0, 0);
    width: 14px;
    height: 12px;
  }
}

@keyframes box-cat-nose {
  0%, 85% {
    transform: translate(-50%, 0);
  }
  90% {
    transform: translate(calc(-50% - 10px), 0);
  }
  91%, 92% {
    transform: translate(calc(-50% - 10px), -1px);
  }
  93% {
    transform: translate(calc(-50% - 10px), 0);
  }
  94%, 95% {
    transform: translate(calc(-50% - 10px), -1px);
  }
  96%, 98% {
    transform: translate(calc(-50% - 10px), 0);
  }
  100% {
    transform: translate(-50%, 0);
  }
}

@keyframes box-cat-front-left-pow {
  0%, 30% {
    transform: rotate(180deg) translate(10px, 0);
  }
  35%, 40% {
    transform: rotate(180deg) translate(10px, 83px);
  }
  43%, 47% {
    transform: rotate(180deg) translate(10px, 93px);
  }
  50% {
    transform: rotate(180deg) translate(10px, 73px);
    height: 70px;
  }
  55% {
    transform: rotate(170deg) translate(0, 93px);
    height: 90px;
  }
  55.625% {
    transform: rotate(167deg) translate(-2px, 93px);
    height: 90px;
  }
  56.25%, 66.25% {
    transform: rotate(165deg) translate(-5px, 93px);
    height: 90px;
  }
  66.875 {
    transform: rotate(162deg) translate(-7px, 93px);
    height: 90px;
  }
  67.5% {
    transform: rotate(160deg) translate(-10px, 93px);
    height: 90px;
  }
  68.125% {
    transform: rotate(155deg) translate(-14px, 93px);
    height: 90px;
  }
  68.75% {
    transform: rotate(150deg) translate(-18px, 93px);
    height: 90px;
  }
  69.375% {
    transform: rotate(145deg) translate(-22px, 93px);
    height: 90px;
  }
  70% {
    transform: rotate(140deg) translate(-27px, 93px);
    height: 90px;
  }
  70.625% {
    transform: rotate(132deg) translate(-31px, 88px);
    height: 90px;
  }
  71.25% {
    transform: rotate(125deg) translate(-38px, 84px);
    height: 90px;
  }
  71.875% {
    transform: rotate(117deg) translate(-44px, 78px);
    height: 90px;
  }
  72.5% {
    transform: rotate(110deg) translate(-50px, 75px);
    height: 90px;
  }
  73.125% {
    transform: rotate(107deg) translate(-53px, 81px);
    height: 85px;
  }
  73.75% {
    transform: rotate(103deg) translate(-57px, 87px);
    height: 80px;
  }
  74.375% {
    transform: rotate(99deg) translate(-61px, 69px);
    height: 75px;
    z-index: 3;
  }
  75% {
    transform: rotate(96deg) translate(-73px, 54px);
    height: 65px;
    z-index: -1;
  }
  77% {
    transform: rotate(96deg) translate(-73px, 54px);
    height: 65px;
    z-index: -1;
  }
  80% {
    transform: rotate(80deg) translate(-69px, 36px);
    height: 65px;
    z-index: -1;
  }
  83% {
    transform: rotate(108deg) translate(-69px, 70px);
    height: 65px;
    z-index: -1;
  }
  85%, 98% {
    transform: rotate(96deg) translate(-73px, 54px);
    height: 65px;
    z-index: -1;
  }
  100% {
    transform: rotate(0deg) translate(0, 0);
    height: 70px;
  }
}

@keyframes box-cat-front-right-pow {
  0%, 29% {
    transform: rotate(180deg) translate(-10px, 0);
  }
  33%, 40% {
    transform: rotate(180deg) translate(-10px, 83px);
  }
  43%, 47% {
    transform: rotate(180deg) translate(-10px, 93px);
  }
  50% {
    transform: rotate(180deg) translate(-10px, 73px);
    height: 70px;
  }
  55% {
    transform: rotate(170deg) translate(-16px, 93px);
    height: 90px;
  }
  55.625% {
    transform: rotate(167deg) translate(-18px, 93px);
    height: 90px;
  }
  56.25%, 66.25% {
    transform: rotate(165deg) translate(-21px, 93px);
    height: 90px;
  }
  66.875 {
    transform: rotate(162deg) translate(-23px, 93px);
    height: 90px;
  }
  67.5% {
    transform: rotate(160deg) translate(-26px, 93px);
    height: 90px;
  }
  68.125% {
    transform: rotate(155deg) translate(-29px, 93px);
    height: 90px;
  }
  68.75% {
    transform: rotate(150deg) translate(-33px, 93px);
    height: 90px;
  }
  69.375% {
    transform: rotate(145deg) translate(-37px, 93px);
    height: 90px;
  }
  70% {
    transform: rotate(140deg) translate(-40px, 93px);
    height: 90px;
  }
  70.625% {
    transform: rotate(132deg) translate(-45px, 84px);
    height: 90px;
  }
  71.25% {
    transform: rotate(125deg) translate(-50px, 76px);
    height: 90px;
  }
  71.875% {
    transform: rotate(117deg) translate(-55px, 73px);
    height: 90px;
  }
  72.5% {
    transform: rotate(110deg) translate(-60px, 70px);
    height: 90px;
  }
  73.125%{
    transform: rotate(105deg) translate(-57px, 70px);
    height: 85px;
  }
  73.75% {
    transform: rotate(101deg) translate(-55px, 70px);
    height: 80px;
  }
  74.375% {
    transform: rotate(97deg) translate(-52px, 70px);
    height: 75px;
  }
  75%, 77% {
    transform: rotate(93deg) translate(-50px, 69px);
    height: 70px;
  }
  80% {
    transform: rotate(110deg) translate(-50px, 89px);
    height: 70px;
  }
  83% {
    transform: rotate(82deg) translate(-63px, 59px);
    height: 70px;
  }
  85%, 98% {
    transform: rotate(93deg) translate(-50px, 69px);
    height: 70px;
  }
  100% {
    transform: rotate(0deg) translate(0px, 0);
    height: 70px;
  }
}

@keyframes box-cat-back-left-pow {
  0% {
    transform: none;
  }
  55% {
    transform: translate(4px, -5px);
    height: 35px;
  }
  55.625% {
    transform: translate(4px, -5px) rotate(-3.5deg);
    height: 37px;
  }
  56.25%, 66.25% {
    transform: translate(4px, -5px) rotate(-7deg);
    height: 40px;
  }
  66.875% {
    transform: translate(4px, -5px) rotate(-10deg);
    height: 42px;
  }
  67.5% {
    transform: translate(4px, -5px) rotate(-14deg);
    height: 45px;
    border-bottom: 1px solid @white;
  }
  68.125% {
    transform: translate(2px, -5px) rotate(-19deg);
    height: 45px;
    border-bottom: 1px solid @white;
  }
  68.75% {
    transform: translate(-2px, -5px) rotate(-24deg);
    height: 45px;
    border-bottom: 1px solid @white;
  }
  69.375% {
    transform: translate(-5px, -5px) rotate(-29deg);
    height: 62px;
  }
  70% {
    transform: translate(-8px, -6px) rotate(-35deg);
    height: 70px;
    width: 18px;
    border-bottom: none;
  }
  70.625% {
    transform: translate(-13px, -7px) rotate(-43deg);
    height: 75px;
    width: 18px;
    border-bottom: none;
  }
  71.25% {
    transform: translate(-19px, -8px) rotate(-52deg);
    height: 80px;
    width: 17px;
    border-bottom: none;
  }
  71.875% {
    transform: translate(-24px, 1px) rotate(-61deg);
    height: 85px;
    width: 17px;
    border-bottom: none;
  }
  72.5% {
    transform: translate(-30px, 10px) rotate(-70deg);
    height: 90px;
    width: 17px;
    border-bottom: none;
  }
  73.125%{
    transform: translate(-29px, 8px) rotate(-75deg);
    height: 85px;
    width: 17px;
    border-bottom: none;
  }
  73.75% {
    transform: translate(-28px, 7px) rotate(-80deg);
    height: 80px;
    width: 17px;
    border-bottom: none;
  }
  74.375% {
    transform: translate(-27px, 6px) rotate(-85deg);
    height: 75px;
    width: 17px;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  75% , 77% {
    transform: translate(-31px, 5px) rotate(-90deg);
    height: 58px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  80% {
    transform: translate(-31px, 2px) rotate(-78deg);
    height: 58px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  83% {
    transform: translate(-29px, 19px) rotate(-98deg);
    height: 60px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  85%, 98% {
    transform: translate(-31px, 5px) rotate(-90deg);
    height: 58px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
    height: 16px;
    width: 20px;
    border-bottom: 1px solid @black;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}

@keyframes box-cat-back-right-pow {
  0% {
    transform: none;
  }
  55% {
    transform: translate(-4px, -5px);
    height: 35px;
  }
  55.625% {
    transform: translate(-5px, -5px) rotate(-3.5deg);
    height: 37px;
  }
  56.25%, 66.25% {
    transform: translate(-7px, -5px) rotate(-7deg);
    height: 40px;
  }
  66.875% {
    transform: translate(-8px, -5px) rotate(-8deg);
    height: 42px;
  }
  67.5% {
    transform: translate(-10px, -5px) rotate(-10deg);
    height: 45px;
    border-bottom: 1px solid @white;
  }
  68.125% {
    transform: translate(-14px, -7px) rotate(-16deg);
    height: 56px;
    border-bottom: 1px solid @white;
  }
  68.75% {
    transform: translate(-19px, -10px) rotate(-22deg);
    height: 67px;
    border-bottom: 1px solid @white;
  }
  69.375% {
    transform: translate(-23px, -12px) rotate(-28deg);
    height: 68px;
    border-bottom: 1px solid @white;
  }
  70% {
    transform: translate(-28px, -15px) rotate(-35deg);
    height: 70px;
    width: 18px;
    border-bottom: none;
  }
  70.625% {
    transform: translate(-30px, -13px) rotate(-43deg);
    height: 75px;
    width: 18px;
    border-bottom: none;
  }
  71.25% {
    transform: translate(-33px, -11px) rotate(-52deg);
    height: 80px;
    width: 18px;
    border-bottom: none;
  }
  71.875% {
    transform: translate(-45px, -1px) rotate(-61deg);
    height: 85px;
    width: 18px;
    border-bottom: none;
  }
  72.5% {
    transform: translate(-57px, 9px) rotate(-70deg);
    height: 90px;
    width: 17px;
    border-bottom: none;
  }
  73.125%{
    transform: translate(-63px, 11px) rotate(-75deg);
    height: 85px;
    width: 17px;
    border-bottom: none;
  }
  73.75% {
    transform: translate(-72px, 14px) rotate(-80deg);
    height: 80px;
    width: 17px;
    border-bottom: none;
  }
  74.375% {
    transform: translate(-80px, 17px) rotate(-85deg);
    height: 75px;
    width: 17px;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  75%, 77% {
    transform: translate(-87px, 22px) rotate(-94deg);
    height: 70px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  80% {
    transform: translate(-87px, 25px) rotate(-98deg);
    height: 70px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  83% {
    transform: translate(-88px, 9px) rotate(-73deg);
    height: 70px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  85%, 98% {
    transform: translate(-87px, 22px) rotate(-94deg);
    height: 70px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
    height: 16px;
    width: 20px;
    border-bottom: 1px solid @black;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}

@keyframes box-cat-back-left-pow-color {
  0% {
    transform: none;
  }
  55% {
    transform: translate(4px, -5px);
    height: 35px;
  }
  55.625% {
    transform: translate(4px, -5px) rotate(-3.5deg);
    height: 37px;
  }
  56.25%, 66.25% {
    transform: translate(4px, -5px) rotate(-7deg);
    height: 40px;
  }
  66.875% {
    transform: translate(4px, -5px) rotate(-10deg);
    height: 42px;
  }
  67.5% {
    transform: translate(4px, -5px) rotate(-14deg);
    height: 45px;
    border-bottom: 1px solid @white;
  }
  68.125% {
    transform: translate(2px, -5px) rotate(-19deg);
    height: 45px;
    border-bottom: 1px solid @white;
  }
  68.75% {
    transform: translate(-2px, -5px) rotate(-24deg);
    height: 45px;
    border-bottom: 1px solid @white;
  }
  69.375% {
    transform: translate(-5px, -5px) rotate(-29deg);
    height: 62px;
  }
  70% {
    transform: translate(-8px, -6px) rotate(-35deg);
    height: 70px;
    width: 18px;
    border-bottom: none;
  }
  70.625% {
    transform: translate(-13px, -7px) rotate(-43deg);
    height: 75px;
    width: 18px;
    border-bottom: none;
  }
  71.25% {
    transform: translate(-19px, -8px) rotate(-52deg);
    height: 80px;
    width: 17px;
    border-bottom: none;
  }
  71.875% {
    transform: translate(-24px, 1px) rotate(-61deg);
    height: 85px;
    width: 17px;
    border-bottom: none;
  }
  72.5% {
    transform: translate(-30px, 10px) rotate(-70deg);
    height: 90px;
    width: 17px;
    border-bottom: none;
  }
  73.125% {
    transform: translate(-29px, 8px) rotate(-75deg);
    height: 85px;
    width: 17px;
    border-bottom: none;
  }
  73.75% {
    transform: translate(-28px, 7px) rotate(-80deg);
    height: 80px;
    width: 17px;
    border-bottom: none;
  }
  74.375% {
    transform: translate(-27px, 6px) rotate(-85deg);
    height: 75px;
    width: 17px;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  75%, 77% {
    transform: translate(-31px, 5px) rotate(-90deg);
    height: 58px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  80% {
    transform: translate(-31px, 2px) rotate(-78deg);
    height: 58px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  83% {
    transform: translate(-29px, 19px) rotate(-98deg);
    height: 60px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  85%, 98% {
    transform: translate(-31px, 5px) rotate(-90deg);
    height: 58px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
    height: 16px;
    width: 20px;
    border-bottom: 1px solid @white;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}

@keyframes box-cat-back-right-pow-color {
  0% {
    transform: none;
  }
  55% {
    transform: translate(-4px, -5px);
    height: 35px;
  }
  55.625% {
    transform: translate(-5px, -5px) rotate(-3.5deg);
    height: 37px;
  }
  56.25%, 66.25% {
    transform: translate(-7px, -5px) rotate(-7deg);
    height: 40px;
  }
  66.875% {
    transform: translate(-8px, -5px) rotate(-8deg);
    height: 42px;
  }
  67.5% {
    transform: translate(-10px, -5px) rotate(-10deg);
    height: 45px;
    border-bottom: 1px solid @white;
  }
  68.125% {
    transform: translate(-14px, -7px) rotate(-16deg);
    height: 56px;
    border-bottom: 1px solid @white;
  }
  68.75% {
    transform: translate(-19px, -10px) rotate(-22deg);
    height: 67px;
    border-bottom: 1px solid @white;
  }
  69.375% {
    transform: translate(-23px, -12px) rotate(-28deg);
    height: 68px;
    border-bottom: 1px solid @white;
  }
  70% {
    transform: translate(-28px, -15px) rotate(-35deg);
    height: 70px;
    width: 18px;
    border-bottom: none;
  }
  70.625% {
    transform: translate(-30px, -13px) rotate(-43deg);
    height: 75px;
    width: 18px;
    border-bottom: none;
  }
  71.25% {
    transform: translate(-33px, -11px) rotate(-52deg);
    height: 80px;
    width: 18px;
    border-bottom: none;
  }
  71.875% {
    transform: translate(-45px, -1px) rotate(-61deg);
    height: 85px;
    width: 18px;
    border-bottom: none;
  }
  72.5% {
    transform: translate(-57px, 9px) rotate(-70deg);
    height: 90px;
    width: 17px;
    border-bottom: none;
  }
  73.125% {
    transform: translate(-63px, 11px) rotate(-75deg);
    height: 85px;
    width: 17px;
    border-bottom: none;
  }
  73.75% {
    transform: translate(-72px, 14px) rotate(-80deg);
    height: 80px;
    width: 17px;
    border-bottom: none;
  }
  74.375% {
    transform: translate(-80px, 17px) rotate(-85deg);
    height: 75px;
    width: 17px;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  75%, 77% {
    transform: translate(-87px, 22px) rotate(-94deg);
    height: 70px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  80% {
    transform: translate(-87px, 25px) rotate(-98deg);
    height: 70px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  83% {
    transform: translate(-88px, 9px) rotate(-73deg);
    height: 70px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  85%, 98% {
    transform: translate(-87px, 22px) rotate(-94deg);
    height: 70px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
    height: 16px;
    width: 20px;
    border-bottom: 1px solid @white;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}

@keyframes box-cat-tail {
  0%, 50% {
    transform: skew(-45deg);
  }
  55% {
    transform: skew(-45deg) rotate(47deg) translate(40px, 35px);
  }
  56.25%, 98% {
    transform: skew(-45deg) rotate(0deg) translate(0, 0);
  }
  100% {
    transform: skew(-45deg);
  }
}

</style>
