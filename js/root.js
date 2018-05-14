//公用组件
//判断当前页面是否在iframe中，后续删除
if(top.location.href.indexOf('components') != -1 && top == this) {
	var gohome = '<div class="gohome"><a href="http://192.168.2.101:8020/UEditorAdmin/index.html" title="返回首页"><i class="fa fa-home"></i></a></div>';
	$('body').append(gohome);
}
$(function() {
	//判断是否引用layui,加载模块
	if(typeof(layui) != 'undefined') {
		var layer, laydate,upload
		layui.use(['layer', 'laydate', 'code', 'upload'], function() {
			laydate = layui.laydate
			layer = layui.layer
			upload = layui.upload
			layer.config({
				resize: false,
				skin: 'lan'
			})
			//时间控件
			laydate.render({
				elem: '.startTime',
			})
			laydate.render({
				elem: '.endTime',
			})
			layui.code({
				encode: true,
				about: false,
			}) //引用code方法
		})
	}
	$('.tabGroup').on('click', '.tabli', function() { //列表页导航切换
		$(this).addClass('onTab').siblings().removeClass('onTab')
		var onTabIndex = $(this).index()
		$('.tabMain').removeClass('onMain')
		$('.tabMain').eq(onTabIndex).addClass('onMain')
	})

	//树形结构菜单点击效果
	$('.file-manager>a.file-control').click(function() {
		if(!$(this).hasClass('active')) {
			$(this).addClass('active').siblings('a.file-control').removeClass('active')
		}
	})
	$('.folder-list').on('click', '>li>a', function() {
		$(this).siblings('ul').toggle()
		if($(this).find('i.fa').hasClass('fa-plus')) {
			$(this).find('i.fa-plus').attr('class', 'fa fa-minus')
		} else {
			$(this).find('i.fa-minus').attr('class', 'fa fa-plus')
		}
		//点击换色
		if($(this).find('i.fa').hasClass('fa-cube')) {
			$(this).addClass('active').parent().siblings().find('a').removeClass('active')
			$(this).parent().parent().parent().siblings().find('a').removeClass('active')
			$(this).parent().parent().parent().parent().parent().siblings().find('a').removeClass('active')
		}
	})
	


})
//获取当前日期
Date.prototype.format = function(b) {
	var s = ''
	var h = ''
	s += this.getFullYear() + '-' // 获取年份。
	s += (this.getMonth() + 1)  < 10 ? '0' + (this.getMonth() + 1) + "-" : (this.getMonth() + 1) + "-" // 获取月份。
	s += this.getDate() < 10 ? '0' + this.getDate() : this.getDate() // 获取日。
	h += this.getHours() < 10 ? '0' + this.getHours() : this.getHours() //小时
	h += ':00'
	if (b) {
		return (s + " " + h)
	}
	return (s) // 返回日期。
}
//按日查询
function getDayAll(begin, end) {
	end = end ? end : new Date().format()
	var dateAllArr = new Array()
	var ab = begin.split("-")
	var ae = end.split("-")
	var db = new Date()
	db.setUTCFullYear(ab[0], ab[1] - 1, ab[2])
	var de = new Date()
	de.setUTCFullYear(ae[0], ae[1] - 1, ae[2])
	var unixDb = db.getTime()
	var unixDe = de.getTime()
	for(var k = unixDb; k <= unixDe;) {
		dateAllArr.push((new Date(parseInt(k))).format().toString())
		k = k + 24 * 60 * 60 * 1000
	}
	return dateAllArr
}
