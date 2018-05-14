//公用方法
//判断是否引用layui,加载模块
if(typeof(layui) != 'undefined') {
	var layer,form
	layui.use(['layer','form'], function() {
		layer = layui.layer
		form = layui.form
		layer.config({
			resize: false,
		})
	})
}
//侧边栏标题切换效果
$('.level-one').on('click', function() {
	if($(this).siblings('li').hasClass('layui-hide')) {
		$(this).siblings('li').removeClass('layui-hide').end().find('.fr').removeClass('fa-angle-up').addClass('fa-angle-down').end().css({'background': '#009ee4'})
		$(this).parent().siblings('ul').find('.level-one').css({'background': '#3b4152'})
		$(this).parent().siblings('ul').find('i.fr').removeClass('fa-angle-down').addClass('fa-angle-up')
		$(this).parent().siblings('ul').find('li.level-two').addClass('layui-hide')
	} else {
		$(this).siblings('li').addClass('layui-hide').end().find('.fr').removeClass('fa-angle-down').addClass('fa-angle-up')
		$(this).css({
			'background': '#3b4152',
		})
	}
})
//侧边栏子标题点击效果
$('.aside').on('click', '.level-two', function() {
	if(!$(this).hasClass('active')) {
		$(this).addClass('active').siblings("li[class^=level-two]").removeClass('active').end().parent().siblings('ul').find("li[class^='level-two']").removeClass('active')
	}
})
//显示栏标题切换效果
$('.list-title').on('click', 'a', function() {
	if(!$(this).hasClass('active')) {
		$(this).addClass('active').siblings('a').removeClass('active')
	}
})

//预览弹窗
/*
 * el,元素 
 * num,浏览器视口高度减去的量，没有默认52px
 * 
 * */
//菜单内容高度自适应
function loginHeight(el, num) {
	var loginHeight;
	var num = num ? num : 52
	//innerHeight 兼容性处理
	if(document.defaultView == undefined) {
		loginHeight = document.documentElement.clientHeight - num
		el.css({
			'height': loginHeight
		})
	} else {
		loginHeight = document.defaultView.innerHeight - num
		el.css({
			'height': loginHeight
		})
	}
}
//编辑器高度
function UEHeight (){
	//innerHeight 兼容性处理
	if(document.defaultView == undefined) {
		var UEHeight = document.documentElement.clientHeight - 145
		UE.getEditor('ueditor').setHeight(UEHeight)
	} else {
		var UEHeight = document.defaultView.innerHeight - 145
		UE.getEditor('ueditor').setHeight(UEHeight)
	}
}
/*
 * h : html的字符串 ，默认是缓存内的内容
 * */
function preview(h) {
	var ueHtml = h ? h : window.localStorage._wweiContent
	$('.phone-right-content').html(ueHtml)
	var previewHtml = $('.preview').html()
	layer.open({
		type: 1,
		title: false,
		closeBtn: 1,
		shadeClose: true,
		skin: 'ph1',
		content: previewHtml,
		success: function(e) {
			//使用canvas生成二维码
			$('.qrcode').qrcode({
		    render: "canvas",
		    width: 120,
		    height: 120,
		    text: "http://www.baidu.com"
			})
			//滚动条
			$(".phone-right .preview-scroll").panel({
				//滑轮步长
				iWheelStep: 100
			})
			//默认样式4.7屏幕
			$('.layui-layer-page').attr('class', 'layui-layer layui-layer-page ph1')
			$('.phone-right').css({
				'width': '378px',
				'padding': '95px 25px 0'
			})
			$('.preview-scroll').css('height', '540px')
			//切换屏幕尺寸
			$('.phone-left-top').on('click', '.layui-btn-primary', function(e) {
				//切换效果
				$(this).removeClass('layui-btn-primary').addClass('layui-btn-normal').siblings('button').removeClass('layui-btn-normal').addClass('layui-btn-primary')
				if(e.target.textContent == '4.7寸屏') {
					$('.layui-layer-page').attr('class', 'layui-layer layui-layer-page ph1')
					$('.phone-right').css({
						'width': '378px',
						'padding': '95px 25px 0'
					})
					$('.preview-scroll').css('height', '540px')
				} else if(e.target.textContent == '5.0寸屏') {
					$('.layui-layer-page').attr('class', 'layui-layer layui-layer-page ph2')
					$('.phone-right').css({
						'width': '407px',
						'padding': '77px 25px 0'
					})
					$('.preview-scroll').css('height', '595px')
				} else {
					$('.layui-layer-page').attr('class', 'layui-layer layui-layer-page ph3')
					$('.phone-right').css({
						'width': '408px',
						'padding': '101px 25px 0'
					})
					$('.preview-scroll').css('height', '593px')
				}
			})
		}, //layer success end
		end: function(){
			$('.qrcode').html('') //清除二维码
		},
	})
}
