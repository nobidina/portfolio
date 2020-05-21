<template>
  <div class="contacts" :class="{ 'contacts--color': isColorMode }">
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
  
  computed: {
    ...mapState({
      isColorMode: state => state.isColorMode
    })
  }
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.contacts {
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

</style>
