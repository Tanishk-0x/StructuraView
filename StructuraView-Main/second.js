document.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var windowHeight = window.innerHeight;
    var secondVideo = document.querySelector('.second-video');
    

    var percentage = Math.min(scrollY / windowHeight, 1);

    
    
    if (window.innerWidth <= 768){
        secondVideo.style.transform = `translateX(${-percentage * 460}vw)`;
       
     } 
     else{
        secondVideo.style.transform = `translateX(${-percentage * 100}vw)`;
}


});


$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }


