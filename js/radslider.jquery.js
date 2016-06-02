;(function(factory){

  factory(jQuery);

})(function($){

  /*
   * We define radslider as a variable of type ‘function’.
   * Here, we use an anonymous function to ensure
   * that the logic inside the function is executed immediately.
   *
   */
  var radslider = (function(element, settings){

    var instanceUid = 0;

    /*
     * The constructor function for radslider
     *
     */
    function _radslider(element, settings){
      this.defaults = {};

      // We create a new property to hold our default settings after they
      // have been merged with user supplied settings
      this.settings = $.extend({},this,this.defaults,settings);

      // This object holds values that will change as the plugin operates
      this.initials = {};

      // Attaches the properties of this.initials as direct properties of radslider
      $.extend(this,this.initials);

      // Here we'll hold a reference to the DOM element passed in
      // by the $.each function when this plugin was instantiated
      this.$el = $(element);

      // Ensure that the the value of 'this' always references radslider
      this.changeSlide = $.proxy(this.changeSlide,this);

      // We'll call our initiator function to get things rolling!
      this.init();

      // A little bit of metadata about the instantiated object
      // This property will be incremented everytime a new radslider carousel is created
      // It provides each carousel with a unique ID
      this.instanceUid = instanceUid++;
    }

    return _radslider;

  })();

  /**
   * Called once per instance
   * Calls starter methods and associates classes
   */
   radslider.prototype.init = function(){};

  /**
   * Test to see if CSSTransitions are available
   *
   */
   radslider.prototype.csstransitionsTest = function(){};

  /**
   * Build out any necessary DOM elements like slide indicators
   *
   */
   radslider.prototype.build = function(){};

   /**
    * Activate the first slide
    */
    radslider.prototype.activate = function(){};

   /**
    * Associate event handlers to events
    *
    */
    radslider.prototype.events = function(){};

   /**
    * Clear timer
    *
    */
    radslider.prototype.clearTimer = function(){};

   /**
    * Initialize the timer
    *
    */
    radslider.prototype.initTimer = function(){};

   /**
    * Start the timer
    *
    */
    radslider.prototype.startTimer = function(){};

   /**
    * Control the logic behind transitioning to the next slide
    * - Determine in what direction we need to animate
    * - Determine which slide will be active next
    *
    */
    radslider.prototype.changeSlide = function(event){

  /**
    * Control the CSS animations
    *
    */
    radslider.prototype._cssAnimation = function(nextSlide,direction){};

   /**
    * Control the JS animations
    *
    */
    radslider.prototype._jsAnimation = function(nextSlide,direction){};

   /**
    * Update the slide indicators once each slide animation has ended
    *
    */
    radslider.prototype._updateIndicators = function(){};

   /**
    * Initialize the plugin once for each DOM object passed to jQuery
    * @params   object  options object
    * @returns void
    *
    */
    $.fn.radslider = function(options){

       return this.each(function(index,el){

      el.radslider = new radslider(el,options);

    });

  };

});

// Custom options for the carousel
var args = {};

$('.carousel').radslider(args);
