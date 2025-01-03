import { gsap } from "gsap";

var carousel = (function () {
  var activeID = 0,
    itemW = 1000,
    carousel_count = $(".carousel-item").length,
    $carouselItems = $(".carousel-items"),
    $carouselItem = $(".carousel-item"),
    $arrowPrev = $(".item_prev"),
    $arrowNext = $(".item_next"),
    $itemArrow = $(".item_arrow"),
    $navDot,
    $navDots = $(".nav_dots"),
    swipeDir,
    slideSpeed = 0.45,
    slideMeth = Power2.EaseInOut;

  const Power2 = gsap.Power2;

  function init() {
    $carouselItems.css({
      width: itemW * carousel_count + "px",
    });
    $navDots.css({
      width: 25 * carousel_count + "px",
    });
    $itemArrow.css({
      opacity: 0.8,
    });
    setupDraggable();
    setupDots();
    navigateSlide();
  }
  init();

  function setupDraggable() {
    Draggable.create($carouselItems, {
      type: "x",
      edgeResistance: 0.9,
      dragResistance: 0.0,
      bounds: ".carousel-container",
      onDrag: updateDirections,
      onThrowUpdate: updateDirections,
      throwProps: true,
      onDragStart: function () {
        // Removed the unused 'evt' parameter
      },
      onDragEnd: function () {
        if (swipeDir == "left") {
          activeID++;
        } else if (swipeDir == "right") {
          activeID--;
        }
        navigateSlide();
      },
    });
  }

  function setupDots() {
    for (var i = 0; i < carousel_count; i++) {
      $navDots.append('<div class="nav_dot" id="dot_' + i + '"></div>');
    }
    $navDot = $(".nav_dot");
  }

  function navigateSlide() {
    if (activeID >= carousel_count - 1) activeID = carousel_count - 1;
    if (activeID <= 0) activeID = 0;
    var xTarget = activeID * itemW * -1;
    TweenMax.to($carouselItems, slideSpeed, {
      x: xTarget,
      ease: slideMeth,
      onComplete: slideDone,
    });
  }

  function slideDone() {
    $navDot.css({
      backgroundColor: "#e6e6e6",
    });

    TweenMax.to($navDot, 0.35, {
      scale: 1,
      color: 0x1e1e1e,
    });
    TweenMax.to($("#dot_" + activeID), 0.35, {
      scale: 1.5,
      backgroundColor: "#076261",
      color: 0x1e1e1e,
    });

    if (activeID == 0) {
      $arrowPrev.fadeOut();
    } else {
      $arrowPrev.fadeIn();
    }
    if (activeID + 1 == carousel_count) {
      $arrowNext.fadeOut();
    } else {
      $arrowNext.fadeIn();
    }
  }

  function updateDirections() {
    swipeDir = this.getDirection("start");
  }

  $itemArrow.on("click", function () {
    if (Modernizr.touch) return;
    if ($(this).hasClass("item_next")) {
      activeID++;
    } else {
      activeID--;
    }
    navigateSlide();
  });

  $itemArrow.on("touchstart", function () {
    if ($(this).hasClass("item_next")) {
      activeID++;
    } else {
      activeID--;
    }
    navigateSlide();
  });

  $navDot.hover(
    function () {
      TweenMax.to($(this), 0.35, {
        scale: 1.5,
      });
    },
    function () {
      if ($(this).attr("id").split("_")[1] == activeID) return;
      TweenMax.to($(this), 0.35, {
        scale: 1.0,
      });
    }
  );

  $navDot.click(function () {
    var dotID = $(this).attr("id").split("_")[1];
    activeID = dotID;
    navigateSlide();
  });

  $carouselItem.mousedown(function () {
    activeID = $(this).attr("id").split("_")[1];
    $(this).removeClass("grab");
    $(this).addClass("grabbing");
  });

  $carouselItem.mouseenter(function () {
    $(this).removeClass("grabbing");
    $(this).addClass("grab");
  });

  $carouselItem.mouseup(function () {
    $(this).removeClass("grabbing");
    $(this).addClass("grab");
  });

  return {
    init: init
  };
})();

export default carousel;