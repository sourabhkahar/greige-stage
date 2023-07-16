<template>
  <router-view v-slot="{Component}" >
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>  
  </router-view>
</template>

<script setup>
</script>

<style>
/* Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
*,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;
    list-style: none;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
}
img{
    width: 100%;
}
.content{
    padding-top: 10px;
    color:#042023;
    font-weight: 500;
}
.box_wrp .img_wrp img:hover {
    transform: scale(1.1);
    transition: 0.5s;
}
.main-menu ul li:hover,.main-menu ul li a:hover{
    color: #d45500;
}
.main-menu ul li:hover svg{
    fill: #d45500;
}
/* .btn_shop:hover{
    color: #d45500;
} */
/* Desktop Header */
.header{
    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */
    padding: 12px 100px;
    background-color: rgba(4, 32, 35);
    color:white;
    position: relative;
}
/* Mobile Header */
.Mobile_header {
  /* position: fixed; */
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: auto;
  margin: 0 auto;
  transition: all 0.35s ease;
}
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 1.25rem;
  width: 100%;
  height: 4.25rem;
  margin: 0 auto;
  position:relative;
  z-index:9;
}
.burger {
  position: relative;
  display: block;
  cursor: pointer;
  user-select: none;
  order: -1;
  z-index: 10;
  width: 1.6rem;
  height: 1.15rem;
  border: none;
  outline: none;
  background: none;
  visibility: visible;
  transform: rotate(0deg);
  transition: 0.35s ease;
}
.burger-line:nth-child(1) {
  top: 0px;
}
.burger-line {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  height: 1.75px;
  border: none;
  outline: none;
  opacity: 1;
  transform: rotate(0deg);
  background-color: white;
  transition: 0.25s ease-in-out;
}
.burger-line:nth-child(2) {
  top: 0.5rem;
  width: 70%;
}
.burger-line:nth-child(3) {
  top: 1rem;
}
.menu.is-active {
  top: 50px;
  width: 100%;
  height: auto;
}
.menu {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: auto;
  padding: 4rem 0 3rem;
  overflow: hidden;
  background-color: var(--color-black-300);
  box-shadow: var(--shadow-medium);
  transition: all 0.4s ease-in-out;
}
.menu-inner,.mega-menu {
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 1.25rem;
    width: 100%;
    overflow: scroll;
}
.menu-link,.mega-menu{
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-white-100);
  text-transform: uppercase;
  transition: all 0.3s ease;
}


.desktop_header{
  display: flex;
}
.Mobile_header{
  display: none;
}
@media (max-width: 768px){
  .desktop_header{
    display: none;
  }
  .Mobile_header{
    display: block;
  }
  .css-typing p:nth-child(1){
    width: 6em;
  }
  .css-typing p:nth-child(2) {
  width: 6em;
 }
 .FillRedBtn a{
  display: none;
 }
 .wrp_footer .wrp_flex {
  flex-direction: column;
 }
 .menu_2{
  margin-top: 20px;
  width: 100%;
  margin-left: 0 !important;
 }
 .menu_1{
 padding: 5px;
 width: 100%;
 }
 footer .grid_wrp{
  padding: 50px 10% !important;
 }
 .banner_wrp h1 {
  font-size: 2rem !important;  
 }
 .collection_grid .grid_main{
    flex: 0 0 50%;
 }
 .collection_grid .grid_wrp{
   padding: 0px 5%
}
.Services{
  padding-top: 50px;
}
.about-us{
  flex-direction: column;
}
#counter{
  flex-wrap: wrap;
}
#counter .item{
  flex: 0 0 50%;
}
.home_banerr.parallex-banner{
  padding: 20px 10%;
}
.About_img {
  flex: 0 0 100% !important;
}
.about-us img {
  width: 100% !important;
}
.about-us{
padding: 30px !important;
}
.about_content h2{
  line-height: 1.3;
}
.brand_wrp .flex_wrp{
  flex-wrap: wrap;
}
.brand_logo { 
  padding: 10px !important;
}
.about_us.parallex-banner{
  padding: 50px 5%;
}
.about_content{
  padding-top: 20px;
}
.StickyBtns .MainWrapper .RightWrapper .FSocialIcon .SocialIcons a{
  width: 25px;
  height: 25px !important;
}
.Services .grid_wrp {
  padding: 0;
}
}
@media (max-width: 600px){
  .collection_grid .grid_main{
    flex: 0 0 100%;
 }
}
@media (max-width: 425px){
  .collection_grid .grid_main{
    flex: 0 0 100%;
 }
 .StickyBtns .MainWrapper .RightWrapper .FSocialIcon{
  padding: 8px 12px;
 }
}
/* Mobile Header */
main {
   overflow: hidden;
}

