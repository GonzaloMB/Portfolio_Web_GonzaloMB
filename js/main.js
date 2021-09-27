$(".interactive-menu-button a").click(function () {
  $(this).toggleClass("active");
});

var scroll = new SmoothScroll('a[href*="#"]');

$(".more-btn").click(function () {
  $("#hiden-gallery").toggleClass("hide");
  $("#hiden-gallery").toggleClass("open");
  if ($("#hiden-gallery").is(".open")) {
    $(".more-btn-inside").text("Show Less.");
  } else {
    $(".more-btn-inside").text("Show More.");
  }
});

function slickify() {
  $(".blog-slider").slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: "unslick",
      },
    ],
  });
  $(".slick-next").text("");
  $(".slick-next").addClass("icofont-long-arrow-right");
  $(".slick-prev").text("");
  $(".slick-prev").addClass("icofont-long-arrow-left");
}

slickify();
$(window).resize(function () {
  var $windowWidth = $(window).width();
  if ($windowWidth > 991) {
    slickify();
    $("#blog-btn").addClass("hide-me");
  } else if ($windowWidth < 991) {
    $("#blog-btn").removeClass("hide-me");
  }
});

$("#blog-btn").click(function () {
  $(".hiden-blog").toggleClass("hide-blog");
  $(".hiden-blog").toggleClass("open-blog");
  if ($(".hiden-blog").is(".open-blog")) {
    $("#blog-btn").text("Show Less Stories.");
  } else {
    $("#blog-btn").text("Show More Stories.");
  }
});

//Pop-ups
$(document).ready(function () {
  //SHhow pop-Up
  function showPopupRepsolRigel() {
    $(".pop-up-RepsolRigel").addClass("show");
    $(".pop-up-wrap-RepsolRigel").addClass("show");
    $(".myFrameRepsolRigel").attr(
      "src",
      "http://www.youtube.com/embed/P5RY0C4Ka3I"
    );
  };
  function showPopupNaturgyCDS() {
    $(".pop-up-NaturgyCDS").addClass("show");
    $(".pop-up-wrap-NaturgyCDS").addClass("show");
    $(".myFrameNaturgyCDS").attr(
      "src",
      "http://www.youtube.com/embed/0TY6Z3ytgcU"
    );
  };
  function showPopupRepsolADA() {
    $(".pop-up-RepsolADA").addClass("show");
    $(".pop-up-wrap-RepsolADA").addClass("show");
   // $(".myFrameRepsolADA").attr(
   //   "src",
    //  "http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
    //);
  };
  //Close Pop-Up
  $("#closeRepsolRigel").click(function () {
    $(".myFrameRepsolRigel").removeAttr("src");
    $(".pop-up-RepsolRigel").removeClass("show");
    $(".pop-up-wrap-RepsolRigel").removeClass("show");
  });
  $("#closeNaturgyCDS").click(function () {
    $(".myFrameNaturgyCDS").removeAttr("src");
    $(".pop-up-NaturgyCDS").removeClass("show");
    $(".pop-up-wrap-NaturgyCDS").removeClass("show");
  });
  $("#closeRepsolADA").click(function () {
    $(".myFrameRepsolADA").removeAttr("src");
    $(".pop-up-RepsolADA").removeClass("show");
   // $(".pop-up-wrap-RepsolADA").removeClass("show");
  });

  //Click btn show pop-up
  $(".btn-abrir-RepsolRigel").click(showPopupRepsolRigel);
  $(".btn-abrir-NaturgyCDS").click(showPopupNaturgyCDS);
  $(".btn-abrir-RepsolADA").click(showPopupRepsolADA);
});
