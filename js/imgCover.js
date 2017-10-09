function ImgCover(sSelector) {

  var i = this;

  i.articles = $(sSelector);
  i.wrap = i.articles.find('.objectSlider__item');
  i.img = i.wrap.find('.slide__img');

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

	$(window).ready(i.cover);

}