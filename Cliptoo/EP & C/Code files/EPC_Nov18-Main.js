$(window).load(function () {
  setInterval(function () {
    $('.custom-footer-form .hs-custom-form input.hs-button').attr('value', '►');
  }, 1);
  
  //fix language buttons text and order
  var eng = document.querySelector("[data-language='en']");
  var neth = document.querySelector("[data-language='nl-nl']");
  var nll = document.querySelector('a[data-language="nl"]');
  if (eng) {
    eng.innerText = "EN";
    var lng_en = eng.parentElement;
    lng_en.style.order ="2";
  }

  if (neth) {
    neth.innerText = "NL";
    var lng_nl_nl = neth.parentElement;
    lng_nl_nl.style.order ="1";
  }

  if (nll) {
    var lang_nl = nll.parentElement;
    lang_nl.style.order = "1";
  }
  $('.lang_switcher_class').show();
});

$(function () {
  $('.custom-menu-primary').addClass('js-enabled');

  /* Mobile button with three lines icon */
  $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger"><i></i></div>');

  /* Uncomment for mobile button that says 'MENU' 
          $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger">MENU</div>');
      */

  $('.main-menu .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');

  $('.mobile-trigger').click(function () {
    var instance = this;
    $(instance).toggleClass('toggle-menu-position');
    $(this).next('.custom-menu-primary .hs-menu-wrapper').animate({
      width: "toggle"
    });

    $('body').toggleClass('mobile-open');
    $('.child-trigger').removeClass('child-open');
    return false;
  });

  $('.child-trigger').click(function () {
    $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
    $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
    $(this).toggleClass('child-open');
    return false;
  });

  $('svg#Layer_1').click(function () {
    $(this).toggle(function () {
      $(this).css('display', 'none')
    });
    $('svg#Layer_2').toggle(function () {
      $('svg#Layer_2').css('display', 'block')
    });
  })

  $('svg#Layer_2').click(function () {
    $(this).toggle(function () {
      $(this).css('display', 'none')
    });
    $('svg#Layer_1').toggle(function () {
      $('svg#Layer_1').css('display', 'block')
    });
  })
});

$('.sidebar').parent().addClass('sticky-sidebar');
$('.lp-detail-sidebar').parent().addClass('sticky-sidebar');

function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }
  return tempArray;
}

//New Js for header
$(document).ready(function () {


  //search bar toggle	
  $('.search-icon').click(function () {
    $('.hs-search-field__input').slideToggle('fast');
  });

  // hamburger
  $('.opnbtn').click(function () {
    $('.main-menu-wrapper').addClass('show');
  });
  $('.clsbtn').click(function () {
    $('.main-menu-wrapper').removeClass('show');
  });
  $('.opnbtn.change').click(function () {
    $('.main-menu-wrapper').removeClass('show');
  });

  //sticky Nav
  scrolled = 0;
  var nav = $('.main-nav').offset().top;
  var navH = $('.main-nav').outerHeight();
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > nav) {
      $('.main-nav').addClass('sticky-nav');
      if (scrolled == 0) {
        $('.header-container').addClass('scrolled');
        $('.cover-image.large').removeClass('active');
        $('.cover-image.small').addClass('active');
        $('.cover-image.small img').attr('src', 'https://www.epc.nl/hubfs/EPC-Nov18-images/New%20logo/EP_C_illustration-header_folded.png');
        $('.background-image').addClass('small');

        if (window.matchMedia('(min-width: 769px)').matches) {
          $('.lang_list_class').css('top', '-220px');
        }
        scrolled = 1;
      }
    } else {
      $('.main-nav').removeClass('sticky-nav');
    }
  });



  // landing listing page
  var posts = $('.dynamic-posts .item');
  var total = posts.length;
  var all = chunkArray(posts, 9);
  for (var i = 0; i < all.length; i++) {
    //    	$(all[i][0]).addClass('sm');
    //     $(all[i][1]).addClass('sm');
    //     $(all[i][2]).addClass('sm');
    //     $(all[i][3]).addClass('md');
    //     $(all[i][4]).addClass('md');
    //     $(all[i][5]).addClass('sm');
    //     $(all[i][6]).addClass('lg');
    //     $(all[i][7]).addClass('lg');
    //     $(all[i][8]).addClass('sm'); 
  }
  console.log("total posts in all posts: " + all.length);
});

// anchor link scroll
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  if ($('.main-nav').hasClass('sticky-nav')) {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - $(".main-nav").height()
    }, 500);
  } else {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - $(".main-nav").offset().top
    }, 500);
  }
});


