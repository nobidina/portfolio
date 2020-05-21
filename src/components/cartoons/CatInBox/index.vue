<template>
  <div class="cat-in-box" @click="activateAnimation">
    <box class="cat-in-box__box">
      <cat class="cat-in-box__cat" :is-animation-box-active="isAnimationActive"/>
    </box>
  </div>
</template>

<script>

import Box from '@/components/cartoons/Box';
import Cat from '@/components/cartoons/Cat';

export default {
  name: 'CatInBox',

  components: {
    Box,
    Cat
  },

  data: () => ({
    isAnimationActive: false
  }),

  methods: {
    activateAnimation () {
      if (this.isAnimationActive) {
        return;
      }
      this.isAnimationActive = true;
    }
  }
}
</script>

<style scoped lang="less">
@import "../../../less/variables.less";

.cat-in-box {
  width: 400px;
  height: 300px;
  user-select: none;
  -webkit-tap-highlight-color: rgba(200,0,0,0);

  &__cat {
    position: absolute;
    bottom: 14px;
    right: 50%;
    transform: translateX(50%);
    z-index: 1;
  }

  &__box {
    position: absolute;
    bottom: 0px;
    right: 50px;
  }
}

</style>
