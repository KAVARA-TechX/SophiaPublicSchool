$(document).ready(function(){
    $('.form').on('submit', function(event){
      
      console.log("reached")
      $.ajax({
        data:{
          name: $('#name').val(),
          email: $('#email').val(),
          subject: $("#subject").val(),
          message: $("#message").val(),

        },
        type: 'POST',
        url: 'https://sophiaschool-app.herokuapp.com/',
        
        
      }).done(function(data){
          alert(data)
        

  
      })

    
    event.preventDefault();
    })
})