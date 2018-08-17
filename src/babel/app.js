let $ = require('jquery');
let ScrollReveal = require('ScrollReveal');
window.jQuery = window.$ = $;
// global.Tether = require('tether');
// require('bootstrap');
window.sr = ScrollReveal();


/*============================================================
=            Mouse In/Out/Click for project image            =
============================================================*/

$('.sided-wrapper .image-wrapper img').mouseenter((e)=>{
  var link = $(e.target).parent().parent().find('.detail-link');
  link.addClass('active');
});
$('.sided-wrapper .image-wrapper img').mouseout((e)=>{
  var link = $(e.target).parent().parent().find('.detail-link');
  link.removeClass('active');
});
$('.sided-wrapper .image-wrapper').click((e)=>{
  var link = $(e.target).parent().parent().find('.detail-link');
  window.location.href=link.attr('href');
});
/*=====  End of Mouse In/Out/Click for project image  ======*/




/*=================================================
=            Image Download Protection            =
=================================================*/
$('img').mousedown((e)=> {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
});
/*=====  End of Image Download Protection  ======*/


/*===============================
=            Overlay            =
===============================*/
$('#overlay-open-btn').click(() => {
  $('.overlay').addClass('fadein');
});

$('#overlay-close-btn').click(() => {
  $('.overlay').removeClass('fadein');
});
/*=====  End of Overlay  ======*/



/*===============================================
=            Overlay Menu Open/Close            =
===============================================*/

$('#open-menu-btn').click(()=>{
  $('.overlay-menu').css('display','block').css('width','100%');
});

$('#close-menu-btn').click(()=>{
  $('.overlay-menu').css('display','block').css('width','0');
});



/*=====  End of Overlay Menu Open/Close  ======*/


// Scroll
$('a[href^="#"]').click(function(){
 var the_id = $(this).attr("href");

 $('html, body').animate({
   scrollTop:$(the_id).offset().top
 }, 'slow');
 return false;
});

var hideLetters = function (){
 console.log('hideLetters()');
 var $allLettersExceptS = $('#logo').find('g').filter(':not(:first-child)');
 var reversedLetters = $allLettersExceptS.get().reverse();
 var timer = 0;

 $(reversedLetters).each(function(){
   var $currentLetter = $(this);
   setTimeout(function(){
     $currentLetter.animate({'opacity':0}, 300);
   }, timer);

   timer = timer + 20;
 });
};

var showLetters = function(){
 console.log('showLetters()');
 var $allLettersExceptS = $('#logo').find('g').filter(':not(:first-child)');
 console.log($allLettersExceptS);

 var timer = 0;

 $allLettersExceptS.each(function(){
   var $currentLetter = $(this);
   setTimeout(function(){
     $currentLetter.animate({'opacity':1}, 300);
   }, timer);

   timer = timer + 20;
 });
};


$(()=>{
  /*========================================
  =            Scroll Reveal           =
  ========================================*/
  sr.reveal('.detail-img', { reset: false, origin: 'bottom', distance: '50px', scale: 0.97, duration: 300, });
  sr.reveal('.thumbnail .img-inner', { reset: false, origin: 'bottom', distance: '20px', scale: 1.33, duration: 1000, });
  /*=====  End of Scroll Reveal  ======*/


  /*=============================================
  =            Hide Scroll Animation            =
  =============================================*/
  var alreadyScrolled = false;
  $(window).scroll(()=>{
    $(".scroll").css("opacity", 1 - $(window).scrollTop() / 150);
    $('.side-nav').css('opacity', $(window).scrollTop() /70);

    if( $(window).scrollTop() > 0 ){
      if(alreadyScrolled == false){
       alreadyScrolled = true;
       hideLetters();
     }
   } else {
     alreadyScrolled = false;
     showLetters();
   }

 }).scroll();
  /*=====  End of Hide Scroll Animation  ======*/
  $('.thumbnail').click((e)=>{
    var currentThumbnail = $(e.target).parentsUntil('.col').last();
    window.location.href = currentThumbnail.data('href');
  });
  $(window).scrollTop(0);

});

