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

  var changeImage2 = function() {
    $('.mp-shown').removeClass('mp-shown');
    console.log($('#mp-slider').val());
    $($('.mp-img')[$('#mp-slider').val()-1]).addClass('mp-shown');
  };
  var styleSlider = $('#mp-slider').bootstrapSlider({
    formatter: function(value) {
      return "alpha/beta value: 1e" + value;
    }
  }).on('slide', changeImage2);
});
