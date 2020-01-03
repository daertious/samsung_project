$(function() {
	TweenMax.from(".navigation", 1, {y:-100, opacity:1}); 
	TweenMax.from(".header_info", 1, {y:100, opacity:1}); 
	TweenMax.from(".mobile", 3, {x:2000, opacity:1});        
	TweenMax.from(".header_content_title", 3, {x:-2000, opacity:0}); 
});
// NAV
$(function(){

    $('.menu').on('click', function (e) {
        e.preventDefault;
		$('.form-content').toggleClass('form-content_delete');
		TweenMax.from(".form-content", 1, {y:-1000, opacity:1});
	});
});
// END NAV

$(function(){

 
	var selectElem = document.getElementById('model')
	var pElem = document.getElementById('value')

	// When a new <option> is selected
	selectElem.addEventListener('change', function() {
  	var index = selectElem.selectedIndex;
	  // Add that data to the <p>
	if (index == 1){
		pElem.innerHTML = '600$';	
	}else if(index == 2) {
		pElem.innerHTML = '800$';
	}else if(index == 3) {
		pElem.innerHTML = '1000$';
	}else if(index == 4) {
		pElem.innerHTML = '1200$';
	}else if(index == 5) {
		pElem.innerHTML = '1300$';
	}else if(index == 6) {
		pElem.innerHTML = '1500$';
	}else {
		pElem.innerHTML = '0$';
	}
	})
});