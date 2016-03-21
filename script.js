//OPENING DIV ANIMATIONS

$(".progress-bar").hide();
$("#progress-section").hide();
$(".projects-area").hide();

var y;

function scrollHandler (){
    
    //PARALLAX AREA
    var parallaxSpeed = 5;
    var parallaxPos = (y / parallaxSpeed);
    var parallaxPos1 = (y / ( parallaxSpeed * 2 ));
  
    var coordinates = '50% '+ parallaxPos + 'px';
    $(".home-parallax").css({backgroundPosition: coordinates});
  
    var coordinates1 = '40% '+ parallaxPos1 + 'px';
    $(".home-parallax-1").css({backgroundPosition: coordinates1});
  

    //social icons animation
  
    if(y > 5){
      $(".navbar-scroll").css("animation-name", "iconscroll");
      $(".navbar-scroll").find("i").css("animation-name", "iconscrollimg")
    }
  
    //SECTION OPENING TRIGGERS
    if( y > 500){
      $(".projects-area").slideDown(800);
      setTimeout(function(){
          if ($(window).width()>480){
          $("#doneVideo").get(0).play();
        }
      }, 900);
      
    }
    if( y > 1300){
        $(".progress-bar").animate({ "width" : "show"});
      $("#progress-section").slideDown(800);
    }  
}

$('#doneProject').click(function(){
  videoPlayer($('#doneVideo'))
});
$('#blurtProject').click(function(){
  videoPlayer($('#blurtVideo'))
});


function videoPlayer(video){
  $('video').get(0).pause();
  video.get(0).currentTime = 0;
  video.get(0).play();
}


$(window).on("scroll", function(){
  y = window.pageYOffset;
  window.requestAnimationFrame(scrollHandler);
});



function submitMsg(){
    $("#submit-div").append('<span id="success-submit">Success!</span>');
    setTimeout(function(){$('#success-submit').remove()}, 3000);
};