$(document).ready(function () {
  // Enable tooltip and popover
  $("body").tooltip({ selector: "[data-toggle=tooltip]" });
  //$('[data-toggle="popover"]').popover();

  //OWL
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  const sr = ScrollReveal({
    distance: "60px",
    duration: 2800,
    // reset: true,
  });

  sr.reveal(
    `.section-1,
           .section-2,
           .section-3,
           .section-4`,
    {
      origin: "top",
    }
  );

  sr.reveal(`.section-6`, {
    origin: "left",
  });

  sr.reveal(`.section-5`, {
    origin: "right",
  });
});
