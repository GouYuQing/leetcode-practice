const arr = [
	{
		menuId: 1,
		parentId: 2,
		menuName: '菜单一',
		url: '/hello',
		description: '菜单一的路由',
	},
	{
		menuId: 2,
		parentId: 3,
		menuName: '菜单一父菜单',
		description: '菜单一父菜单的路由',
	},
	{
		menuId: 3,
		parentId: 0,
		menuName: '菜单一父菜单的父菜单',
		description: '菜单一父菜单的父菜单',
	},
	{
		menuId: 4,
		parentId: 5,
		menuName: '测试',
		url: '/test',
		description: '测试菜单',
	},
	{
		menuId: 5,
		parentId: 0,
		menuName: '测试父菜单',
		description: '测试的父菜单',
	},
];
const menuList = [];
function getMenuList(arr) {
	arr.filter(i => i.url).forEach(element => {
		menuList.push({
			text: element.menuName,
			url: element.url,
			description: element.description,
			parentNameList: getParentNameList(arr, element.parentId, []),
		});
	});
}

function getParentNameList(arr, parentId, menu) {
	const findMenu = arr.find(i => i.menuId === parentId);
	menu = menu.length ? [...menu, findMenu.menuName] : [findMenu.menuName];
	if (findMenu.parentId) {
		menu = getParentNameList(arr, findMenu.parentId, menu);
	}
	return menu;
}

getMenuList(arr);
console.log(menuList);
