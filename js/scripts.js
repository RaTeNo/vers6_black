$(function(){
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: false,
		navText: [
			'<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65502 0C5.43764 0 5.22002 0.0821376 5.05436 0.24365L0.249129 4.91658C-0.083043 5.2396 -0.083043 5.76261 0.249129 6.08481L5.05436 10.7577C5.38653 11.0808 5.92435 11.0808 6.25567 10.7577L6.32868 10.6867C6.66085 10.3637 6.66085 9.8407 6.32868 9.5185L3.04665 6.32684H14.1505C14.6194 6.32684 15 5.95673 15 5.50069C15 5.04465 14.6194 4.67454 14.1505 4.67454H3.04665L6.32868 1.48288C6.66085 1.15985 6.66085 0.636847 6.32868 0.314648L6.25567 0.24365C6.08958 0.0821376 5.87239 0 5.65502 0Z" fill="white"/></svg>',
	        '<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.34498 0C9.56236 0 9.77998 0.0821376 9.94564 0.24365L14.7509 4.91658C15.083 5.2396 15.083 5.76261 14.7509 6.08481L9.94564 10.7577C9.61347 11.0808 9.07565 11.0808 8.74433 10.7577L8.67132 10.6867C8.33915 10.3637 8.33915 9.8407 8.67132 9.5185L11.9533 6.32684H0.849544C0.380595 6.32684 0 5.95673 0 5.50069C0 5.04465 0.380595 4.67454 0.849544 4.67454H11.9533L8.67132 1.48288C8.33915 1.15985 8.33915 0.636847 8.67132 0.314648L8.74433 0.24365C8.91042 0.0821376 9.12761 0 9.34498 0Z" fill="white"/></svg>'
	        
	    ],
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		
	})


	// Основной слайдер на главной
	 var owl = $('.main_slider2 .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: false,
		navText: [
			'<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65502 0C5.43764 0 5.22002 0.0821376 5.05436 0.24365L0.249129 4.91658C-0.083043 5.2396 -0.083043 5.76261 0.249129 6.08481L5.05436 10.7577C5.38653 11.0808 5.92435 11.0808 6.25567 10.7577L6.32868 10.6867C6.66085 10.3637 6.66085 9.8407 6.32868 9.5185L3.04665 6.32684H14.1505C14.6194 6.32684 15 5.95673 15 5.50069C15 5.04465 14.6194 4.67454 14.1505 4.67454H3.04665L6.32868 1.48288C6.66085 1.15985 6.66085 0.636847 6.32868 0.314648L6.25567 0.24365C6.08958 0.0821376 5.87239 0 5.65502 0Z" fill="white"/></svg>',
	        '<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.34498 0C9.56236 0 9.77998 0.0821376 9.94564 0.24365L14.7509 4.91658C15.083 5.2396 15.083 5.76261 14.7509 6.08481L9.94564 10.7577C9.61347 11.0808 9.07565 11.0808 8.74433 10.7577L8.67132 10.6867C8.33915 10.3637 8.33915 9.8407 8.67132 9.5185L11.9533 6.32684H0.849544C0.380595 6.32684 0 5.95673 0 5.50069C0 5.04465 0.380595 4.67454 0.849544 4.67454H11.9533L8.67132 1.48288C8.33915 1.15985 8.33915 0.636847 8.67132 0.314648L8.74433 0.24365C8.91042 0.0821376 9.12761 0 9.34498 0Z" fill="white"/></svg>'
	        
	    ],
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		onInitialized: function(event){
			setTimeout(function(){
				let dotsOffset = $(event.target).find('.owl-next').offset()

				$(event.target).find('.owl-nav button.owl-prev').css(
					'left', (dotsOffset.left - 10)
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				let dotsOffset = $(event.target).find('.owl-next').offset()

				$(event.target).find('.owl-nav button.owl-prev').css(
					'left', (dotsOffset.left - 10)
				)
			}, 100)
		}
	})


	// Основной слайдер на главной
	var owl2 =$('.main_slider3 .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: false,
		dots: false,		
		loop: true,
		navText: [
			'<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65502 0C5.43764 0 5.22002 0.0821376 5.05436 0.24365L0.249129 4.91658C-0.083043 5.2396 -0.083043 5.76261 0.249129 6.08481L5.05436 10.7577C5.38653 11.0808 5.92435 11.0808 6.25567 10.7577L6.32868 10.6867C6.66085 10.3637 6.66085 9.8407 6.32868 9.5185L3.04665 6.32684H14.1505C14.6194 6.32684 15 5.95673 15 5.50069C15 5.04465 14.6194 4.67454 14.1505 4.67454H3.04665L6.32868 1.48288C6.66085 1.15985 6.66085 0.636847 6.32868 0.314648L6.25567 0.24365C6.08958 0.0821376 5.87239 0 5.65502 0Z" fill="white"/></svg>',
	        '<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.34498 0C9.56236 0 9.77998 0.0821376 9.94564 0.24365L14.7509 4.91658C15.083 5.2396 15.083 5.76261 14.7509 6.08481L9.94564 10.7577C9.61347 11.0808 9.07565 11.0808 8.74433 10.7577L8.67132 10.6867C8.33915 10.3637 8.33915 9.8407 8.67132 9.5185L11.9533 6.32684H0.849544C0.380595 6.32684 0 5.95673 0 5.50069C0 5.04465 0.380595 4.67454 0.849544 4.67454H11.9533L8.67132 1.48288C8.33915 1.15985 8.33915 0.636847 8.67132 0.314648L8.74433 0.24365C8.91042 0.0821376 9.12761 0 9.34498 0Z" fill="white"/></svg>'
	        
	    ],
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,		
	})

	 // Custom Button
	$('.customNextBtn').click(function() {
	    owl2.trigger('next.owl.carousel');
	});
	$('.customPreviousBtn').click(function() {
	    owl2.trigger('prev.owl.carousel');
	});


	// Отзывы
	$('.reviews .slider').owlCarousel({
		items: 2,
		margin: 73,
		nav: true,
		navText: [
			'<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65502 0C5.43764 0 5.22002 0.0821376 5.05436 0.24365L0.249129 4.91658C-0.083043 5.2396 -0.083043 5.76261 0.249129 6.08481L5.05436 10.7577C5.38653 11.0808 5.92435 11.0808 6.25567 10.7577L6.32868 10.6867C6.66085 10.3637 6.66085 9.8407 6.32868 9.5185L3.04665 6.32684H14.1505C14.6194 6.32684 15 5.95673 15 5.50069C15 5.04465 14.6194 4.67454 14.1505 4.67454H3.04665L6.32868 1.48288C6.66085 1.15985 6.66085 0.636847 6.32868 0.314648L6.25567 0.24365C6.08958 0.0821376 5.87239 0 5.65502 0Z" fill="white"/></svg>',
	        '<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.34498 0C9.56236 0 9.77998 0.0821376 9.94564 0.24365L14.7509 4.91658C15.083 5.2396 15.083 5.76261 14.7509 6.08481L9.94564 10.7577C9.61347 11.0808 9.07565 11.0808 8.74433 10.7577L8.67132 10.6867C8.33915 10.3637 8.33915 9.8407 8.67132 9.5185L11.9533 6.32684H0.849544C0.380595 6.32684 0 5.95673 0 5.50069C0 5.04465 0.380595 4.67454 0.849544 4.67454H11.9533L8.67132 1.48288C8.33915 1.15985 8.33915 0.636847 8.67132 0.314648L8.74433 0.24365C8.91042 0.0821376 9.12761 0 9.34498 0Z" fill="white"/></svg>'
	        
	    ],
		dotsEach : true,
		dots: false,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	        768:{
	            items: 1,
	            margin: 36
	        },
	        1024:{
	            items: 3,
	            margin: 36
	        },
	        1200:{
	            items: 3,
	            margin: 36
	        }
		}		
	})


	// Статьи
	$('.articles .slider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: [
			'<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65502 0C5.43764 0 5.22002 0.0821376 5.05436 0.24365L0.249129 4.91658C-0.083043 5.2396 -0.083043 5.76261 0.249129 6.08481L5.05436 10.7577C5.38653 11.0808 5.92435 11.0808 6.25567 10.7577L6.32868 10.6867C6.66085 10.3637 6.66085 9.8407 6.32868 9.5185L3.04665 6.32684H14.1505C14.6194 6.32684 15 5.95673 15 5.50069C15 5.04465 14.6194 4.67454 14.1505 4.67454H3.04665L6.32868 1.48288C6.66085 1.15985 6.66085 0.636847 6.32868 0.314648L6.25567 0.24365C6.08958 0.0821376 5.87239 0 5.65502 0Z" fill="white"/></svg>',
	        '<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.34498 0C9.56236 0 9.77998 0.0821376 9.94564 0.24365L14.7509 4.91658C15.083 5.2396 15.083 5.76261 14.7509 6.08481L9.94564 10.7577C9.61347 11.0808 9.07565 11.0808 8.74433 10.7577L8.67132 10.6867C8.33915 10.3637 8.33915 9.8407 8.67132 9.5185L11.9533 6.32684H0.849544C0.380595 6.32684 0 5.95673 0 5.50069C0 5.04465 0.380595 4.67454 0.849544 4.67454H11.9533L8.67132 1.48288C8.33915 1.15985 8.33915 0.636847 8.67132 0.314648L8.74433 0.24365C8.91042 0.0821376 9.12761 0 9.34498 0Z" fill="white"/></svg>'
	        
	    ],
		dotsEach : false,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	        768:{
	            items: 2,
	            margin: 36
	        },
	        1024:{
	            items: 3,
	            margin: 36
	        },
	        1200:{
	            items: 3,
	            margin: 36
	        }
		}
	})


	// Видео отзывы
	$('.video_reviews .slider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		loop: false,
		navText: [
			'<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65502 0C5.43764 0 5.22002 0.0821376 5.05436 0.24365L0.249129 4.91658C-0.083043 5.2396 -0.083043 5.76261 0.249129 6.08481L5.05436 10.7577C5.38653 11.0808 5.92435 11.0808 6.25567 10.7577L6.32868 10.6867C6.66085 10.3637 6.66085 9.8407 6.32868 9.5185L3.04665 6.32684H14.1505C14.6194 6.32684 15 5.95673 15 5.50069C15 5.04465 14.6194 4.67454 14.1505 4.67454H3.04665L6.32868 1.48288C6.66085 1.15985 6.66085 0.636847 6.32868 0.314648L6.25567 0.24365C6.08958 0.0821376 5.87239 0 5.65502 0Z" fill="white"/></svg>',
	        '<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.34498 0C9.56236 0 9.77998 0.0821376 9.94564 0.24365L14.7509 4.91658C15.083 5.2396 15.083 5.76261 14.7509 6.08481L9.94564 10.7577C9.61347 11.0808 9.07565 11.0808 8.74433 10.7577L8.67132 10.6867C8.33915 10.3637 8.33915 9.8407 8.67132 9.5185L11.9533 6.32684H0.849544C0.380595 6.32684 0 5.95673 0 5.50069C0 5.04465 0.380595 4.67454 0.849544 4.67454H11.9533L8.67132 1.48288C8.33915 1.15985 8.33915 0.636847 8.67132 0.314648L8.74433 0.24365C8.91042 0.0821376 9.12761 0 9.34498 0Z" fill="white"/></svg>'
	        
	    ],
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	        768:{
	            items: 2,
	            margin: 36
	        },
	        1024:{
	            items: 3,
	            margin: 36
	        },
	        1200:{
	            items: 3,
	            margin: 36
	        }
		},		
	})


	// Акции
	$('.stocks .slider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: [
			'<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65502 0C5.43764 0 5.22002 0.0821376 5.05436 0.24365L0.249129 4.91658C-0.083043 5.2396 -0.083043 5.76261 0.249129 6.08481L5.05436 10.7577C5.38653 11.0808 5.92435 11.0808 6.25567 10.7577L6.32868 10.6867C6.66085 10.3637 6.66085 9.8407 6.32868 9.5185L3.04665 6.32684H14.1505C14.6194 6.32684 15 5.95673 15 5.50069C15 5.04465 14.6194 4.67454 14.1505 4.67454H3.04665L6.32868 1.48288C6.66085 1.15985 6.66085 0.636847 6.32868 0.314648L6.25567 0.24365C6.08958 0.0821376 5.87239 0 5.65502 0Z" fill="white"/></svg>',
	        '<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.34498 0C9.56236 0 9.77998 0.0821376 9.94564 0.24365L14.7509 4.91658C15.083 5.2396 15.083 5.76261 14.7509 6.08481L9.94564 10.7577C9.61347 11.0808 9.07565 11.0808 8.74433 10.7577L8.67132 10.6867C8.33915 10.3637 8.33915 9.8407 8.67132 9.5185L11.9533 6.32684H0.849544C0.380595 6.32684 0 5.95673 0 5.50069C0 5.04465 0.380595 4.67454 0.849544 4.67454H11.9533L8.67132 1.48288C8.33915 1.15985 8.33915 0.636847 8.67132 0.314648L8.74433 0.24365C8.91042 0.0821376 9.12761 0 9.34498 0Z" fill="white"/></svg>'
	        
	    ],
		dotsEach : true,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	        768:{
	            items: 2,
	            margin: 36
	        },
	        1024:{
	            items: 3,
	            margin: 36
	        },
	        1200:{
	            items: 3,
	            margin: 36
	        }
		},
		
	})


	// Сотрудники
	$('.team .slider').owlCarousel({
		items: 1,
		margin: 73,
		nav: true,
		dotsEach : true,
		dots: false,
		loop: false,
		navText: [
			'<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65502 0C5.43764 0 5.22002 0.0821376 5.05436 0.24365L0.249129 4.91658C-0.083043 5.2396 -0.083043 5.76261 0.249129 6.08481L5.05436 10.7577C5.38653 11.0808 5.92435 11.0808 6.25567 10.7577L6.32868 10.6867C6.66085 10.3637 6.66085 9.8407 6.32868 9.5185L3.04665 6.32684H14.1505C14.6194 6.32684 15 5.95673 15 5.50069C15 5.04465 14.6194 4.67454 14.1505 4.67454H3.04665L6.32868 1.48288C6.66085 1.15985 6.66085 0.636847 6.32868 0.314648L6.25567 0.24365C6.08958 0.0821376 5.87239 0 5.65502 0Z" fill="white"/></svg>',
	        '<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.34498 0C9.56236 0 9.77998 0.0821376 9.94564 0.24365L14.7509 4.91658C15.083 5.2396 15.083 5.76261 14.7509 6.08481L9.94564 10.7577C9.61347 11.0808 9.07565 11.0808 8.74433 10.7577L8.67132 10.6867C8.33915 10.3637 8.33915 9.8407 8.67132 9.5185L11.9533 6.32684H0.849544C0.380595 6.32684 0 5.95673 0 5.50069C0 5.04465 0.380595 4.67454 0.849544 4.67454H11.9533L8.67132 1.48288C8.33915 1.15985 8.33915 0.636847 8.67132 0.314648L8.74433 0.24365C8.91042 0.0821376 9.12761 0 9.34498 0Z" fill="white"/></svg>'
	        
	    ],
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	        768:{
	            items: 2,
	            margin: 36
	        },
	        1024:{
	            items: 2,
	            margin: 36
	        },
	        1200:{
	            items: 3,
	            margin: 36
	        }
		},
		
	})


	// Вакансии
	$('.vacancies .slider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: [
			'<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65502 0C5.43764 0 5.22002 0.0821376 5.05436 0.24365L0.249129 4.91658C-0.083043 5.2396 -0.083043 5.76261 0.249129 6.08481L5.05436 10.7577C5.38653 11.0808 5.92435 11.0808 6.25567 10.7577L6.32868 10.6867C6.66085 10.3637 6.66085 9.8407 6.32868 9.5185L3.04665 6.32684H14.1505C14.6194 6.32684 15 5.95673 15 5.50069C15 5.04465 14.6194 4.67454 14.1505 4.67454H3.04665L6.32868 1.48288C6.66085 1.15985 6.66085 0.636847 6.32868 0.314648L6.25567 0.24365C6.08958 0.0821376 5.87239 0 5.65502 0Z" fill="white"/></svg>',
	        '<svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.34498 0C9.56236 0 9.77998 0.0821376 9.94564 0.24365L14.7509 4.91658C15.083 5.2396 15.083 5.76261 14.7509 6.08481L9.94564 10.7577C9.61347 11.0808 9.07565 11.0808 8.74433 10.7577L8.67132 10.6867C8.33915 10.3637 8.33915 9.8407 8.67132 9.5185L11.9533 6.32684H0.849544C0.380595 6.32684 0 5.95673 0 5.50069C0 5.04465 0.380595 4.67454 0.849544 4.67454H11.9533L8.67132 1.48288C8.33915 1.15985 8.33915 0.636847 8.67132 0.314648L8.74433 0.24365C8.91042 0.0821376 9.12761 0 9.34498 0Z" fill="white"/></svg>'
	        
	    ],
		dotsEach : true,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	         768:{
	            items: 2,
	            margin: 36
	        },
	        1024:{
	            items: 3,
	            margin: 36
	        },
	        1200:{
	            items: 3,
	            margin: 36
	        }
		},
		
	})


	// Меню в шапке
	$('header .menu').flexMenu({		
		showOnHover: true,
		linkText: '<span>ОСТАЛЬНОЕ</span>',
		linkTitle: '',
		linkTextAll: 'Меню',
	})

	//социальные сети
	if($('.mob_scroll .socials a').length>4)
	{
		$(".mob_scroll .socials a").eq(2).after($('<a href="/" class="more"><img src="./images/dot2.svg" alt=""><div class="arrow"><svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5L0 0L9 0L4.5 5Z" fill=""/></svg></div><div class="more_block"></div></a>'));
		$('.mob_scroll .socials a').each(function( index, element ) {
			if(index>3)
			{
				$(element).clone(true).appendTo(".mob_scroll .more_block");
				(element).remove();
			}
		});
	}
	$('body').on('click', '.mob_scroll .more_block a', function(e) {
		var href = $(this).attr('href');
      	window.open(href, '_blank');
	});

	$('body').on('click', '.mob_scroll a.more', function(e) {
    	e.preventDefault()
    });


	if($('.mob_header .socials a').length>4)
	{
		$(".mob_header .socials a").eq(2).after($('<a href="/" class="more"><img src="./images/dot2.svg" alt=""><div class="arrow"><svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5L0 0L9 0L4.5 5Z" fill=""/></svg></div><div class="more_block"></div></a>'));
		$('.mob_header .socials a').each(function( index, element ) {
			if(index>3)
			{
				$(element).clone(true).appendTo(".mob_header .more_block");
				(element).remove();
			}
		});
	}
	$('body').on('click', '.mob_header .more_block a', function(e) {
		var href = $(this).attr('href');
      	window.open(href, '_blank');
	});


	$('body').on('click', '.mob_header a.more', function(e) {
    	e.preventDefault()
    });

    if($('.mob_header .contacts a').length>2)
	{	
		$('.mob_header .contacts a').each(function( index, element ) {
			if(index>2)
			{
				$(element).clone(true).appendTo(".mob_header .more_block").addClass("new_contact");
				(element).remove();
			}
		});
	}




	// Фильтр
	$('body').on('click', 'aside .mob_filter_link', function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active')
			$('aside .filter').fadeOut(200)
			$('.overlay').fadeOut(200)
		} else {
			$(this).addClass('active')
			$('aside .filter').fadeIn(300)
			$('.overlay').fadeIn(300)
		}
	})

	$('aside .filter .close, .overlay, aside .block .title .close').click(function(e){
		e.preventDefault()
	    $('aside .mob_filter_link').removeClass('active')
		$('aside .filter').fadeOut(200)
		$('.overlay').fadeOut(200)
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
        type     : 'double',
        min      : 0,
        max      : 10000,
        from     : 1000,
        to       : 5000,
        step     : 10,
        postfix  : ' ₽'
    }).data("ionRangeSlider")


    // Таймер
	$('.timer').each(function(){
		let timerDate = $(this).data('date')


		$(this).countdown(timerDate, function(event) {
			let daysArr = event.strftime( '%D' ).split('')
			let hoursArr = event.strftime( '%H' ).split('')
			let minutesArr = event.strftime( '%M' ).split('')
			let secondsArr = event.strftime( '%S' ).split('')

			$(this).html( event.strftime(String()
				+ '<div class="item">'
					+ '<div class="val"><span>'+daysArr[0]+'</span><span>'+daysArr[1]+'</span></div>'
					+ '<div>дней</div>'
				+ '</div>'

				+ '<div class="item">'
					+ '<div class="val"><span>'+hoursArr[0]+'</span><span>'+hoursArr[1]+'</span></div>'
					+ '<div>часов</div>'
				+ '</div>'

				+ '<div class="item">'
					+ '<div class="val"><span>'+minutesArr[0]+'</span><span>'+minutesArr[1]+'</span></div>'
					+ '<div>минут</div>'
				+ '</div>'

				+ '<div class="item">'
					+ '<div class="val"><span>'+secondsArr[0]+'</span><span>'+secondsArr[1]+'</span></div>'
					+ '<div>секунд</div>'
				+ '</div>'
				) )
		})
	})


	// До/После
	$('.before_after .item').each(function(){
		$(this).beforeAfter()
	})


	// Фото с маркерами
	$('.image_tips .image .btn').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.image')
		let info = $(this).data('info')

		if( $(this).parents('.item').hasClass('active') ) {
			parent.find('.item').removeClass('active')
			parent.find('.info').hide()
		} else {
			parent.find('.item').removeClass('active')
			parent.find('.info').hide()

			$(this).parents('.item').addClass('active')
			parent.find(info).fadeIn(300)
		}
	})

	$('.image_tips .image .close').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.image')

		parent.find('.item').removeClass('active')
		parent.find('.info').hide()
	})


	// Квиз-Опрос
	$('.quiz_poll .step .links .next').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.steps')
		let nextStep = $(this).data('step')

		if($(this).hasClass("valide"))
		{
			let check = $(this).parent().prev().find("input");

			if(check.val()!="")
			{	
				check.removeClass("error");			
				parent.find('.step').hide()
				parent.find(nextStep).fadeIn(300)
			}
			else
			{
				check.addClass("error");
			}
		}
		else
		{
			parent.find('.step').hide()
			parent.find(nextStep).fadeIn(300)
		}
	})


	$("input[name='agree']").change(function () {
		if (this.checked) {
			$(this).closest("form").find("button").prop("disabled", false);
		}
		else
		{
			$(this).closest("form").find("button").prop("disabled", true);
		}
	});

	$('.product_delete').click(function(e){
		e.preventDefault();
		$(this).parent().parent().remove();
	});


	// Покупка товара
	$('.product_info .buy .buy_link').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.btn')

		$(this).addClass('bounceOut')
		parent.find('.order_link').delay(750).fadeIn(300)
	})

	// Социальная выпадашка
	$('header .socials a.more, .mob_header .socials a.more').click(function(e){
		e.preventDefault()
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active")
		}
		else
		{
			$(this).addClass("active")
		}
		
	})

	$('.products_sort_mobile .schema-order__link').click(function(e){
		e.preventDefault()	
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active");
			$(".schema-order__popover").hide();
		}	
		else
		{
			$(this).addClass("active");
			$(".schema-order__popover").show();
		}

	})


	// Логотип
	$('.resizeble-font').each(function () {
        let length = $(this).text().replace(/^\s+|\s+$|\(|\)|8-/gm, '').length,
            size = $(this).width() / length * parseFloat($(this).data('ratio'))

        if( size > 33 ) {
        	size = 33
        }

        if( size < 16 ) {
        	size = 16
        }
        size2 = size+4
        $(this).css('font-size', size + 'px').css('line-height', size2 + 'px')
    })

    $('.resizeble-font2').each(function () {
        let length = $(this).text().replace(/^\s+|\s+$|\(|\)|8-/gm, '').length,
            size = $(this).width() / length * parseFloat($(this).data('ratio'))

        if( size > 16 ) {
        	size = 16
        }

        if( size < 10 ) {
        	size = 10
        }

        $(this).css('font-size', size + 'px')
    })


    $('.resizeble-font3').each(function () {
        let length = $(this).text().replace(/^\s+|\s+$|\(|\)|8-/gm, '').length,
            size = $(this).width() / length * parseFloat($(this).data('ratio'))

        if( size > 48 ) {
        	size = 48
        }

        if( size < 14 ) {
        	size = 14
        }

        size2 = size+3

        $(this).css('font-size', size + 'px').css('line-height', size2 + 'px')
    })


    $('.apply').click(function(e){
		//e.preventDefault()
		let color1 =  $(".color1").val();
    	let color2 =  $(".color2").val();

		localStorage.setItem('color1', color1);
		localStorage.setItem('color2', color2);

		window.location.reload(true)
	});

	$('.clear').click(function(e){
		//e.preventDefault()
		localStorage.removeItem('color1');
		localStorage.removeItem('color2');
		window.location.reload(true)
	});

		

    let color1 = localStorage.getItem('color1');
    let color2 = localStorage.getItem('color2');

    if(color1!=null)
    {
	    $(".color1").val(color1);
	    $(".color2").val(color2);

	    var root = document.querySelector(':root');
	    root.style.setProperty('--main_color1', color1);
	    root.style.setProperty('--main_color2', color2);

	    let rgba = hexDec(color2);
	    
	    root.style.setProperty('--box-shadow-color', "rgba("+rgba+",0.2)");

	    let rgba_opacity = hexDec(color2);

	    root.style.setProperty('--main_color_opacity', "rgba("+rgba_opacity+",0.2)");	    
    }






	/*SVG CHANGE*/

	/*var svg = '<svg width="57" height="14" viewBox="0 0 57 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="'+color2+'"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32 12C34.7614 12 37 9.76142 37 7C37 4.23858 34.7614 2 32 2C29.2386 2 27 4.23858 27 7C27 9.76142 29.2386 12 32 12Z" fill="'+color2+'"/><path fill-rule="evenodd" clip-rule="evenodd" d="M53.5 10.5C55.433 10.5 57 8.933 57 7C57 5.067 55.433 3.5 53.5 3.5C51.567 3.5 50 5.067 50 7C50 8.933 51.567 10.5 53.5 10.5Z" fill="'+color2+'"/></svg>';

	var encoded = window.btoa(svg);	
	document.styleSheets[0].addRule('.block_head .title:after, .stocks .stock .name a:after, .ads_block .item .name a:after',"background-image: url(data:image/svg+xml;base64,"+encoded+") !important;");


	var svg = '<svg width="1436" height="227" viewBox="0 0 1436 227" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.346308" fill-rule="evenodd" clip-rule="evenodd" d="M713.339 226.999C417.57 227.324 121.084 87.1585 8.69902 27.7328C-4.74331 20.6249 0.415885 1.56702 15.6217 1.55033L1420.3 0.00887955C1435.55 -0.0078495 1440.72 19.1058 1427.22 26.1958C1313.61 85.8808 1013.83 226.67 713.339 226.999Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="1447.71" y1="226.235" x2="1447.47" y2="-0.775067" gradientUnits="userSpaceOnUse"><stop stop-color="'+color2+'" stop-opacity="0.303813"/><stop offset="1" stop-color="'+color2+'" stop-opacity="0.01"/></linearGradient></defs></svg>';

	var encoded = window.btoa(svg);	
	document.styleSheets[0].addRule('.block.bg',"background-image: url(data:image/svg+xml;base64,"+encoded+") !important;");*/

	

})

function hexDec(h){
	var m=h.slice(1).match(/.{2}/g);
	 
	m[0]=parseInt(m[0], 16);
	m[1]=parseInt(m[1], 16);
	m[2]=parseInt(m[2], 16);
	 
	return(m.join(','));
 };


 $(window).scroll(function() {	
	if($("body").hasClass("header_fixed"))
	{
		if($(window).width() > 1023)
		{
			if ($(window).scrollTop() > 0) {
				$('header').addClass('fixed')
				if($("div").is(".warning"))
				{
					$('header').css("top", $(".warning").innerHeight()+"px")
				}	
			} else {
				$('header').removeClass('fixed')
				if($("div").is(".warning"))
				{
					$('header').css("top", "0px")
				}	
			}

		}
		else 
		{
			if ($(window).scrollTop() > 0) {
				$('.mob_header').addClass('fixed')
				if($("div").is(".warning"))
				{
					$('.mob_header').css("top", $(".warning").innerHeight()+"px")
				}	
			} else {
				$('.mob_header').removeClass('fixed')
				if($("div").is(".warning"))
				{
					$('.mob_header').css("top", "0px")
				}
			}
		}
	}
})
