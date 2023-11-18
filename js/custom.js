(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();

    const inputs = document.querySelectorAll('#name, #email, #message');
    send = {}
    inputs.forEach(input => {
	send[input.name] = input.value;
    });
    $.ajax({
	method: 'POST',
	url: 'https://formsubmit.co/f463bc2ea67d6fedabec13de4edeaad6',
	dataType: 'json',
	accepts: 'application/json',
	data: send,
	success: () => console.log('Message Sent'),
	error: (err) => console.log(err)
    });

  inputs.forEach(input => {
    input.value = '';
  });
});
