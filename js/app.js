$( document ).ready(function() {

  var btn_form = $("button");

  $( "#form_contact" ).submit(function( event ) {
    $(this).fadeOut(100);
    event.preventDefault();
    var success_mess = $("<h3 class='success'>Dziękujemy ! </h3><p class='success'>Nasz konsultant skontaktuje się z Państwem najszybciej jak to możliwe </p>");
    $(".right_side").delay(4000).append(success_mess).fadeIn(1000)
  });


});
