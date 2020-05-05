// chat window
const $JDMainChat = $('#JDMainChat');

$('#chat').on('click', function () {

    if ($JDMainChat.hasClass('slim') || !$JDMainChat.is(':visible')) {
        $JDMainChat.css('display', 'block');
        $JDMainChat.removeClass('slim');
    };
})

$('#closeButton').not('#toggle').on('click', function () {
    $JDMainChat.hide();
})

$("#toggle").on('click', function () {
    $JDMainChat.toggleClass('slim');
}); 
 
// Open chat - Fale com Concessionário
$("#openJDChatWindow").click(function(){
    $JDMainChat.toggleClass('slim');
});

// Form Validation
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// Close a modal when a new modal opens
const $JDMainModal = $('JDmainmodal');

$('button[data-toggle="modal"]').on('click', function () {

    if ($JDMainModal.hasClass('show') || !$JDMainModal.is(':hidden')) {
        $JDMainModal.css('display', 'none');
        $JDMainModal.removeClass('show');
    };
});


const $JDmessagebutton = $('.opened-message');

$('a[aria-controls="pills-messages"]').on('click', function () {

    if ($JDmessagebutton.hasClass('show')) { 
        $JDmessagebutton.removeClass('show');
    };
});


$('button[href="#pills-message"]').on('click', function () {
      $JDmessagebutton.addClass('show');
});

// slider
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
});
 