/* // Element Section */
.section {
   margin: 0 auto;
   padding: 6rem 0 1rem;
}

.container {
   max-width: 75rem;
   height: auto;
   margin: 0 auto;
   padding: 0 1.25rem;
}

.centered {
   text-align: center;
   vertical-align: middle;
   margin-bottom: 1rem;
}
.Mobile_header .logo h1{
  text-align: center;
  /* padding-bottom: 10px; */
  font-size: 30px;
}

.Mobile_header .logo {
  flex: 0 0 20%;
}
.Mobile_header .menu{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  background-color: #042023;
  z-index:9999;
}
.Mobile_header .menu-inner{
  padding: 30px 0px;
}
.mega-menu{
  display: none;
}
.mega-menu{
  padding: 10px 0;
}
.child-menu{
    padding: 10px;
}
.child-menu li a{
  line-height: 1.2;
}
.Mobile_header a.menu-link,.Mobile_header a.mege-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.burger.is-active .burger-line:nth-child(1) {
  top: 0.5rem;
  transform: rotate(135deg);
}
.burger.is-active .burger-line:nth-child(2) {
  opacity: 0;
  visibility: hidden;
}
.burger.is-active .burger-line:nth-child(3) {
  top: 0.5rem;
  transform: rotate(-135deg);
}
.Mobile_header .menu-item svg{
  width: 20px !important;
    fill: white;
    stroke: white;
    height: 20px;
}
.active-arrow svg{  
  transform: rotate(90deg);
}
.active{
  display: block;
}
.Mobile_header li.menu-item {
  width: 100%;
  padding: 0 20px;
}
@media (max-width: 768px){
  .FillRedBtn{
    display: none;
  }
  .menu-link{
    font-size: 25px;
  }
  .Services .wrp_title {
    padding-bottom:20px;
  }
  .brand_logo {
    flex: 0 0 50% !important;
  }
}
.heading {
   &-xl {
      font-family: inherit;
      font-size: clamp(2.648rem, 6vw, 4.241rem);
      font-weight: 700;
      line-height: 1.15;
      letter-spacing: -1px;
   }

   &-lg {
      font-family: inherit;
      font-size: clamp(2.179rem, 5vw, 3.176rem);
      font-weight: 700;
      line-height: 1.15;
      letter-spacing: -1px;
   }

   &-md {
      font-family: inherit;
      font-size: clamp(1.794rem, 4vw, 2.379rem);
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: -1px;
   }

   &-sm {
      font-family: inherit;
      font-size: clamp(1.476rem, 3vw, 1.782rem);
      font-weight: 600;
      line-height: 1.5;
   }

   &-xs {
      font-family: inherit;
      font-size: clamp(1.215rem, 2vw, 1.335rem);
      font-weight: 500;
      line-height: 1.5;
   }
}

.paragraph {
   font-family: inherit;
   font-size: clamp(1rem, 2vw, 1.125rem);
   line-height: inherit;
   max-width: 95%;
   height: auto;
   text-transform: unset;
   color: var(--color-white-200);
}

