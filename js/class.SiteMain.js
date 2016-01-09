// JavaScript Document
var SiteMain = (function() {
    //PARAMATER
    var setting = {
        font	:	13,
        w		:	1779,
        h       :   1189
    };
	function init(){
        respone();
        $(window).resize(function(){
            respone();
        });
	}
	
	function createRadio(){
		$('input.iCheckRadio').iCheck();
	}
    function respone(){
        var w = $(window).width();
        setting.font = (w*13)/setting.w;
        $('body').css('font-size', setting.font + 'px' );
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

