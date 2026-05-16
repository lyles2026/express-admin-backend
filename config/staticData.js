export const menuConfig = {
    admin: [
        {
            index: '1',
            title: '后台面板',
            icon: 'Help',
            path: "/",
        },
        {
            index: '2',
            title: '商品管理',
            icon: 'Goods',
            path: "",
            children: [
                {
                    index: '2-1',
                    title: '商品管理',
                    icon: 'ShoppingCartFull',
                    path: "/Goods/shop"
                },
                {
                    index: '2-2',
                    title: '分类管理',
                    icon: 'Menu',
                    path: "/Goods/category"
                },
                {
                    index: '2-3',
                    title: '规格管理',
                    icon: 'List',
                    path: "/Goods/size"
                },
                {
                    index: '2-4',
                    title: '优惠卷管理',
                    icon: 'Ticket',
                    path: "/Goods/coupon"
                }
            ]
        },
        {
            index: '3',
            title: '用户管理',
            icon: 'User',
            path: "",
            children: [
                {
                    index: '3-1',
                    title: '用户管理',
                    icon: 'User',
                    path: "/Users/user"
                },
                {
                    index: '3-2',
                    title: '会员等级',
                    icon: 'Coin',
                    path: "/Users/vip"
                }
            ]
        },
        {
            index: '4',
            title: '订单管理',
            icon: 'Service',
            path: "",
            children: [
                {
                    index: '4-1',
                    title: '订单列表',
                    icon: 'Files',
                    path: "/Order/permissions"
                },
                {
                    index: '4-2',
                    title: '售后管理',
                    icon: 'PhoneFilled',
                    path: "/Order/sale"
                },
                {
                    index: '4-3',
                    title: '订单统计',
                    icon: 'ToiletPaper',
                    path: "/Order/count"
                }
            ]
        },
        {
            index: '5',
            title: '管理员管理',
            icon: 'FolderOpened',
            path: "",
            children: [
                {
                    index: '5-1',
                    title: '管理员管理',
                    icon: 'Coordinate',
                    path: "/Admin/admin"
                },
                {
                    index: '5-2',
                    title: '权限管理',
                    icon: 'Link',
                    path: "/Admin/permission"
                },
                {
                    index: '5-3',
                    title: '角色管理',
                    icon: 'UserFilled',
                    path: "/Admin/role"
                }
            ]
        },
        {
            index: '6',
            title: '分销模块',
            icon: 'ShoppingCart',
            path: "",
            children: [
                {
                    index: '6-1',
                    title: '分销员管理',
                    icon: 'Stamp',
                    path: "/Distribution/permissions"
                },
                {
                    index: '6-2',
                    title: '分销订单',
                    icon: 'SoldOut',
                    path: "/Distribution/list"
                },
                {
                    index: '6-3',
                    title: '佣金管理',
                    icon: 'TrophyBase',
                    path: "/Distribution/commission"
                },
            ]
        },
        {
            index: '7',
            title: '其他模块',
            icon: 'MostlyCloudy',
            path: "",
            children: [
                {
                    index: '7-1',
                    title: '图库管理',
                    icon: 'PieChart',
                    path: "/Notice/gallery"
                },
                {
                    index: '7-2',
                    title: '公告管理',
                    icon: 'ChatDotSquare',
                    path: "/Notice/public"
                }
            ]
        }
    ]

}