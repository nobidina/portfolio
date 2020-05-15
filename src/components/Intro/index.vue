<template>
  <div class="intro">
    <div class="intro__photo">
      <div class="intro__decore"></div>
      <img class="intro__img" :src="photo.src" :srcSet="photo.srcSet" />
      <div class="intro__decore  intro__decore--reverse"></div>
    </div>
    <div class="intro__heading">
      <h1 class="intro__title">{{ name }}</h1>
      <h2 class="intro__subtitle">{{ title }}</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Intro',

  props: {
    photo: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
@import "../../less/variables.less";

.intro {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 31px;

  @media @tablet {
    margin-bottom: 0;  
  }

  &__heading {
    margin-bottom: 30px;

    @media @tablet {
      margin-bottom: 45px;
    }

    @media @desktop {
      margin-bottom: 60px;  
    }
  }

  &__title {
    transition: transform 1s ease-in-out;
    margin-bottom: 25px;
    font-family: @font-family-pencil;
    text-align: center;
    font-size: 3em;
    line-height: 1em;
    font-weight: 400;

    @media @desktop {
      margin-bottom: 30px;  
    }
  }

  &__subtitle {
    text-align: center;
    font-size: 1em;
    line-height: 1em;
    font-weight: 400;
  }

  &__photo {
    // transition: transform 0.4s ease-in-out;
    position: relative;
    width: 180px;
    height: 171px;
    margin: 6px;
    border-radius: 50%;
    border: 1px solid #81888F;
    box-shadow: 0 5px 0 0 white,
                5px 0px 0 0 white,
                -5px 0 0 0 white,
                0 -5px 0 0 white, 
                0 6px 0 0 #81888F,
                0 -6px 0 0 #81888F, 
                -6px 0 0 0 #81888F,
                6px 0 0 0 #81888F;

    @media @tablet {
      width: 255px;
      height: 242px;
    }

    @media @desktop {
      width: 330px;
      height: 313px;
    }

    &:hover {
      // transform: scale(1.1);
      & .intro__decore {
        @media @tablet {
          animation: trembling 0.4s;
          animation-iteration-count: infinite;
        }
      }

      & + .intro__heading .intro__title {
        @media @tablet {
          animation: scale 1s step-start;
          animation-iteration-count: infinite;
        }
      }
    }

    & + .intro__heading .intro__title {
      animation: scale 1s step-start;
      animation-iteration-count: infinite;

      @media @tablet {
        animation: none;
      }
    }
  }

  &__decore::before,
  &__decore::after {
    content: "";
  }

  &__decore, 
  &__decore::before,
  &__decore::after {
    position: absolute;
    width: 30%;
    height: 2px;
    border: 1px solid #81888F;

    @media @tablet {
      width: 65%;
    }

    @media @desktop {
      width: 250px;
    }
  }

  &__decore::before {
    top: 25px;
    left: 5px;
    transform: rotate(-18deg);
    width: 100%;

    @media @tablet {
      top: 50px;
    }

    @media @desktop {
      top: 90px;
      left: -23px;
      width: 270px;
    }
  }

  &__decore::after {
    top: 51px;
    left: 21px;
    transform: rotate(-30deg);
    width: 100%;

    @media @tablet {
      top: 90px;
    }

    @media @desktop {
      top: 163px;
      left: 35px;
      width: 250px;
    }
  }

  &__decore {
    animation: trembling 0.4s;
    animation-iteration-count: infinite;
    top: 50px;
    left: -80px;
    transform: rotate(20deg);

    @media @tablet {
      top: 65px;
      left: -185px;
    }

    @media @desktop {
      animation: none;
      left: -250px;   
    }

    &--reverse {
      left: 200px;
      transform: rotate(-20deg);

      @media @tablet {
        left: 272px;
      }

      @media @desktop {
        left: 330px;
      }
    }

    &--reverse::before {
      left: -4px;
      transform: rotate(18deg);

      @media @desktop {
        left: 0;
      }
    }

    &--reverse::after {
      left: -20px;
      transform: rotate(30deg);

      @media @desktop {
        left: -34px;
      }
    }
  }

  &__img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
}

@keyframes trembling {
  0% {
    margin-top: 0px;
  }
  50% {
    margin-top: 2px;
  }
  100% {
    margin-top: 0px;
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

</style>
