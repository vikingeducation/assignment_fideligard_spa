stocks.directive('timeSlider', function() {

    return {
      templateUrl: 'js/directives/time_slider.html',
      restrict: 'E',
      scope: {
        dateObj: '=',
      } //,

      // link: function() {

      //   jQuery(function($) {

      //     $('#dateControlledByRange').on('input', function() {
      //         $('#rangeControlledByDate').prop('valueAsNumber', $.prop(this, 'valueAsNumber'));
      //     });

      //     $('#rangeControlledByDate').on('input', function() {
      //         $('#dateControlledByRange').prop('valueAsNumber', $.prop(this, 'valueAsNumber'));
      //     });

      //   });
      // }
    };
  });



