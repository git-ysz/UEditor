//左侧菜单路由
var Routers = [{
		type: 'block',
		name: 'H5内容区块',
		icon: 'fa fa-user',
		child: [{
				router: 'blockDefine',
				name: '区块定义',
				path: '/UEditorAdmin/components/block/blockDefine',
			},
			{
				router: 'blockContent',
				name: '区块内容',
				path: '/UEditorAdmin/components/block/blockContent',
			},
			{
				router: 'blockView',
				name: '区块效果预览',
				path: '/UEditorAdmin/components/block/blockView',
			}
		]
	},
	{
		type: 'activity',
		name: '活动管理',
		icon: 'fa fa-user',
		child: [{
				router: 'activityAdmin',
				name: '活动管理',
				path: '/UEditorAdmin/components/activity/activityAdmin',
			},
			{
				router: 'activityApprove',
				name: '活动审批',
				path: '/UEditorAdmin/components/activity/activityApprove',
			},
			{
				router: 'activityMsg',
				name: '活动信息',
				path: '/UEditorAdmin/components/activity/activityMsg',
			},
			{
				router: 'activityView',
				name: '活动效果预览',
				path: '/UEditorAdmin/components/activity/activityView',
			},
			{
				router: 'activityLink',
				name: '活动链接地址',
				path: '/UEditorAdmin/components/activity/activityLink',
			},
			{
				router: 'activityOnLine',
				name: '活动在线审核',
				path: '/UEditorAdmin/components/activity/activityOnLine',
			}
		]
	},
	{
		type: 'count',
		name: '统计分析',
		icon: 'fa fa-user',
		child: [{
				router: 'activityCount',
				name: '活动分发统计',
				path: '/UEditorAdmin/components/count/activityCount',
			},
			{
				router: 'redPacketLog',
				name: '红包分发数量',
				path: '/UEditorAdmin/components/count/redPacketLog',
			}
		]
	},
	{
		type: 'account',
		name: '账户管理',
		icon: 'fa fa-user',
		child: [{
				router: 'accountMsg',
				name: '账户基本信息',
				path: '/UEditorAdmin/components/account/accountMsg',
			},
			{
				router: 'accountAddMoney',
				name: '账户充值',
				path: '/UEditorAdmin/components/account/accountAddMoney',
			}
		]
	},
	{
		type: 'userAdmin',
		name: '用户管理',
		icon: 'fa fa-user',
		child: [{
				router: 'departmentAdmin',
				name: '部门管理',
				path: '/UEditorAdmin/components/userAdmin/departmentAdmin',
			},
			{
				router: 'roleAdmin',
				name: '角色管理',
				path: '/UEditorAdmin/components/userAdmin/roleAdmin',
			},
			{
				router: 'usersAdmin',
				name: '用户管理',
				path: '/UEditorAdmin/components/userAdmin/usersAdmin',
			}
		]
	},
	{
		type: 'other',
		name: '其他',
		icon: 'fa fa-user',
		child: [{
			router: '404',
			name: '404页面',
			path: '/UEditorAdmin/components/404',
		}]
	}
]
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