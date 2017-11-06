export const VueAerisLanguagePlugin = {
		install(Vue, options) {
			Console.log("Installation of VueAerisLanguagePlugin")
			 Vue.mixin({
				    mounted: function () {
				      if ((this.$props) && (this.$props.lang)) {
				    	  var languageHandler = function(e) {this.lang=e.detail.lang}.bind(this);
				    	  document.addEventListener('aerisLanguageResponse', languageHandler);
				    	  this.languageHandler = this.languageHandler 
				    	  var event = new CustomEvent('aerisLanguageRequest', {});
				    	  document.dispatchEvent(event);
				      }
				    },
				    
				    destroyed: function() {
				    	if (this.languageHandler) {
					    	  document.removeEventListener('aerisLanguageResponse', this.languageHandler);
					    	  this.languageHandler = null
					      }
				    }
				    
				  })
		  
		  }
};

export const VueColorPlugin = {
		install(Vue, options) {
			Console.log("Installation of VueColorPlugin")
		    Vue.prototype.$colorLuminance = function(hex, lum) {
			  		//from https://www.sitepoint.com/javascript-generate-lighter-darker-color/
			  		// validate hex string
			  		hex = String(hex).replace(/[^0-9a-f]/gi, '');
			  		if (hex.length < 6) {
			  			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
			  		}
			  		lum = lum || 0;

			  		// convert to decimal and change luminosity
			  		var rgb = "#", c, i;
			  		for (i = 0; i < 3; i++) {
			  			c = parseInt(hex.substr(i*2,2), 16);
			  			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			  			rgb += ("00"+c).substr(c.length);
			  		}

			  		return rgb;
			    }
		  }
};

export default VueAerisLanguagePlugin;