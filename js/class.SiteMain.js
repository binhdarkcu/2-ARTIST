// JavaScript Document
var SiteMain = (function() {
    //PARAMATER
    var setting = {
        font	:	14,
        w		:	1779,
        h       :   1189
    };
	function init(){
        scrollDown();
        respone();
        $(window).resize(function(){
            respone();
        });
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

