$(function() {
	//显示栏点击效果（添加到富文本）
	$('.material-list').on('click', '.list-content>ul>li', function() {
		var strHtml = $(this).find('.list-content-item').html() + '<p><br /></p>'
		ue.setContent(strHtml, true) //追加
	})
	//浏览器渲染后先执行一遍
	loginHeight($('.container .aside'))
	loginHeight($('.line-center'))
	loginHeight($('.material-list'))
	loginHeight($('.list-content'), 99)
	//监听浏览器窗口改变，自适应高度
	window.onresize = function() {
		loginHeight($('.container .aside'))
		loginHeight($('.line-center'))
		loginHeight($('.material-list'))
		loginHeight($('.list-content'), 99)
		//编辑器高度
		UEHeight()
	}
	//初始化富文本编辑器
	var ue = UE.getEditor('ueditor', {
		allowDivTransToP: false, //阻止div标签变成p标签
	})
	
	ue.ready(function() {
		//编辑器高度
		UEHeight()
		//本地缓存，每1.5s自动存储一遍内容
		if(window.localStorage) {
			if(typeof window.localStorage._wweiContent != "undefined") {
				ue.setContent(window.localStorage._wweiContent)
			}
			setInterval(function() {
				window.localStorage._wweiContent = ue.getContent()
			}, 1500)
		}
		//复制效果
		//实例化flash
		var clip = new ZeroClipboard($('#copy-button'), {})
		clip.on('ready', function() { //flash准备完成
			clip.setHtml(ue.getContent())
			clip.on('beforecopy',function(){//复制前更新复制内容
				clip.setHtml(ue.getContent())
			})
			clip.on('aftercopy', function(event) {//复制后弹窗提示
				layer.msg('复制成功！')
			})
		})
		clip.on('error', function(event) {
			$('#copy-button').on('click', function() {
				layer.msg('复制内容依赖于Flash。请确保您的浏览器有此插件并使用，或者选中内容使用Ctrl+C复制')
			})
			ZeroClipboard.destroy()
		})
		//清空效果
		$('#clear-button').on('click', function() {
			layer.confirm('确认清空所有内容？', {
				btn: ['确认', '取消']
			}, function(e) {
				ue.setContent('')
				layer.close(e)
			})
		})
		//上传图片
		$('#upload-img').on('change',function(e){ //暂时的效果，后续改为后台接口
			var a = e.target.value
			var index = a.lastIndexOf('\\') + 1
			//var u = window.location.host + "/UEditor/images/"
			var b = './images/' + a.substring(index)
			if (e.target.value != '') {
				var imghtml = "<img src='" + b + "' />"
				ue.setContent(imghtml,true)
			}
		})
		//弹窗预览
		$('#preview').on('click', function(){
			preview(ue.getContent())
		})
		//储存草稿弹窗
		$('#draft').on('click', function() {
			var draft = layer.open({
				type: 2,
				title: '存储草稿',
//				skin: 'blue-layer-class',
				content: './ue_draft.html',
				area: ['1100px', '850px'],
				maxmin: false,
				resize: false
			})
		})
		//文章导入弹窗
		$('#importArticles').on('click',function(){
			var importArticlesHtml = $('#importArticlesHtml').html()
			var articles = layer.open({
				type: 1,
				title: '导入文章',
//				skin: 'blue-layer-class',
				content: importArticlesHtml,
				area: ['500px', '280px'],
				maxmin: false,
				resize: false
			})
		})
		$('body').on('click','.saveimg>i',function(){
			if (!$(this).hasClass('layui-hide')) {
				$(this).addClass('layui-hide').siblings('i').removeClass('layui-hide')
			}
		})
		$('body').on('click','.importArticlesBtn>a',function(){
			if ($(this).text() == '确认') {
				if ($(this).parent().siblings('.leadingurl').val() == '') {
					layer.msg('请输入地址后确认')
					return false
				}
				layer.closeAll()
			}
			if ($(this).text() == '取消') {
				layer.closeAll()
			}
		})
		//保存模板弹窗
		$('#saveTPBtn').on('click',function(){
			var saveTP = $('#saveTP').html()
			var articles = layer.open({
				type: 1,
				title: '保存模板',
//				skin: 'blue-layer-class',
				content: saveTP,
				area: ['500px', '280px'],
				maxmin: false,
				resize: false
			})
		})
		$('body').on('click','.saveTPBtn>a',function(){
			if ($(this).text() == '确认') {
				layer.closeAll()
			}
			if ($(this).text() == '取消') {
				layer.closeAll()
			}
		})
		//同步微信
		$('#sync').on('click',function(){
			layer.open({
				type: 2,
				title: '将文章同步到微信',
				content: './sync.html',
				area: ['1000px','630px'],
//				skin: 'white-layer-class'
			})
		})
	}) // ue ready end
	ue.addListener('selectionchange', function(editor) {
    //console.log('选区发生改变')
    window.localStorage._wweiContent = ue.getContent()
 	})

})
