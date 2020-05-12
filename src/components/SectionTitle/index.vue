<template>
  <h2 class="section-title">
    <slot />
  </h2>
</template>

<script>

export default {
  name: 'SectionTitle'
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.section-title {
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.5em;
  line-height: 1.5em;
  font-weight: 600;

  @media @tablet {
    margin-bottom: 30px;
  }
}

</style>
