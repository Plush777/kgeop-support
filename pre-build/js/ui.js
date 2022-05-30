$(document).ready(function(){
    /* 헤더 fix 스크롤 */
    $(window).on({
        "scroll": function () {
            if ($(window).scrollTop() != 0) {
                $('#header').addClass('fixed');
                $('#header > h1 > .mainLogo').attr('src', '../images/common/logo.png');
                $('#header > h1 > .adminLogo').attr('src', '../images/common/logo_fixed.png');
            } else {
                $('#header').removeClass('fixed');
                $('#header > h1 > .mainLogo').attr('src', '../images/common/logo_white.png');
                $('#header > h1 > .adminLogo').attr('src', '../images/common/logo2.png');
            }
            // for(i = 0; i < $('.tabContWrap.fix .tabList li').length; i++) {

            //     if ($(window).scrollTop() >= $('.tabContWrap.fix .tabCont').eq(i).offset().top-sHeight) {
            //         $('.tabContWrap.fix .tabList li').eq(i).addClass('active').siblings().removeClass('active')
            //     }
            // }
        }
    })

    /* 헤더 검색창 open,close */
    $('.btnSearchOpen').on({
        "click": function () {
            $(this).parent('.util').siblings('.searchContain').stop().slideToggle("fast");
        }
    });
    $('.btnSearchClose').on({
        "click": function () {
            $(this).closest('.searchContain').stop().slideUp("fast");
        }
    });
    

    /* 사이트맵 */
    $('.btnSitemap').on({
        "click":function (){
            $('.siteMap').addClass('active');
        }
    })
    $('.btnSiteMapClose').on({
        "click":function (){
            $('.siteMap').removeClass('active');
        }
    })




    $('.btnLeftMenuToggle').on({
        "click":function (){
            $(this).closest('#leftMenu').toggleClass('active');
        }
    })
    $('.tgBtn').on({
        "click":function (){
            $(this).toggleClass('active');
        }
    })

    $('.btnAccordionToggle').on({
        "click":function (){
            $(this).closest('.accordionBox').toggleClass('active')
        }
    })
    $('.tab .btn').on({
        "click":function (){
            $(this).addClass('active').siblings('.btn').removeClass('active')
        }
    })

    $('.btnAside.setting').on({
        "click":function (){
            $(this).siblings('.dep').toggleClass('active');
        }
    })

    $('.breadcrumb ul li.link').on({
        "click":function (){
            $(this).closest('li.link').toggleClass('active').siblings('li.link').removeClass('active');
        }
    })

    $('.btnPopClose').on({
        "click":function (){
            $(this).closest('.popup').remove();
            $('#dimmed').remove();
        }
    })
    $('.alert .btnClose').on({
        "click":function (){
            $(this).closest('.alert').remove();
            $('#dimmed').remove();
        }
    })
    $('#dimmed').on({
        "click":function (){
            $(this).closest('.popup').remove();
            $('#dimmed').remove();
        }
    })
    $('.dataDl').on({
        "click":function (){
           $('.popup').show();
        }
    })
    $('.popHelp').on({
        "click":function (){
           $('.popup').show();
        }
    })
    
    // $('.table.effect tbody tr').on({
    //     "click":function click(){
    //         $(this).closest('tr').toggleClass('active').siblings('tr').removeClass('active');
    //     }
    // })

    $('.searchResult .head .btnArea button').on({
        "click":function click(){
            $(this).closest('button').toggleClass('active').siblings('button').removeClass('active');
        }
    })

    // $('.direcArea li').on({
    //     "click":function click(){
    //         $(this).closest('li').toggleClass('active').siblings('li').removeClass('active');
    //     }
    // })

    $('.locInfo .cont.bottom button').on({
        "click":function click(){
            $(this).closest('button').toggleClass('active').siblings('button').removeClass('active');
        }
    })

    $('.locInfo .btnClose').on({
        "click":function click(){
            $('.locInfo').remove();
        }
    })

    /* 구토지대장_등록02.html 테이블 열고닫기 */
    $('.toggleTable .tgShowHide').on({
        "click":function click(){
            var toggleRow = $(this).next('.tgCont');
            if (!toggleRow.is(':visible')){
                toggleRow.show().find('.toggleBox').slideDown();
            }else{
                toggleRow.find('.toggleBox').slideUp(function(){
                    if(!$(this).is(':visible')){
                        toggleRow.hide();
                    }
                });
            }
        }
    })

    $('.searchResult .head .btnAdvanced').on({
        "click":function click(){
            $(this).toggleClass('on');
            $('.searchPopup').stop().slideToggle();
        }
    })

    $('.mapArea .toolBar .util li').on({
        "click":function click(){
            $(this).closest('li').toggleClass('active').siblings('li').removeClass('active');
        }
    })

    $('.mapArea .toolBar .controller .btnMap').on({
        "click":function click(){
            $(this).closest('.btnMap').toggleClass('active').siblings('.btnMap').removeClass('active');
        }
    })

    /* 탭메뉴 */
    $('.tabList li').on({
        "click":function (){
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
        }
    })

    /* datePicker */
    $(".cal").datepicker({
        dateFormat: "yy.mm.dd",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: "년"
    });

    $('.alert').draggable({
        containment: "window"
    });
    
    $('.popup').draggable({
    cancel:'.cont',
    containment: "window"
    });

    // $(document).on('click', '#dimmed', function(){
    //     $(this).remove();
    //     $('.popup').remove();
    // });
})

$(window).scroll(function (){
    if( $('html,body').scrollTop() > 0){
        $('#header').addClass('fixed');
    }else{
        $('#header').removeClass('fixed')
    }
})