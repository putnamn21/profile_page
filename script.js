
// initial page load variables
  $(".progress-bar").hide();
  $("#progress-section").hide();
  $(".projects-area").hide();

  var y = 0;
  var windowHeight = $(window).height();

  //keeps the blocks of code below from executing continually once the animation is triggered for the first time
  var triggerOne = false;
  var triggerTwo = false;

//scroll events
  $(window).on("scroll", function(){
    y = window.pageYOffset;
    scrollHandler();

  });

  function scrollHandler (){
  
      var parallaxPos = -y/4;
      var bottom_of_window = y + windowHeight;
      var coordinates = parallaxPos/4+'px, '+parallaxPos+"px";
  
    //PARALLAX AREA
      $(".home-parallax").css({
          "transform": "translate("+coordinates+")",
          "-ms-transform": "translate("+coordinates+")",
          "-webkit-transform": "translate("+coordinates+")"
      });

    //SOCIAL ICONS ANIMATION
      if(y > 5){
        $(".navbar-scroll").css("animation-name", "iconscroll");
        $(".navbar-scroll").find("i").css("animation-name", "iconscrollimg")
      }
    
    //SECTION OPENING TRIGGERS
    if(!triggerOne){
      if($(".projects-area").parents('.row').offset().top + 300 < bottom_of_window){
        $(".projects-area").slideDown(800);
        setTimeout(function(){
            if ($(window).width()>480){
            $("#doneVideo").get(0).play();
          }
        }, 900);
        triggerOne = true;
      }
    };
    if(!triggerTwo){
      if($("#progress-section").parents('.row').offset().top + 300 < bottom_of_window){
          $(".progress-bar").animate({ "width" : "show"});
        $("#progress-section").slideDown(800);
        triggerTwo = true;
      }
    };
  };// end scroll handler

// video player functions
  $('#doneProject').click(function(){
    videoPlayer($('#doneVideo'))
  });
  $('#blurtProject').click(function(){
    videoPlayer($('#blurtVideo'))
  });
  $('#photoProject').click(function(){
    videoPlayer($('#photoVideo'))
  });


  function videoPlayer(video){
    //pauses all videos
      $('video').get(0).pause();
    //restarts the video if passed into function
      if(video){
        video.get(0).currentTime = 0;
        video.get(0).play();
      }  
  }

// iframe refresh for mailchimp page
  $('#mailChimp').click(function(){
    console.log("whatup homie");
    videoPlayer();
    $('.iphoneIframe iframe').attr('src', $('.iphoneIframe iframe').attr('src'));

  });

