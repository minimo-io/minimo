function animateCss(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
function hide_secondary_menu(){
  $("#secondary-hide-menu").addClass("hidden");
  $("#contact").hide(0, function(){
    $("#menu").fadeIn(200);
  });
}
function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}


$(function(){
  // On load animate
  setTimeout(function(){
    $("#hamburger-show-menu").removeClass("animated heartBeat");
    if (hasTouch() == false) {
      $("#hamburger-show-menu").addClass("zoom");
    }else{
      $("#hamburger-show-menu").click(function(){
        animateCss("#hamburger-show-menu", "heartBeat");
      });
    }
  }, 800);



  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
  });
  $("#hamburger-show-menu").click(function(){
    var buddy = $("body");
    if (buddy.hasClass("menu-open")){
      buddy.removeClass("menu-open");
      $("#hamburger-show-menu").css("position", "absolute");
    }else{
      $(".hide-on-menu").css("display", "none");
      $("#hamburger-show-menu").css("position", "fixed");
      buddy.addClass("menu-open");
    }

    $("#menu").show();$("#contact").hide();

    $("#fullscreen-menu").toggle(200, "swing", function(){
      if (! buddy.hasClass("menu-open"))  $(".hide-on-menu").css("display", "block");
    });
  });
  // contact menu trigger
  $(".contact-trigger").click(function(){
    $("#menu").hide(0, function(){
       $("#contact").show();
    });

  });

  $("#contact-cancel").click(function(){
    hide_secondary_menu();
  });

  $('.back-to-the-future').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });

  $( "#frm-contact" ).on( "submit", function( event ) {
    event.preventDefault();
    $("#contact-submit").html("Enviando...");
    $("#contact-submit, #contact-cancel").attr("disabled", "disabled");

    $.getJSON('./xhr.php', $( this ).serialize() , function(data) {
      $("#frm-contact").remove();
      $("#frm-contact-title").html("Gracias por ponerte en contacto.<br>Te responderemos a la brevedad.");
      //console.log(data);
    });
  });

  // WINDOW EVENTS
  $(window).scroll(function() {
      var height = $(window).scrollTop();

      if(height  > 200) {
        // $(".freccia").css("visibility","hidden");
        $('.langs').hide();
        $('.back-to-the-future').fadeIn(100);

      }else{

        $('.back-to-the-future').fadeOut(100, function(){
          $('.langs').show();
        });


      }
      if(height  < 300) {
        //$('.social').css("display", "flex");
        $('.social').removeClass("out");
      }
      if(height  > 400) {
        $('.social').addClass("out");

      }
  });

  if(window.location.hash == "#contact"){
    $("#hamburger-show-menu").trigger( "click");
    $(".contact-trigger").trigger( "click");
  }

});


$(window).on("blur focus", function(e) {
    var prevType = $(this).data("prevType");

    if (prevType != e.type) {   //  reduce double fire issues
        switch (e.type) {
            case "blur":
                break;
            case "focus":
                // do work
                animateCss("#hamburger-show-menu", "heartBeat");

                break;
        }
    }

    $(this).data("prevType", e.type);
});
