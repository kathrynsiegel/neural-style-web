$(document).ready(function() {
  var changeImage = function() {
    $('.multi-style-shown').removeClass('multi-style-shown');
    $($('.multi-style-img')[$('#multi-style-slider').val()/10]).addClass('multi-style-shown');
  };
  var styleSlider = $('#multi-style-slider').bootstrapSlider({
      formatter: function(value) {
        return value + '% Van Gogh, ' + (100-value) + "% Picasso";
      }
  }).on('slide', changeImage);
});
