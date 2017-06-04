window.onload = function(){

	// customnav namespace
	var customnav = {};

	// change options here
	customnav.scrollEl = document.querySelector('.nav-inner');
	customnav.scrollIndicatorLeft = document.querySelector('.scrollleft');
	customnav.scrollIndicatorRight = document.querySelector('.scrollright');
	customnav.scrollAmount = 50;

	// toggle scroll indicators
	customnav.hideShowScrollIndicators = function() {	
		// Only if there are more items to scroll into view...
	  if (customnav.scrollEl.scrollWidth > customnav.scrollEl.offsetWidth) {
	    // show scroll indicators
	    customnav.scrollIndicatorLeft.style.display = 'block';
	    customnav.scrollIndicatorRight.style.display = 'block';
	  } else {
	    // hide scroll indicators
	    customnav.scrollIndicatorLeft.style.display = 'none';
	    customnav.scrollIndicatorRight.style.display = 'none';
	  }
	};

	// initialize customnav
	customnav.init = function(){
		customnav.scrollIndicatorLeft.addEventListener('click', function(event){
			event.preventDefault();
			customnav.scrollEl.scrollLeft -= customnav.scrollAmount;
		});
		customnav.scrollIndicatorRight.addEventListener('click', function(event){
			event.preventDefault();
			customnav.scrollEl.scrollLeft += customnav.scrollAmount;
		});
		window.addEventListener('resize', function(){
			customnav.hideShowScrollIndicators();
		});
	  customnav.hideShowScrollIndicators();
	};

	// run
	customnav.init();
};