// Animate Smooth Scroll
$('#view-work').on('click', function() {
    const images = $('#contact').position().top;
  
    $('html, body').animate(
      {
        scrollTop: images
      },
      900
    );
  });