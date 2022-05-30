$(document).ready(function() {
    $('.linkBox .list li a').on({
        "mouseover":function (){
            let idx = $(this).closest('li').index();
            let $roll = $(this).closest('.list').siblings('.roll')
            $(this).closest('li').addClass('active').siblings('li').removeClass('active');

            //화살표 각도 돌리기
            if($(this).closest('ul').children('li').length === 3){
                if(idx === 0){
                    $roll.children('.compass').addClass('rot-1-3').removeClass('rot-2-3 rot-3-3')
                }else if(idx === 1){
                    $roll.children('.compass').addClass('rot-2-3').removeClass('rot-1-3 rot-3-3')
                }else{
                    $roll.children('.compass').addClass('rot-3-3').removeClass('rot-1-3 rot-2-3')
                }
            }else{
                if(idx === 0){
                    $roll.children('.compass').addClass('rot-1-4').removeClass('rot-2-4 rot-3-4 rot-4-4')
                }else if(idx === 1){
                    $roll.children('.compass').addClass('rot-2-4').removeClass('rot-1-4 rot-3-4 rot-4-4')
                }else if(idx === 2){
                    $roll.children('.compass').addClass('rot-3-4').removeClass('rot-1-4 rot-2-4 rot-4-4')
                }else{
                    $roll.children('.compass').addClass('rot-4-4').removeClass('rot-1-4 rot-2-4 rot-3-4')
                }
            }

            //이미지 롤링

            if(idx === 0){
                $roll.find('li').addClass('roll-1').removeClass('roll-2 roll-3 roll-4');
            }else if(idx === 1){
                $roll.find('li').addClass('roll-2').removeClass('roll-1 roll-3 roll-4');
            }else if(idx === 2){
                $roll.find('li').addClass('roll-3').removeClass('roll-1 roll-2 roll-4');
            }else{
                $roll.find('li').addClass('roll-4').removeClass('roll-1 roll-2 roll-3');
            }
        }
    });
    $('.tabList li').on({
        "click":function (){
            let idx = $(this).index()+1;
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tabList').removeClass('eq1 eq2 eq3 eq4').addClass('eq'+idx);
            $('.tabCont').eq(idx-1).addClass('active').siblings('.tabCont').removeClass('active');
        }
    })
});