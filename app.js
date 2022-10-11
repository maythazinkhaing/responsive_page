var humburger_menu;
var bigWrapper ;

humburger_menu = document.querySelector(".hamburger-menu ");
cross_icon = document.querySelector(".cross-icon ");
bigWrapper = document.querySelector('.bigWrapper');


humburger_menu.addEventListener("click", () =>{ bigWrapper.classList.add("active");
})
cross_icon.addEventListener("click", () =>{ bigWrapper.classList.remove("active");
})