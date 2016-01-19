// JavaScript Document
var SiteMain = (function() {
    //PARAMATER
    var setting = {
        font	:	14,
        w		:	1779,
        h       :   1189
    };
	function init(){
        detectBrowser();
        scrollDown();
        respone();
        //var timer = setInterval(function() { respone(); }, 50);
        var resizeId;
        $(window).resize(function(){
            clearTimeout(resizeId);
            resizeId = setTimeout(respone, 500);
        });
	}

    function getSBLive(w) {
        var d = w.document, c = d.compatMode;
        r = c && /CSS/.test(c) ? d.documentElement : d.body;
        if (typeof w.innerWidth == 'number') {
            // incredibly the next two lines serves equally to the scope
            // I prefer the first because it resembles more the feature
            // being detected by its functionality than by assumptions
            return [ w.innerHeight > r.clientHeight, w.innerWidth > r.clientWidth ];
            return [ w.innerWidth > r.clientWidth, w.innerHeight > r.clientHeight ];
        } else {
            return [ r.scrollWidth > r.clientWidth, r.scrollHeight > r.clientHeight ];
        }
    }

    function recalc(w) {
        var d = w.document, r = d.documentElement;
        return getSBLive(window)[0];
    }

    function scrollDown(){
        $('#scrolldown a').click(function(){
           $('body').animate({scrollTop:$('.linkbox').offset().top},200);
        });
    }
	function createRadio(){
		$('input.iCheckRadio').iCheck();
	}
    function respone(){
        setting.font = ($(window).height() * 13) / setting.h;
        $('body').css('font-size', setting.font + 'px');
        if(getSBLive(window)[0] == true && $(window).height()>500){
            setting.font = ($(window).width() * 13) / setting.w;
            $('body').css('font-size', setting.font + 'px');
        }

    }
    //BROWSERS
    function detectBrowser(){
        uaBrowser = detect.parse(navigator.userAgent);
        var browserfamily = uaBrowser.browser.family.replace(/\s/g, '_'); //family = Mobile Safari => we need convert space character become _

        $('body').addClass('version_' + uaBrowser.browser.version).addClass(browserfamily);

        //Detect to fix css for iphone4
        if(window.screen.height == (960 / 2)) $('body').addClass('iphone4');
    }
	function openPopup(idDiv){
		$('.result_question').css('display','none')
		$(idDiv).css('display','block');	
	}
	function closePopup(idDiv){
		$(idDiv).css('display','none');
	}
	return {
		init:init,
		openPopup:openPopup,
		closePopup:closePopup
	}
	
})();		

$(document).ready( function() {
	SiteMain.init();
});

