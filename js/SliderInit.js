function SliderInit(sSelector) {

  var i = this;

  i.objects = $(sSelector);
  i.object = i.objects.find('.objectSlider__item');
  i.wrap = i.object.find('.slide__bg')
  i.img = i.object.find('.slide__img');
  i.prev = i.objects.find('.slideNav__btn_prev');
  i.next = i.objects.find('.slideNav__btn_next');
  i.slide = i.objects.find('.slide__head');

  i.cover = function () {
   $(i.object).each(function () {

    var img = $(this).find('.slide__img')
        ,src = img.attr('src')
        ,wrap = $(this).find('.slide__bg')
        ;

    wrap.css({ 'background-image': 'url(' + src + ')' } );

   } );

   //i.img.hide();

  };
  i.showSlide = function() {
    var slide = $(this);
    
    slide.closest('.objectSlider__item').addClass('opened');
  }

	//$(window).ready(i.cover);
  i.slide.click(i.showSlide);

}