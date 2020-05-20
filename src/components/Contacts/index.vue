<template>
  <div class="contacts" :class="{ 'contacts--color': isColorMode }">
    <div class="contacts__inner">
      <section-title>
        Contacts
      </section-title>
      <div class="contacts__links-wrapper">
        <p class="contacts__text">
          If you have any questions about my services, or just want to say hello, feel free to contact me.
        </p>
        <div class="contacts__links">
          <a class="contacts__link" target="_blank" v-for="item in contacts" :key="item.icon" :class="'contacts__link--' + item.icon" :href="item.link"></a>
        </div>
      </div>
      <div class="contacts__switch-wrapper">
        <p>
          By the way if you prefer <template v-if="!isColorMode">more</template> <template v-else>less</template> colorful interfaces you can click here.
        </p>
        <custom-switch class="contacts__switch" :is-color-mode="isColorMode" :is-checked="isColorMode" @click="$emit('switchChecked')" />
      </div>
    </div>
    <div class="contacts__illustration  cat-in-box" :class="{ 'animation' : isCatAnimated }" @click="animateCat">
      <div class="box" :class="{ 'box--color': isColorMode }">
        <div class="box__front"></div>
        <div class="box__front-lit"></div>
        <div class="box__side  box__side--right"></div>
        <div class="box__side  box__side--left"></div>
        <div class="box__side-lit"></div>
        <div class="box__back"></div>
        <div class="cat" :class="{ 'cat--color': isColorMode }">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import CustomSwitch from '@/components/CustomSwitch';

import { mapState } from 'vuex';

export default {
  name: 'Contacts',

  components: {
    SectionTitle,
    CustomSwitch
  },

  props: {
    contacts: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    isCatAnimated: false
  }),
  
  computed: {
    ...mapState({
      isColorMode: state => state.isColorMode
    })
  },

  methods: {
    animateCat () {
      this.isCatAnimated = !this.isCatAnimated;

      setTimeout(() => {
        this.isCatAnimated = !this.isCatAnimated;
      }, 12000)
    }
  }
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.contacts {
  position: relative;
  
  @media @desktop {
    display: flex;
  }

  &__inner {
    padding-bottom: 240px;

    @media @tablet {
      padding-bottom: 270px;
    }

    @media @desktop {
      width: 40%;
      margin-right: auto;
      padding-bottom: 0;
    }
  }

  &__text {
    margin-bottom: 30px;

    @media @tablet {
      margin-bottom: 0;
    }

    @media @desktop {
      margin-bottom: 35px;
    }
  }

  &__links-wrapper {
    @media @tablet {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }

    @media @desktop {
      display: block;
      margin-bottom: 35px;
    }
  }

  &__links {
    display: flex;
    margin-bottom: 30px;

    @media @tablet {
      margin-left: 25px;
      margin-bottom: 0;
    }

    @media @desktop {
      justify-content: center;
      margin-left: 0;
      margin-bottom: 35px;
    }
  }

  &__link {
    display: block;
    width: 35px;
    height: 30px;
    margin-right: 15px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    @media @tablet {
      transition: transform .3s;
      transition-timing-function: ease;
      width: 45px;
      height: 40px;
      margin-right: 15px;
    }

    @media @desktop {
      margin-right: 20px;
    }

    &:last-child {
      margin-right: 0;
    }

    &--facebook {
      background-image: url("./img/facebook.svg");
    }

    &--instagram {
      background-image: url("./img/instagram.svg");
    }

    &--linked-in {
      background-image: url("./img/linked-in.svg");
    }
    
    &--github {
      background-image: url("./img/github.svg");
    }

    &:hover {
      @media @tablet {
        transform: scale(1.07);
      }
    }
  }

  &__switch-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__switch {
    margin-left: 25px;
  }

  &--color {
    & .contacts__link {
      &--facebook {
        background-image: url("./img/facebook-color.svg");
      }

      &--instagram {
        background-image: url("./img/instagram-color.svg");
      }

      &--linked-in {
        background-image: url("./img/linked-in-color.svg");
      }
      
      &--github {
        background-image: url("./img/github-color.svg");
      }
    }
  }
}