.btn {
   display: inline-block;
   font-family: inherit;
   font-size: 1rem;
   font-weight: 500;
   line-height: 1.5;
   text-align: center;
   vertical-align: middle;
   white-space: nowrap;
   user-select: none;
   outline: none;
   border: none;
   border-radius: 0.25rem;
   text-transform: unset;
   transition: all 0.3s ease-in-out;

   &-inline {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      column-gap: 0.5rem;
   }

   &-darken {
      padding: 0.75rem 2rem;
      color: var(--color-white-100);
      background-color: var(--color-black-200);
      box-shadow: var(--shadow-medium);
   }

   &-neutral {
      padding: 0.75rem 2rem;
      color: var(--color-black-500);
      background-color: var(--color-white-100);
      box-shadow: var(--shadow-medium);
   }
}

/* // Header Section */
.header {
   position: fixed;
   top: 0;
   left: 0;
   z-index: 100;
   width: 100%;
   height: auto;
   margin: 0 auto;
   transition: all 0.35s ease;

   &.on-scroll {
      background: var(--color-black-300);
      box-shadow: var(--shadow-medium);
   }
}

.navbar {
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   background-color: rgba(4, 32, 35);
    color: white;
   column-gap: 1.25rem;
   width: 100%;
   height: 4.25rem;
   margin: 0 auto;
}
.Mobile_header a{
  color: white;
}
.brand {
   font-family: inherit;
   font-size: 1.6rem;
   font-weight: 600;
   line-height: 1.5;
   letter-spacing: -1px;
   color: white;
   text-transform: uppercase;
}
.menu-inner{
    z-index: 999;
}
.menu {
   position: fixed;
   top: -100%;
   left: 0;
   width: 100%;
   height: 100%;
   padding: 4rem 0 3rem;
   overflow: hidden;
   background-color: var(--color-black-300);
   box-shadow: var(--shadow-medium);
   transition: all 0.4s ease-in-out;

   &.is-active {
      bottom: 0%;
      width: 100%;
      height: 100%;
      z-index: 999;
   }

   &-inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 1.25rem;
   }

   &-link {
      font-family: inherit;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5;
      color: var(--color-white-100);
      text-transform: uppercase;
      transition: all 0.3s ease;
   }

   &-block {
      display: inline-block;
      font-family: inherit;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25;
      user-select: none;
      white-space: nowrap;
      text-align: center;
      margin-left: auto;
      padding: 0.65rem 1.5rem;
      border-radius: 3rem;
      text-transform: capitalize;
      color: var(--color-white);
      background-color: var(--color-blue-600);
      box-shadow: var(--shadow-medium);
      transition: all 0.3s ease-in-out;
   }

   /* // Media Query Breakpoint */
   @media only screen and (min-width: 48rem) {
      position: relative;
      top: 0;
      width: auto;
      height: auto;
      padding: 0rem;
      margin-left: auto;
      background: none;
      box-shadow: none;

      &-inner {
         display: flex;
         flex-direction: row;
         column-gap: 2rem;
         margin: 0 auto;
      }

      &-link {
         text-transform: capitalize;
      }

      &-block {
         margin-left: 2rem;
      }
   }
}

.burger {
   position: relative;
   display: block;
   cursor: pointer;
   user-select: none;
   order: -1;
   z-index: 10;
   width: 1.6rem;
   height: 1.15rem;
   border: none;
   outline: none;
   background: none;
   visibility: visible;
   transform: rotate(0deg);
   transition: 0.35s ease;

   /* // Media Query Breakpoint */
   @media only screen and (min-width: 48rem) {
      display: none;
      visibility: hidden;
   }

   &-line {
      position: absolute;
      display: block;
      left: 0;
      width: 100%;
      height: 1.75px;
      border: none;
      outline: none;
      opacity: 1;
      transform: rotate(0deg);
      background-color: var(--color-white-100);
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
         top: 0px;
      }
      &:nth-child(2) {
         top: 0.5rem;
         width: 70%;
      }
      &:nth-child(3) {
         top: 1rem;
      }
   }

   &.is-active .burger-line {
      &:nth-child(1) {
         top: 0.5rem;
         transform: rotate(135deg);
      }
      &:nth-child(2) {
         opacity: 0;
         visibility: hidden;
      }
      &:nth-child(3) {
         top: 0.5rem;
         transform: rotate(-135deg);
      }
   }
}

