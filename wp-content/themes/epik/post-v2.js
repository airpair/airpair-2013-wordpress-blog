jQuery(function($){
    

    // move  into header #image-featured
    var vid = $(".entry-content #featured-video").detach()
    $(".entry-header").prepend(vid)
    var profile = $(".entry-content #profile-box").detach()
    $(".entry-header").prepend(profile)

    // Fixed table of contents on scroll
    setTimeout(function() {
      var tableOfContents = $('#table-of-contents').offset().top - 20;
      $(window).scroll(function(e){
        if (window.scrollY > tableOfContents) {
          $('#table-of-contents').addClass('affix');
        } else {
          $('#table-of-contents').removeClass('affix');
        }
        console.log(window.scrollY);
      });

    }, 2000)

    // Animated anchors
    $("a[href^='#']").click(function(e){
      e.preventDefault();
      $("html,body").stop().animate({
        scrollTop:$(this.hash).offset().top
      },500);
    });



    console.log(vid);



  });