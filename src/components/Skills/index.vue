<template>
  <div class="skills" :class="{ 'skills--color': isColorMode }">
    <div class="skills__text-wrapper">
      <section-title>
        {{ title }}
      </section-title>
      <p class="skills__text">
        {{ text }}
      </p>
    </div>
    <ul class="skills__list">
      <li class="skills__item" v-for="item in skills" :key="item.name">
        <span class="skills__name">{{ item.name }}</span>
        <div class="skills__scale" :alt="item.score + '%'">
          <div class="skills__scale-fill" v-bind:style="{ width: item.score + '%'}"></div>
        </div>
        <span class="skills__score">{{ item.score }} %</span>
      </li>
    </ul>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';

import { mapState } from 'vuex';

export default {
  name: 'Skills',

  components: {
    SectionTitle
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
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

.skills {
  @media @desktop {
    display: flex;
  }

  &__text-wrapper {
    margin-bottom: 25px;

    @media @desktop {
      width: 45%;
      margin-right: auto;
      margin-bottom: 0;
    }
  }

  &__text {
    line-height: 1.5em;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;

    @media @desktop {
      flex-shrink: 0;
      width: 50%;
    }

    &:hover {
      .skills__scale-fill {
        animation: fill 2s ease;
      }
    }
  }

  &__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    @media @desktop {
      flex-wrap: nowrap;
      justify-content: flex-end;
      margin-bottom: 12px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__name {
    width: 100%;
    font-weight: 600;

    @media @desktop {
      width: auto;
      min-width: 70px;
      text-align: right;
    }
  }

  &__scale {
    overflow: hidden;
    box-sizing: border-box;
    width: calc(100% - 55px);
    height: 14px;
    margin-right: 10px;
    border-radius: 10px;
    border: 1px solid @black;

    @media @tablet {
      width: calc(100% - 60px);
      margin-right: 15px;
    }

    @media @desktop {
      min-width: 260px;
      margin-left: 20px;
    }
  }

  &__scale-fill {
    height: 12px;
    border-radius: 10px;
    border-right: 1px solid @black;
    background: @white;
    background-size: contain;
  }

  &__score {
    flex-shrink: 0;
    width: 45px;
    text-align: right;
    font-weight: 600;
  }

  &--color {
    & .skills__scale {
      border-color: @grey;
    }

    & .skills__scale-fill {
      border-color: @blue;
      background-color: @blue;
    }
  }
}

@keyframes fill {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

</style>