/* // Banner Section */
.banner {
   &-column {
      position: relative;
      display: grid;
      align-items: center;
      row-gap: 3rem;

      /* // Media Query Breakpoint */
      @media only screen and (min-width: 48rem) {
         grid-template-columns: repeat(2, minmax(0, 1fr));
         justify-content: center;
      }

      @media only screen and (min-width: 64rem) {
         grid-template-columns: 1fr max-content;
         column-gap: 4rem;
         margin-top: 3rem;
      }
   }

   &-image {
      display: block;
      max-width: 18rem;
      height: auto;
      margin-top: 2rem;
      object-fit: cover;
      justify-self: center;

      /* // Media Query Breakpoint */
      @media only screen and (min-width: 48rem) {
         order: 1;
         max-width: 20rem;
         height: auto;
      }

      @media only screen and (min-width: 64rem) {
         max-width: 25rem;
         height: auto;
         margin-right: 5rem;
      }
   }

   &-inner {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 1.75rem;
   }

   &-links {
      position: absolute;
      top: 30%;
      right: 1.5rem;
      display: grid;
      justify-items: center;
      row-gap: 0.5rem;
      opacity: 0;
      visibility: hidden;

      /* // Media Query Breakpoint */
      @media only screen and (min-width: 64rem) {
         opacity: 1;
         visibility: visible;
      }

      & > * {
         font-size: 1.25rem;
         line-height: 1.25;
         color: var(--color-white-100);
      }

      &::before {
         position: absolute;
         content: "";
         top: -3rem;
         width: 4rem;
         height: 1.5px;
         transform: rotate(90deg);
         background: var(--color-white-100);
      }

      &::after {
         position: absolute;
         content: "";
         bottom: -3rem;
         width: 4rem;
         height: 2px;
         transform: rotate(90deg);
         background: var(--color-white-100);
      }
   }
}

.mega_wrp {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
}
.sub_menu{
    flex: 0 0 22.22%;
    display: block !important;
}
.mega_menu{
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;
    background: white;
    color: black;
    z-index: 1;
    max-width: 100%;
    padding: 20px;
    right: 0;
    margin: 0 auto;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    visibility: hidden;
    opacity: 0;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
}
.img_get{
width: 100%;
    height: 180px;
    overflow: hidden;
    box-shadow: 10px 12px 12px rgb(0, 0, 0, 0.1);
    border-radius: 10px;
}
.mega_menu .img_get{
  display: none;
}
.img_get img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.img_get.active{
    display: flex;
}
.sub_menu li{
    font-weight: 400 !important;
}
.main-menu ul li{
    cursor: pointer;
}
.main-menu ul li:hover .mega_menu{
    visibility: visible;
    opacity: 1;        
}
.down-svg svg{
    width: 21px;
    height: 12px;
    padding-left: 5px;
    fill:#fff;
    display: inline-block;
}
.sub_menu5 .img_get{
    width: 100%;
    max-width: 1020px;
    padding: 0;
}
.header h1{
    font-size: 35px;
}
.logo{
    flex: 0 0 50%;
}
.main-menu{
    width: 100%;
    flex: 0 0 50%;
    display: flex;
    justify-content: flex-end;
}
.main-menu ul{
    display: flex;    
    list-style: none;
}
.main-menu ul li{
    font-size: 1rem;
    padding: 0px 20px;
    font-weight: 700;
    display: flex;
    justify-content: revert;
    align-items: inherit;    
}

