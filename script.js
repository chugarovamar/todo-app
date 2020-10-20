$(document).ready(function(){
  
  function AddTask(){
    var Task = $('input').val();
    var Text = $('textarea').val();
       
        if (Task.length !== 0 && Text.length!==0){
          $('.nocomments').hide();
           
          $('.left-section1').append(`
          <div class="left-section">
            <div class="todo__list">
            <div class="todo__list-text ">${Task}</div>
            <button class="button-delete"></button>
            <button class="slide"></button></div>
            <div class="todo__list-comment">${Text}</div> 
            </div>`
            );
          Task = $('input').val('');
           Text = $('textarea').val('');
        }
  
  }
  $('body').on('click','.slide',function(event){
    var currentElement = $(this);
    var currentCard = currentElement.closest ('.left-section');
    var currentDescription = currentCard.find ('.todo__list-comment');
    currentDescription.slideToggle();
   });  
   $('.left-section1').on('click','.slide',function(){
      $(this).toggleClass('slideup');
    });

  

  function DeleteTask (item){
    item.remove();
    let items = $('.left-section');
    console.log (items.length);
    if (items.length ==0) {
     $('.nocomments').show();
  }
  }
  $('.todo__add').click('click',AddTask);
  $('.left-section1').on('click','.button-delete', function(event){
    event.preventDefault();
    var item = $(this).parents('.left-section');

    DeleteTask (item);

  });

 });

