$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let servicio = $('#servicio').offset().top,
        sobreNosotros = $('#sobreNosotros').offset().top,
        promociones = $('#promociones').offset().top;
        

    window.addEventListener('resize', function(){
        let servicio = $('#servicio').offset().top,
        sobreNosotros = $('#sobreNosotros').offset().top,
        promociones = $('#promociones').offset().top;
        
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-servicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -100
        },600);
    });

    $('#enlace-sobreNosotros').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: sobreNosotros -100
        },600);
    });

    $('#enlace-promociones').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: promociones -100
        },600);
    });

   
});