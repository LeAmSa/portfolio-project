var swiper = new Swiper(".main-swiper", {
    speed: 600,
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//Nav item go to associated slide and change nav item class
const navItems = document.getElementsByTagName('li');

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function() {
    swiper.slideTo(i);
    var current = document.getElementsByClassName("current");
    current[0].className = current[0].className.replace("current", "");
    this.className += "current";
  });
}

// associating nav item with the slide active on scroll or bullet click
swiper.on('slideChange', function () {
  navItems[swiper.activeIndex].click()
});