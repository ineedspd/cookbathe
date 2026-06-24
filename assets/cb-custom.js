/* mobile return script */
  jQuery('.return_menu_link').click(function(e){    
    e.preventDefault();
    var level = jQuery(this).attr('data-level');    
    if(level == '0'){
        jQuery('body').removeClass('mega_menu_body');
        jQuery('nav #navbar').removeClass('open_collapse');
        jQuery('.full_navbar_block ul li.nav-item').removeClass('active_item');       
        jQuery('ul li a.submenu-toggle').removeClass('active_link');
        jQuery('ul li .mega_menu').removeClass('mega_menu_opened');         
      
    }else if(level == '1'){
      jQuery(this).attr('data-level','0');
      // jQuery('.nav-item').find('.mega_menu').removeClass('mega_menu_active');
      var id = jQuery('.mega_menu_opened .sub_menu_child.show').attr('data-target');
      jQuery('.sub_sub_menu').removeClass('active');
      // console.log('sub_sub_menu active removed',jQuery('.sub_sub_menu'));
      jQuery('ul li.sub_menu_item').removeClass('show active');
      jQuery('.mega_menu_opened .sub_menu_child.show').removeClass('show');
      jQuery('#'+id).removeClass('show');
      jQuery('.mega_menu_label').addClass('d-none');
      
    }else if(level == '2'){
      jQuery(this).attr('data-level','1')      
      jQuery('.style_one_center_block').removeClass('active');
      var id = jQuery('.style_one_center_block div.show').attr('id');
      jQuery('.style_one_center_block div.show').removeClass('show');     
      jQuery('.mega_menu_label').text('Shop by');
      jQuery('.style_one_center_block #'+id).removeClass('show active');
            
    }else if(level == '3'){
      jQuery(this).attr('data-level','2')      
      jQuery('.style_one_right_block').removeClass('active');
      var id = jQuery('.style_one_right_block div.show').attr('id');
      jQuery('.style_one_right_block div.show').removeClass('show');
      var name = jQuery('.mega_menu_left_block ul li.active').attr('data-name');     
      jQuery('.mega_menu_label').html('Shop by <strong>'+name+'</strong>');
      jQuery('.style_one_right_block #'+id).removeClass('show active');
      
    }else if(level == '2.0'){
      jQuery(this).attr('data-level','1');  
      jQuery('.mega_menu_label').text('Shop by');
      var id = jQuery('.price_five_right_block div.show').attr('id');
      jQuery('.price_five_right_block,.price_type_listing .price_type_card').removeClass('active');    
      jQuery('.price_five_right_block #'+id).removeClass('show active');
      
    }else if(level == '3.0'){
      jQuery(this).attr('data-level','1');  
      jQuery('.mega_menu_label').text('Shop by');
      jQuery('.color_four_backside_listing .color_free_card.bg_cover').removeClass('active');
      var id = jQuery('.color_four_sub_listing.active').attr('id');
      jQuery('.color_card ,color_free_card , .color_four_left_block, .color_four_right_block').removeClass('active');
      jQuery('.color_four_right_block #'+id).removeClass('show active');
    }else if(level == '4.0'){
      jQuery(this).attr('data-level','1');      
      jQuery('.mega_menu_label').text('Shop by');
      var id = jQuery('.style_category_sub_listing.active').attr('style-data-target');
      jQuery('.style_category_card , .style_six_left_block,.style_six_right_block').removeClass('active');
      jQuery('.style_six_right_block #'+id).addClass('show active');
    }
    e.stopImmediatePropagation();
    return false;
  });

  jQuery('.mega_menu_left_block ul li.sub_menu_item svg').click( function(){
    jQuery('.nav-item').find('.mega_menu').addClass('mega_menu_active');
    jQuery('.return_menu_link').attr('data-level','1');
    jQuery(this).parent().addClass('show active');
    var id = jQuery(this).parent().attr('data-target');
    var name = jQuery(this).parent().attr('data-name');
    jQuery(this).parent().addClass('active');
    jQuery('.mega_menu_label').removeClass('d-none');
    // jQuery('.mega_menu_label').text('Shop by '+name);
    jQuery('#'+id).addClass('show');
    return false;
  });
  jQuery('.sub_menu_child_inner .room_one_listing ul li svg').click(function(){
      jQuery('.return_menu_link').attr('data-level','2');
      var id = jQuery(this).parent().attr('room-data-target');
      var name_1 = jQuery('.mega_menu_left_block ul li.active').attr('data-name');
    //  var name_2 = jQuery(this).parent().attr('data-name');
      jQuery('.mega_menu_label').html('Shop by <strong>'+name_1+'</strong>');
      jQuery(this).parent().addClass('active');
      jQuery('.style_one_center_block').addClass('active');
      jQuery('.style_one_center_block #'+id).addClass('show active');    
  });
  jQuery('.sub_menu_child_inner .room_one_sub_listing ul li svg').click(function(){
      jQuery('.return_menu_link').attr('data-level','3');
      var id = jQuery(this).parent().attr('room-sub-data-target');
      var name_1 = jQuery('.mega_menu_left_block ul li.active').attr('data-name');
      var name_2 = jQuery('.sub_menu_child_inner .room_one_listing ul li.active').attr('data-name');
     // var name = jQuery(this).parent().attr('data-name');
      jQuery('.mega_menu_label').html('Shop by <strong>'+name_1+' / '+name_2+'</strong>');
      jQuery('.style_one_right_block').addClass('active');
      jQuery('.style_one_right_block #'+id).addClass('show active');    
  });

  jQuery('.price_type_card').click(function(){
    jQuery('.return_menu_link').attr('data-level','2.0');
    jQuery(this).addClass('active');
    var name = jQuery(this).attr('data-name');
    jQuery('.mega_menu_label').html('Shop by <strong>'+name+' </strong>');
    var id = jQuery(this).attr('price-data-target');
    jQuery('.price_five_right_block').addClass('active');
    jQuery('.price_five_right_block #'+id).addClass('show active'); 
  });

  jQuery('.color_card').click(function(){
    jQuery('.return_menu_link').attr('data-level','3.0');
    jQuery(this).addClass('active');
    var name = jQuery(this).attr('data-name');
    jQuery('.mega_menu_label').html('Shop by <strong>'+name+' </strong>');
    var id = jQuery(this).attr('color-data-target');
    jQuery('.color_four_left_block,.color_four_right_block').addClass('active');
    jQuery('.color_four_right_block #'+id).addClass('show active'); 
  });

  jQuery('.style_category_card').click(function(){
    jQuery('.return_menu_link').attr('data-level','4.0');
    jQuery(this).addClass('active');
    var name = jQuery(this).attr('data-name');
    jQuery('.mega_menu_label').html('Shop by <strong>'+name+' </strong>');
    var id = jQuery(this).attr('style-data-target');
    jQuery('.style_six_left_block,.style_six_right_block').addClass('active');
    jQuery('.style_six_right_block #'+id).addClass('show active');    
  });
