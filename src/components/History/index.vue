<template>
  <div class="history">
    <section-title>
      How I spend last decade
    </section-title>
    <ul class="history__list">
      <li class="history__item" v-for="item in history" :key="item.date">
        <div class="history__icon">
          <svg width="43px" height="43px" viewBox="0 0 43 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g stroke="#353535" stroke-linejoin="round">
                  <line x1="13.094751" y1="41.0263214" x2="24.2789617" y2="31.1579002"></line>
                  <line x1="24.2789617" y1="31.1579002" x2="30.8579091" y2="41.0263214"></line>
                  <line x1="30.2000144" y1="40.3684267" x2="31.5158039" y2="41.6842162"></line>
                  <line x1="31.5158039" y1="39.7105319" x2="31.5158039" y2="26.552637"></line>
                  <line x1="12.4368563" y1="39.7105319" x2="15.0684352" y2="27.2105318"></line>
                  <line x1="14.410538" y1="27.8684271" x2="4.93685422" y2="23.9210589"></line>
                  <line x1="31.5158039" y1="26.552637" x2="42.0421198" y2="23.2631633"></line>
                  <line x1="3.22632982" y1="21.2894791" x2="19.0158037" y2="21.2894791"></line>
                  <line x1="40.0684355" y1="21.2894791" x2="26.9105406" y2="21.2894791"></line>
                  <line x1="25.5947512" y1="20.3157948" x2="20.9894879" y2="7.15789992"></line>
                  <line x1="19.6736984" y1="5.50000518" x2="17.7000142" y2="19.3157948"></line>
                  <g class="history__icon--animate">
                    <line x1="3.22632982" y1="4.84211043" x2="7.17369829" y2="10.1052684"></line>
                    <line x1="8.48948778" y1="0.236847215" x2="10.463172" y2="7.47368941"></line>
                    <line x1="0.594750838" y1="10.7631631" x2="6.51580354" y2="14.0526369"></line>
                    <path d="M2.06179167,10.2974983 C3.5701899,11.2169345 5.07858813,12.1363706 6.58698637,13.0558068" stroke="#FFFFFF"></path>
                    <path d="M4.35558584,5.11729766 C5.54853538,6.63146837 6.74148492,8.14563907 7.93443446,9.65980977" stroke="#FFFFFF"></path>
                    <path d="M9.40081248,1.05177861 C10.1413869,3.0768981 10.8819612,5.10201759 11.6225356,7.12713707" stroke="#FFFFFF"></path>
                  </g>
              </g>
              <polygon stroke="#FFFFFF" fill="#FFFFFF" points="18.6868563 19.0482133 20.1566485 7.47368941 24.6640263 20.3157948 25.5947512 21.6069948 26.9105406 22.3117235 39.7908098 22.3117235 30.8579091 26.130839 30.8579091 39.7105318 24.2789617 30.2948257 13.3867011 39.9576949 15.8905326 26.9323315 14.410538 26.9323315 5.20001405 23.2631633 4.05527719 21.8955965 19.0158037 22.3955965 19.6736984 21.6069948 19.3847587 21"></polygon>
            </g>
          </svg>
        </div>
        <div class="history__text-wrapper">
          <h3 class="history__title">
            {{ item.title }}
          </h3>
          <span class="history__date">
            {{ item.date }}
          </span>
          <p class="history__text" v-html="item.description"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';

export default {
  name: 'History',
  
  components: {
    SectionTitle
  },

  props: {
    history: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.history {
  &__item {
    display: flex;
    margin-bottom: 30px;

    @media @desktop {
      margin-bottom: 35px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__icon {
    width: 33px;
    margin-right: 10px;

    @media @desktop {
      width: 43px;
      margin-right: 15px;
    }

    svg {
      width: 33px;

      @media @desktop {
        width: 43px;
      }
    }

    &--animate {
      animation: scale 0.5s;
      animation-iteration-count: infinite;
    }
  }

  &__date {
    display: block;
    margin-bottom: 10px;
    font-size: 0.8em;
    line-height: 1.5em;
    font-weight: 400;

    @media @tablet {
      margin-bottom: 15px;
      font-weight: 600;
    }

    @media @desktop {
      margin-bottom: 10px;
      font-size: 1.17em;
    }
  }

  &__title {
    margin-bottom: 7px;
    font-size: 1em;
    font-weight: 400;

    @media @tablet {
      margin-bottom: 4px;
      font-weight: 600;
    }
    
    @media @desktop {
      margin-bottom: 25px;
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

</style>

<style scoped>
  .history__text >>> a {
    text-decoration: underline;
    color: #2c3e50;
  }
</style>
