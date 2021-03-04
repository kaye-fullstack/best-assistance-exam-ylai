AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff
    const swiperBanner = new Swiper('.swiper-banner .swiper-container', {
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //  },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

const _swiperReading = () => {
  var swiperRead = new Swiper('.swiper-reading .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination-reading',
      clickable: true,
    },

    breakpoints: {
      320:{
        slidesPerView: 'auto',
        spaceBetween: 0,
      },

      767:{
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
    
      991: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },

      1199: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
    },
  });
};

$('select').change(function(){
  var value = $(this).val();
  if(value == 'FilterBy'){
      $('#News', '#HealthTips', '#SuccessStories', '#CaseStory').show();
  } 
  $('#News').hide();
  if(value == 'News'){
      $('#News').show();
  } 
  $('#HealthTips').hide();
  if(value == 'HealthTips'){
    $('#HealthTips').show();
  } 
  $('#SuccessStories').hide();
  if(value == 'SuccessStories'){
    $('#SuccessStories').show();
  } 
  $('#CaseStory').hide();
  if(value == 'CaseStory'){
    $('#CaseStory').show();
  } 
})

const elem = $('header');
const scrolled = () => {
   const threshold = $(document).scrollTop() > 50;
   elem.toggleClass('scrolled', threshold);
   };
$(window).on({ scroll: scrolled });

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _swiperReading ();
  };

  return {
    init: init,
  };
})();
