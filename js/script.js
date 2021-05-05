
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/arrow_l.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/carousel/arrow_r.png"></button>',
        responsive: [
                {
                    breakpoint: 992,
                    settings:{
                        dots: true,
                        arrows: false

                    }

                }

        ]

    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    $('.catalog-item__link').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault()
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })

    $('.catalog-item__back').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault()
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })


    //modal


    $('[data-modal=recall]').on('click', function(){
        $('.overlay, #recall').fadeIn('slow');
    });

    $('.modal__close').on('click', function(){
        $('.overlay, #recall, #order, #thanks').fadeOut('slow');
    });


    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    })


    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type:"POST", 
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('#recall, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;


    });

    //scroll

    $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
        $('.pageup').fadeIn();
        } else {
        $('.pageup').fadeOut();
    }

    });


  });