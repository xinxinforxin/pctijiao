$(function(){
        $('#mainpage').fullpage({
        sectionsColor: ['#2a3f61', '#37b5f5', '#fff', '#81465d','#cacfdf','#1a1a1a'],
        'navigation': true,
        'resize':true,
        'navigationColor':'#fff',
        'scrollingSpeed':500,
        afterRender:function(){
                $('.qr-code').addClass('qrshrink');
                $('.s1pic1').addClass('fadeInDown animated inifinite');
        },
        afterLoad: function(anchorLink, index){
            if(index == 1){
                $('.s1pic1').addClass('fadeInDown animated inifinite');
                $('.qr-code').addClass('qrshrink');
            }
            if(index == 2){
                $('.s2block1').slideDown(300);
                $('.s2block2').fadeIn(700);
                $('.s2block2-1').fadeIn(700);
                $('.qr-code').addClass('qrshrink');
            }
            if(index == 3){
               $('.s3font1').fadeIn(0).animate({left:'40%'},100);
               $('.s3font2').fadeIn(0).animate({left:'40%'},200);
               $('.s3font4').fadeIn(0).animate({left:'40%'},300);
               $('.s3font5').fadeIn(0).animate({left:'40%'},400);
               $('.s3pics1').slideDown(200);
               $('.s3pics2').slideDown(200);
               $('.s3rectthing>.rect1').delay(0).animate({height:'320px'},700);
               $('.s3rectthing>.rect2').delay(0).animate({height:'180px'},700);
               $('.s3rectthing>.rect3').delay(0).animate({height:'240px'},700);
               $('.s3rectthing>.rect4').delay(0).animate({height:'290px'},700);
               $('.qr-code').addClass('qrshrink');
               timing();
            }
            if(index == 4){
                $('.s4fonts').show();
                $('.s4fonts>span').animate({width: '500px'}, 3000);
                $('.unionI').delay(0).fadeIn(500);
                $('.tpeople').fadeIn(0);
                $('.tPerson').delay(200).fadeIn(500);
                $('.tpeople').delay(300).fadeOut(500);
                $('.qr-code').addClass('qrshrink');
            }
            if(index == 5){
            $('.p5').fadeIn(50);
            $('.s5fontBlock1').show(100).animate({'margin-left':'0'},500);
            $('#drawLine').show(500);
            $('.s5fontBlock2').show(100).animate({'margin-left':'55'},500);
            $('#fixFooter').css('visibility','visible');
            $('.qr-code').addClass('qrshrink');
            }
        },
        onLeave: function(index, direction){
            if(index == 1){
                $('.s1pic1').addClass('fadeOutDown animated inifinite');
            }
            if(index == 2){
                $('.s2block1').hide(0);
                $('.s2block2-1').fadeOut(0);
                $('.s2block2').fadeOut(0);
                $('.qr-code').removeClass('qrshrink');
            }
            if(index == 3){
                $('.s3font1').fadeOut(200).animate({left:'20%'},500);
                $('.s3font2').fadeOut(200).animate({left:'30%'},500);
                $('.s3font4').fadeOut(200).animate({left:'60%'},300);
                $('.s3font5').fadeOut(200).animate({left:'50%'},400);
                $('.s3pics1').hide();
                $('.s3pics2').hide();
                $('.s3rectthing>.rect1').animate({height:'0px'},500);
               $('.s3rectthing>.rect2').animate({height:'0px'},500);
               $('.s3rectthing>.rect3').animate({height:'0px'},500);
               $('.s3rectthing>.rect4').animate({height:'0px'},500);
               $('.qr-code').removeClass('qrshrink');

            }
            if(index == 4){
                $('.s4fonts').hide();
                $('.unionI').slideUp();
                $('.tPerson').fadeOut();
                $('.tpeople').hide();
                $('.qr-code').removeClass('qrshrink');
            }
            if(index == 5){
             $('.p5').fadeOut(0);
            $('.s5fontBlock1').animate({'margin-left':'-100'},50).hide(0);
            $('#drawLine').hide(0);
            $('.s5fontBlock2').hide(0);
            $('#fixFooter').css('visibility','hidden');
            $('.qr-code').removeClass('qrshrink');
            }
        }
            });
});

    function browserRedirect() {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            document.writeln("您的浏览设备为：");
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                window.location.herf= 'https://www.yeamoney.cn/mobile';
            } else {
            }
        }
        browserRedirect();
        $(document).ready(function(){
            height=$(window).height();
        });
        $('.nav>li').click(function(){
            switch($(this).index()){
                case 0:window.location.href='/';
                break;
                case 1:window.location.href='about';
                break;
                case 2:window.location.href='security';
                break;
                default:
                break;
            }
        });
        var backIndex = 1;
        $('.aftbtn').click(function(){
                $('.turnItem').find('.circleb').removeClass('circleb');
                $('.circle').eq(backIndex-1).addClass('circleb');
                switch(backIndex)
                {
                    case 0:
                    aftcircle(2,0,1);
                    break;
                    case 1:
                    aftcircle(0,1,2);
                    break;
                    case 2:
                    aftcircle(1,2,0);
                    break;
                    default:
                    break;
                }
                 backIndex--;
                if(backIndex < 0){
                    backIndex = 2;
                }
        });
        $('.headyea').click(function(){
            window.location.href='/';
        });
        $('.prebtn').click(function(){

            fontIndex = backIndex+1;
            if(fontIndex>2)
            {
                fontIndex = 0;
            }
            $('.turnItem').find('.circleb').removeClass('circleb');
            $('.circle').eq(fontIndex).addClass('circleb');
            switch(backIndex)
                {
                    case 0:
                    precircle(2,0,1);
                    break;
                    case 1:
                    precircle(0,1,2);
                    break;
                    case 2:
                    precircle(1,2,0);
                    break;
                    default:
                    break;
                }
            backIndex++;
            if(backIndex > 2){
                backIndex = 0;
            }
        });
        function aftcircle(a,b,c){
            $('.turnItem').eq(c).animate({'left':'1000px'},0,'linear').hide();
            $('.turnItem').eq(c).css('left','-100px').show(1);
            $('.turnItem').eq(c).animate({'left':'70px'},10,'linear');
            $('.turnItem').eq(a).animate({'left':'320px'},0,'linear');
            $('.turnItem').eq(b).animate({'left':'610px'},0,'linear');
        }
        function precircle(a,b,c){
            $('.turnItem').eq(a).animate({'left':'-300px'},0,'linear').hide();
            $('.turnItem').eq(a).css('left','800px').show(1);
            $('.turnItem').eq(b).animate({'left':'70px'},0,'linear');
            $('.turnItem').eq(c).animate({'left':'320px'},0,'linear');
            $('.turnItem').eq(a).animate({'left':'610px'},10,'linear');
        }
        function timing(){
            var tiptop1 = 0;
            var tiptop2 = 0;
            var tiptop3 = 0;
            var tiptop4 = 0;
            var timer1 = setInterval(function(){
                tiptop1 += 1;
                if(tiptop1>11)
                {
                    clearInterval(timer1);
                }
            $('.rect1>.s3Num').html(tiptop1+'%');
            },80);
            var timer2 = setInterval(function(){
                tiptop2 += 0.5;
                if(tiptop2>5.5)
                {
                    clearInterval(timer2);
                }
            $('.rect2>.s3Num').html(tiptop2+'%');
            },80);
            var timer3 = setInterval(function(){
                tiptop3 += 0.5;
                if(tiptop3>7)
                {
                    clearInterval(timer3);
                }
            $('.rect3>.s3Num').html(tiptop3.toFixed(1)+'%');
            },80);
            var timer4 = setInterval(function(){
                tiptop4 += 1;
                if(tiptop4>8)
                {
                    clearInterval(timer4);
                }
            $('.rect4>.s3Num').html(tiptop4+'%');
            },80);
        }
        $('.fixright>.qr-code').click(function(){
            $('#mask').show();
        });
        $('#mask').click(function(){
            $('#mask').hide();
        });
        $('.addrTable tr:nth-of-type(1) td:nth-of-type(5)').click(function(){
            window.location.href='http://weibo.com/yeamoney';
        });
        $('.addrTable tr:nth-of-type(2) td:nth-of-type(5)').click(function(){
            window.location.href='join';
        });
        $('.addrTable tr:nth-of-type(3) td:nth-of-type(5)').hover(function(){
            $(this).html('800106787');
        });
        $('.addrTable tr:nth-of-type(3) td:nth-of-type(5)').mouseleave(function(){
            $(this).html('QQ客服');
        });


 (function(){document.getElementById('___szfw_logo___').oncontextmenu = function(){return false;}})();