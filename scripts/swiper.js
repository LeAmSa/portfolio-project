var swiper = new Swiper(".main-swiper", {
    speed: 700,
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
const mainCt = document.querySelector('.main-ct');

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function() {
    swiper.slideTo(i);
    var current = document.getElementsByClassName("current");
    current[0].className = current[0].className.replace("current", "");
    this.className += "current";
  });
}

// associating nav item with the slide active on scroll or bullet click and changing background gradients
swiper.on('slideChange', function () {
  navItems[swiper.activeIndex].click();

  switch (swiper.activeIndex) {
    case 0:
      mainCt.classList.remove('slide2', 'slide3', 'slide4', 'slide5');
      break;
  
    case 1:
      mainCt.classList.remove('slide3', 'slide4', 'slide5');
      mainCt.classList.add("slide2");
      break;
      
    case 2:
      mainCt.classList.remove('slide2', 'slide4', 'slide5');
      mainCt.classList.add("slide3");
      break;

    case 3:
      mainCt.classList.remove('slide2', 'slide3', 'slide5');
      mainCt.classList.add("slide4");
      break;

    case 4:
      mainCt.classList.remove('slide2', 'slide3', 'slide4');
      mainCt.classList.add("slide5");
      break;

    default:
      break;
  }
});