.cat-in-box {
  position: absolute;
  right: 50%;
  bottom: -4px;
  transform: translateX(75%);
  width: 190px;
  height: 250px;

  @media @desktop {
    right: 50%;
    transform: translateX(120%);
    bottom: -94px;
    width: 400px;
    height: 300px;
  }

  & .cat {
    position: absolute;
    bottom: 14px;
    right: 0;
    z-index: 1;

    @media @desktop {
      right: 50%;
      transform: translateX(50%);
    }
  }

  & .box {
    @media @desktop {
      position: absolute;
      bottom: 0px;
      right: 50px;
    }
  }

  &.animation {
    .cat,
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

    .cat {
      animation-name: cat-mobile;

      @media @desktop {
        animation-name: cat;
      }
    }

    .cat__head {
      animation-name: cat-head-mobile;

      @media @desktop {
       animation-name: cat-head; 
      }
    }

    .cat__ear--left::after {
      animation-name: cat-left-ear-mobile;

      @media @desktop {
        animation-name: cat-left-ear;
      }
    }

    .cat__ear--right::after {
      animation-name: cat-right-ear-mobile;

      @media @desktop {
        animation-name: cat-right-ear;
      }
    }

    .cat__eye::after {
      animation-name: cat-eyes-after-mobile;

      @media @desktop {
        animation-name: cat-eyes-after;
      }
    }

    .cat__eye {
      animation-name: cat-eyes-mobile;

      @media @desktop {
        animation-name: cat-eyes;
      }
    }

    .cat__nose {
      animation-name: cat-nose-mobile;
      @media @desktop {
        animation-name: cat-nose;
      }
    }

    .cat__front-paw--left {
      animation-name: cat-front-left-pow-mobile;

      @media @desktop {
        animation-name: cat-front-left-pow;
      }
    }

    .cat__front-paw--right {
      animation-name: cat-front-right-pow-mobile;

      @media @desktop {
        animation-name: cat-front-right-pow;
      }
    }

    .cat__back-paw--left {
      @media @desktop {
        animation-name: cat-back-left-pow;
      }
    }

    .cat__back-paw--right {
      @media @desktop {
        animation-name: cat-back-right-pow;
      }
    }

    .cat__tail {
      animation-name: cat-tail-mobile;

      @media @desktop {
        animation-name: cat-tail;
      }
    }
  }
}

