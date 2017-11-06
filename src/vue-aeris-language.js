const VueAerisLanguagePlugin = {
		install(Vue, options) {
			
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

export default VueAerisLanguagePlugin;