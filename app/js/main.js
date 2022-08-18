$(function () {
  $(".rate-star").starRating({
    totalStars: 5,
    initialRating: 5,
    useGradient: false,
    activeColor: "orange",
    starSize: 12,
    readOnly: true,
  });

  $(".product-slider__inner").slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  var mixer = mixitup(".products__inner-box");
});
