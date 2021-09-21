$(function () {
  $('.product-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('active');
    $(this).addClass('active')

    $('.product-tabs__text').removeClass('active');
    $($(this).attr('href')).addClass('active');
  });

  $('.product-details__list').slick({
    asNavFor: '.product-details__items',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    vertical: true,

    responsive: [
      {
        breakpoint: 481,
        settings: {
          vertical: false
        }
      }
    ]
  })
  $('.product-details__items').slick({
    asNavFor: '.product-details__list',
    draggable: false,
    arrows: false,
    fade: true
  })

  $('.product-details__input').styler();

  $('.product__filter-btn').on('click', function () {
    $('.product__filter-btn').removeClass('product__filter-btn--active');
    $(this).addClass('product__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product__item').addClass('product__item--list')
  })

  $('.button-grid').on('click', function () {
    $('.product__item').removeClass('product__item--list')
  })

  $('.button-list').on('click', function () {
    $('.product__list').addClass('active')
  })

  $('.button-grid').on('click', function () {
    $('.product__list').removeClass('active')
  })

  $('.filter-btn').on('click', function () {
    $('.filter-btn, .filter__inner, .blog__filter').toggleClass('active');
    $('body').toggleClass('lock2');
  })

  $(".menu__item a").on("click", function (e) {
    e.preventDefault();

    const id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 700);
  });

  $('.slider__list').slick({
    dots: true,
    arrows: false,
    autoplay: true
  });

  $('.filter__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $(".filter__from").text(data.from);
      $(".filter__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter__from").text(data.from);
      $(".filter__to").text(data.to);
    },
    onFinish: function (data) {
      console.log(data.to);
    },
  })

  $('.product-slide__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slide-arrow"><use xlink:href="images/icon/sprite.svg#left"></use xlink:href=></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slide-arrow"><use xlink:href="images/icon/sprite.svg#right"></use xlink:href=></svg></button>',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.partners').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.menu__burger').on('click', function () {
    $('.menu__burger, .menu__list, .menu-nav').toggleClass('active');
    $('body').toggleClass('lock1');
  })

  $(document).on('click', '.filter-category__btn', function () {
    $(this).parent().siblings().children().removeClass('active');
    $(this).addClass('active');
  })

  const mixin1 = document.querySelector(".goods__items");
  const mixin2 = document.querySelector(".desing__list");

  if (mixin1) {
    mixitup('.goods__items', {
      selectors: {
        control: '.filter1'
      }
    })
  }

  if (mixin2) {
    mixitup('.desing__list', {
      selectors: {
        control: '.filter2'
      }
    })
  }

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#A0A0A0",
    ratedFill: "#FFCC00",
    readOnly: true
  });

  $(".star2").rateYo({
    starWidth: "20px",
    normalFill: "#A0A0A0",
    ratedFill: "#FFCC00",
    readOnly: true
  });

});

window.addEventListener("scroll", function () {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("sticky", window.scrollY > 50);
})

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.76176072457447, lng: -95.36769250265 },
    zoom: 9,
  });
}

let set = new Set([9, 15]);
set.add(44);
console.log(set);
let arr = [...set];
console.log(arr); // [9, 15, 44]