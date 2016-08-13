$(document).ready(function(){

   $( "#datepicker" ).datepicker().datepicker("option", "dateFormat", "yy-mm-dd");
   $('.arrow').focus(function(){
        $('div.consult__field').addClass('rotate__arrow');
   });
   $('.arrow').focusout(function(){
        $('div.consult__field').removeClass('rotate__arrow');
   });

});

