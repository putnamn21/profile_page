
//contact modal

function modalToggleOpen()
{
document.getElementById("contact-modal-whole").style.display = "initial";
document.getElementsById("contact-modal").className = "contact-modal col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12";
}
function modalToggleClose()
{
document.getElementById("contact-modal-whole").style.display = "none"; 
document.getElementsById("contact-modal").className = "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12";
}


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
     $(".progress-bar").animate({ "width" : "show"});
      $("#progress-section").slideDown(800);
    }
    if( y > 1300){
        $(".projects-area").slideDown(1000);
    }  
}



$(window).on("scroll", function(){
  y = window.pageYOffset;
  window.requestAnimationFrame(scrollHandler);
});



function submitMsg(){
    $("#submit-div").append('<span id="success-submit">Success!</span>');
    setTimeout(function(){$('#success-submit').remove()}, 3000);
};