.parallex-banner{
    width: 100%;
    min-height: 100vh;
    background-image: url(assets/background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    padding: 50px 10%;
    height:100%;
}
@media (max-width: 768px){
    .parallex-banner{
    -moz-background-size: auto;
    -webkit-background-size: auto;
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
   }
}
.banner_wrp h1 {
    font-size: 3.7rem;
    color:#d45500;
}
.banner_wrp h1 .strong_class {
    color: #042023;
}
.btn_shop{
    padding: 15px 14px;
    background: #042023;
    color: #fff;
    border-radius: 0.3rem;
    font-size: 14px;
    border:none;
    font-weight: 800;
    margin-top:30px;
    cursor: pointer;
}
.grid_main{
 flex: 0 0 33.33%;
 padding: 20px;
}
.grid_wrp{
    padding: 0px 10%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 20px;
}
.img_wrp img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.img_wrp{    
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
}
.box_wrp{
    box-shadow: 1px 4px 4px rgb(0, 0, 0, 0.1);
    border-radius: 44px 4px 4px 4px;
    margin: 10px;
}
.wrp_top h2{
    text-align: center;
    font-size: 30px;
    color: #042023;
    font-weight: 700;
}
.wrp_top{
    padding-top: 80px;
}
.wrp_title p{
    text-align: center;
    font-size: 15px;
    line-height: 2;
    color: #d45500;
    font-weight: 700;
    text-decoration: underline;
}
/* About */
.about-us img{
    width: 80%;
    border-radius: 10px;
    object-fit: contain;
}
.about-us {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: white;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 20px 4px 4px rgb(0, 0, 0, 0.1);
    padding-bottom: 50px;
}
.about_content p{
    text-decoration: none;
}
.flex-half{
    flex: 0 0 50%;
}
.About_img{
    flex: 0 0 40%;
}
.wpr_content{
    flex: 0 0 60%;
}
.about_content p,.about_content span,.about_content h2{
    text-align: left;
}
.about_content h2{
padding-bottom: 10px;
}
.about_content .wpr_content{
    line-height: 1.5;
    font-size: 14px;
    margin: 0.5rem 0 1.4rem;
    color: black;
    font-weight:500;
}
.about_us .grid_wrp{
    padding: 0 !important;
}
.flex_wrp{
    display: flex;
    justify-content: center;
    align-items: center;
}
.brand_logo{
    flex: 0 0 20%;
    padding: 25px;
}
/* .brand_logo img{
    filter: grayscale(1);
} */
.news-box {
    display: flex;
    align-items: baseline;    
    width: 100%;
    justify-content: center;
}
.news-box button{
    margin-left: 10px;
}
.news-box input {
    width: 400px;
    height: 47px;
    border: none;
    outline: none;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
}
.news-box .btn {
    height: 44px;
    padding: 11px;
    border-radius: 0;
    font-weight: 500;
    text-transform: uppercase;
}
.Newsletter.parallex-banner{
    min-height: auto;
    display: block;
}
.Newsletter .wrp_top{
    padding-top: 0px;
}
/* Footer */
.footer-box h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
}
.footer-box p {
    font-size: 00.938rem;
    margin-bottom: 10px;
}
.social {
    display: flex;
    align-items: center;
}
.social a {
    font-size: 24px;
    margin-right: 10px;
    color: var(--text-color);
}
.bx {
    font-family: boxicons!important;
    font-weight: 400;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
    display: inline-block;
    text-transform: none;
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.bxl-facebook:before {
    content: "\e92f";
}
.bxl-twitter:before {
    content: "\e982";
}
.bxl-instagram:before {
    content: "\e942";
}
.footer-box h3 {
    font-weight: 500;
    margin-bottom: 10px;
}
.contact-info {
    display: flex;    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    border: 5px solid #d45500;
}
.copyright {
    padding: 10px 20px;
    text-align: center;
}
.wrp_footer{
    padding-top:80px;
    background-color: rgba(4, 32, 35);
    color: white;
}
.wrp_footer li,.wrp_footer a,.wrp_footer span{
    color:black;
    padding-bottom: 0;    
}
.address{
  text-align: center;
  margin-top: 20px;
}
.footer-logo .logo h1{
  font-size: 80px;
}

.address h5,.address a,.phone h5,.phone a{
  font-size: 16px;
}
.address,.phone{
  padding-bottom: 10px;
  width: 100%;
    text-align: center;
}
.wrp_footer ul{
    padding-top: 15px;
}
.wrp_footer li{
    padding-top: 10px;
}
.wrp_footer .wrp_flex{
    display: flex;    
    align-items: flex-start;
    width: 100%;
}
.menu_2{
  margin-left: 10px;
}
.menu_1{
    flex: 0 0 40%;    
    background-color: #fff;
    color: black;
    padding: 10px;
}
.menu_2,.menu_3,.menu_4{
    flex: 0 0 60%;    
}
.menu_2 h3,.menu_3 h3{
    margin-bottom: 0;
} 
.menu_1 p{
    font-size: 18px;
    padding: 10px 0;
    width: 80%;
}
.contact-info span{
    line-height: 1.5;
}
.grid_main .box_wrp{
  position: relative;
}

/* Counter */
#counter{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e6e6e7;
  padding: 40px 0px;
  width: 100%;
}
#counter .item{
  background: #fff;
  width: 200px;
  padding: 35px 40px;
  margin: 10px;
  text-align: center;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 38px -8px rgba(0,0,0,0.34);
