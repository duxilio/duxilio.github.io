(function(){

	'use strict';
	
	var slider = {
		
		init: function(){
			this._els = {
				slider: document.getElementsByClassName('slider'),
				navItems: document.getElementsByClassName('slider__nav__item'),
				slides: document.getElementsByClassName('slider__slide')
			};

			this._switchingSlides = false;
			this._currSlideIdx = 0;
			
			this._bindEvents();
		},

		_bindEvents: function(){
			var self = this;

			[].forEach.call(this._els.navItems, function(el){
				el.addEventListener('click', self._onNavClick.bind(self), false);
			});

			document.addEventListener('keyup', function(e){
				switch(e.keyCode){
					case 39: //right
						self._toNextSlide();
						break;
					case 37: //left
						self._toPrevSlide();
						break;
				}
			}, false);
		},

		_onNavClick: function(e){
			e.preventDefault();
			
			var target = e.target,
				toNext = B(target).hasClass('slider__nav__item--right');

			if(toNext){
				this._toNextSlide();
			} else {
				this._toPrevSlide();
			}
		},

		_toNextSlide: function(){
			var toSlideIdx = this._currSlideIdx+1,
				slides = this._els.slides;
			if(toSlideIdx > slides.length-1) toSlideIdx = 0;
			this._makeSlideVisible(toSlideIdx);
		},

		_toPrevSlide: function(){
			var toSlideIdx = this._currSlideIdx-1,
				slides = this._els.slides;
			if(toSlideIdx < 0) toSlideIdx = slides.length-1;
			this._makeSlideVisible(toSlideIdx);
		},

		_makeSlideVisible: function(slideIdx){
			if(this._switchingSlides) return;

			var slides = this._els.slides,
				currEl = slides[this._currSlideIdx],
				newEl = slides[slideIdx],
				self = this;

			this._switchingSlides = true;

			B(currEl).removeClass('slider__slide--visible');
			setTimeout(function(){ B(currEl).removeClass('slider__slide--block'); }, 500);

			B(newEl).addClass('slider__slide--block');
			setTimeout(function(){
				B(newEl).addClass('slider__slide--visible');
				self._switchingSlides = false;
			}, 500);

			this._currSlideIdx = slideIdx;
		}
	
	};

	slider.init();

}());