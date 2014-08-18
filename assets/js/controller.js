var Controllers = new angular.module('Controllers', []);

Controllers.controller('MainController', ['$scope', '$location',
	function ($scope, $location){

		$scope.active = function() 
		{
			//removes the active class from every menu item
	        $('#menu-item a').removeClass('active');
			setTimeout( function()
			{
	                //adds the active class to the new location
	                $('#page_' + $location['$$url'].substring(1)).addClass('active');
	        }, 100);
		}

		$scope.active();
	}
]);

Controllers.controller('HomeController', ['$scope', 
	function ($scope){

		if($(window).width() > 960)
		{
			$scope.background = "assets/img/Ashley_Schuett.jpg"
		}
		else
		{
			$scope.background = "assets/img/Ashley_Schuett_Mobile_OPT.jpg"
		}
	}
]);

Controllers.controller('ResumeController', ['$scope',
	function ($scope){
		setTimeout(function(){
			$('#resume').width($('#resume-image').width());
			$('#pdf_resume').width($('#resume-image').width());
		}, 200);

	}
]);

Controllers.controller('ProjectController', ['$scope', '$routeParams',
	function ($scope, $routeParams)
	{
		$scope.project = get_data()[$routeParams.id-1];
	}
]);

Controllers.controller('ProfolioController', ['$scope',
	function ($scope){
	    $scope.profolio = get_data();
		$scope.feature = $scope.profolio.splice(Math.floor((Math.random() * $scope.profolio.length-1) + 1),1)[0];

	}
]);


function get_data(){
		return [
		        {
		        	"id": 1,
		            "title": "Neighboorhood Housing App",
		            "message": "Internal and External application to approve housing listings, and search for them.",
		            "thumbnail": "assets/img/nho/nho_home_thumbnail.png",
		            "feature_image": "assets/img/nho/nho_home_feature.png",
		            "feature_message": "This application is for students to confidently search for landlords that work with the Neighborhood Housing, an office on campus. Each landlord can sign up and make listings, while students can post subleases, ratings, and roommate requests. It was created using a MySQL database through Laravel database migrations. The API was then created in Laravel taking advantage of the controllers and modules. Then AngularJS services where used to connect with the API to create a one page application."
		        },
		    	{
		    		"id": 2,
		    		"title": "Be On the Safe Side",
		            "message": "Web application to keep track of dispatch calls.",
		            "thumbnail": "assets/img/boss/boss_home_thumbnail.png",
		            "feature_image": "assets/img/boss/boss_home_feature.png",
		            "feature_message": "University of Wisconsin-Milwaukee has a service that provides free rides to students between 6p.m and 2a.m called Be On the Safe Side. However, when people called in to schedule a ride the dispatchers where having to record everything in an excel sheet, which was on a network share being used by multiple people. They had issues with it freezing, and not saving inputted information. In this project we used a MySQL database through Laravel, while also creating the API in Laravel. I then created the front end using AngularJS . I then implemented Web sockets so that everything was updated in real time on all screens."
		    	},
		    	{
		    		"id": 3,
		    		"title": "Swiper Appication",
		            "message": "Web application to swiper student ID cards and check their enrollment status.",
		            "thumbnail": "assets/img/swiper/swiper_home_thumbnail.png",
		            "feature_image": "assets/img/swiper/swiper_home_feature.png",
		            "feature_message": "Many divisions on campus needed a way to check students in to events and save records of this information, while others wanted to just be able to see if someone was a current student or not. This application uses a MySQL database to save each swipe to a specific event, it also connects to a separate campus database to check the student's current registration status. It is using Laravel for handling the JSON, and AngularJS for the front end.",
		            "details" : [
			            {
			            	"image": "assets/img/swiper/swiper_events_page.png",
			            	"note": "Here people can look at all the events that have been created."
			            },
			            {
			            	"image": "assets/img/swiper/swiper_event.png",
			            	"note": "This is how a user would add a new event that they need to track students for."
			            },
			            {
			            	"image": "assets/img/swiper/swiper_feedback.png",
			            	"note": "An easy way for the user to comunicate with the Web Team about any issues. "
			            }
		            ]
		    	},
		    	{
		    		"id": 4,
		    		"title": "University Housing",
		            "message": "Redesigned the University Housing site to increase conversion",
		            "thumbnail": "assets/img/housing/housing_home_thumbnail.png",
		            "feature_image": "assets/img/housing/housing_home_feature.png",
		            "feature_message": "With an initiative on campus to have a cohesive online presents I helped recreated the housing site, also trying to make it more manageable with less duplicate content, and be mobile friendly. This website also got rid of landing pages so there would be less clicks to get to the information that the user is looking for. ",
		            "link": "https://www.sa.uwm.edu/housing"

		    	},
		    	{
		    		"id": 5,
		    		"title": "University Legal Clinic",
		            "message": "Web application to intake clients and assign them a paralegal.",
		            "thumbnail": "assets/img/ulc/ulc_home_thumbnail.png",
		            "feature_image": "assets/img/ulc/ulc_home_feature.png",
		            "feature_message": "The University Legal Clinic keeps track of all clients, and what case number they are, and the paralegal assigned to that case. They were using an access database to keep track of this information. There office was having issues with the database freezing, and not showing the correct information.  I was involved in making an application that would be able to intake students when they walked in, and then the office workers would be able to add in the other case information. I got rid of unnecessary buttons that where on the previous application, and made it easier and more friendly for them to use.",
		            "link": "https://www.apps.sa.uwm.edu/ulc"
		    	},
		   		{
		   			"id": 6,
		   			"title": "Fallen Panthers",
		   			"message": "Redesign of a website to commemorate students that have fallen.",
		   			"thumbnail": "assets/img/fallenpanthers/fp_thumbnail.png",
		   			"feature_image": "assets/img/fallenpanthers/fp_feature.png"	,
		            "feature_message": "This site was created to commemorate students that have died while attending University of Wisconsin-Milwaukee. I redesigned it so it was more professional looking and easier to find information.",
		            "link": "https://sa.uwm.edu/fallenpanthers/",
		            "details" : [
			            {
			            	"image": "assets/img/fallenpanthers/fallen_panthers_original.png",
			            	"note": "This is the original site, before I redsigned it."
			            }
		            ]	   			
		   		}
		];
}