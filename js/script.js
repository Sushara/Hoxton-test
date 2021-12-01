jQuery(document).ready(function () {

    var tl = gsap.timeline({paused: true});
    tl.add('start')
        .to(".logo_wrapper", {duration: 1, y: -50}, 'start')
        .fromTo(".header_content", {opacity:0, y: 80}, { opacity:1, duration: 1, y : -50, stagger: {amount: -0.1, each:5}},'start')
 
    $(".down_arrow_wrapper").click(function(){
        $(".down_arrow_wrapper").addClass("elementToFadeOut");
        $(".header_text_wrapper").removeClass("hidden");
        $(".home_screen").addClass("adjust--screen");

        tl.play();
      
    });
    
    var tl2 = gsap.timeline({paused: true});
    tl2.add('starts')
    .to(".dashboard_container .panel", {opacity: 1, duration: 0.5, ease: "none"}, 'starts')
    .fromTo(".menu_logo_wrapper", {opacity:0, x: 100, y: 100}, { opacity:1, duration: 1, x: 20, y : 20},'starts')

    $(".button_wrapper").click(function(){
        $("main").addClass("hidden");
        $(".dashboard_wrapper").removeClass("hidden");
      
        $(".line_loader").removeClass("hidden");
        
        setTimeout(function(){
        
            $(".line_loader").addClass("hidden");
            $('.preload-wrapper').addClass('loaded');
     
        }, 1000);

        setTimeout(function(){
        
            $(".dashboard_container").fadeIn("slow", "linear" );
        
            //navigation scripts

            var navListItems = $('div.setup-panel .stepwizard-step a.btn-circle-menu'),
                    allWells = $('.setup-content');

            if(navListItems.hasClass("btn-success")){
                var $targetDiv = $($(this).attr('href'));
                $targetDiv.show();
                $targetDiv.find('input:eq(0)').focus();
            }
            else{
                allWells.hide();
            }
            

            navListItems.click(function(e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                $item = $(this);

            if (!$item.hasClass('disabled')) {
                navListItems.removeClass('btn-success').addClass('btn-default');
                
                $item.addClass('btn-success');
                
                allWells.hide();
                $target.show();
                $target.find('input:eq(0)').focus();
            }
            });



            $('div.setup-panel div a.btn-success').trigger('click');
           tl2.play();
           
        }, 2000);
        setTimeout(function(){
            $(function() {

                $(".circular_progress").each(function() {
              
                  var value = $(this).attr('data-value');
                  var left = $(this).find('.circular_progress-left .circular_progress-bar');
                  var right = $(this).find('.circular_progress-right .circular_progress-bar');
                
              
                  if (value > 0) {
                    if (value <= 50) {
                        right.append('<div class="circular_ball"></div>')
                      right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
                    } else {
                        left.append('<div class="circular_ball"></div>')
                      right.css('transform', 'rotate(180deg)')
                      left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
                 
                    }
                  }
              
                })
              
                function percentageToDegrees(percentage) {
              
                  return percentage / 100 * 360
              
                }
              
              });
         }, 5000);

 
    });
  
    function pagination(){
        var navListItems = $('#paginationWrapper div.setup-panel div a'),
        allWells = $('.news-setup-content'),
        allNextBtn = $('#paginationWrapper .nextBtn'),
        allPrevBtn = $('#paginationWrapper .prevBtn');

    allWells.hide();

    navListItems.click(function(e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-success').addClass('btn-default');
           
            $item.addClass('btn-success');
        
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function() {
        var curStep = $('#paginationWrapper div.setup-panel div a.btn-success').attr("href"),
            curStepBtn = curStep.slice(1),
            nextStepWizard = $('#paginationWrapper div.setup-panel div a.btn-circle[href="#' + curStepBtn + '"]').parent().next().children("a"),
         
            isValid = true;

            if(nextStepWizard.length < 1){
                $(".next_wrapper").addClass("disabled");
            }
            else{
                $(".next_wrapper").removeClass("disabled");
            }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
      
    });

    allPrevBtn.click(function() {
        var curStep = $('#paginationWrapper div.setup-panel div a.btn-success').attr("href"),
            curStepBtn = curStep.slice(1),
            prevStepWizard = $('#paginationWrapper div.setup-panel div a.btn-circle[href="#' + curStepBtn + '"]').parent().prev().children("a"),
         
            isValid = true;

            if(prevStepWizard.length < 1){
                $(".prev_wrapper").addClass("disabled");
            }
            else{
                $(".prev_wrapper").removeClass("disabled");
            }

        if (isValid) prevStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.news-setup-panel div a.btn-success').trigger('click');
    }
    pagination();

    $(document).click(function(event) {
        if(
          $('.toggle > input').is(':checked') &&
          !$(event.target).parents('.toggle').is('.toggle')
        ) {
          $('.toggle > input').prop('checked', false);
        }
      })


});