-moz-box-shadow: 0px 0px 38px -8px rgba(0,0,0,0.34);
box-shadow: 0px 0px 38px -8px rgba(0,0,0,0.34);
} 
#counter .item .count{
  color: #d45500;
  margin-bottom: 5px;
  font-size: 40px;
}
#counter .item h3{
  color: #042023;
  text-transform: capitalize;
}
.Services .wrp_title{
  padding-top: 0;
}
.grid_wrp .box_wrp{
  position: relative;
}
.grid_wrp .box_wrp .wrp_title{
  position: absolute;
  top:0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
  opacity: 0;
  visibility: hidden;
}
.grid_wrp .box_wrp .wrp_title h3{
  position: absolute;
  top:0;  
  padding: 10px;
  opacity: 0;
  visibility: hidden;
  border-radius: 10px;
  color: white;
}
.grid_wrp .box_wrp:hover{
  background-color: rgb(0,0,0,0.5);
  z-index: 9;
}
.grid_wrp .box_wrp:hover .wrp_title{
  opacity: 1;
  visibility: visible;
}
.grid_wrp .box_wrp:hover .wrp_title h3{
  top:50%;
  left: 40%;
  opacity: 1;
  visibility: visible;
  transform: translate(-29%, -52%);
}
.menu_2 iframe {
  width: 100%;
  height: 400px;
  border: 5px solid #d45500 !important;
}
footer .grid_wrp {
  padding: 80px 15%;
}
/* Social Icons */
.StickyBtns {
  position: fixed;
  bottom: 0;
  z-index: 109;
  right: 0;
  width: 100%;
}
.StickyBtns .FillRedBorder {
  height: 6px;
  background-color: rgba(4, 32, 35);
  position: absolute;
  width: 100%;
  bottom: 0;
}
.StickyBtns .MainWrapper {
  position: relative;
  bottom: 6px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 !important;
}
.StickyBtns .MainWrapper .RightWrapper {
  display: inline-block;
  bottom: 0px;
  width: auto;
  right: 0px;
  position: absolute;
  z-index: 2;
}
.StickyBtns .MainWrapper .RightWrapper .FSocialIcon {
  float: right;
  background-color: rgba(4, 32, 35);
  margin: 0 0 0 10px;
  padding: 11px 15px;
  border-bottom: 0;
  border-radius: 20px 20px 0 0;
  width: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-bottom: 11.2px;
}
.StickyBtns .MainWrapper .RightWrapper .FSocialIcon .SocialIcons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 12px;
  margin: 0;
  padding: 0;
}

