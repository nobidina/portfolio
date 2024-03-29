import userPhoto_1x from "../img/user@1x.jpg";
import userPhoto_2x from "../img/user@2x.jpg";
import userPhotoColor_1x from "../img/user-color@1x.jpg";
import userPhotoColor_2x from "../img/user-color@2x.jpg";
import sedona_1x from "../img/sedona@1x.jpg";
import sedona_2x from "../img/sedona@2x.jpg";
import sedonaColor_1x from "../img/sedona-color@1x.jpg";
import sedonaColor_2x from "../img/sedona-color@2x.jpg";
import resto_1x from "../img/resto@1x.jpg";
import resto_2x from "../img/resto@2x.jpg";
import restoColor_1x from "../img/resto-color@1x.jpg";
import restoColor_2x from "../img/resto-color@2x.jpg";
import organic_1x from "../img/organic@1x.jpg";
import organic_2x from "../img/organic@2x.jpg";
import organicColor_1x from "../img/organic-color@1x.jpg";
import organicColor_2x from "../img/organic-color@2x.jpg";
import mishka_1x from "../img/mishka@1x.jpg";
import mishka_2x from "../img/mishka@2x.jpg";
import mishkaColor_1x from "../img/mishka-color@1x.jpg";
import mishkaColor_2x from "../img/mishka-color@2x.jpg";
import blog_1x from "../img/blog@1x.jpg";
import blog_2x from "../img/blog@2x.jpg";
import blogColor_1x from "../img/blog-color@1x.jpg";
import blogColor_2x from "../img/blog-color@2x.jpg";

const user = {
    name: "Nadezhda Obidina",
    title: "Front - End Developer",
    photo: {
      src: userPhoto_1x,
      srcSet: userPhoto_2x,
      srcColor: userPhotoColor_1x,
      srcSetColor: userPhotoColor_2x,
    },
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
        score: 70
      },
      {
        name: "VueJS",
        score: 80
      },
      {
        name: "React",
        score: 50
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
        title: `Web Development | ITMO University (via <a href="https://openedu.ru/" target="_blank">openedu.ru</a>)`,
        description: `I started from an Introductory Web development (HTML & CSS) course from one of the most famous IT universities in Russia represented on the <a href="https://openedu.ru/" target="_blank">openedu.ru</a> platform.`
      },
      {
        date: "October 2016 - December 2016",
        title: "Web Development | HTML Academy",
        description: "Turns out it's interesting. So Advanced HTML & CSS intensive course was my next step."
      },
      {
        date: "September 2017 - February 2018",
        title: "Frontend Developer | Self-employed",
        description: "After some home practice I finally found a real job in this field. It was freelance. I've made HTML & CSS from PSD for clients."
      },
      {
        date: "October 2017 - December 2017",
        title: "Web Development | HTML Academy",
        description: "Time to open something new. Basic JS intensive course from HTML Academy suit perfectly for that."
      },
      {
        date: "February 2018 - September 2019",
        title: "Frontend Developer | Domovenok",
        description: `And finally full time office job. I was developing and supporting the <a href="https://www.domovenok.ru/" target="_blank">domovenok.ru</a> website pages using HTML / CSS / BEM / PostCSS / JS. Also employee personal account and client personal account Web applications was my battlefield. I used HTML / CSS / BEM / PostCSS / VueJS for that. Sometimes we developed landing pages for side products.`
      },
      {
        date: "October 2019 - Present time",
        title: "Relocate time",
        description: `My husband got a job in London and we relocate here from Moscow. So I was busy organized this. When the relocation was complete I took a break to exhale, improve my professional skills, make a couple of pet-projects (like this page or the <a href="https://nobidina.github.io/blog/" target="_blank">blog</a> one), and my level of English. Now I think I am ready to get a new wonderful job and do it as well as I can.`
      }
    ],
    portfolio: [
      {
        href: "https://nobidina.github.io/160298-sedona/",
        imgSrc: sedona_1x,
        imgSrcset: sedona_2x,
        imgSrcColor: sedonaColor_1x,
        imgSrcsetColor: sedonaColor_2x,
        alt: "city website"
      },
      {
        href: "https://nobidina.github.io/blog/",
        imgSrc: blog_1x,
        imgSrcset: blog_2x,
        imgSrcColor: blogColor_1x,
        imgSrcsetColor: blogColor_2x,
        alt: "personal blog"
      },
      {
        href: "https://nobidina.github.io/resto/",
        imgSrc: resto_1x,
        imgSrcset: resto_2x,
        imgSrcColor: restoColor_1x,
        imgSrcsetColor: restoColor_2x,
        alt: "restaurant website"
      },
      {
        href: "https://nobidina.github.io/organic/",
        imgSrc: organic_1x,
        imgSrcset: organic_2x,
        imgSrcColor: organicColor_1x,
        imgSrcsetColor: organicColor_2x,
        alt: "company website"
      },
      {
        href: "https://nobidina.github.io/mishka.html",
        imgSrc: mishka_1x,
        imgSrcset: mishka_2x,
        imgSrcColor: mishkaColor_1x,
        imgSrcsetColor: mishkaColor_2x,
        alt: "online shop"
      }
    ],
    portfolioLink: {
      text: "github page",
      href: "https://github.com/nobidina"
    },
    contacts: [
      {
        link: "https://www.linkedin.com/in/nadezhda-obidina-15765a145/",
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

export default user;