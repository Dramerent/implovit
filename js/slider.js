const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    
  
    // Navigation arrows
    navigation: {
    
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  });

  var products__slider = new Swiper(".products__slider", {
    spaceBetween: 10,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    watchOverflow:true,
    breakpoints: {
      1280: {
        slidesPerView: 4,
        
     
      },
      360:{
        slidesPerView: "auto",
        pagination: {
          el: "none",
        },
      }
     
      
     
    
    }
   
    
  });
  var slide__content = new Swiper(".products-slider__slider", {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    navigation: {
     
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    freeMode: true,
    
    freeModeMomentum: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    allowTouchMove:false,
    
  });