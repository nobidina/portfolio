<template>
  <div class="home" :class="{ 'home--color': isColorMode }">
    <custom-section>
      <intro :name="user.name" :title="user.title" :photo="user.photo" />
    </custom-section>
    <custom-section>
      <skills :title="user.greeting" :text="user.about" :skills="user.skills" />
    </custom-section>
    <custom-section>
      <history :history="user.history" />
    </custom-section>
    <custom-section>
      <portfolio :portfolio="user.portfolio" :link="user.portfolioLink" />
    </custom-section>
    <custom-section :cartoon="cartoon" >
      <contacts :contacts="user.contacts" @switchChecked="switchColorMode" />
    </custom-section>
  </div>
</template>

<script>

import userData from './data/user.js';

import Contacts from '@/components/Contacts';
import CustomSection from '@/components/CustomSection';
import Intro from '@/components/Intro';
import History from '@/components/History';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';

import { mapState, mapMutations } from 'vuex';
import types from '@/store/types';

export default {
  name: 'Home',

  components: {
    Contacts,
    CustomSection,
    Intro,
    History,
    Portfolio,
    Skills
  },

  data: () => ({
    user: userData
  }),

  computed: {
    ...mapState({
      isColorMode: state => state.isColorMode,
      isDesktop: state => state.isDesktop
    }),
    cartoon () {
      if (this.isDesktop) {
        return 'cat-in-box'
      } return 'cat'
    }
  },

  methods: {
    ...mapMutations ({
      switchColorMode: types.SET_COLOR_MODE
    })
  }
}

</script>

<style scoped lang="less">
@import "../../less/variables.less";

.home {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 40px;
  background-color: @whitesmoke;

  @media @tablet {
    min-height: calc(100% - 40px);
    margin: 20px 20px 0 20px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    border-radius: 15px;
    box-shadow: 0px 5px 20px @lightgrey;
  }

  @media @desktop {
    min-height: calc(100% - 100px);
    max-width: 77%;
    margin: 50px auto 0 auto;
    padding-left: 90px;
    padding-right: 90px;
    padding-bottom: 90px;
    box-shadow: 0px 5px 50px @lightgrey;
  }

  &--color {
    color: @font-color-mode;
    background-color: @white;
  }
}

</style>
