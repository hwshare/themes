/*main.js*/
$(function(){
//	$.metadata.setType("attr","data-meta");
//	function isNotCss3(){//判断浏览器版本
//		if ($.browser.msie){
//			var $v=parseInt($.browser.version);
//			if($v<9){
//				 return $v;	
//			}else{
//				return false;	
//			}
//		}
//		return false;
//	}
//水印
	$.each($('.j_watermark'),function(i,n){
		if(typeof($(n).attr('watermark')) != 'undefined')
			$(n).watermark($(n).attr('watermark'));
	});
//tab
	$('.j_tabs').tabs('.j_tabCnt',{event:'mouseover'});
//文字循环滚动
	$('.j_textSlider').textSlider({line:1,speed:400,timer:3000});
//hover
//	if(isNotCss3() == 6){	
//		$('.j_hover').each(function() {
//          var hoverTag=$(this).metadata().hoverTag;
//			if(!hoverTag){
//				hoverTag='li';
//			}
//			var dataHover=$(this).data("hovers")
//			if(dataHover){
//				$(this).removeData("hovers");
//				$(this).children(hoverTag).unbind("hover");
//			}
//			dataHover='bindHover';
//			$(this).data("hovers", dataHover);
//			$('.j_hover >'+hoverTag).hover(function(){
//				$(this).addClass('hover');
//			},function(){
//				$(this).removeClass('hover');
//			});
//      });
//		
//		
//		var firstTag=$('.j_first').metadata().firstTag;
//		if(!firstTag){
//			firstTag='li';
//		}
//		$('.j_first >'+firstTag+':first').addClass('first');
//	}
//弹出框
	$("a[rel]").overlay({
		speed:0,
		fixed:false,
		closeOnClick:false,
		closeOnEsc:false,
		closeSpeed:0,
		top:'center',
		mask:{
			color: '#000',
			opacity:0.5,
			closeSpeed:0,
			loadSpeed:0
		},
		onBeforeLoad:function(){
			var $this=this.getTrigger(),$cnt=this.getOverlay(),$cnf=$this.metadata();
			if($cnf.fun){
				if(typeof(eval($cnf.fun))=="function"){
					eval($cnf.fun+'($cnf,$cnt)');
				}
			}
		},
		onClose:function(){
			var $this=this.getTrigger(),$cnt=this.getOverlay(),$cnf=$this.metadata();
			if($cnf.closefun){
				if(typeof(eval($cnf.closefun))=="function"){
					eval($cnf.closefun+'($cnf,$cnt)');
				}
			}	
		}
	});
//验证
	$('.j_validate').validate({
		errorPlacement:function(error,element){
			element.parents('td').append(error)
		},
		submitHandler:function(form){}
	});
//展开收起
	$('.j_show').live('click',function(){
		var changeTxt=$(this).metadata().changeTxt;
		var showTxt=new Array();
		if(changeTxt)
			showTxt=changeTxt.split(',');
		var showCnt=$(this).parents('.j_showParent:first').find('.j_showCnt:first');
		if(showCnt.is(':hidden')){
			if(changeTxt)
				$(this).html(showTxt[1]);
			$(this).addClass('showOpen');
			showCnt.slideDown();
		}else{
			if(changeTxt)
				$(this).html(showTxt[0]);
			$(this).removeClass('showOpen');
			showCnt.slideUp();	
		}
	});
	$(".j_showCnt .close").click(function(){
		$(this).parents(".j_showCnt").hide();
	})
//修改任务展开收起
	$('.j_repair').live('click',function(){
		var changeTxt=$(this).metadata().changeTxt;
		var showTxt=new Array();
		if(changeTxt)
			showTxt=changeTxt.split(',');
		var showCnt=$(this).parents('.j_showParent:first').find('.j_repairCnt:first');
		if(showCnt.is(':hidden')){
			if(changeTxt)
				$(this).html(showTxt[1]);
			$(this).addClass('showOpen');
			showCnt.slideDown();
		}else{
			if(changeTxt)
				$(this).html(showTxt[0]);
			$(this).removeClass('showOpen');
			showCnt.slideUp();	
		}
	});
//追加展开收起
	$('.j_add').live('click',function(){
		var changeTxt=$(this).metadata().changeTxt;
		var showTxt=new Array();
		if(changeTxt)
			showTxt=changeTxt.split(',');
		var showCnt=$(this).parents('.j_addParent:first').find('.j_addCnt:first');
		if(showCnt.is(':hidden')){
			if(changeTxt)
				$(this).html(showTxt[1]);
			$(this).addClass('showOpen');
			showCnt.slideDown();
		}else{
			if(changeTxt)
				$(this).html(showTxt[0]);
			$(this).removeClass('showOpen');
			showCnt.slideUp();	
		}
	});
//其他
	$('.j_odd').each(function(i,n) {
        var tag=$(this).metadata().tag;
		if(!tag) tag='li';
		$(this).children('"'+tag+':odd"').addClass('odd');
    });

});