.FSocialIcon .SocialIcons {
  list-style: none;
}
.FSocialIcon .SocialIcons li {
  background-image: none;
  padding: 0px;
  margin: 0px 0px;
  display: inline-block;
  vertical-align: top;
}
.StickyBtns .MainWrapper .RightWrapper .FSocialIcon .SocialIcons a {
  display: inline-block;
  color: rgba(4, 32, 35);
  background-color: #fff;
  min-width: 30px;
  height: 30px;
  border-radius: 50%;
  line-height: 30px;
  font-size: 20px;
}
.fa-stack-1x, .fa-stack-2x {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
}
.FSocialIcon .SocialIcons li a.fa-stack {
  color: rgba(4, 32, 35);
  font-size: 20px;
  line-height: 40px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}
.StickyBtns .MainWrapper .RightWrapper .FillRedBtn .btn-primary {
  color: #fff !important;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  font-family: "wixmadefordisplay-bold";
  border-radius: 0;
  padding: 14px 30px;
  border: 0;
  border-radius: 20px 20px 0 0;
  border: 2px solid rgba(4, 32, 35) !important;
  background-color: rgba(4, 32, 35) !important;
  padding-bottom: 15px;
}
.StickyBtns .MainWrapper .RightWrapper .FillRedBtn {
  display: inline-grid;
}
.btn-primary {
  color: #fff !important;
  font-size: 14px;
  line-height: 1.2;
  font-family: "wixmadefordisplay-bold";
  border-radius: 35px;
  letter-spacing: .5px;
  text-transform: uppercase;
  background-color: rgba(4, 32, 35) !important;
  border: 2px solid rgba(4, 32, 35) !important;
  text-transform: uppercase;
  padding: 15px 32px;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}
