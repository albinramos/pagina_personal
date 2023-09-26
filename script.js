$(document).ready(function()
{
    /*   $("header").click(function()
		{
				window.alert("has clickado en el header")
			}) */

            $('.img_p_portfolio').hover(function()
    
            {
        
                $(this).children('div').css({'opacity':1,'transition':'2s'})
        
                $(this).children('.imagenesaire').css({'transform': 'scale(1.2)','transition':'2s'})
        
            },
            function()
            {
        
                $(this).children('div').css({'opacity':0,'transition':'2s'})
        
                $(this).children('.imagenesaire').css({'transform': 'scale(1)','transition':'2s'})
        
            })

    var desplegado=0

    $('.fa-bars').click(function()
    {
        
        /* aqui estoy desplegado */
        $('nav>ul').slideDown(500)

        $('.fa-bars').hide()

        $('.fa-x').show()

        desplegado = 1
    })

    $('.fa-x').click(function()
    {
        /* aqui estoy oculto */

        $('nav>ul').slideUp(500)

        $('.fa-x').hide()

        $('.fa-bars').show()

        desplegado = 0


    })

    $('.bxs-chevron-up').click(function()
    {
        $('html').animate({'scrollTop':'0px'},1000)


    })

    $('.bxs-chevron-up').hide()

    $(window).scroll(function()
    {

        if($('html').scrollTop()>300)
        {
           $('.bxs-chevron-up').fadeIn(1000)     
        }
        else
        {
            $('.bxs-chevron-up').fadeOut(1000) 
        }

    })

    var myIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000);
    }

})