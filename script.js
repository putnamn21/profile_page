//OPENING DIV ANIMATIONS

$(".progress-bar").hide();
$("#progress-section").hide();
$(".projects-area").hide();

var y;

function scrollHandler (){
  
    var parallaxPos = -y/4;
    //PARALLAX AREA
  
  
     
      var coordinates = parallaxPos/4+'px, '+parallaxPos+"px";
      $(".home-parallax").css({
          "transform": "translate("+coordinates+")",
          "-ms-transform": "translate("+coordinates+")",
          "-webkit-transform": "translate("+coordinates+")"
      });

  
    
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
  scrollHandler();
  
//  window.requestAnimationFrame(function(){
//    console.log(y);
//   scrollHandler();
//  });
});



function submitMsg(){
    $("#submit-div").append('<span id="success-submit">Success!</span>');
    setTimeout(function(){$('#success-submit').remove()}, 3000);
};