const functionsAR7 = {
  headerFunctions: {
    main: () => {
      functionsAR7.headerFunctions.smallScreenFunctions.allFunctions();
    },
    smallScreenFunctions: {
      allFunctions: () => {
        const menuButton = document.getElementsByClassName(
          "menu-button-small-screen-ar7"
        )[0];
        const closeMenuButton = document.getElementsByClassName(
          "close-menu-button-small-screen-ar7"
        )[0];
        menuButton.addEventListener(
          "click",
          functionsAR7.headerFunctions.smallScreenFunctions.openMenuList
        );
        closeMenuButton.addEventListener("click", () => {
          functionsAR7.headerFunctions.smallScreenFunctions.closeMenuList(
            closeMenuButton
          );
        });
      },
      openMenuList: () => {
        const menuButton = document.getElementsByClassName(
          "menu-button-small-screen-ar7"
        )[0];
        const menuList = document.getElementsByClassName(
          "small-screen-menu-list-ar7"
        )[0];
        const closeMenuButton = document.getElementsByClassName(
          "close-menu-button-small-screen-ar7"
        )[0];
        menuList.style.height = menuList.scrollHeight + "px";
        closeMenuButton.classList.remove("hidden");
        menuButton.classList.add("hidden");
      },
      closeMenuList: (closeMenuButton) => {
        const menuButton = document.getElementsByClassName(
          "menu-button-small-screen-ar7"
        )[0];
        const menuList = document.getElementsByClassName(
          "small-screen-menu-list-ar7"
        )[0];
        menuButton.classList.remove("hidden");
        closeMenuButton.classList.add("hidden");
        menuList.style.height = "0px";
      },
    },
  },
  heroSectionFunctions: {
    main: () => {
      functionsAR7.heroSectionFunctions.buttonEffectsFunction(
        "hero-button-ar7-1-lg"
      );
      functionsAR7.heroSectionFunctions.buttonEffectsFunction(
        "hero-button-ar7-1-sm"
      );
    },
    buttonEffectsFunction: (className) => {
      const buttonsAR7 = document.getElementsByClassName(className);
      const arrayOfButtons = Array.from(buttonsAR7);
      window.addEventListener("load", () => {
        let indexOfButton = 0;
        const myFunction = () => {
          setTimeout(() => {
            const button = arrayOfButtons[indexOfButton];
            button.style.transform = "scale(1.4)";
            setTimeout(() => {
              button.style.transform = "";
            }, 250);
            indexOfButton++;
            if (indexOfButton < arrayOfButtons.length) {
              myFunction();
            }
          }, 250);
        };
        setTimeout(() => {
          myFunction();
        }, 500);
      });
    },
  },
  coursesSectionFunctions: {
    main: () => {
      functionsAR7.coursesSectionFunctions.carousel();
    },
    carousel: () => {
      const swiper = new Swiper(".courses-carousel-swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // Set slides per view to 1
        slidesPerView: 1,
        spaceBetween: 20,

        // Enable autoplay
        autoplay: {
          delay: 3000, // Delay between transitions (in milliseconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        },

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".courses-button-next",
          prevEl: ".courses-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        // Responsive breakpoints
        breakpoints: {
          // When the screen width is >= 768px
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
          },
          // You can add more breakpoints if needed
          // 1024: {
          //   slidesPerView: 3,
          // },
        },
      });
    },
    carouselCoursesSection: () => {},
  },
  reviewSectionFunctions: {
    main: () => {
      functionsAR7.reviewSectionFunctions.carousel();
    },
    carousel: () => {
      const swiper = new Swiper(".review-carousel-swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // Set slides per view to 1
        slidesPerView: 1,
        spaceBetween: 20,

        // Enable autoplay
        autoplay: {
          delay: 3000, // Delay between transitions (in milliseconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        },

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".review-button-next",
          prevEl: ".review-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        // Responsive breakpoints
        breakpoints: {
          // When the screen width is >= 768px
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
          },
          // You can add more breakpoints if needed
          // 1024: {
          //   slidesPerView: 3,
          // },
        },
      });
    },
  },
};

const runAR7 = () => {
  try {
    functionsAR7.headerFunctions.main();
  } catch (error) {
    console.log(error);
  }
  try {
    functionsAR7.heroSectionFunctions.main();
  } catch (error) {
    console.log(error);
  }
  try {
    functionsAR7.coursesSectionFunctions.main();
  } catch (error) {
    console.log(error);
  }
  try {
    functionsAR7.reviewSectionFunctions.main();
  } catch (error) {
    console.log(error);
  }
};

runAR7();
