$(function() {

   $(document).ready(function(){
      $('.hdr__slider').slick({
         dots: true,
         infinite: false,
         arrows:true,
         autoplay:true,
         speed:800,
         autoplaySpeed: 5000,
         prevArrow: '<div class="slick-btn"><div class="i-prev"></div></div>',
         prevArrow: '<div class="slick-btn"><div class="i-prev"></div></div>'
      });

       $('.company__carousel').slick({
         dots: true,
         infinite: false,
         arrows:false,
         autoplay:true,
         speed:600,
         autoplaySpeed: 3000,
         dotsClass: "slick-dots slider__dots"

      });

    });


   $(document).ready(function(){
      var show = true;
     $(window).on("scroll", function(){

           if(!show) return false;

           var w_top = $(window).scrollTop();
           var e_top = $("#performance").offset().top;


           console.log(w_top + " " + e_top);

           if(w_top >= e_top){
            $(".number").spincrement({
               thousandSeparator: "",
               duration: 4500
            });

            show = false;

           }
      });
 });
  

$(document).ready(function(){
      $('.specialist__carousel').slick({
         dots: false,
         infinite: false,
         arrows:true,
         autoplay:true,
         slidesToShow: 3,
         speed:800,
         autoplaySpeed: 5000
      });

    });


});
 