<template>
  <div class="home">
    <custom-section>
      <intro :name="user.name" :title="user.title" :photo="user.photo" />
    </custom-section>
    <custom-section>
      <skills :title="user.greeting" :text="user.about" :skills="user.skills"/>
    </custom-section>
    <custom-section>
      <history :history="user.history"/>
    </custom-section>
    <custom-section>
      <portfolio :portfolio="user.portfolio" :link="user.portfolioLink" />
    </custom-section>
    <custom-section>
      <contacts :contacts="user.contacts"/>
    </custom-section>
  </div>
</template>

<script>

import photo from "./img/user.jpg";
import sedona_1x from "./img/sedona@1x.jpg";
import sedona_2x from "./img/sedona@2x.jpg";
import resto_1x from "./img/resto@1x.jpg";
import resto_2x from "./img/resto@2x.jpg";
import organic_1x from "./img/organic@1x.jpg";
import organic_2x from "./img/organic@2x.jpg";
// import mishka_1x from "./img/mishka@1x.jpg";
// import mishka_2x from "./img/mishka@2x.jpg";

import Contacts from '@/components/Contacts';
import CustomSection from '@/components/CustomSection';
import Intro from '@/components/Intro';
import History from '@/components/History';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';

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
    user: {
      name: "Nadezhda Obidina",
      title: "Front - End Developer",
      photo: photo,
      greeting: "Hi! Nice to see you here!",
      about: "I'm a Front-End developer with experience in developing websites and Web applications using HTML, CSS (+ pre/postprocessors), JS, and the VueJS framework. I really enjoy making PSD, Figma, or whatever else templates alive by the power of these technologies. Especially HTML and CSS.",
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
          description: "And finally fulltime ofice job. I was developing and supporting the https://www.domovenok.ru/ website pages using HTML / CSS / BEM / PostCSS / JS. Also employee personal account and client personal account Web applications was my battle field. I used HTML / CSS / BEM / PostCSS / VueJS for that. Sometimes we developed landing pages for side products."
        },
        {
          date: "October 2018 - Present time",
          title: "Relocate time",
          description: "My husband got a job in London and we relocate here from Moscow. So I was busy organazed this. When the relocate was complete. I took a brake to exhale, improve my professional skills and my level of English. Now I think I ready to get new wonderfull job and do it as good as I can."
        }
      ],
      portfolio: [
        {
          href: "https://nobidina.github.io/sedona.html",
          imgSrc: sedona_1x,
          imgSrcset: sedona_2x,
          alt: "city website"
        },
        {
          href: "https://nobidina.github.io/resto.html",
          imgSrc: resto_1x,
          imgSrcset: resto_2x,
          alt: "restaurant website"
        },
        {
          href: "https://nobidina.github.io/mishka/organic.html",
          imgSrc: organic_1x,
          imgSrcset: organic_2x,
          alt: "company website"
        },
        // {
        //   href: "https://nobidina.github.io/mishka.html",
        //   imgSrc: mishka_1x,
        //   imgSrcset: mishka_2x,
        //   alt: "online shop"
        // }
      ],
      portfolioLink: {
        text: "github page",
        href: "https://nobidina.github.io/"
      },
      contacts: [
        {
          link: "#",
          icon: "linked-in"
        },
        {
          link: "https://github.com/nobidina",
          icon: "github"
        },
        {
          link: "https://www.facebook.com/profile.php?id=100000435645436",
          icon: "facebook"
        },
        {
          link: "https://www.instagram.com/nadezda_obidina/",
          icon: "instagram"
        }
      ]
    }
  })
}

</script>

<style scoped lang="less">
@import "../../less/variables.less";

.home {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 40px;
  background-color: whitesmoke;

  @media @tablet {
    min-height: calc(100% - 100px);
    max-width: 1200px;
    margin: 50px auto;
    padding-left: 90px;
    padding-right: 90px;
    padding-bottom: 90px;
    border-radius: 15px;
    box-shadow: 0px 5px 50px lightgrey;
    background-color: whitesmoke;
  }
}

</style>
