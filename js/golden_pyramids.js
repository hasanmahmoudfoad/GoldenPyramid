

$(document).ready(function(){

    // add unique class
    $('section').addClass('unique');

      //scroll to the sections
          
    $(' .navbar li a').click(function(event){
    event.preventDefault();
    $('html , body').animate({
     scrollTop: $('#' + $(this).data("scrolling")).offset().top
        }, 1000);
    
    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
       }); 
        
        
/* tabs */
/* tabs */
/* tabs */
        $('ul.tabs li').click(function(){
            var tab_id = $(this).attr('tab-data');
    
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
    
            $(this).addClass('current');
        $("#"+tab_id).addClass('current');
        });
  
/* tabs */
/* tabs */
/* tabs */
    
        //slider    
    
          $('.select-bar img').on('click' , function(){
            $(this).addClass('selected').siblings().removeClass('selected');
            $('.main-img img').attr('src', $(this).attr('src'));
          });
    
  
      $(".navbar .tog").click(function(){
        $(".navbar ul").toggleClass('show');
        $('body').toggleClass('overflow')
            });
     
  
    
    $(window).scroll(function(){
  
        //Check to see if the window is top if not then display button

      let scrollTop = $(this).scrollTop();
      let bg = $('.fp');
      bg.css('top' , -( scrollTop * -0.5 ) + 'px');
      
       


        if ($(this).scrollTop() > 650) {
            $('#myBtn').fadeIn();
        } else {
            $('#myBtn').fadeOut();
        }
        
     if($(document).scrollTop() > 30){   
        
        $('.navbar').addClass('navbar-oppacity');
         $('.navbar li a').css( {
                    'fontSize': '20px',
                    'color' : '#333',
                'transition-duration' :'0.25s'
    
             });

             $(' .navbar .tog .fa-bars').css({
                    'transition-duration' :'0.5s',
                    'font-size' :'30px',
                    'color' : 'whitesmoke'
                  })
    }else{
          $('.navbar').removeClass('navbar-oppacity');
           $('.navbar li a').css({
                  'fontSize': '18px',
                  'color' : 'whitesmoke',
                  'transition-duration' :'0.5s',

           });
    
           $(' .navbar .tog .fa-bars').css({
            'color' : 'whitesmoke',
            'font-size' :'30px',
              'transition-duration' :'0.5s'

     })
    }
    let windowScrollTop =$(window).scrollTop();
    let fourOffsetTop = $('.four').offset().top;
    let fiveOffsetTop = $('.five').offset().top;
    let ndOffsetTop = $('.nd').offset().top;
    
if (windowScrollTop > fourOffsetTop-200 ){
$('.rev').css({'paddingTop' : '0',
'transition-duration' :'0.8s'
});
}    
    
if (windowScrollTop > fiveOffsetTop-200 ){
$('.st').css({'paddingTop' : '0',
'transition-duration' :'0.8s'
});

}    
if (windowScrollTop > ndOffsetTop-150 ){
$('.nd').css({'paddingTop' : '0',
'transition-duration' :'0.8s'
});

}    

// $('.menuimgs').on('click' , function(){
    

//    var downloadWindow =window.open('','Print-Window');
  
//     downloadWindow.document.write('<html><head><title>Download</title></head><body><img width="100%" src="'+img.src+'"></body></html>');
  
//    });
      



   
 
  $('.unique').each(function(){
            
      
  var uniqueClass = $(this).attr('id');
      
  if($(window).scrollTop() > $(this).offset().top -200) {
             
            $('.navbar li a').removeClass('active');
  
  $('.navbar li a[data-scrolling = "' + uniqueClass + '"]').addClass('active');
      
  }
      });
         
    
    });//scrollEND

    });//ReadyEnd
    



    