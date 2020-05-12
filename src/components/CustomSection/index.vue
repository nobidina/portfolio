<template>
  <section class="custom-section">
    <div class="custom-section__inner">
      <slot />
    </div>
  </section>
</template>

<script>

export default {
  name: 'CustomSection',

  props: {},
  
  data: () => ({})
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
    background-color: whitesmoke;

    @media @tablet {
      padding: 90px 70px;
      border-radius: 50px;
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
    padding-right: 25px;

    &::before {
      right: -1px;
      border-top: 1px solid #353535;
      border-bottom: 1px solid #353535;
      border-right: 1px solid #353535;
      border-left: 1px solid whitesmoke;
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
      box-shadow: 0 2px 0 0 white,
                  0 -2px 0 0 white,
                  2px 0 0 0 white,
                  0 3px 0 0 #353535,
                  0 -3px 0 0 #353535,
                  3px 0 0 0 #353535;
    }
  }

  &:nth-child(odd) {
    padding-left: 25px;

    &::before{
      left: -1px;
      border-top: 1px solid #353535;
      border-bottom: 1px solid #353535;
      border-left: 1px solid #353535;
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
      box-shadow: 0 2px 0 0 white,
                  -2px 0 0 0 white,
                  0 -2px 0 0 white, 
                  0 3px 0 0 #353535,
                  0 -3px 0 0 #353535,
                  -3px 0 0 0 #353535;
    }
  }

  &:first-child {
    padding-left: 20px;
    padding-right: 20px;

    &:before {
      content: none;
    }
  }

  &:nth-child(2) {
    &::after{
      content: "";
      position: absolute;
      top: -44px;
      left: calc(50% - 15px);
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      border-bottom: 1px solid #353535;
      border-left: 1px solid #353535;
      border-bottom-left-radius: inherit;
      box-shadow: 0 2px 0 0 white,
                  -2px 0 0 0 white,
                  -1px 3px 0 0 #353535, 
                  -3px 1px 0 0 #353535;
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
}

</style>
