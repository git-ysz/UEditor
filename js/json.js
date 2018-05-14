//引入配置文件
requirejs(["router"], function() {
	layui.use(['laytpl'], function() {
		var laytpl = layui.laytpl //使用模板引擎模块
		laytpl($('#faMenu').html()).render({
			Routers: Routers
		}, function(string) {
			$('#faMenu').html(string).css({
				'opacity': '1',
				'pointer-events': 'auto'
			})
		})
	})
}, function(err) {
	window.location.href = './components/404.html'
})