.StickyBtns .MainWrapper .RightWrapper .FSocialIcon .SocialIcons a i {
  color: rgba(4, 32, 35);
}
.FSocialIcon .SocialIcons li a.fa-stack .fa-inverse {
  color: #fff;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}
/* Typpo  */
.css-typing p {    
    white-space: nowrap;
    overflow: hidden;
    z-index:9;
  }
  .collection_shop .css-typing p:nth-child(1),.collection_shop .css-typing p:nth-child(2)  {
    width: 6em;
  }
  .collection_shop .parallex-banner{
    min-height: 50vh;
  }
  .collection_shop .parallex-banner{
    justify-content: center;
  }
  .sub_menu li a{
    color: #042023 !important;
  }
  .css-typing p:nth-child(1) {
    width: 8em;
    -webkit-animation: type 2s steps(40, end);
    animation: type 2s steps(40, end);
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  
  .css-typing p:nth-child(2) {
    width: 8em;
    opacity: 0;
    -webkit-animation: type2 2s steps(40, end);
    animation: type2 2s steps(40, end);
    -webkit-animation-delay: 2s;
    animation-delay: 3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  
  /* .css-typing p:nth-child(3) {
    width: 7.3em;
    opacity: 0;
    -webkit-animation: type3 5s steps(20, end), blink .5s step-end infinite alternate;
    animation: type3 5s steps(20, end), blink .5s step-end infinite alternate;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  } */
  
  @keyframes type {
    0% {
      width: 0;
    }
    99.9% {
      border-right: .15em solid orange;
    }
    100% {
      border: none;
    }
  }
  
  @-webkit-keyframes type {
    0% {
      width: 0;
    }
    99.9% {
      border-right: .15em solid orange;
    }
    100% {
      border: none;
    }
  }
  
  @keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: .15em solid orange;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }
  
  @-webkit-keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: .15em solid orange;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }
  
  @keyframes type3 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-webkit-keyframes type3 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  @-webkit-keyframes blink {
    50% {
      border-color: tranparent;
    }
  }

/* 042023 */
/* 7b3617 */
/** Contact Page Start **/
.contact_us .grid_wrp{
    padding: 0px 10%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 50px;
}
.contact-wrapper{
  overflow: hidden;
  position: relative;
}
.contact-wrapper .heding-title + .row{
  margin-top: 35px;
}
.contact-wrapper .heding-title .title h2 + h6{
  margin-top: 15px;
}
.contact-wrapper .heding-title .title h2{
  font-size: 40px; 
  line-height: 1.1;
  margin-bottom: 10px;
  text-align: center;
}
.contact-wrapper .heding-title .title p{  
  text-align: center;
  color: #d45500;
  font-weight: 500;
}
.contact-wrapper .heding-title .title h6{
  background-color: var(--sc-1);
  display: inline-block;
  padding: 5px 10px;
  font-family: var(--sf-sb);
  font-weight: 400;
}
.contact-wrapper .form-wrap{
  position: relative;
}
.modal-body .FormWrapper .btn-primary,
.contact-wrapper .btn-primary{
    font-size: 13px;
    font-family: var(--sf-r);
    font-weight: 400;
    text-transform: uppercase;
    padding: 15px 37px;
  border-radius: 0;
  letter-spacing: 1px;
}
@media (max-width: 1199.98px){
.contact-wrapper .FormWrapper {
    padding: 0;
}
}
.row>* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);
}
.contact-wrapper .form-wrap {
  position: relative;
}
.row {
  margin-left: 0;
  margin-right: 0;
}
.g-3, .gy-3 {
  --bs-gutter-y: 1rem;
}
.g-3, .gx-3 {
  --bs-gutter-x: 1rem;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
}
.row>* {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: 8px;
  padding-left: 8px;
  margin-top: 16px;
}
@media (min-width: 768px){
.col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
}
}
@media (min-width: 576px){
  .col-sm-6 {
      flex: 0 0 auto;
      width: 50%;
  }
}
.form-control {
  border: 1px solid #d3d3d3;
}
input, select, .form-control, .form-select {
  color: #000;
  font-size: 15px;
  line-height: 1.5;
  font-family: var(--sf-r);
  height: 50px;
  border-radius: 0;
}
.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e);
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
/** Contact Page End **/
/*About Us*/
.about_us.parallex-banner{
  padding: 50px 5%;
}
/* About */
.about-us img{
    width: 80%;
    border-radius: 10px;
    object-fit: contain;
}
.about-us {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: white;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 20px 4px 4px rgb(0, 0, 0, 0.1);
    padding-bottom: 50px;
}
.about_content p{
    text-decoration: none;
}
.flex-half{
    flex: 0 0 50%;
}
.About_img{
    flex: 0 0 40%;
}
.wpr_content{
    flex: 0 0 60%;
}
.about_content p,.about_content span,.about_content h2{
    text-align: left;
}
.about_content h2{
padding-bottom: 10px;
}
.about_content .wpr_content{
    line-height: 1.5;
    font-size: 14px;
    margin: 0.5rem 0 1.4rem;
    color: black;
    font-weight:500;
}
.about_us .grid_wrp{
    padding: 0 !important;
}
.main_about .about-us{
  box-shadow: unset;
}
.is-active-menu{
    overflow:hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;  
}
.active{
  
}
.header .logo img{
  width: 100px;
  height:auto;
}
.main-menu li a{
  color: white;
}
.footer-logo .logo img{
  width: 150px;
  height: auto;
}
.navbar .logo img{
  width: 100%;
    display: flex;
    align-items: baseline;

}
@media (max-width: 425px){
  .Newsletter .news-box input,.Newsletter .news-box .btn_shop{
    width: 100%;
    margin-left: 0;
  }
  .Newsletter .news-box{
    flex-direction: column;
  }
  .address h5, .address a, .phone h5, .phone a{
    font-size: 15px;
  }
  .contact-info .btn_shop{
    margin-top:0;
  }
}
.has_loader{
  width: 100%;
    height: 100%;
    background-color: white;
    z-index: 999;
    position: absolute;
}
.has_loader img{
width: 100%;
    max-width: 200px;
    position: absolute;
    top: 40%;
    left: 45%;
    margin: 0 auto;
    transform: translateX(-25%);
}
@media (max-width: 426px){
  .has_loader img{
    left: 40%;
  }
}
</style>