// chat window
const $JDMainChat = $('#JDMainChat');

$('#chat').on('click', function () {

    if ($JDMainChat.hasClass('slim') || !$JDMainChat.is(':visible')) {
        $JDMainChat.css('display', 'block');
        $JDMainChat.removeClass('slim');
    };
})

$('#closeButton').not('#toggle').on('click', function () {
    $JDMainChat.toggleClass('slim')
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

$('button[data-toggle="modal"]').on('click', function () {

  if ($JDMainModal.hasClass('show') || !$JDMainModal.is(':hidden')) {
      $JDMainModal.css('display', 'none');
      $JDMainModal.removeClass('show');
  };
});

// Visualizar mensagem na pagina de chat leads
const $JDmessagebutton = $('.opened-message');

$('a[aria-controls="pills-messages"]').on('click', function () {

    if ($JDmessagebutton.hasClass('show')) { 
        $JDmessagebutton.removeClass('show');
    };
});

$('button[href="#pills-message"]').on('click', function () {
      $JDmessagebutton.addClass('show');
});

// menu mobile 
const $JDMobileNav = $('.jd-main-mbl-nav');
const $Body = $('body');
const $Overlay = $('.overlay-mobile-menu');


$('.menu-mbl-btn').on('click', function () { 
      $JDMobileNav.addClass('show'); 
      $Body .addClass('menu-opened');
}); 

$('.back-btn').on('click', function () { 
  $JDMobileNav.removeClass('show'); 
  $Body .removeClass('menu-opened');
});

$('.nav-link[data-toggle="modal"]').on('click', function () {

  if ($JDMobileNav.hasClass('show')) {
      $JDMobileNav.removeClass('show');
  };
  if ($Body.hasClass('menu-opened')) {
      $Body.removeClass('menu-opened');
  };

});

$Overlay.on('click', function () {

  if ($JDMobileNav.hasClass('show')) {
      $JDMobileNav.removeClass('show');
  };
  if ($Body.hasClass('menu-opened')) {
      $Body.removeClass('menu-opened');
  };

});

$("#openJDChatWindowMbl").click(function(){
  $("#JDMainChat").removeClass("slim");
  if ($JDMobileNav.hasClass('show')) {
      $JDMobileNav.removeClass('show');
  };
  if ($Body.hasClass('menu-opened')) {
      $Body.removeClass('menu-opened');
  };
});
 