/* end mobile return script */

jQuery('.navbar_top_mobile_inner>.search_btn').click(function () {
    $(this).toggleClass('search_active');
    $('.mobile_search_popup').toggleClass('search_open');
    $('body').toggleClass('search_popup_open');
    $('body').removeClass('navbar_open');
    $('.full_navbar_block .navbar-collapse').removeClass('show');
    $('button.navbar-toggler').removeClass('collapsed');
    $('button.navbar-toggler').attr('aria-expanded','false');
    $('#cart-notification').removeClass('active');
  
});
jQuery('.navbar-toggler').click(function () {
    $('body').toggleClass('navbar_open');
    $('.mobile_search_popup').removeClass('search_open');
    $('.search_btn').removeClass('search_active');
    $('body').removeClass('search_popup_open');
    $('#cart-notification').removeClass('active');
    if($(this).attr('aria-expanded') == 'false'){
        // jQuery('.return_menu_link').attr('data-level','0');
        jQuery('body').removeClass('mega_menu_body');
        jQuery('nav #navbar').removeClass('open_collapse');
        jQuery('.full_navbar_block ul li.nav-item').removeClass('active_item');       
        jQuery('ul li a.submenu-toggle').removeClass('active_link');
        jQuery('ul li .mega_menu').removeClass('mega_menu_opened');      
    }

    jQuery(this).attr('data-level','0');
    jQuery('.mega_menu_label').addClass('d-none');
    jQuery('.mega_menu_label').text('Shop by');
    jQuery('.style_one_center_block,.style_one_right_block,.price_five_right_block,.color_four_left_block,.color_four_right_block,.style_six_right_block,.style_six_left_block').removeClass('active');
    jQuery('.room_one_sub_listing,.room_one_sub_inner_listing,.price_type_sub_listing,.color_four_sub_listing,.style_category_sub_listing').removeClass('show active');
    jQuery('.sub_menu_child').removeClass('show');
});



if(jQuery(window).width()> 991){
jQuery('.navbar .navbar-nav .nav-item > .submenu-toggle').mouseenter(function(){
  $this = jQuery(this);     
  $this.parent('.nav-item').find('.mega_menu').addClass('mega_menu_opened');
  console.log("mega_menu_opened 2")
  jQuery('.full_navbar_block .navbar-collapse ').addClass('open_collapse');   
  $this.parent('.nav-item').addClass('active_item');
  jQuery('.mega_menu_right_block .default_mega_img').removeClass('d-none');
  $this.addClass('active_link');
  jQuery('body').addClass('mega_menu_body');
  jQuery('.sub_menu_child').removeClass('show');
  jQuery('.sub_menu_item,.sub_menu_child').removeClass('active');
  jQuery('.default_mega_img').removeClass('d-none');
}); 
}
else
{
    jQuery('.navbar .navbar-nav .nav-item > .submenu-toggle').on('click', function(event) {
  if (jQuery(event.target).hasClass('smt_icon') || jQuery(event.target).closest('.smt_icon').length) {
    // If the .smt_icon span or any of its children are clicked, perform the menu actions
    event.preventDefault(); // Prevent redirect
    let $this = jQuery(this);     
    $this.parent('.nav-item').find('.mega_menu').addClass('mega_menu_opened');
    console.log("mega_menu_opened 2");
    jQuery('.full_navbar_block .navbar-collapse').addClass('open_collapse');   
    $this.parent('.nav-item').addClass('active_item');
    jQuery('.mega_menu_right_block .default_mega_img').removeClass('d-none');
    $this.addClass('active_link');
    jQuery('body').addClass('mega_menu_body');
    jQuery('.sub_menu_child').removeClass('show');
    jQuery('.sub_menu_item,.sub_menu_child').removeClass('active');
    jQuery('.default_mega_img').removeClass('d-none');
    document.getElementById('navbar').scrollTop = 0;
  }
  // If not .smt_icon, do nothing and allow the default anchor behavior
});


  jQuery('.single_submenu .sub_menu_item svg').on('click', function(event) {
    var sub_menu_item = jQuery(this).parent(".sub_menu_item");
    sub_menu_item.find("ul").addClass("active");
    jQuery('.return_menu_link').attr('data-level','1');
  })
}

  jQuery('.navbar .navbar-nav .nav-item > .submenu-toggle').mouseleave(function(e){
    $this = jQuery(this);
  });
 
if(window.innerWidth >= 992){
  jQuery('.navbar-nav li.active_item').mousemove(function(e){
    window.x = e.pageX;
    window.y = e.pageY;
    $this = jQuery(this);
    jQuery('.mega_menu').removeClass('mega_menu_opened');
    $this.find('.mega_menu').addClass('mega_menu_opened');    
    const mouse_position = jQuery(this).position();
  });

  jQuery('.navbar-nav li').mouseleave(function(e){
    window.x = e.pageX;
    window.y = e.pageY;
    $this = jQuery(this);
    $this.find('.mega_menu').removeClass('mega_menu_opened');
    // jQuery('body').removeClass('mega_menu_body');
    const mouse_position = jQuery(this).position();
    $this.removeClass('active_item');
    $this.children('a').removeClass('active_link');
    $this.find('.sub_menu_child').removeClass('show');
    $this.find('.sub_menu_child').removeClass('active');
  });
}  