// jquery1.7.2.min.js 滑动门
$(function() {	
	jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
		$(tab_conbox).find("section").hide();
		if("no-default"!=$(tabtit).attr("data-default")){$(tabtit).find("li:first").addClass("thistab")}
		$(tab_conbox).find("section:first").show();
	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("thistab").siblings("li").removeClass("thistab"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	
	};
	/*调用方法如下：*/
	$.jqtab("#tabs","#tab_conbox","click");	
	$.jqtab("#tabs1","#tab_conbox1","mouseenter");
	$.jqtab("#tabs2","#tab_conbox2","click");
	

	//下拉
	if ($(".ui-select")) {
		$(".ui-select").selectWidget({
			change       : function (changes) {
				return changes;
			},
			effect       : "slide",
			keyControl   : true,
			speed        : 200,
			scrollHeight : 250
		})
	}

	//单选
	$('i.icon-radio').click(function () {
	    var radio = $(this).parent().siblings().find('.icon-radio')
	    var input = $(this).parent().siblings().children('input')
	    $(this).addClass('icon-radiochecked')
	    radio.removeClass('icon-radiochecked')
	    radio.attr('checked',false)
	    input.attr('checked',false)
	    $(this).siblings('input').attr('checked',true)
	})
	//支付状态
	$('.pay li').click(function () {
	    $(this).siblings().children('a').removeClass('active')
	    $(this).children('a').addClass('active')
	})
	
	//复选框
	$('i.icon-checkbox').on('click',function(event){
		if($(this).hasClass('icon-checked')){
			$(this).removeClass('icon-checked');
			$(this).siblings("input").removeAttr('checked')
		}
		else{
			$(this).addClass('icon-checked');
			$(this).siblings("input").attr('checked','checked')
			if($(this).siblings('input').attr('data-rule')){

				var a = $('.icon-checked').size();
				if(a>=5){
					layer.msg("最多只能选择4个标签哦")
					$(this).removeClass('icon-checked')
					$(this).siblings("input").attr('checked','checked')

				}
			}

		}
	})

	//打赏切换
	$('a.icopic').click(function () {
		var radio = $(this).children('i')
		var icopic = $(this).parent().siblings().children('a')
		$(this).addClass('active')
		radio.addClass('icon-checked')
		icopic.removeClass('active').children().removeClass('icon-checked')
	})
	
	// 全选
	
	$("#select1").click(function () {
	    var formid = '#'+ $(this).parents('form').attr('id')//让全选只选择当前表单下的
	    if($(this).hasClass('icon-checked')){
			$(formid+" input[name='checkid[]']").attr('checked',true).siblings('i').addClass('icon-checked')
		}else {
			$(formid+" input[name='checkid[]']").removeAttr('checked').siblings('i').removeClass('icon-checked')
		}
	})
	//下拉表单
	$("#siteid").selectWidget({
		change       : function (changes) {
			var temp,select_temp='';
			if(changes == 0){
				window.location.href = '/author/step1View?siteid=0';
			}

			if(changes == 100){
				window.location.href = '/author/step1View?siteid=100';
			}
		},
		effect       : "slide",
		keyControl   : true,
		speed        : 200,
		scrollHeight : 250
	});
	//表情切换 by wy
	$('.comment-icon').click(function () {
		$(this).find('.show').toggle(200)
	})
	// 时间选择器
	$("#datepicker1").datepicker()
	//定时发布
/* 	$("#postdate").datepicker({
		minDate: new Date(),
		maxDate: +15,
		dateFormat:"yy-mm-dd"
	}) */

	
});













