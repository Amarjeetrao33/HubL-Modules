     /** 
 	 * Mobile Nav
 	 *
 	 * Toggle Side Menu - Left or Right
 	 */

	// Prepend a mobile icon to the header
	$(".custom-menu-primary").after('<a class="mobile-icon" id="click-desktop"><span></span></a>');
    
     $(document).ready(function(){
         $( ".mobile-icon" ).click(function() {
           $(".side-menu").addClass('show');
           $('.mobile.custom-menu-primary').removeClass('custom-menu-primary');
            $('.body-container-wrapper').addClass('decreas-width');
           // $('main').addClass('decreas-width');
           // $('footer').addClass('decreas-width');
         });
         $( "#close" ).click(function() {
           $(".side-menu").removeClass('show');
            $('.body-container-wrapper').removeClass('decreas-width');
           // $('main').removeClass('decreas-width');
           // $('footer').removeClass('decreas-width');
         });
         $('#clientloadmore').click(function (e) {
             e.preventDefault();
            $('#logolist li:hidden').css('display', 'inline-block');
            if ($('#datalist li').length == $('#datalist li:visible').length) {
                $('#clientloadmore').hide();
            }
        });
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
      });
      
