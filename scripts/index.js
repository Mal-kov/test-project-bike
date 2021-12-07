
// Слайдеры секции road
const swiper = new Swiper(".road__main-slider", {
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".road__swiper-button-prev",
    prevEl: ".road__swiper-button-next",
  },
});
const swiperImgSlider = new Swiper(".road__img-slider", {
  // direction: "vertical",
  slidesPerView: 2,
  spaceBetween: 40,
  // freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiperMobileSlider = new Swiper(".road__mobile-slider", {
  // direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


//  Переключение табов - секция bikes
const tabNavs = document.querySelectorAll(".bikes__nav-tab");

const tabPanes = document.querySelectorAll(".bikes__tab-pane");

for (let i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", (evt) => {
    evt.preventDefault();
    const activeTabAttr = evt.target.getAttribute("data-tab");

    for (let j = 0; j < tabNavs.length; j++) {
      const contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("bikes__nav-tab_active");
        tabPanes[j].classList.add("bikes__tab-pane_active");
      } else {
        tabNavs[j].classList.remove("bikes__nav-tab_active");
        tabPanes[j].classList.remove("bikes__tab-pane_active");
      }
    };
  });
}


// Слайдер табов - секция bikes
const swiperBikesSlider = new Swiper(".bikes__slider", {
  // direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const mobileTabNavs = document.querySelectorAll(".bikes__mobile-nav-tab");

const mobileTabPanes = document.querySelectorAll(".bikes__mobile-tab-pane");

for (let i = 0; i < mobileTabNavs.length; i++) {

  mobileTabNavs[i].addEventListener("click", (evt) => {
    evt.preventDefault();
    const activeTabAttr = evt.target.getAttribute("data-tab");

    for (let j = 0; j < mobileTabNavs.length; j++) {
      const contentAttr = mobileTabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        mobileTabNavs[j].setAttribute('selected');
        mobileTabPanes[j].classList.add("bikes__mobile-tab-pane_active");
      } else {
        mobileTabNavs[j].removeAttribute('selected');
        mobileTabPanes[j].classList.remove("bikes__mobile-tab-pane_active");
      }
    };
  });
}
const swiperBikesMobileSlider = new Swiper(".bikes__mobile-slider", {
  // direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



//footer
const mainTheme = document.querySelector('#page');
const footerBtnTheme = document.querySelector('.footer__btn');
const headerBtnTheme = document.querySelector('.header__btn');
const colorFooter = document.querySelector('.footer');
const switchColorLiteElement = document.getElementsByClassName('page__theme-lite');
const switchColorBoldElement = document.getElementsByClassName('page__theme-bold');
const switchColorActiveTabDesc = document.querySelector('.bikes__nav-tab_active');
const switchColorTabDesc = document.querySelector('.bikes__nav-tab');
const switchColorTabMobile = document.querySelector('.bikes__mobile-nav-tab');
const switchColorShevron = document.getElementsByClassName('road__swiper-button');
const btnHumb = document.querySelector('.header__humb');
const headerMenuMobile = document.querySelector('#headerMenuMobile');
const headerMenuMobileClose = document.querySelector('.header__mobile-close-btn');
const headerSwitcher = document.querySelector('.header__swicher');

function changeTheme() {
  mainTheme.classList.toggle('page__dark-theme');
  colorFooter.classList.toggle('footer__dark-theme');
  switchColorActiveTabDesc.classList.toggle('page__dark-theme_bold');
  switchColorTabDesc.classList.toggle('page__dark-theme_lite');
  changeColor(switchColorShevron, '#434343');
  changeColor(switchColorLiteElement);
  changeColor(switchColorBoldElement);
  switchColorBoldElement.classList.toggle('page__dark-theme_bold');
}

function changeColor(element, prop='page__dark-theme_lite') {
  for (let i = 0; i < element.length; i++) {
    element[i].classList.toggle(prop);
  }
}

function switchToMobileMenu() {
  // console.log('КАРАУЛ');
  headerMenuMobile.classList.add('header__menu-mobile_active');
  headerMenuMobileClose.classList.add('header__mobile-close-btn_active');
  headerSwitcher.classList.add('header__swicher_active');
}

function hideMobileMenu() {
  headerMenuMobile.classList.remove('header__menu-mobile_active');
  headerMenuMobileClose.classList.remove('header__mobile-close-btn_active');
  headerSwitcher.classList.remove('header__swicher_active');
}

headerBtnTheme.addEventListener('click', changeTheme);
footerBtnTheme.addEventListener('click', changeTheme);
btnHumb.addEventListener('click', switchToMobileMenu);
headerMenuMobileClose.addEventListener('click', hideMobileMenu);
