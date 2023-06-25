function chapter(number) {
  const chapters = document.querySelectorAll("h3");
  const heading = chapters[number - 1];
  let adding = 0;
  if (window.pageYOffset >= 144) {
    adding = 108;
  }
  if (number == 1)
    window.scrollTo({
      top: heading.offsetTop - adding,
      left: 0,
      behavior: "smooth",
    });
  else if (number == 2)
    window.scrollTo({
      top: heading.offsetTop - adding,
      left: 0,
      behavior: "smooth",
    });
  else if (number == 3)
    window.scrollTo({
      top: heading.offsetTop - adding,
      left: 0,
      behavior: "smooth",
    });
  else if (number == 4)
    window.scrollTo({
      top: heading.offsetTop - adding,
      left: 0,
      behavior: "smooth",
    });
  else if (number == 5)
    window.scrollTo({
      top: heading.offsetTop - adding,
      left: 0,
      behavior: "smooth",
    });
}
window.addEventListener("DOMContentLoaded", () => {
  menu = document.querySelectorAll("button");
  for (let i = 0; i < menu.length; i++) {
    menu[i].onclick = () => {
      chapter(i + 1);
    };
  }
  console.log(menu);
});
window.onscroll = function () {
  stickMenu();
};
function stickMenu() {
  const navbar = document.querySelector("nav");
  if (window.pageYOffset >= 144) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
