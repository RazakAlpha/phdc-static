$(document).ready(function(){
var toggle = false, 
    trigger = $('#nav-menu'),
    target = $('#menu');
trigger.click(function(){
  if(!toggle){
    target.addClass('active');
    toggle = true;
  } else {
    target.removeClass('active');
    toggle = false;
  }
});

                              
});


/*main nav*/
$(document).ready(function(){
      
	  if ($(window).width() < 700)  {   
          
                            $(".togglenav").click(function(){
                                    $(".navigation-panel").slideToggle();
                            });
    
                            $(".triggernavpopup").click(function(){
                                    $(".nav-popup").fadeIn(100);
                            });
  
    
                            $(".trigger-au").click(function(){
                                    $(".subnav-au").fadeIn(300);
                                    $(".subnav-rf").fadeOut(100);
                                    $(".subnav-m").fadeOut(100);
                                    $(".subnav-gti").fadeOut(100);
                            });
    
                            
                            $(".trigger-rf").click(function(){
                                    $(".subnav-au").fadeOut(100);
                                    $(".subnav-rf").fadeIn(300);
                                    $(".subnav-m").fadeOut(100);
                                    $(".subnav-gti").fadeOut(100);
                            });
    
    
                            $(".trigger-m").click(function(){
                                    $(".subnav-au").fadeOut(100);
                                    $(".subnav-rf").fadeOut(100);
                                    $(".subnav-gti").fadeOut(100);
                                    $(".subnav-m").fadeIn(300);
                            });
    
    
                            $(".trigger-gti").click(function(){
                                    $(".subnav-au").fadeOut(100);
                                    $(".subnav-rf").fadeOut(100);
                                    $(".subnav-gti").fadeIn(300);
                                    $(".guide-pane").fadeIn(300);
                                    $(".subnav-m").fadeOut(100);
                            });
    
      }
          
       else {  
           
           
           
                     $(".togglenav").click(function(){
                                    $(".navigation-panel").slideToggle();
                            });
    
                            $(".triggernavpopup").hover(function(){
                                    $(".nav-popup").fadeIn(100);
                            });
  
    
                            $(".trigger-au").hover(function(){
                                    $(".subnav-au").fadeIn(300);
                                    $(".subnav-rf").fadeOut(100);
                                    $(".subnav-m").fadeOut(100);
                                    $(".subnav-gti").fadeOut(100);
                            });
    
                            
                            $(".trigger-rf").hover(function(){
                                    $(".subnav-au").fadeOut(100);
                                    $(".subnav-rf").fadeIn(300);
                                    $(".subnav-m").fadeOut(100);
                                    $(".subnav-gti").fadeOut(100);
                            });
    
    
                            $(".trigger-m").hover(function(){
                                    $(".subnav-au").fadeOut(100);
                                    $(".subnav-rf").fadeOut(100);
                                    $(".subnav-gti").fadeOut(100);
                                    $(".subnav-m").fadeIn(300);
                            });
    
    
                            $(".trigger-gti").click(function(){
                                    $(".subnav-au").fadeOut(100);
                                    $(".subnav-rf").fadeOut(100);
                                    $(".subnav-gti").fadeIn(300);
                                    $(".guide-pane").fadeIn(300);
                                    $(".subnav-m").fadeOut(100);
                            });
    
           
       }
          
          
          
          
          
          
          
          
});




$(document).ready(function(){
    
    
                            $(".LayoutDiv1").hover(function(){
                                    $(".nav-popup").fadeOut(100);
                                    $(".popupteam").slideUp();
                                    $(".popupoperations").slideUp();
                                    $(".popupnews").slideUp();
                                    $(".popupeye").slideUp();
                                    $(".popupdata").slideUp();
                                    $(".subnav-au").fadeOut(100);
                                    $(".subnav-rf").fadeOut(100);
                                    $(".subnav-m").fadeOut(100);
                                    $(".subnav-gti").fadeOut(100);
                                    $(".guide-pane").fadeOut(100);
                            });

    
    
    
    
    
    
     if ($(window).width() < 700)  {   
                             $(".triggercancel-top").click(function(){
                                    $(".nav-popup").fadeOut(100);
                                    $(".popupteam").slideUp();
                                    $(".subnav-au").fadeOut(100);
                                    $(".subnav-rf").fadeOut(100);
                                    $(".subnav-m").fadeOut(100);
                                    $(".subnav-gti").fadeOut(100);
                                    $(".guide-pane").fadeOut(100);
                                    $(".popupteam").slideUp();
                                    $(".popupnews").slideUp();
                                    $(".popupeye").slideUp();
                                    $(".popupdata").slideUp();
                                    $(".popupoperations").slideUp();
                            });
         
           
      }
          
       else {  
       
                            $(".triggercancel-top").hover(function(){
                                    $(".nav-popup").fadeOut(100);
                                    $(".popupteam").slideUp();
                                    $(".subnav-au").fadeOut(100);
                                    $(".subnav-rf").fadeOut(100);
                                    $(".subnav-m").fadeOut(100);
                                    $(".subnav-gti").fadeOut(100);
                                    $(".guide-pane").fadeOut(100);
                                    
                            });

       
       }
                    
    
    
});






$(document).ready(function(){
                           
    
    
      if ($(window).width() < 700)  {   
                             $(".triggercancel").click(function(){
                                    $(".popupteam").slideUp();
                                    $(".popupnews").slideUp();
                                    $(".popupeye").slideUp();
                                    $(".popupdata").slideUp();
                                    $(".popupoperations").slideUp();
                            });
                            
    
                            $(".triggerteam").click(function(){
                                    $(".popupteam").slideDown();
                                    $(".popupoperations").slideUp();
                            });
    
    
                            $(".triggeroperations").click(function(){
                                    $(".popupteam").slideUp();
                                    $(".popupoperations").slideDown();
                            });
    
    
                            $(".triggernews").click(function(){
                                    $(".popupnews").slideDown();
                                    $(".popupeye").slideUp();
                                    $(".popupdata").slideUp();
                            });
    
    
                            $(".triggereye").click(function(){
                                    $(".popupnews").slideUp();
                                    $(".popupeye").slideDown();
                                    $(".popupdata").slideUp();
                            });
    
    
                            $(".triggerdata").click(function(){
                                    $(".popupnews").slideUp();
                                    $(".popupeye").slideUp();
                                    $(".popupdata").slideDown();
                            });
          
          
            }
          
       else {  
       
                      $(".triggercancel").hover(function(){
                                    $(".popupteam").slideUp();
                                    $(".popupnews").slideUp();
                                    $(".popupeye").slideUp();
                                    $(".popupdata").slideUp();
                                    $(".popupoperations").slideUp();
                            });
                            
    
                            $(".triggerteam").hover(function(){
                                    $(".popupteam").slideDown();
                                    $(".popupoperations").slideUp();
                            });
    
    
                            $(".triggeroperations").hover(function(){
                                    $(".popupteam").slideUp();
                                    $(".popupoperations").slideDown();
                            });
    
    
                            $(".triggernews").hover(function(){
                                    $(".popupnews").slideDown();
                                    $(".popupeye").slideUp();
                                    $(".popupdata").slideUp();
                            });
    
    
                            $(".triggereye").hover(function(){
                                    $(".popupnews").slideUp();
                                    $(".popupeye").slideDown();
                                    $(".popupdata").slideUp();
                            });
    
    
                            $(".triggerdata").hover(function(){
                                    $(".popupnews").slideUp();
                                    $(".popupeye").slideUp();
                                    $(".popupdata").slideDown();
                            });
           
           
       }
    
                        
    
 });                           
                            























