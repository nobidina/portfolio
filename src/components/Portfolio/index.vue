<template>
  <div class="portfolio">
    <section-title>
      Portfolio
    </section-title>
    <p class="portfolio__text">
      Here is some examples of my previous work. For more you can visit my <a class="portfolio__link"  target="_blank"  :href="link.href">{{ link.text }}</a>.
    </p>
    <ul class="portfolio__list">
      <li class="portfolio__item" v-for="item in portfolio" :key="item.href">
        <a class="portfolio__link-block" :href="item.href" target="_blank">
          <img v-if="!isColorMode" class="portfolio__img" :src="item.imgSrc" :srcset="item.imgSrcset" :alt="item.alt">
          <img v-else class="portfolio__img" :src="item.imgSrcColor" :srcset="item.imgSrcsetColor" :alt="item.alt">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';

import { mapState } from 'vuex';

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

.portfolio {
  &__text {
    margin-bottom: 30px;
    line-height: 1.5em;

    @media @tablet {
      margin-bottom: 35px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media @tablet {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &__item {
    margin-bottom: 35px;

    @media @tablet {
      width: 48%;
      margin-right: 4%;
    }

    @media @desktop {
      width: 30%;
      margin-right: 3%;
    }

    &:nth-child(2n + 2) {
      @media @tablet {
        margin-right: 0;
      }

      @media @desktop {
        margin-right: 3%;
      }
    }

    &:nth-child(3n + 3) {
      @media @desktop {
        margin-right: 0;
      }
    }

    &:nth-last-child(3) {
      @media @desktop {
        margin-bottom: 0;
      }
    }

    &:nth-last-child(2) {
      @media @tablet {
        margin-bottom: 0;
      }
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__link {
    text-decoration: underline;
    color: @black;
  }

  &__link-block {
    transition: transform .1s;
    transition-timing-function: ease;
    display: block;
    max-width: 300px;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid @lightgrey;
    line-height: 0;
    background-color: @lightgrey;

    @media @tablet {
      max-width: 100%;
    }

    &:hover {
      @media @tablet {
        transform: scale(1.07);
      }
    }
  }

  &__img {
    width: 100%;
    height: auto;
  }
}

</style>