//
jQuery(document).ready(function() {
  if(window.innerWidth >= 992){
    if(jQuery('.sub_menu .sub_menu_item').mouseenter(function() {
      jQuery('.return_menu_link').attr('data-level','1');
        var navTarget = jQuery(this).attr("data-target");        
        jQuery('.sub_menu_child,.room_one_sub_listing,.price_type_sub_listing,.color_four_sub_listing ').removeClass('show');
        jQuery('.sub_menu_child,.sub_menu_child ul li a,.room_one_sub_listing,.room_one_sub_listing ul li a').removeClass('active');
        jQuery('.color_card,.color_free_card,.color_four_sub_listing ,.color_four_right_block,.color_four_left_block ,.color_four_head ,.price_type_card ,.price_five_left_block ,.price_five_right_block ,.price_type_sub_listing,.style_one_left_block, .style_one_center_block, .style_one_right_block,.style_six_right_block,.style_six_left_block,.style_category_card').removeClass('active');
        jQuery('.style_one_center_block').removeClass('active-center');
        jQuery('.room_step_one_img, .room_step_two_img').removeClass('d-none');
        jQuery('.color_default_img').removeClass('d-lg-none');
        //jQuery('.style_one_left_block, .style_one_center_block').removeClass('active');
      
        jQuery('.sub_menu .sub_menu_item').removeClass('active').trigger('classChange');
        jQuery('.default_mega_img').addClass('d-none');
        jQuery(this).addClass('active');
        jQuery('#' + navTarget).addClass('show');
        setTimeout(function() {
            jQuery('#' + navTarget).addClass('active').trigger('classChange');
        }, 100)
    }));    
   // if(jQuery('.sub_menu .sub_menu_item').mouseleave(function() {
    //   jQuery('.sub_menu_child').removeClass('show');
     //  jQuery('.sub_menu_item,.sub_menu_child').removeClass('active');
      // jQuery('.default_mega_img').removeClass('d-none');
    //  }));
    if(jQuery('.room_one_listing ul li a').mouseenter(function() {
        var styleTarget = jQuery(this).attr("room-data-target");
        jQuery('.room_one_sub_listing').removeClass('show');
        jQuery('.room_one_sub_listing').removeClass('active');
        jQuery('.room_one_sub_listing ul li a').removeClass('active');
        jQuery('.room_step_two_img').removeClass('d-none');
        jQuery('.style_one_left_block, .style_one_center_block, .style_one_right_block').removeClass('active');
        jQuery('.style_one_center_block').removeClass('active-center');
      
        jQuery('.room_one_listing ul li a').removeClass('active');
        jQuery('.style_one_left_block, .style_one_center_block').addClass('active');
        jQuery('.room_step_one_img').addClass('d-none');
        jQuery('.room_one_sub_inner_listing').removeClass('show');
        jQuery(this).addClass('active');
        jQuery('#' + styleTarget).addClass('show');
        setTimeout(function() {
            jQuery('#' + styleTarget).addClass('active');
        }, 100)
    }));
 
    if(jQuery('.room_one_sub_listing ul li a').mouseenter(function() {
        var styleTarget = jQuery(this).attr("room-sub-data-target");
        jQuery('.room_one_sub_inner_listing').removeClass('show');
        jQuery('.room_one_sub_inner_listing').removeClass('active');
        jQuery('.room_one_sub_listing ul li a').removeClass('active');
        jQuery('.room_step_two_img').removeClass('d-none'); 
        jQuery('.style_one_center_block').removeClass('active-center');
        jQuery('.style_one_right_block').removeClass('active');
      
        jQuery(this).addClass('active');
        if(jQuery('#' + styleTarget+' ul li').length != 0){
          jQuery('.style_one_left_block, .style_one_center_block, .style_one_right_block').addClass('active');
          jQuery('.style_one_center_block').addClass('active-center');
          jQuery('.room_step_one_img, .room_step_two_img').addClass('d-none');
          jQuery('#' + styleTarget).addClass('show');
          setTimeout(function() {
              jQuery('#' + styleTarget).addClass('active');
          }, 100)
        }  
    }));

    if(jQuery('.price_type_listing .price_type_card').click(function() {
        var styleTarget = jQuery(this).attr("price-data-target");
        jQuery('.price_type_sub_listing').removeClass('show');
        jQuery('.price_type_sub_listing').removeClass('active');
        jQuery('.price_type_listing .price_type_card').removeClass('active');
        jQuery('.price_five_left_block, .price_five_right_block').addClass('active');
        jQuery(this).addClass('active');
        jQuery('#' + styleTarget).addClass('show');
        setTimeout(function() {
            jQuery('#' + styleTarget).addClass('active');
        }, 100)
    }));

    if(jQuery('.color_four_listing .color_card').click(function() {
      var styleTarget = jQuery(this).attr("color-data-target");
      jQuery('.color_four_sub_listing').removeClass('show');
      jQuery('.color_four_sub_listing').removeClass('active');
      jQuery('.color_four_listing .color_card').removeClass('active');
      jQuery('.color_four_left_block, .color_four_right_block').addClass('active');
      jQuery('.color_default_img').addClass('d-lg-none');
      jQuery(this).addClass('active');
      jQuery('#' + styleTarget).addClass('show');
      setTimeout(function() {
          jQuery('#' + styleTarget).addClass('active');
      }, 100)
  }));
    
    if(jQuery('.style_category_listing .style_category_card').click(function() {
        var styleTarget = jQuery(this).attr("style-data-target");
        jQuery('.style_category_sub_listing').removeClass('show');
        jQuery('.style_category_sub_listing').removeClass('active');
        jQuery('.style_category_listing .style_category_card').removeClass('active');
        jQuery('.style_six_left_block, .style_six_right_block').addClass('active');
        jQuery(this).addClass('active');
        jQuery('#' + styleTarget).addClass('show');
        setTimeout(function() {
            jQuery('#' + styleTarget).addClass('active');
        }, 100)
    }));
  }           

  if(jQuery('.color_four_listing .color_card').click(function() {
        var styleTarget = jQuery(this).attr("color-data-target");
       
        jQuery('.color_free_card').removeClass('show');
        jQuery('.color_free_card').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('#' + styleTarget).addClass('show');
        setTimeout(function() {
            jQuery(`.color_free_card.bg_cover[color-data-target="${styleTarget}"]`).addClass('active');
        }, 100)
    }));
  jQuery('li.sub_menu_item[data-target="colour-submenu"]').on('classChange',function(e){
    
    setTimeout(function(){
        let classes = jQuery('li.sub_menu_item[data-target="colour-submenu"]').attr('class').split(' ');
            
        if(jQuery.inArray('active',classes) == -1)
        {
            jQuery('.color_free_card').removeClass('active');
            jQuery('.color_card').removeClass('active');
            jQuery('.color_four_right_block').removeClass('active');
            jQuery('.color_four_sub_listing').removeClass('active show');
        }
    },200);
    
});
});
/* form validations */  
  jQuery(document).ready(function() {
    jQuery('.contact-form').submit(function(e) {       
        var $form = $(this);
        var is_valid = true;
        var email_filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        var name_filter = /^[a-zA-Z]+$/;
        var number_filter = /^[0-9]+$/;
        var number_limit = /^\d{10,13}$/;
        jQuery('.sform_filled_error').css('border', '1px solid #ebeeee');
        $form.find('.sform_filled_error').removeClass('sform_filled_error');
        jQuery('.spr-form-message').remove();
        jQuery('.form__message').remove();
        jQuery('.note.note--success').remove();
        $form.find('.required').each(function() {
            if (jQuery(this).val() == '') {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });
        $form.find('.email').each(function() {
            if (jQuery(this).val() != '' && !(jQuery(this).val()).match(email_filter)) {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });
        $form.find('.character').each(function() {
            if (jQuery(this).val() != '' && !(jQuery(this).val()).match(name_filter)) {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });
        $form.find('.number').each(function() {
            if (jQuery(this).val() != '' && !(jQuery(this).val()).match(number_filter)) {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });
        $form.find('.phone_limit').each(function() {
            if (jQuery(this).val() != '' && !(jQuery(this).val()).match(number_limit)) {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });
        $form.find('.fixlenght').each(function(i) {
            if (jQuery(this).val() != '') {
                if (jQuery(this).val().length != 10) {
                    jQuery(this).addClass('sform_filled_error');
                    is_valid = false;
                }
            }
        });
        $form.find('.checkbox').each(function(i) {
            var term = jQuery('#agree').prop('checked');
            if (!term) {
                jQuery(this).addClass('sform_filled_error');
                jQuery('.checkbox-error').html('You must agree to terms and conditions before submit the form');
                jQuery('.checkbox-error').css('color', 'red');
                is_valid = false;
            } else {
                jQuery(this).removeClass('sform_filled_error');
                jQuery('.checkbox-error').html('');
            }
        });
        
        if (!is_valid) {
            e.preventDefault();
            $form.prepend('<div class="spr-form-message spr-form-message-error" style="color: red;padding: 10px;">Not all the fields have been filled out correctly!</div>');
            jQuery('html,body').animate({
                scrollTop: $form.offset().top - 150
            }, 200);
            jQuery('.sform_filled_error').css('border-bottom', '1px solid red');   
             console.log('submit faile');    
            e.stopImmediatePropagation();                    
        } else {          
          if(jQuery('body.page-contact #ContactForm').length != 0){
          	 return true;
          }else if(jQuery('body.product  #enquireModal').length){          
             setCookie('popup', 'enquire-modal');             
             return true;
          }else if(jQuery('#mc-embedded-subscribe-form').length != 0){            
            return true;
          }else{
             e.preventDefault();
             return false;
          } 
         e.stopImmediatePropagation();         
        }		
    });
    jQuery('.custom-account-form').submit(function(e) {        
        var $form = $(this);
        var is_valid = true;
        var email_filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        var name_filter = /^[a-zA-Z]+$/;
        var number_filter = /^[0-9]+$/;
        var number_limit = /^\d{10,13}$/;
        jQuery('.sform_filled_error').css('border', '1px solid #ebeeee');
        $form.find('.sform_filled_error').removeClass('sform_filled_error');
        jQuery('.spr-form-message').remove();
        jQuery('.form__message').remove();
        jQuery('.note.note--success').remove();
        $form.find('.required').each(function() {
            if (jQuery(this).val() == '') {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });

        $form.find('.email').each(function() {
            if (jQuery(this).val() != '' && !(jQuery(this).val()).match(email_filter)) {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });

        $form.find('.character').each(function() {
            if (jQuery(this).val() != '' && !(jQuery(this).val()).match(name_filter)) {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });

        $form.find('.number').each(function() {
            if (jQuery(this).val() != '' && !(jQuery(this).val()).match(number_filter)) {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });
        $form.find('.phone_limit').each(function() {
            if (jQuery(this).val() != '' && !(jQuery(this).val()).match(number_limit)) {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });

        $form.find('.fixlenght').each(function(i) {
            if (jQuery(this).val() != '') {
                if (jQuery(this).val().length != 10) {
                    jQuery(this).addClass('sform_filled_error');
                    is_valid = false;
                }
            }
        });
        $form.find('.checkbox').each(function(i) {
            var term = jQuery('#agree').prop('checked');
            if (!term) {
                jQuery(this).addClass('sform_filled_error');
                jQuery('.checkbox-error').html('You must agree to terms and conditions before submit the form');
                jQuery('.checkbox-error').css('color', 'red');
                is_valid = false;
            } else {
                jQuery(this).removeClass('sform_filled_error');
                jQuery('.checkbox-error').html('');
            }
        });
        
        if (!is_valid) {
            e.preventDefault();
            if(jQuery('body.customers-login').length == 1){
               jQuery('body.customers-login .login_form form #error-message').after('<div class="spr-form-message spr-form-message-error" style="color: red;padding: 10px;">Not all the fields have been filled out correctly!</div>'); 
            }else if(jQuery('body.customers-register').length == 1){
              jQuery('body.customers-register form .title_block').after('<div class="spr-form-message spr-form-message-error" style="color: red;padding: 10px;">Not all the fields have been filled out correctly!</div>');
            }else{
              $form.prepend('<div class="spr-form-message spr-form-message-error" style="color: red;padding: 10px;">Not all the fields have been filled out correctly!</div>');
            }
              jQuery('html,body').animate({
                scrollTop: $form.offset().top - 150
            }, 200);
            jQuery('.sform_filled_error').css('border-bottom', '1px solid red');   
                 
            e.stopImmediatePropagation();                    
        } else {       
          return true;                
        }		
    });
    jQuery('.subscribe-form').submit(function(e) {
        //e.preventDefault();
        var $form = $(this);
        var is_valid = true;
        var email_filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        var name_filter = /^[a-zA-Z]+$/;        
        jQuery('.sform_filled_error').css('border', '1px solid #ebeeee');
        $form.find('.sform_filled_error').removeClass('sform_filled_error');
        jQuery('.spr-form-message').remove();
        jQuery('.form__message').remove();
        jQuery('.note.note--success').remove();
        $form.find('.required').each(function() {
            if (jQuery(this).val() == '') {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });

        $form.find('.email').each(function() {
            if (jQuery(this).val() != '' && !(jQuery(this).val()).match(email_filter)) {
                jQuery(this).addClass('sform_filled_error');
                is_valid = false;
            }
        });        
        
        if (!is_valid) {
            e.preventDefault();
            $form.prepend('<div class="spr-form-message spr-form-message-error" style="color: red;padding: 10px;">Not all the fields have been filled out correctly!</div>');
            jQuery('html,body').animate({
                scrollTop: $form.offset().top - 150
            }, 200);
            jQuery('.sform_filled_error').css('border-bottom', '1px solid red');   
            //return false;     
            e.stopImmediatePropagation();                    
        } else {  
          //  e.preventDefault();
            console.log('true');
            return true;          
        }		
    });
    jQuery(".phone_limit").keydown(function(event) {
        k = event.which;
        if ((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 9) {
            if (jQuery(this).val().length == 15) {
                if (k == 8) {
                    return true;
                } else {
                    event.preventDefault();
                    return false;
                }
            }
        } else {
            event.preventDefault();
            return false;
        }
    });

    var url = window.location.href;
    var url1 = url.split('#');
    var popup = getCookie('popup');
    if (url1[1] != 'ContactForm' ) {
        if (popup == 'enquire-modal') {
            jQuery('#enquireModal').modal('show');
        }      	
    }
    jQuery('button.btn-close').click(function() {
        if (popup != '') {
            var url = window.location.href;
            var url2 = url.split('?');
            setCookie('popup', popup, -3600);
            window.location.replace(url2[0]);
        }
    });
 });   
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
$(document).ready(function () {

  const $addonDropdowns = $(".addonproduct");
  const $variantSelect = $("#ProductSelect-product-template");

  const $activeSlide = $(".gallery_main .swiper-slide-active");
  const $activeBgCard = $activeSlide.find(".gallery_main_card.bg_cover");
  const $activeThumb = $(".gallery_thumbs .swiper-slide-active .gallery_thumb_card");

  if (!$activeBgCard.length) return;

  /* -----------------------------------------
     STORE ORIGINAL PRODUCT IMAGE
  ----------------------------------------- */
  let originalImage =
    $activeBgCard.attr("data-bg") ||
    $activeBgCard
      .css("background-image")
      .replace(/^url\(["']?(.+?)["']?\)$/, "$1");

  let originalThumb =
    $activeThumb.length
      ? $activeThumb
          .css("background-image")
          .replace(/^url\(["']?(.+?)["']?\)$/, "$1")
      : null;

  /* -----------------------------------------
     HELPERS
  ----------------------------------------- */

  function setImage(image) {
    if (!image) return;
    $activeBgCard.css("background-image", `url(${image})`);
    if ($activeThumb.length) {
      $activeThumb.css("background-image", `url(${image})`);
    }
  }

  function getVariantImage() {
    return $variantSelect.find("option:selected").data("image") || null;
  }

  function getAddonImage() {
    let image = null;
    $addonDropdowns.each(function () {
      const opt = $(this).find("option:selected");
      if (opt.val() && opt.data("image")) {
        image = opt.data("image");
      }
    });
    return image;
  }

  function updateImageFromVariant() {
    const variantImage = getVariantImage();
    if (variantImage) {
      setImage(variantImage);
    } else {
      setImage(originalImage);
      if (originalThumb) {
        $activeThumb.css("background-image", `url(${originalThumb})`);
      }
    }
  }

  /* -----------------------------------------
     INITIAL LOAD → VARIANT IMAGE
  ----------------------------------------- */
  // setTimeout(updateImageFromVariant, 0);

  /* -----------------------------------------
     ADDON CHANGE → TEMP IMAGE ONLY
  ----------------------------------------- */
  $addonDropdowns.on("change", function () {
    const addonImage = getAddonImage();

    if (addonImage) {
      setImage(addonImage);
    } else {
      updateImageFromVariant();
    }
  });

  /* -----------------------------------------
     VARIANT CHANGE → ALWAYS OVERRIDE
  ----------------------------------------- */
  $variantSelect.on("change", function () {
    updateImageFromVariant();
  });

});


// 26-11-25 changes
function updateprice_() {
  var saleprice_ = 0;
  var price_ = 0;
  var sku_ = "";
  var selectedOption = jQuery(".id_select option:selected");
  // if (!selectedOption.length) return;
  if(selectedOption.length > 0){
    if (selectedOption.attr("data-price") != undefined) {
      if (selectedOption.attr("data-sale") != 0) {
        saleprice_ = parseFloat(
          selectedOption.attr("data-sale").replace(/,/g, "")
        );
      }
      price_ = parseFloat(
        selectedOption.attr("data-price").replace(/,/g, "")
      );
      sku_ = selectedOption.attr("data-sku");
    } else {
      if (jQuery("#add-to-cart").attr("data-sale") != 0) {
        saleprice_ = parseFloat(
          jQuery("#add-to-cart").attr("data-sale").replace(/,/g, "")
        );
      }
      price_ = parseFloat(
        jQuery("#add-to-cart").attr("data-price").replace(/,/g, "")
      );
      sku_ = jQuery("#add-to-cart").attr("data-sku");
      //console.log("dd-to-cart-price", price_);
    }
  } else {
    if (jQuery("#add-to-cart").attr("data-sale") != 0) {
        saleprice_ = parseFloat(
          jQuery("#add-to-cart").attr("data-sale").replace(/,/g, "")
        );
      }
      price_ = parseFloat(
        jQuery("#add-to-cart").attr("data-price").replace(/,/g, "")
      );
      sku_ = jQuery("#add-to-cart").attr("data-sku");
  }

  jQuery(".addonproduct option:selected").each(function name(params) {
    if (jQuery(this).attr("data-price") != undefined) {
      price_ += parseFloat(jQuery(this).attr("data-price").replace(/,/g, ""));
    }
    if (jQuery(this).attr("data-sale") != undefined) {
      saleprice_ += parseFloat(
        jQuery(this).attr("data-sale").replace(/,/g, "")
      );
    }
  });
  // Format prices
  var formattedPrice = price_.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  var formattedPriceSale = saleprice_.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Update DOM based on available elements
  var hasRegular = jQuery(".price_sale_block .regular_price").length > 0;
  var hasSale = jQuery(".price_sale_block .sale_price").length > 0;

  if (hasRegular && hasSale) {
    // both exist
    if (saleprice_ != 0) {
      jQuery(".price_sale_block .regular_price").text(
        "$" + formattedPriceSale
      );
    }
    jQuery(".price_sale_block .sale_price").text("$" + formattedPrice);
  } else if (hasRegular && !hasSale) {
    // only regular exists — use sale if available, else price
    // var finalPrice = saleprice_ != 0 ? formattedPriceSale : formattedPrice;
    jQuery(".price_sale_block .regular_price").text("$" + formattedPrice);
  }
  jQuery("afterpay-placement").attr("data-amount", price_);
}

document.addEventListener("DOMContentLoaded", function () {

  const variantSelect = document.querySelector("#ProductSelect-product-template");
  const selects = document.querySelectorAll(".variant-select");
  const addToCartBtn = document.querySelector("#add-to-cart");
  const enquireBtn = document.querySelector("#enquire");
  if (!variantSelect || selects.length === 0) return;

  // Extract variant data
  const variants = Array.from(variantSelect.options).map((opt) => {
    const values = opt.dataset.value.split(" / ");
    return {
      available: opt.dataset.available === "true",
      id: opt.value,
      valueString: opt.dataset.value,
      options: values,
      price: opt.dataset.price,
      sale: opt.dataset.sale,
      sku: opt.dataset.sku
    };
  });

  // --------------------------------------------------
  // 🔥 Run ONCE – handles price, sale, sku, cart updates
  // --------------------------------------------------
  variantSelect.addEventListener("change", function () {
    const selected = variantSelect.options[variantSelect.selectedIndex];
    if (!selected) return;

    const vid = selected.value;
    const price = selected.dataset.price;
    const sale = selected.dataset.sale;
    const sku = selected.dataset.sku;

    // Update Add to Cart button
    if (addToCartBtn) {
      addToCartBtn.dataset.id = vid;
      addToCartBtn.dataset.price = price;
      addToCartBtn.dataset.sale = sale;
      addToCartBtn.dataset.sku = sku;
    }

    // Update enquire button
    if (enquireBtn) {
      enquireBtn.dataset.id = vid;
    }
    const skuElement = document.querySelector("#variant-sku");
    if (skuElement) {
      skuElement.textContent = sku;
    }

    // Update visible price fields (optional)
    const priceElement = document.querySelector(".product-price");
    const saleElement = document.querySelector(".product-compare-price");

    if (priceElement) priceElement.textContent = price;
    if (saleElement) saleElement.textContent = sale;
  });

  // --------------------------------------
  // 🔥 Bind cascading dropdown events
  // --------------------------------------
  selects.forEach((select, index) => {
    select.addEventListener("change", () => {
      updateNextOptions(index);
      updateFinalVariant();
      // Price updates
      updateprice_();
    });
  });

  // Trigger first dropdown once
  selects[0].dispatchEvent(new Event("change"));

  function updateNextOptions(index) {
    const chosenValues = [];

    selects.forEach((sel, i) => {
      if (i <= index) chosenValues[i] = sel.value;
    });

    selects.forEach((sel, i) => {
      if (i <= index) return;

      const optionIndex = i;
      const possibleValues = new Set();

      variants.forEach((v) => {
        let valid = true;
        for (let j = 0; j < chosenValues.length; j++) {
          if (v.options[j] !== chosenValues[j]) valid = false;
        }
        if (valid) possibleValues.add(v.options[optionIndex]);
      });

      const oldValue = sel.value;
      sel.innerHTML = "";

      possibleValues.forEach((v) => {
        const opt = document.createElement("option");
        opt.value = v;
        opt.textContent = v;
        sel.appendChild(opt);
      });

      if (possibleValues.has(oldValue)) {
        sel.value = oldValue;
      }
      sel.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }

  function updateFinalVariant() {
    const selectedOptions = Array.from(selects).map((s) => s.value);

    const match = variants.find((v) =>
      v.options.every((opt, i) => opt === selectedOptions[i])
    );

    if (match) {
      // Sync the hidden select
      variantSelect.value = match.id;
      variantSelect.dispatchEvent(new Event("change", { bubbles: true }));

      // ✅ Also directly update the button attribute so cb-custom.js reads correctly
      const btn = document.getElementById("add-to-cart");
      if (btn) {
        btn.setAttribute("data-id", match.id);       // use setAttribute, not dataset
        btn.setAttribute("data-price", match.price);
        btn.setAttribute("data-sale", match.sale);
        btn.setAttribute("data-sku", match.sku);
      }

      if (match.available) {
        $("#add-to-cart").prop("disabled", false).find("span").text("Add to Cart");
      } else {
        $("#add-to-cart").prop("disabled", true).find("span").text("Sold Out");
      }
    }
  }

});
/* cart JS */
  jQuery(document).ready(function() {
    /* var selected = [];
    jQuery('.variant-select').each(function(){
      selected.push(jQuery(this).val());
    })
    jQuery('[data-value="'+selected.join(" / ")+'"]').prop("selected", true).parent().trigger('change')
  */

  jQuery(".addonproduct, .id_select").on("change", function () {
    // updateprice_();
    var selectedOption = jQuery(".id_select option:selected");
    if (selectedOption.length > 0 ){
      var in_stock = selectedOption.attr("data-available");
      if (in_stock == "false") {
        jQuery("#add-to-cart").attr("disabled", "disabled");
        jQuery("#add-to-cart span").text("Sold Out");
      } else {
        jQuery("#add-to-cart").removeAttr("disabled");
        jQuery("#add-to-cart span").text("Add to Cart");
      }
    }
    updateprice_();
  });

  jQuery(document).on(
    "click",
    ".product_addcart button#add-to-cart",
    function () {
      // setTimeout(() => {
        jQuery("#cart-error-msg").remove();
        // ✅ Disable button when clicked
        var $btn = jQuery(this);
        $btn.prop("disabled", true).addClass("loading");
        var $loader = $btn.next(".cart-btn-loader");
        $loader.addClass("active");

        var qty = 1;
        // Tile product: input[type=number]; other: select — both handled
        var $qtyInput  = jQuery("input.quantity__input");
        var $qtySelect = jQuery("select.quantity__input");
        if ($qtyInput.length)       qty = parseInt($qtyInput.val())  || 1;
        else if ($qtySelect.length) qty = parseInt($qtySelect.val()) || 1;
        /*var id = jQuery(this).attr('data-id');
          if(jQuery('[name="id"]').length != 0){
            id =  jQuery('[name="id"]').val();
          } */

        // Scoped fallback: check within same form only
        var form = jQuery(this).closest("form");
        var id = jQuery(this).attr("data-id");
        if (form.find('[name="id"]').length) {
          id = form.find('[name="id"]').val();
        }
        var addonproduct = [];

        // Loop through all addon dropdowns
        jQuery(".addonproduct").each(function () {
          var $select = jQuery(this);
          var variantId = $select.val();
          if (variantId) {
            var $opt = $select.find("option:selected");
            var propText = $opt.data("proptext") || "";

            // Build addon item object
            var addonItem = {
              id: variantId,
              quantity: 1,
            };

            // Add property if available
            if (propText !== "") {
              addonItem.properties = { Property: propText };
            }

            addonproduct.push(addonItem);
          }
        });

        // Push main product last
        var mainItem = {
          id: id,
          quantity: qty,
        };
        addonproduct.push(mainItem);

        let formData = {
          items: addonproduct,
        };

        jQuery.ajax({
          type: "POST",
          url: "/cart/add.js",
          data: JSON.stringify(formData),
          contentType: "application/json",
          dataType: "json",
          success: function (result) {
            jQuery("#cart-error-msg").remove();
            var count = cart_data_count();

            popup_data_get();
            jQuery("cart-notification #cart-notification").addClass("active");
            $("html, body").animate(
              {
                scrollTop: $("cart-notification").offset().top,
              },
              500
            );
            // ✅ Re-enable button after success
            $btn.prop("disabled", false).removeClass("loading");
            $loader.removeClass("active");
          },
          error: function (xhr) {
            // ✅ Handle 422 and any other error responses
            var response = xhr.responseJSON;
            var message = "Something went wrong. Please try again.";

            if (response && response.message) {
              message = response.message;
            } else if (response && response.description) {
              message = response.description;
            }

            // ✅ Show error message below Add to Cart button
            jQuery("#cart-error-msg").remove(); // remove old if exists
            jQuery("#add-to-cart").after(
              '<p id="cart-error-msg" style="color: #c0392b; font-size: 14px; margin-top: 8px;">' +
                message +
              '</p>'
            );

            // ✅ Still update cart count in case partial add happened (422 partial)
            if (xhr.status === 422) {
              popup_data_get();
              cart_data_count();
              jQuery("cart-notification #cart-notification").addClass("active");
              $("html, body").animate(
                {
                  scrollTop: $("cart-notification").offset().top,
                },
                500
              );
            }
            // ✅ Re-enable button after error
            $btn.prop("disabled", false).removeClass("loading");
            $loader.removeClass("active");
          }
        });

        return false;
      
      // }, 2000);
    }
  );
    // 26-11-25 changes ended
    function popup_data_get() {
      jQuery.ajax({
          url: '/cart',                 
          success: function(res){                     
              if(jQuery(res).find('#cart-notification').length){
                var html1 = jQuery(res).find('#cart-notification').html();   
                jQuery('#cart-notification').html(html1); 
                cart_data_count()
              }             
          } 
      });
    }
    
    jQuery(document).on('click', 'button.cart-notification__close.modal__close-button',function(){
      jQuery('cart-notification #cart-notification').removeClass('active');
    });
     cart_data_count();
     function cart_data_count(){
       jQuery('body.product input[type="radio"]:eq(0)').prop('checked',true);
       jQuery.getJSON(`/cart.js`, function(cart) {   
            jQuery('li.nav-item a.cart_link span').html(cart.item_count); 
            jQuery('.navbar_top_mobile_inner a.cart_link span').html(cart.item_count); 
            if(cart.item_count == 0){
              jQuery('#cart-notification').addClass('cart-notification-empty'); 
            }else{
              jQuery('#cart-notification').removeClass('cart-notification-empty');
            }
            return cart.item_count;
        } );
     }
    /*cart update */
    jQuery(document).on('change', 'input.cart-qty-input, select.cart-qty-select',function(){
       var id = jQuery(this).attr('data-id');
       var qty  = parseInt(jQuery(this).val()) || 1;
       var data = {
            "id": id,
            "quantity": qty
      };
      jQuery.ajax({
          type: 'POST',
          url: '/cart/change.js',
          data: JSON.stringify(data),
          contentType: 'application/json',
          dataType: 'json',
          success: function(result){
              jQuery.ajax({
                  url: '/cart',                 
                  success: function(res){
                      if(jQuery(res).find('.cart_items_listing_content').length){
                        var html = jQuery(res).find('.cart_items_listing_content').html();
                        jQuery('.cart_items_listing_content').html(html);
                      }
                      if(jQuery(res).find('#cart-notification').length){
                        var html1 = jQuery(res).find('#cart-notification').html();   
                        jQuery('#cart-notification').html(html1); 
                      }  
                      cart_data_count()                     
                  } 
              });
          } 
      });
   });
    jQuery(document).on('click','#cart-notification .cart_card_content a.remove_product',function(){
       var remove_url = jQuery(this).attr('href');
       jQuery.ajax({
          url:remove_url,                 
          success: function(res){                     
              if(jQuery(res).find('#cart-notification').length){
                var html1 = jQuery(res).find('#cart-notification').html();   
                jQuery('#cart-notification').html(html1); 
              } 
              cart_data_count()
          } 
      });
      return false;
    });
    var wishlist = setInterval(function(){
       if(jQuery('.swym-button-bar.swym-wishlist-button-bar.swym-inject').length == 1){
           jQuery('.swym-button-bar.swym-wishlist-button-bar.swym-inject').remove();
           clearInterval(wishlist);
       } 
    },1000); 
  });  

/* varint change sold out button add */
  jQuery(document).ready(function() {
    jQuery('#variant-data input[type="radio"]').change(function(){
      var in_stock = jQuery(this).attr('data-available');
      if(in_stock == 'false'){
          jQuery('#add-to-cart').attr('disabled','disabled');
          jQuery('#add-to-cart span').text('Sold Out');
      }else{
          jQuery('#add-to-cart').removeAttr('disabled');
          jQuery('#add-to-cart span').text('Add to Cart');
      }
    });  
  });

  jQuery(document).ready(function() {
    var myInterval = setInterval(function(){
      if(jQuery('select#setLimit').length == 1){
        if(window.location.search.split('limit=').length == 2){
          //console.log('welcome');
          var limit = window.location.search.split('limit=');
          //console.log(limit[1]);
          if(jQuery('select#setLimit').length == 1){
              jQuery('select#setLimit option').removeAttr('selected');
              jQuery('select#setLimit option[value="'+limit[1]+'"]').attr('selected','selected');
          }    
        }
        clearInterval(myInterval);
      }  
    },1000);
    
  });  

/* icon cart popup js */
  jQuery(document).on('click', 'a.cart_link',function(e){    
    jQuery('.full_navbar_block .navbar-collapse').removeClass('show');
    jQuery('button.navbar-toggler').removeClass('collapsed');
    jQuery('button.navbar-toggler').attr('aria-expanded','false');
    jQuery('.mobile_search_popup').removeClass('search_open');
    jQuery('.search_btn').removeClass('search_active');
    jQuery('body').removeClass('search_popup_open');
    jQuery('cart-notification #cart-notification').addClass('active');
    return false;
  });
  $(document).on("click", function(event) {
      var obj = $("cart-notification #cart-notification");
      if (!$(event.target).closest(obj).length) {
          jQuery('cart-notification #cart-notification').removeClass('active');
      }   
  });

  jQuery('a#surprise-me-btn').click(function(){
     // jQuery('.inspiration_listing_items .row').toggleClass('flex-row-reverse flex-wrap-reverse');
    // jQuery('.inspiration_listing_items .row').toggleClass('flex-row flex-row-reverse justify-content-end');
    var count = jQuery('.row #order-box').length;
    for(var i=1; i<= count; i++){
      var num = count - i;
      var n = i - 1;
      jQuery('.inspiration_listing_items .row #order-box:eq('+n+')').toggleClass('order-'+num);
    }
      return false;
  });


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    var options = {
    html: true,
      trigger: 'focus'
  }
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, options))

var testimonialSlider = new Swiper('.brandSlider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 11000,
    allowTouchMove: false,
    loop: true,
    autoplay: {
        enabled: true,
        delay: 0,
        disableOnInteraction: false,
    },
   breakpoints: {
        576: {
          spaceBetween: 40,
        },
        992: {
          spaceBetween: 60,
        },
      },
});

setTimeout(() => {
    var testimonialSlider2 = new Swiper('.brandSliderFull', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 11000,
        allowTouchMove: false,
        loop: true,
        autoplay: {
            enabled: true,
            delay: 0,
            disableOnInteraction: false,
        },
       breakpoints: {
            576: {
              spaceBetween: 40,
            },
            992: {
              spaceBetween: 60,
            },
            1200: {
              spaceBetween: 110,
            },
          },
    });
}, 300);

var trade_testimoials_slider = new Swiper(".trade_testimoials_slider", {
      slidesPerView: 1,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });


var application_slider = new Swiper(".application_slider", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: true,
});

document.addEventListener('DOMContentLoaded', function () {
  const popoverTriggerList = [].slice.call(document.querySelectorAll('.pointer_product'));
  const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
      html: true,
      trigger: 'click', // only on click for better iOS support
      placement: 'auto',
      sanitize: false,
      container: 'body'
    });
  });

  // Close any open popover when clicking outside
  document.addEventListener('click', function (e) {
    popoverTriggerList.forEach(function (btn) {
      const popover = bootstrap.Popover.getInstance(btn);
      if (
        popover &&
        !btn.contains(e.target) &&
        !document.querySelector('.popover')?.contains(e.target)
      ) {
        popover.hide();
      }
    });
  });

  // Optional: Close on scroll (useful for mobile)
  window.addEventListener('scroll', function () {
    popoverTriggerList.forEach(function (btn) {
      const popover = bootstrap.Popover.getInstance(btn);
      if (popover) popover.hide();
    });
  });
});

// Collection list slider : 31-07-2025
let collectionListSlider = new Swiper(".collections_other_listing_slider", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    cssMode: false,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: "auto",
      draggable: true,
    },
  });



  document.addEventListener('algolia.hooks.initialize', function() {
  algoliaShopify.hooks.registerHook('beforeInstantSearchProductTemplate', function(_defaultTemplate, hit, html, components) {
   // console.log("hit", hit);
    return html`
      <div
        class="ais-hit ais-product"
        data-algolia-index="${hit.index}"
        data-algolia-position="${hit.productPosition}"
        data-algolia-queryid="${hit.queryID}"
        data-algolia-objectid="${hit.objectID}"
        data-handle="${hit.handle}"
        data-variant-id="${hit.objectID}"
        data-distinct="${hit._distinct}"
        data-product-id="${hit.id}"
        onClick="${() => algoliaShopify.helpers.handleItemClick(hit)}"
      >
        <img
          class="ais-hit--picture"
          src="${algoliaShopify.helpers.mediumImage(hit)}"
          alt="${hit.title} - ${hit.variant_title}"
        />

        <div class="ais-hit--details">
          <p class="ais-hit--title lododo">
            <a
              data-algolia-index="${hit.index}"
              data-algolia-position="${hit.productPosition}"
              data-algolia-queryid="${hit.queryID}"
              data-algolia-objectid="${hit.objectID}"
              href="${algoliaShopify.helpers.instantsearchLink(hit)}"
              title="${algoliaShopify.helpers.fullTitle(
                hit.title,
                hit._distinct,
                hit.variant_title
              )}"
            >
              ${components.Highlight({ attribute: 'title', hit })}
              ${algoliaShopify.helpers.variantTitleAddition(hit, hit._distinct)}
            </a>
          </p>
          <p
            class="ais-hit--subtitle"
            title="${hit.product_type}${algoliaShopify.translation_helpers.by(
              hit.vendor
            )}"
          >
            ${components.Highlight({ attribute: 'product_type', hit })}
            ${hit.vendor &&
              html`
                <span> ${algoliaShopify.translations.by} </span>
              `}
            ${hit.vendor && components.Highlight({ attribute: 'vendor', hit })}
          </p>
          <p class="ais-hit--price">
            <b>${algoliaShopify.helpers.displayPrice(hit, hit._distinct)}</b>
            ${!hit._distinct &&
              html`
                <span class="ais-hit--price-striked"
                  ><span
                    >${algoliaShopify.helpers.displayStrikedPrice(
                      hit.price,
                      hit.compare_at_price
                    )}</span
                  ></span
                >
              `}
            ${!hit._distinct &&
              html`
                <span class="ais-hit--price-discount"
                  >${algoliaShopify.helpers.displayDiscount(
                    hit.price,
                    hit.compare_at_price,
                    hit.price_ratio
                  )}</span
                >
              `}
          </p>
          <!-- Extra info examples - Remove the display: none to show them -->
          <p class="ais-hit--info" style="display: none">
            ${hit.sku &&
              html`
                <span class="algolia-sku"
                  >${components.Highlight({ attribute: 'sku', hit })}</span
                >
              `}
            ${hit.barcode &&
              html`
                <span class="algolia-barcode"
                  >${components.Highlight({ attribute: 'barcode', hit })}</span
                >
              `}
            ${hit.weight &&
              html`
                <span class="algolia-weight">${hit.weight}</span>
              `}
            ${!hit.taxable &&
              html`
                <span class="algolia-taxable"
                  >${algoliaShopify.translations.taxFree}</span
                >
              `}
          </p>
          <!-- Tags example - Remove the display: none to show them -->
          <p class="ais-hit--tags" style="display: none">
            ${hit?._highlightResult.tags?.map(
              tag =>
                html`
                  <span class="ais-hit--tag">${tag.value}</span>
                `
            )}
          </p>
          ${!hit._distinct && hit.meta.global["for-sale"]!="No" &&
            html`
              <form
                id="algolia-add-to-cart-${hit.objectID}"
                style="display: none;"
                action="/cart/add"
                method="post"
                enctype="multipart/form-data"
              >
                <input type="hidden" name="id" value="${hit.objectID}" />
              </form>
              <p class="ais-hit--cart">
                ${hit.can_order
                  ? html`
                      <button
                        class="ais-hit--cart-button"
                        data-form-id="algolia-add-to-cart-${hit.objectID}"
                      >
                        ${algoliaShopify.translations.addToCart}
                      </button>
                    `
                  : html`
                      <button
                        class="ais-hit--cart-button ais-hit--cart-button__disabled"
                      >
                        ${algoliaShopify.translations.outOfStock}
                      </button>
                    `}
              </p>
            `}
            ${hit.meta.global["for-sale"]=="No" &&
               html` <a class="btn btn-outline-primary" href="/pages/contact" style="margin-top: 8px;padding: 8px 16px;text-transform: uppercase;width: auto;">Enquire</a>
            `}
        </div>
      </div>
    `;
  });
});

document.querySelectorAll('input[type="number"]').forEach(input => {
  input.addEventListener('wheel', function(e) {
    e.preventDefault();
  }, { passive: false });
});
