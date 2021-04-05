$(function () {
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
    $('.filter-btn, .filter__inner').toggleClass('active');
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
    }
  })

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

  $(document).on('click', '.filter__btn', function () {
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