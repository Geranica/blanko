"use strict";

document.addEventListener ("DOMContentLoaded", () => {
   const tabsContent = document.querySelectorAll (".quotes__citations-block");
   const tabs = document.querySelectorAll (".quotes__tab");
   const tabsParent = document.querySelector (".quotes__tabs-block");

   function hideTabsContent () {
      tabsContent.forEach (item => {
         item.classList.add ("hide");
         item.classList.remove  ("show", "animate__animated", "animate__fadeInLeft");
      });
      tabs.forEach (item => {
         item.classList.remove ("quotes__tab_active");
      });
   }
   

   function showTabsContent (i = 0) {
      tabsContent[i].classList.add ("show", "animate__animated", "animate__fadeInLeft");
      tabsContent[i].classList.remove("hide");
      tabs[i].classList.add ("quotes__tab_active");
   }

   tabsParent.addEventListener ("click", (event) => {
      const target = event.target;
      if (target && target.matches (".quotes__tab")) {
         hideTabsContent ();
         showTabsContent (Array.from (tabs).indexOf (target));
      }
   });
   hideTabsContent();
   showTabsContent();


   //hamburger

   const hamburger = document.querySelector ('.header__hamburger');
   const navMenu = document.querySelector ('.header__right-part');

   hamburger.addEventListener ("click", () => {
      hamburger.classList.toggle ('header__hamburger_active');
      navMenu.classList.toggle ('header__right-part_active');
   });

   navMenu.addEventListener ("click", (event) => {
      if (event.target && (event.target.classList.contains ('header__link') || event.target.classList.contains ('header__mail-link')|| event.target.classList.contains ('header__button'))) {
         hamburger.classList.remove ("header__hamburger_active");
         navMenu.classList.remove ('header__right-part_active');
      }
   });

});