.cat {
  display: flex;
  flex-direction: column;
  align-items: center;

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

  &--color {
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

.box {
  @media @tablet {
    cursor: pointer;
  }

  @media @desktop {
    width: 210px;
    height: 180px;
  }
  
  &__front {
    @media @desktop {
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      width: 210px;
      height: 180px;
      border: 1px solid @black;
      background-color: @white;
    }

    &::after {
      @media @desktop {
        content: "CSS CAT";
        position: absolute;
        bottom: 23px;
        right: 15px;
        transform: rotate(-25deg);
        box-sizing: border-box;
        width: 73px;
        height: 32px;
        padding: 10px;
        border: 1px solid @black;
        border-radius: 5px;
        text-align: right;
        font-weight: 600;
        font-size: 0.7em;
        line-height: 0.8em;
        color: @black;
      }
    }
  }

  &__front-lit {
    @media @desktop {
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
  }

  &__side {
    @media @desktop {
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
  }

  &__side-lit {
    @media @desktop {
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
  }

  &__back {
    @media @desktop {
      position: absolute;
      bottom: 22px;
      left: 47px;
      z-index: 1;
      width: 210px;
      height: 180px;
      border: 1px solid @black;
      background-color: @white;
    }
  }

  &--color {
    & .box__front {
      @media @desktop {
        border-color: @grey;
        background-color: @white-grey;
      }

      &::after {
        @media @desktop {
          border-color: @grey;
          color: @grey;
        }
      }
    }

    & .box__front-lit {
      @media @desktop {
        border-color: @grey;
        background-color: @white-grey;
      }
    }

    & .box__side {
      @media @desktop {
        border-color: @grey;
        background-color: @white-grey;
      }
    }

    & .box__side-lit {
      @media @desktop {
        border-color: @grey;
        background-color: @white-grey;
      }
    }

    & .box__back {
      @media @desktop {
        border-color: @grey;
        background-color: @white-grey;
      }
    }
  }
}

// mobile animation

@keyframes cat-mobile {
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

@keyframes cat-left-ear-mobile {
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

@keyframes cat-right-ear-mobile {
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

@keyframes cat-eyes-mobile {
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

@keyframes cat-eyes-after-mobile {
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

@keyframes cat-head-mobile {
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

@keyframes cat-nose-mobile {
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

@keyframes cat-front-left-pow-mobile {
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

@keyframes cat-front-right-pow-mobile {
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

@keyframes cat-tail-mobile {
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

// desktop animation

@keyframes cat-left-ear {
  0% {
    transform: skewY(30deg);
  }
  3% {
    transform: skewY(27deg) translateX(4px);
  }
  100% {
    transform: skewY(27deg) translateX(4px);
  }
}

@keyframes cat-right-ear {
  0% {
    transform: skewY(-30deg);
  }
  3% {
    transform: skewY(-28deg) translateX(-4px);
  }

  100% {
    transform: skewY(-28deg) translateX(-4px);
  }
}

@keyframes cat {
  0% {
    transform: translate(50%, 0);
  }
  5% {
    transform: translate(50%, 0);
  }
  25% {
    transform: translate(50%, -31px);
  }
  50% {
    transform: translate(50%, -31px);
  }
  53% {
    transform: translate(50%, -21px);
  }
  57% {
    transform: translate(50%, -21px);
  }
  60% {
    transform: translate(50%, -41px);
  }
  65% {
    transform: translate(50%, -120px) rotate(-50deg);
    transform-origin: bottom left;
  }
  65.625% {
    transform: translate(40%, -132px) rotate(-57deg);
    transform-origin: bottom left;
  }
  66.25% {
    transform: translate(30%, -145px) rotate(-65deg);
    transform-origin: bottom left;
  } 
  66.875 {
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

@keyframes cat-head {
  0%, 68% {
    transform: none;
  }
  75% {
    transform: rotate(65deg) translate(50px, -30px);
  }
  85% {
    transform: rotate(65deg) translate(50px, -30px);
  }
  90% {
    transform: rotate(26deg) translate(17px, -2px);
  }
  98% {
    transform: rotate(26deg) translate(17px, -2px);
  }
  100% {
    transform: rotate(0deg) translate(0, 0);
  }
}

@keyframes cat-eyes {
  0%, 85% {
    transform: translateX(0);
  }
  90% {
    transform: translateX(-10px);
  }
  98% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes cat-nose {
  0%, 85% {
    transform: translate(-50%, 0);
  }
  90% {
    transform: translate(calc(-50% - 10px), 0);
  }
  91% {
    transform: translate(calc(-50% - 10px), -1px);
  }
  92% {
    transform: translate(calc(-50% - 10px), -1px);
  }
  93% {
    transform: translate(calc(-50% - 10px), 0);
  }
  94% {
    transform: translate(calc(-50% - 10px), -1px);
  }
  95% {
    transform: translate(calc(-50% - 10px), -1px);
  }
  96% {
    transform: translate(calc(-50% - 10px), 0);
  }
  98% {
    transform: translate(calc(-50% - 10px), 0);
  }
  100% {
    transform: translate(-50%, 0);
  }
}

@keyframes cat-eyes-after {
  0% {
    transform: translate(0, 0);
    width: 14px;
    height: 12px;
  }
  28% {
    transform: translate(0, 0);
    width: 14px;
    height: 12px;
  }
  38% {
    transform: translate(-1px, -1px);
    width: 12px;
    height: 14px;
  }
  97% {
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

@keyframes cat-front-left-pow {
  0% {
    transform: rotate(180deg) translate(10px, 0);
  }
  40% {
    transform: rotate(180deg) translate(10px, 0);
  }
  45% {
    transform: rotate(180deg) translate(10px, 83px);
  }
  50% {
    transform: rotate(180deg) translate(10px, 83px);
  }
  53% {
    transform: rotate(180deg) translate(10px, 93px);
  }
  57% {
    transform: rotate(180deg) translate(10px, 93px);
  }
  60% {
    transform: rotate(180deg) translate(10px, 73px);
    height: 70px;
  }
  65% {
    transform: rotate(170deg) translate(0, 93px);
    height: 90px;
  }
  65.625% {
    transform: rotate(167deg) translate(-2px, 93px);
    height: 90px;
  }
  66.25% {
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
  85% {
    transform: rotate(96deg) translate(-73px, 54px);
    height: 65px;
    z-index: -1;
  }
  98% {
    transform: rotate(96deg) translate(-73px, 54px);
    height: 65px;
    z-index: -1;
  }
  100% {
    transform: rotate(0deg) translate(0, 0);
    height: 70px;
  }
}

@keyframes cat-front-right-pow {
  0% {
    transform: rotate(180deg) translate(-10px, 0);
  }
  39% {
    transform: rotate(180deg) translate(-10px, 0);
  }
  43% {
    transform: rotate(180deg) translate(-10px, 83px);
  }
  50% {
    transform: rotate(180deg) translate(-10px, 83px);
  }
  53% {
    transform: rotate(180deg) translate(-10px, 93px);
  }
  57% {
    transform: rotate(180deg) translate(-10px, 93px);
  }
  60% {
    transform: rotate(180deg) translate(-10px, 73px);
    height: 70px;
  }
  65% {
    transform: rotate(170deg) translate(-16px, 93px);
    height: 90px;
  }
  65.625% {
    transform: rotate(167deg) translate(-18px, 93px);
    height: 90px;
  }
  66.25% {
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
  75% {
    transform: rotate(93deg) translate(-50px, 69px);
    height: 70px;
  }
  77% {
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
  85% {
    transform: rotate(93deg) translate(-50px, 69px);
    height: 70px;
  }
  98% {
    transform: rotate(93deg) translate(-50px, 69px);
    height: 70px;
  }
  100% {
    transform: rotate(0deg) translate(0px, 0);
    height: 70px;
  }
}

@keyframes cat-back-left-pow {
  0% {
    transform: none;
  }
  65% {
    transform: none;
  }
  65% {
    transform: translate(4px, -5px);
    height: 35px;
  }
  65.625% {
    transform: translate(4px, -5px) rotate(-3.5deg);
    height: 37px;
  }
  66.25% {
    transform: translate(4px, -5px) rotate(-7deg);
    height: 40px;
  }
  66.875 {
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
  75% {
    transform: translate(-31px, 5px) rotate(-90deg);
    height: 58px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  77% {
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
  85% {
    transform: translate(-31px, 5px) rotate(-90deg);
    height: 58px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  98% {
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

@keyframes cat-back-right-pow {
  0% {
    transform: none;
  }
  65% {
    transform: none;
  }
  65% {
    transform: translate(-4px, -5px);
    height: 35px;
  }
  65.625% {
    transform: translate(-5px, -5px) rotate(-3.5deg);
    height: 37px;
  }
  66.25% {
    transform: translate(-7px, -5px) rotate(-7deg);
    height: 40px;
  }
  66.875 {
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
  75% {
    transform: translate(-87px, 22px) rotate(-94deg);
    height: 70px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  77% {
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
  85% {
    transform: translate(-87px, 22px) rotate(-94deg);
    height: 70px;
    width: 16px;
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  98% {
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

@keyframes cat-tail {
  0% {
    transform: skew(-45deg);
  }
  60% {
    transform: skew(-45deg);
  }
  65% {
    transform: skew(-45deg) rotate(47deg) translate(40px, 35px);
  }
  70% {
    transform: skew(-45deg) rotate(47deg) translate(40px, 35px);
  }
  75% {
    transform: skew(-45deg) rotate(0deg) translate(0, 0);
  }
  98% {
    transform: skew(-45deg) rotate(0deg) translate(0, 0);
  }
  100% {
    transform: skew(-45deg);
  }
}

</style>
