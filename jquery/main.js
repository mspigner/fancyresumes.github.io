// when the user clicks on an item in the nav
$('nav li').on('click', function(){
	// event.preventDefault();
	var matchingDiv = $(this).data('section');
	console.log(matchingDiv);
	if (matchingDiv === "resume_section") {
		 $('html, body').animate({scrollTop: '615px'}, 1200);
        // window.scrollTo(0,615)});
	}
	if (matchingDiv === "video_section"){
		// window.scrollTo(0,1265);
		$('html, body').animate({scrollTop: '1265px'}, 1200);
	}
	if (matchingDiv === "about_section"){
		// window.scrollTo(0,1927);
		$('html, body').animate({scrollTop: '1927px'}, 1200);
	}
});


var navHeight = $('nav').offset().top;
console.log(navHeight);
$(window).on('scroll', function (){
	var scrollHeight = $(window).scrollTop();
	console.log(scrollHeight);
});
	

// $('.logo').on('click', function (){

// });
$('.logo').on('click', function (){
	var scrollFromTop = $(window).scrollTop();
	if (scrollFromTop === 0) {
		location.reload();
	}
	else {
		window.scrollTo(0,0);
	}
});


$(window).on('scroll',function(){
	//if the distance the user has scrolled down the page is more than or equal to >= the distoance from the top to nav
	var scrollHeight = $(window).scrollTop();
	if (scrollHeight >= navHeight) {
		$('nav').addClass('scrolled');
		// Add a class to the nav (position fixed)
	}
	if (scrollHeight <= navHeight) {
		$('nav').removeClass('scrolled');
		console.log(scrollHeight);
// 	// Else
// 		// Remove the class that fixes the nav to the top
	}
});
	// pull the data dash from that list item
	// scroll down to the corresponding section
	// position the window so the top of that window is at the top of the screen.

