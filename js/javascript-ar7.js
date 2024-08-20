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
};
functionsAR7.headerFunctions.main();