// landing page js
$(window).load(function () {

  //   drop down

  if (window.matchMedia("(max-width: 767px)").matches) {
    $(".options-box h4").toggleClass('open').next(".option-set").slideToggle("slow");
    $(".options-box h4").click(function () {
      $(this).next(".option-set").slideToggle("slow");
      $(this).toggleClass("open");
      $(this).parent(".options-box").siblings().find("h4").removeClass("open");
      $(this).parent(".options-box").siblings().find(".option-set").slideUp("slow")
    });
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    $(".options-box h4").click(function () {
      $(this).next(".option-set").slideToggle("slow");
      $(this).toggleClass("open")
    });
    $(".options-box > h4").addClass("open")
  }

  //Posts Grids
  var c = $(".dynamic-posts .latest-blog-container");
  var b = {};

//   filters
//   $("form").on('change', function(e){
//   var group = $(this).data('group');
//     var other,name = '';
//     if(group == 'format'){
//       name = 'type'
//       other = 'onderwerp';
//     }else{
//       other = 'type';
//       name= 'onderwerp'
//     }

//   //   console.log("name: "+name+", Other: "+ other);
//     var checked = [];

//     $.each($("input[name='"+name+"']:checked"), function(){            
//       checked.push($(this).val());
//     });
//     console.log("checked");
//     console.log(checked);
//     var other_checked = [];
//     other_checked = getOther(other);
//   //  console.log(checked);
//     console.log(other_checked);
//   // loop through first array
//       if(checked.length>0){
//         for(var i=0; i< checked.length; i++){
//            if(other_checked.length>0){
//                for(var j=0; j< other_checked.length; j++ ){
//                  $('.blog-post').each(function(){
//                    if($(this).hasClass(checked[i]) && $(this).hasClass(other_checked[j])){
//                      console.log(checked[i]);
//                      console.log(other_checked[j]);
//                      $(this).show();
//                    }else{
//                       $('.blog-post').each(function(){
//                         if($(this).hasClass(checked[i])){
//                           $(this).show();
//                         }else{
//                           $(this).hide();
//                         }
//                       });
//                     }
//                   });
//                }
//            }else{
//               $('.blog-post').each(function(){
//                 if($(this).hasClass(checked[i])){
//                   $(this).show();
//                 }else{
//                   $(this).hide();
//                 }
//               });
//            }
//         }
//      }else{
//        $('.blog-post').show();
//      }

//   postCardArrangement();
//   });



  function getOther(other) {
    var favorite = [];
    $.each($("input[name='" + other + "']:checked"), function () {
      favorite.push($(this).val());
    });
    return favorite;
  }

});

// filters 2
$(document).ready(function () {
  var filters = {};
  // do stuff when checkbox change
  $('#options').on('change', function (event) {
    console.log("clicked new 2");
    var checkbox = event.target;
    var $checkbox = $(checkbox);
    var group = $checkbox.parents('.option-set').attr('data-group');

    // create array for filter group, if not there yet
    var filterGroup = filters[group];
    if (!filterGroup) {
      filterGroup = filters[group] = [];
    }
    // add/remove filter
    if (checkbox.checked) {
      // add filter
      filterGroup.push(checkbox.value);
    } else {
      // remove filter
      var index = filterGroup.indexOf(checkbox.value);
      filterGroup.splice(index, 1);
    }

    var comboFilter = getComboFilter();
    if (comboFilter.length > 0) {
      $(".latest-blog-container .blog-post").hide();
      $(".latest-blog-container " + comboFilter).show();
    } else {
      $(".latest-blog-container .blog-post ").show();
    }
    postCardArrangement();
  });

  function getComboFilter() {
    console.log(filters)
    var combo = [];
    for (var prop in filters) {
      var group = filters[prop];
      if (!group.length) {
        // no filters in group, carry on
        continue;
      }
      // add first group
      if (!combo.length) {
        combo = group.slice(0);
        continue;
      }
      // add additional groups
      console.log(group)
      var nextCombo = [];
      // split group into combo: [ A, B ] & [ 1, 2 ] => [ A1, A2, B1, B2 ]
      for (var i = 0; i < combo.length; i++) {
        for (var j = 0; j < group.length; j++) {
          var item = combo[i] + group[j];
          nextCombo.push(item);
        }
      }
      combo = nextCombo;
    }
    var comboFilter = combo.join(', ');
    return comboFilter;
  }

  // filter item arrangement
  function postCardArrangement() {
    console.log("arranged called");
    var tr = 1;
    $(".blog-post").each(function () {
      if ($(this).css('display') != 'none') {
        if (tr % 9 == 1 || tr % 9 == 2 || tr % 9 == 3 || tr % 9 == 6 || tr % 9 == 0) {
          $(this).removeClass('landscape landscape-wider').addClass('potrait');
        }
        if (tr % 9 == 4 || tr % 9 == 5) {
          $(this).removeClass('potrait landscape-wider').addClass('landscape');
        }
        if (tr % 9 == 7 || tr % 9 == 8) {
          $(this).removeClass('landscape potrait').addClass('landscape-wider');
        };
        tr++;
      }
    });
  }
  // end of filter arrangement
});
// filter ends