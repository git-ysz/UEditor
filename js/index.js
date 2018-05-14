$(function(){
	//监听onload事件，获取hash定位到刷新的页面
	window.addEventListener('load',function(){ 
		var hash = window.location.hash.substr(1)
		if (hash != '') {
			var a = Routers.in_arr(hash) != false ? Routers.in_arr(hash) : '/UEditorAdmin/components/404'
			var iframeHref =window.location.protocol + '//' + window.location.host + a + '.html'
			$('.main iframe').attr('src',iframeHref) //刷新页面定位刷新前页面
			$('li[data-href=' + hash + ']').addClass('active').parent().prev().addClass('active') //刷新页面定位刷新前侧边栏样式
		}else{
			$('.main iframe').attr('src','./body.html')
		}
	})
	//侧边栏点击效果
	$('#faMenu').on('click','.asideTitle',function(){
		if (!$(this).hasClass('active')) {
			$(this).addClass('active').next().css({'display':'block'}).parent().siblings('li').find('.asideTitle').removeClass('active').next().css({'display':'none'})
		}
	})
	$('#faMenu').on('click','.sonMenu li',function(e){
		if (!$(this).hasClass('active')) {
			$(this).siblings('li').removeClass('active').end().addClass('active').parent().parent().siblings('li').find('.sonMenu>li').removeClass('active')
			//右侧页面跳转
			var dataHref = $(this).attr('data-href')
			asideHref(dataHref)
		}
	})
	//退出登录
	$('.login').on('click','.outBtn',function(){
		layer.confirm('您确定要退出登录',{
			btn: ['确定','取消'],
		},function(e){
			if (e === 1) {
				window.location.href = 'login.html'
			}
		})
	})
	//修改密码
	$('.login').on('click','.setBtn',function(){
		layer.open({
			type: 1,
			content: $('.setBtnHtml').html(),
			title: '修改密码',
			area: ['600px', '260px'],
			success: function() {
				$('.saveAdd').click(function(){
					layer.msg('修改成功',{
						time: 1000,
					},function(){
						layer.closeAll()
						window.location.href = 'login.html'
					})
				})
				$('.cancelAdd').click(function(){
					layer.closeAll()
				})
			}
		}) //end layer
	})

})
function asideHref(data) { //侧边栏页面跳转
	var a = Routers.in_arr(data)
	if (a != false) {
		var iframeHref =window.location.protocol + '//' + window.location.host + a + '.html'
		$('.main iframe').attr('src',iframeHref)
		history.pushState({},'','./#' + data) //地址栏添加hash
	}else {
		var iframeHref =window.location.protocol + '//' + window.location.host + '/UEditorAdmin/components/404.html'
		$('.main iframe').attr('src',iframeHref)
	}
}
//判断数据是否存在于Routers,存在则返回这一数据
Array.prototype.in_arr = function(data) {
	var i = this.length
	while(i--) {
		var k = this[i].child.length
		while(k--) {
			if(this[i].child[k].router === data) {
				return this[i].child[k].path;
			}
		}
	}
	return false;
}