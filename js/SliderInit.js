function SliderInit(sSelector) {

  var i = this;

  i.objects = $(sSelector);
  i.wrap = i.objects.find('.objectSlider__item');
  i.img = i.wrap.find('.slide__img');
  i.prev = i.objects.find('.slideNav__btn_prev');
  i.next = i.objects.find('.slideNav__btn_next');
  i.slide = i.objects.find('.slide__head');

  i.cover = function () {
   $(i.wrap).each(function () {

    var img = $(this).find('.slide__img'),
     src = img.attr('src');

    $(this).css({ 'background-image': 'url(' + src + ')'
                  ,'background-size': 'cover',
                  'background-position': 'center' } );

   } );

   i.img.hide();

  };
  i.showSlide = function() {
    var slide = $(this);
    

  }

	//$(window).ready(i.cover);
  i.slide.click(i.showSlide);

}