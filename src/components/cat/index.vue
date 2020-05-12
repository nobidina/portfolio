<template>
  <div class="hello">
    <section class="hello__section">
      <div class="hello__section-inner  intro">
        <div class="intro__photo">
          <div class="intro__decore"></div>
          <img class="intro__img" :src="userPhoto" />
          <div class="intro__decore  intro__decore--reverse"></div>
        </div>
        <div class="intro__heading">
          <h1 class="intro__title">Nadezhda Obidina</h1>
          <h2 class="intro__subtitle">Front - End Developer</h2>
        </div>
      </div>
    </section>
    <section class="hello__section">
      <div class="hello__section-inner  skills">
        <div class="skills__text-wrapper">
          <h2 class="skills__title">
            Hi! Nice to see you here!
          </h2>
          <p class="skills__text">
            I'm a Front-End developer with experience in developing websites and Web applications using HTML, CSS (+ pre/postprocessors), JS, and the VueJS framework. I really enjoy making PSD, Figma, or whatever else templates alive by the power of these technologies. Especially HTML and CSS.
          </p>
        </div>
        <ul class="skills__list">
          <li class="skills__item" v-for="item in skills" :key="item.name">
            <span class="skills__name">{{ item.name }}</span>
            <div class="skills__scale" :alt="item.score + '%'">
              <div class="skills__scale-fill" v-bind:style="{ width: item.score + '%'}"></div>
            </div>
            <span class="skills__name">{{ item.score }} %</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="hello__section">
      <div class="hello__section-inner history">
        <h2 class="history__title">
          How I spend last decade
        </h2>
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
              <span class="history__date">
                {{ item.date }}
              </span>
              <h3 class="history__subtitle">
                {{ item.title }}
              </h3>
              <p class="history__text">
                {{ item.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="hello__section">
      <div class="hello__section-inner">
      
      </div>
    </section>
    <section class="hello__section">
      <div class="hello__section-inner contacts">
        <div class="contacts__inner">
          <h2 class="contacts__title">
            Contacts
          </h2>
          <p class="contacts__text">
            If you have any questions about my services, or just want to say hello, feel free to contact me.
          </p>
          <div class="contacts__links">
            <a class="contacts__link"
              v-for="item in contacts"
              :key="item.icon"
              :class="'contacts__link--' + item.icon"
              :href="item.link"
            ></a>
          </div>
        </div>
        <div class="contacts__illustration  cat-in-box">
          <div class="box">
            <div class="box__front"></div>
            <div class="box__front-lit"></div>
            <div class="box__side  box__side--right"></div>
            <div class="box__side  box__side--left"></div>
            <div class="box__side-lit"></div>
            <div class="box__back"></div>
            <div class="cat">
              <div class="cat__head">
                <div class="cat__face"></div>
                <div class="cat__ear  cat__ear--left"></div>
                <div class="cat__ear  cat__ear--right"></div>
                <div class="cat__eye  cat__eye--left"></div>
                <div class="cat__eye  cat__eye--right"></div>
                <div class="cat__nose">
                  <div class="cat__whisker  cat__whisker--left"></div>
                  <div class="cat__whisker  cat__whisker--right"></div>
                </div>
              </div>
              <div class="cat__body">
              <div class="cat__front-paw  cat__front-paw--left"></div>
              <div class="cat__front-paw  cat__front-paw--right"></div>
              <div class="cat__back-paw  cat__back-paw--left"></div>
              <div class="cat__back-paw  cat__back-paw--right"></div>
              <div class="cat__tail"></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import photo from "./img/user.jpg";

export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },
  
  data: () => ({
    userPhoto: photo,
    skills: [
      {
        name: "HTML",
        score: 90
      },
      {
        name: "CSS",
        score: 95
      },
      {
        name: "BEM",
        score: 85
      },
      {
        name: "Less",
        score: 80
      },
      {
        name: "Sass",
        score: 80
      },
      {
        name: "PostCSS",
        score: 80
      },
      {
        name: "JS",
        score: 60
      },
      {
        name: "VueJS",
        score: 60
      }
    ],
    history: [
      {
        date: "September 2007 - July 2012",
        title: "Bachelor of Arts (B.A.), Psychology | Ryazan State University",
        description: "This was fun but after all, it turns out it's not my cup of tea."
      },
      {
        date: "November 2013 - April 2017",
        title: "Content Manager | Numo Media",
        description: "Then I tried to find myself. It took some time before I decided to give a chance to the web development."
      },
      {
        date: "April 2016 - July 2016",
        title: "Web Development | ITMO University (via openedu.ru)",
        description: "I started from an Introductory Web development (HTML & CSS) course from one of the most famous IT universities in Russia represented on the openedu.ru platform."
      },
      {
        date: "October 2016 - December 2016",
        title: "Web Development | HTML Academy",
        description: "Turns out it's interesting. So Advanced HTML & CSS intensive course was my next step."
      },
      {
        date: "September 2017 - February 2018",
        title: "Frontend Developer | Self-employed",
        description: "After some home practice I finelly found a real job on this fild. It was frilance. I've made HTML & CSS from PSD for clients."
      },
      {
        date: "October 2017 - December 2017",
        title: "Web Development | HTML Academy",
        description: "Time to open something new. Basic JS intensive course from HTML Academy suit perfectly for that."
      },
      {
        date: "February 2018 - September 2019",
        title: "Frontend Developer | Domovenok",
        description: "And finally fulltime ofice job. I was developing and supporting the https://www.domovenok.ru/ website pages using HTML/CSS/BEM/PostCSS/JS. Also employee personal account and client personal account Web applications was my battle field. I used HTML/CSS/BEM/PostCSS/VueJS for that. Sometimes we developed landing pages for side products."
      },
      {
        date: "October 2018 - Present time",
        title: "Relocate time",
        description: "My husband got a job in London and we relocate here from Moscow. So I was busy organazed this. When the relocate was complete. I took a brake to exhale, improve my professional skills and my level of English. Now I think I ready to get new wonderfull job and do it as good as I can."
      }
    ],
    contacts: [
      {
        link: "https://www.facebook.com/profile.php?id=100000435645436",
        icon: "facebook"
      },
      {
        link: "https://www.instagram.com/nadezda_obidina/",
        icon: "instagram"
      },
      {
        link: "#",
        icon: "linked-in"
      },
      {
        link: "https://github.com/nobidina",
        icon: "github"
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.hello {
  padding-left: 90px;
  padding-right: 90px;
  padding-bottom: 90px;
  
  &__section {
    position: relative;
    z-index: 1;
    margin-bottom: 4px;
    border-radius: 50px;

    &-inner {
      z-index: 2;
      padding: 90px 70px;
      border-radius: 50px;
      background-color: whitesmoke;
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

    &:last-child {
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
}

.intro {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  &__heading {
    margin-bottom: 30px;
  }

  &__title {
    transition: transform 1s ease-in-out;
    margin-bottom: 30px;
    font-family: 'Fredericka the Great', cursive;
    text-align: center;
    font-size: 3em;
    line-height: 1em;
    font-weight: 400;
  }

  &__subtitle {
    margin-bottom: 30px;
    text-align: center;
    font-size: 1em;
    line-height: 1em;
    font-weight: 400;
  }

  &__photo {
    transition: transform 0.4s ease-in-out;
    position: relative;
    width: 330px;
    height: 313px;
    border-radius: 50%;
    border: 1px solid #353535;
    box-shadow: 0 5px 0 0 white,
                5px 0px 0 0 white,
                -5px 0 0 0 white,
                0 -5px 0 0 white, 
                0 6px 0 0 #353535,
                0 -6px 0 0 #353535, 
                -6px 0 0 0 #353535,
                6px 0 0 0 #353535;

    &:hover {
      & .intro__decore {
        animation: trembling 0.4s;
        animation-iteration-count: infinite;
      }

      & + .intro__heading .intro__title {
        animation: scale 1s step-start;
        animation-iteration-count: infinite;
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
    width: 250px;
    height: 2px;
    border: 1px solid #353535;
  }

  &__decore::before {
    top: 90px;
    left: -23px;
    transform: rotate(-18deg);
    width: 270px;
  }

  &__decore::after {
    top: 163px;
    left: 35px;
    transform: rotate(-30deg);
  }

  &__decore {
    top: 50px;
    left: -250px;
    transform: rotate(20deg);

    &--reverse {
      left: 330px;
      transform: rotate(-20deg);
    }

    &--reverse::before {
      left: 0;
      transform: rotate(18deg);
    }

    &--reverse::after {
      left: -34px;
      transform: rotate(30deg);
    }
  }

  &__img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
}

.skills {
  display: flex;

  &__text-wrapper {
    width: 45%;
    margin-right: auto;
  }

  &__title {
    margin-bottom: 30px;
  }

  &__text {
    line-height: 1.5em;
  }

  &__list {
    flex-shrink: 0;
    width: 50%;
    list-style: none;
    margin: 0;
    padding: 0;

    &:hover {
      .skills__scale-fill {
        animation: fill 2s;
      }
    }
  }

  &__item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__scale {
    animation: trembling 1s;
    animation-iteration-count: infinite;
    overflow: hidden;
    min-width: 260px;
    height: 10px;
    margin-right: 10px;
    margin-left: 20px;
    border-radius: 10px;
    border: 1px solid #353535;
  }

  &__scale-fill {
    height: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-right: 1px solid #353535;
    background: white;
    // background: url("./img/pencil-pattern.jpg");
    background-size: contain;
  }
}

.history {
  &__title {
    margin-bottom: 30px;
  }

  &__item {
    display: flex;
    margin-bottom: 35px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__icon {
    margin-right: 15px;

    &--animate {
      animation: scale-2 0.5s;
      animation-iteration-count: infinite;
    }
  }

  &__date {
    display: block;
    margin-bottom: 10px;
    text-align: left;
    font-size: 1.17em;
    line-height: 1.5em;
    font-weight: 600;
  }

  &__subtitle {
    margin-bottom: 25px;
    text-align: left;
  }

  &__text {
    text-align: left;
  }
}

.contacts {
  position:relative;
  display: flex;

  &__inner {
    width: 40%;
    margin-right: auto;
  }

  &__title {
    margin-bottom: 30px
  }

  &__text {
    margin-bottom: 20px;
  }

  &__links {
    display: flex;
    justify-content: center;
  }

  &__link {
    display: block;
    width: 40px;
    height: 40px;
    margin-right: 20px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

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
  }
}

.cat-in-box {
  position: absolute;
  right: 0;
  bottom: -4px;
  width: 400px;
  height: 300px;

  & .cat {
    position: absolute;
    bottom: 14px;
    right: 50%;
    transform: translateX(50%);
    z-index: 1;
  }

  & .box {
    position: absolute;
    bottom: 0px;
    right: 50px;
  }

  &:hover {
    .cat__ear--left::after {
      animation: cat-left-ear 0.3s;
      animation-fill-mode: forwards;
    }

    .cat__ear--right::after {
      animation: cat-right-ear 0.3s;
      animation-fill-mode: forwards;
    }

    .cat {
      animation: cat-appear 2s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
    }

    .cat__eye::after {
      animation: cat-eyes 1s;
      animation-delay: 2.8s;
      animation-fill-mode: forwards;
    }

    .cat__front-paw {
      transform: rotate(180deg);
    }

    .cat__front-paw--left {
      left: 10px;
      animation: front-left-pow 0.5s;
      animation-delay: 4s;
      animation-fill-mode: forwards;
    }

    .cat__front-paw--right {
      right: 10px;
      animation: front-right-pow 0.5s;
      animation-delay: 3.9s;
      animation-fill-mode: forwards;
    }
  }
}

.cat {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &__head {
    position: relative;
    width: 80px;
    height: 70px;
    margin-bottom: -4px;
    border-radius: 24px;
  }

  &__face {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    border-radius: 30px;
    border: 1px solid #353535;
    background-color: white;
  }

  &__ear {
    position: absolute;
    top: -2px;
    z-index: 1;
    width: 40px;
    height: 25px;
    border: 1px solid #353535;
    background-color: white;

    &::after {
      content: "";
      position: absolute;
      top: 12px;
      left: -1px;
      z-index: 1;
      width: 40px;
      height: 25px;
      border: 1px solid #353535;
      background-color: white;
    }

    &--left {
      left: 5px;
      transform: skewY(30deg);

      &::after {
        transform: skewY(30deg);
      }
    }

    &--right {
      left: 32px;
      transform: skewY(-30deg);

      &::after {
        transform: skewY(-30deg);
      }
    }
  }

  &__eye {
    position: absolute;
    top: 20px;
    z-index: 3;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #353535;
    background-color: white;

    &::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 0px;
      z-index: 4;
      width: 14px;
      height: 12px;
      border-radius: 50%;
      background-color: #353535;
    }

    &--left {
      left: 18px;
    }

    &--right {
      right: 18px;
    }
  }

  &__nose {
    position: absolute;
    top: 41px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    border-top: 7px solid #353535;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
      width: 1px;
      height: 7px;
      background-color: #353535;
    }

    &::after {
      content: "";
      position: absolute;
      top: 5px;
      left: -3px;
      z-index: 3;
      width: 10px;
      height: 1px;
      background-color: #353535;
    }
  }

  &__whisker {
    position: absolute;
    top: -12px;
    z-index: 3;
    width: 45px;
    height: 1px;
    background-color: lightgray;

    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 0;
      z-index: 3;
      width: 45px;
      height: 1px;
      background-color: lightgray;
    }

    &::before {
      top: 20px;
    }

    &::after {
      top: 8px;
    }

    &--left {
      left: -55px;
      transform: rotate(16deg);

      &::before {
        transform: rotate(-21deg);
      }

      &::after {
        transform: rotate(-8deg);
      }
    }

    &--right {
      left: 10px;
      transform: rotate(-16deg);

      &::before {
        transform: rotate(21deg);
      }

      &::after {
        transform: rotate(8deg);
      }
    }
  }

  &__body {
    width: 65px;
    height: 115px;
    border-top-right-radius: 70px;
    border-top-left-radius: 70px;
    border: 1px solid #353535;
    background-color: white;

  }

  &__front-paw {
    position: absolute;
    bottom: -9px;
    z-index: 3;
    width: 16px;
    height: 70px;
    border-right: 1px solid #353535;
    border-bottom: 1px solid #353535;
    border-left: 1px solid #353535;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    background-color: white;

    &--left {
      left: 20px;
    }

    &--right {
      right: 20px;
    }
  }

  &__back-paw {
    position: absolute;
    bottom: -7px;
    z-index: 2;
    width: 20px;
    height: 16px;
    border: 1px solid #353535;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: white;

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }
  }

  &__tail {
    position: absolute;
    bottom: 0px;
    left: 26px;
    z-index: -1;
    width: 130px;
    height: 20px;
    transform: skew(-45deg);
    border-top: 1px solid #353535;
    border-right: 1px solid #353535;
    border-bottom: 1px solid #353535;
    border-bottom-right-radius: 17px;
    border-top-right-radius: 10px;
    background-color: white;
  }
}

.box {
  width: 210px;
  height: 180px;

  &__front {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    width: 210px;
    height: 180px;
    border: 1px solid #353535;
    background-color: white;
  }

  &__front-lit {
    position: absolute;
    top: -2px;
    left: -13px;
    transform: skewX(-37deg);
    z-index: 3;
    width: 210px;
    height: 30px;
    border: 1px solid #353535;
    background-color: white;
  }

  &__side {
    position: absolute;
    bottom: -5px;
    transform: skewX(-32deg) rotate(-32deg);
    width: 40px;
    height: 212px;
    border: 1px solid #353535;
    background-color: white;

    &--left {
      z-index: 1;
      left: 3px;
    }

    &--right {
      z-index: 2;
      right: -46px;
    }
  }

  &__side-lit {
    position: absolute;
    top: -14px;
    right: -74px;
    transform: skewX(37deg) rotate(-19deg);
    z-index: 3;
    width: 67px;
    height: 26px;
    border: 1px solid #353535;
    background-color: white;
  }

  &__back {
    position: absolute;
    bottom: 22px;
    left: 47px;
    z-index: 1;
    width: 210px;
    height: 180px;
    border: 1px solid #353535;
    background-color: white;
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

@keyframes scale-2 {
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

@keyframes fill {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes cat-appear {
  0% {
    bottom: 14px;
  }
  100% {
    bottom: 45px;
  }
}

@keyframes cat-left-ear {
  0% {
    transform: skewY(30deg);
    left: -1px;
  }
  100% {
    transform: skewY(27deg);
    left: 3px;
  }
}

@keyframes cat-right-ear {
  0% {
    transform: skewY(-30deg);
    left: -1px;
  }
  100% {
    transform: skewY(-28deg);
    left: -5px;
  }
}

@keyframes cat-eyes {
  0% {
    top: 2px;
    left: 0px;
    width: 14px;
    height: 12px;
  }
  100% {
    top: 1px;
    left: 0;
    width: 12px;
    height: 14px;
  }
}

@keyframes front-left-pow {
  0% {
    bottom: -9px;
  }
  100% {
    bottom: 74px;
  }
}

@keyframes front-right-pow {
  0% {
    bottom: -9px;
  }
  100% {
    bottom: 74px;
  }
}

@keyframes cat-jump {
  0% {
    bottom: 74px;
  }
  100% {
  }
}

</style>
