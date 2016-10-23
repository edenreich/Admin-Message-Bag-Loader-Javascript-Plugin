
/*
|--------------------------------------------------------------------------
| AdminPanelLoader Message-Bag Loader Plugin
|--------------------------------------------------------------------------
| This plugin allows you to display the loader and generate custom
| error or success messages, no jQuery needed.
| 
| This plugin is build for personal use and is absolutly restricted for a commerical use.
| Copyrights Eden Reich©, all rights reserved.
*/
var AdminPanelLoader = (function(window, document, undefined)
{

	'use_stricts';

	var successMessages = [],
		errorMessages = [],
		intervalId = null;

	var adminPanelLoader = {

		loader: {},
		loaderBox: {},

		init: function() {

			this.create('loader').style('loader');
			this.create('loader-box').style('loader-box');
		},

		/**
		 * This method starts the loader. 
		 */
		start: function() {

			this.displayLoader();

			this.spinningAnimationStart();
		},

		/**
		 * This method stops the loader. 
		 */
		stop: function() {

			this.spinningAnimationStop();
		},

		/**
		 * This method adds a success. 
		 */
		addSuccessMessage: function(message) {
			
			successMessages.push(message);
		},

		/**
		 * This method adds a faidlmessage. 
		 */
		addErrorMessage: function(message) {
			
			errorMessages.push(message);
		},

		/**
		 * This list all messages. 
		 */
		listMessages: function() {
			
			if(successMessages.length == 0 && errorMessages.length == 0)
				return;

			this.displayLoaderBox();
	
			if(successMessages.length > 0) { 
				for(var i = 0; successMessages.length > i; i++) {
				 	
					var li = document.createElement('li');
					li.innerHTML = successMessages[i];
					li.style.opacity = '0';
					li.style.display = 'none';
					
					this.styleSuccessElement(li);	
					
					this.loaderBox.appendChild(li);
					this.fadeIn(li);

				}
			}

			if(errorMessages.length > 0) { 
				for(var i = 0; errorMessages.length > i; i++) {
				 	
					var li = document.createElement('li');
					li.innerHTML = errorMessages[i];
					li.style.opacity = '0';
					li.style.display = 'none';

					this.styleErrorElement(li);	
						
					this.loaderBox.appendChild(li);
					this.fadeIn(li);
					
				}
			}
		},

		/**
		 * This method creates the element we need. 
		 */
		create: function(element) {
			
			switch(element)
			{
				case 'loader':
					this.loader = document.createElement("div");
					this.loader.className = 'loader';
					break;
				case 'loader-box':
					this.loaderBox = document.createElement("div");
					this.loaderBox.className = 'loader-box';
					break;
			}

			return this;
		},

		/**
		 * This method give some style to the element.
		 */
		style: function(element) {
			
			switch(element)
			{
				case 'loader':
					this.loader.style.position = 'absolute';
					this.loader.style.right = '50%';
					this.loader.style.top = '2px';
					
					this.loader.style.width = '35px';
					this.loader.style.height = '35px';
					this.loader.style.border = '5px solid #e4e4e4';
					this.loader.style.marginRight = '-20px';
					this.loader.style.borderRadius = "50%";
					this.loader.style.borderTopColor = "#0ac477";
					break;
				case 'loader-box':
					this.loaderBox.style.maxWidth = '400px';		
					this.loaderBox.style.margin = '0 auto';
					this.loaderBox.style.marginTop = '55px';
					break;
				case 'error-li':

			}

			return this;
		},

		/**
		 * This method displays the loader.
		 */
		displayLoader: function() {
			
			var loader = this.loader;
	
			document.body.insertBefore(loader, document.body.firstChild);	
		},

		/**
		 * This method displays the loader-box. 
		 */
		displayLoaderBox: function() {

			var loaderBox = this.loaderBox;
		
			document.body.insertBefore(loaderBox, document.body.nextSibiling);	
		},

		/**
		 * This method spinning the loader. 
		 */
		spinningAnimationStart: function() {
			var deg = 0,
				loader = this.loader;
			intervalId = setInterval(frame, 5);

			function frame() {
				deg++;
				loader.style.webkitTransform = 'rotate('+deg+'deg)'; 
				loader.style.mozTransform    = 'rotate('+deg+'deg)'; 
				loader.style.msTransform     = 'rotate('+deg+'deg)'; 
				loader.style.oTransform      = 'rotate('+deg+'deg)'; 
				loader.style.transform       = 'rotate('+deg+'deg)';

				if(deg > 360)
					deg = 0;
			}
		},

		/**
		 * This method stops the spinning loader. 
		 */
		spinningAnimationStop: function() {
			
			this.loader.style.display = 'none';
			clearInterval(intervalId);
			this.loader.remove();
		},

		/**
		 * This method fadein the element.
		 */
		fadeIn: function(element) {

			var opacity = 0;
			var intervalId = setInterval(frame, 30);

			element.style.display = 'block';

			function frame() {
				
				opacity = opacity+0.1;
				element.style.opacity = String(opacity);  
				
				if(opacity > 0.98) 
					clearInterval(intervalId);
			} 
			
		},

		/**
		 * This method fadeout the element.
		 */
		fadeOut: function(element) {
			
			var intervalId = setInterval(frame, 30);
			var opacity = 0.99;

			function frame() {
				
				opacity = opacity-0.1;
				element.style.opacity = String(opacity);
				  
				
				if(opacity < 0.1) {
					clearInterval(intervalId);
					element.remove();
				}
			} 


			element.style.display = 'block';
		},

		/**
		 * This method style the errors list-items.
		 */
		styleErrorElement: function(li) {

			li.style.listStyleType = 'none';
			li.style.borderRadius = '5px 5px';
			li.style.position = 'relative';
			li.style.textAlign = 'center';
			li.style.paddingTop = '5px';
			li.style.paddingBottom = '5px';
			li.style.marginTop = '2px';
			li.style.color = '#000000';
			li.style.backgroundColor = '#eb6363';
			li.style.border = '1px dotted #ff0000';

			var a = document.createElement('a');
			a.innerHTML = 'X';
			a.setAttribute('href', '#');
			a.style.position = 'absolute';
			a.style.textDecoration = 'none';
			a.style.color = '#000000';
			a.style.fontFamily = 'Arial';
			a.style.right = '2px';
			a.style.top = '0';
			a.style.fontSize = '0.8em';

			self = this;

			a.addEventListener('click', function(e) {
				e.preventDefault();
				self.fadeOut(this.parentElement);
				var childrenCount = self.loaderBox.children.length; 
				if(childrenCount == 1)
					self.loaderBox.remove();
			});

			li.appendChild(a);
		},

		/**
		 * This method style the success list-items.
		 */
		styleSuccessElement: function(li) {

			li.style.listStyleType = 'none';
			li.style.borderRadius = '5px 5px';
			li.style.position = 'relative';
			li.style.textAlign = 'center';
			li.style.paddingTop = '5px';
			li.style.paddingBottom = '5px';
			li.style.marginTop = '2px';
			li.style.color = '#5e8f4d';
			li.style.backgroundColor = '#dff0d8';
			li.style.border = '1px dotted #5e8f4d';

			var a = document.createElement('a');
			a.innerHTML = 'X';
			a.setAttribute('href', '#');
			a.style.position = 'absolute';
			a.style.textDecoration = 'none';
			a.style.color = '#000000';
			a.style.fontFamily = 'Arial';
			a.style.right = '2px';
			a.style.top = '0';
			a.style.fontSize = '0.8em';

			self = this;

			a.addEventListener('click', function(e) {
				e.preventDefault();
				self.fadeOut(this.parentElement);
				var childrenCount = self.loaderBox.children.length; 
				if(childrenCount == 1)
					self.loaderBox.remove();
			});

			li.appendChild(a);
		},

		/**
		 * This method removes all the existing messages from the array 
		 */
		emptyMessages: function() {

			successMessages = [];
			errorMessages = [];
		}
	};


	adminPanelLoader.init();


	return adminPanelLoader;
	
}(window, document));