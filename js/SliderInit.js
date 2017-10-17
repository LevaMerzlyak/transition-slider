function SliderInit(sSelector) {

    var i = this;

    i.objects = $(sSelector);
    i.slide   = i.objects.find('.slide__article');
    i.length  = i.slide.length;
    i.item    = i.objects.find('.objectSlider__item');

    //Controls
    i.prev = i.objects.find('.slideNav__btn_prev');
    i.next = i.objects.find('.slideNav__btn_next');

    //Slides init
    i.init = function () {

        for (var j = 0; j < i.length; j++) {

            var slide       = i.slide.eq(j)
                ,src        = slide.find('.slide__img').attr('src')
                ,head       = slide.find('.slideArt__head').html()
                ,item       = i.item.eq(j)
                ,wrap       = item.find('.slide__bg')
                ,coverHead  = item.find('.slideHead')
                ;

            wrap.css({ 'background-image': 'url(' + src + ')' } );
            coverHead.html(head);

        }

    }
    
    //i.slide.click(i.showSlide);

};