<template>
  <div class="portfolio">
    <section-title>
      Portfolio
    </section-title>
    <p class="portfolio__text">
      Here is some examples of my previous work. For more you can visit my <a class="portfolio__link" :href="link.href">{{ link.text }}</a>.
    </p>
    <ul class="portfolio__list">
      <li class="portfolio__item" v-for="item in portfolio" :key="item.href">
        <a class="portfolio__link-block" :href="item.href">
          <img class="portfolio__img" :src="item.imgSrc" :srcset="item.imgSrcset" :alt="item.alt">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';

export default {
  name: 'Portfolio',

  components: {
    SectionTitle
  },

  props: {
    link: {
      type: Object,
      required: true
    },
    portfolio: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.portfolio {
  &__text {
    margin-bottom: 30px;
    line-height: 1.5em;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__item {
    margin-bottom: 35px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__link {
    text-decoration: underline;
    color: #353535;
  }

  &__link-block {
    display: block;
    max-width: 300px;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid lightgrey;
    // box-shadow: 0 2px 0 0 white,
    //             2px 0 0 0 white,
    //             -2px 0 0 0 white,
    //             0 -2px 0 0 white, 
    //             0 3px 0 0 #b1b1b1,
    //             3px 0 0 0 #b1b1b1,
    //             0 -3px 0 0 #b1b1b1,
    //             -3px 0 0 0 #b1b1b1;
    line-height: 0;
    background-color: lightgrey;
  }

  &__img {
    width: 100%;
    height: auto;
  }
}

</style>
