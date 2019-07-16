$( document ).ready(function() {
  $("#ring-img").hide()
  $("#mail-img").hide()

  $("#ring").click(function(){
    $("#ring-img").toggle()
    })
  
  $("#mail").click(function(){
     $("#mail-img").toggle()
      })
});
