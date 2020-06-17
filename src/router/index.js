import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Index from '../../src/components/Content/index'
import List from '../../src/components/Content/List'
import Add from '../../src/components/Content/Add'
import Dashbaord from '../components/Dashbaord'
import Login from '../../src/components/Login'
import Test from '../../src/components/First/Test'
import Header from '../../src/components/First/Header'
import Rump from '../../src/components/First/Rump'
// import Naver from '../../src/components/Content'

// /* Router Modules */
// import componentsRouter from './modules/components'

export const constantRoutes = [
	{
		path: '/dashbaord',
		component: Dashbaord,
		redirect: '/dashbaord/index',
		children: [
			{
				path: 'index',
				component: Index,
				children: [
					{
						path: 'test',
						component: Test,
						hidden: true,
					},
					{
						path: 'header',
						component: Header,
						hidden: true,
					},
					{
						path: 'rump',
						component: Rump,
						hidden: true,
					},
				],
				hidden: true,
			},
			{
				path: 'list',
				component: List,
				hidden: true,
			},
			{
				path: 'add',
				component: Add,
				hidden: true,
			},
		],
	},
	{
		path: '/login',
		component: Login,
		hidden: true,
	},
]
//   {
//     path: '/login',
//     component: () => import('@/views/login/index'),
//     hidden: true
//   },
//   {
//     path: '/auth-redirect',
//     component: () => import('@/views/login/auth-redirect'),
//     hidden: true
//   },
//   {
//     path: '/404',
//     component: () => import('@/views/error-page/404'),
//     hidden: true
//   },
//   {
//     path: '/401',
//     component: () => import('@/views/error-page/401'),
//     hidden: true
//   },
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     children: [
//       {
//         path: 'dashboard',
//         component: () => import('@/views/dashboard/index'),
//         name: '首页',
//         meta: { title: '首页', icon: 'dashboard', affix: true }
//       }
//     ]
//   },
//   {
//     path: '/documentation',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/documentation/index'),
//         name: 'Documentation',
//         meta: { title: 'Documentation', icon: 'documentation', affix: true }
//       }
//     ]
//   },
//   {
//     path: '/guide',
//     component: Layout,
//     redirect: '/guide/index',
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/guide/index'),
//         name: 'Guide',
//         meta: { title: 'Guide', icon: 'guide', noCache: true }
//       }
//     ]
//   },
//   {
//     path: '/profile',
//     component: Layout,
//     redirect: '/profile/index',
//     hidden: true,
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/profile/index'),
//         name: 'Profile',
//         meta: { title: 'Profile', icon: 'user', noCache: true }
//       }
//     ]
//   },
//   {
//     path: '/test',
//     component: Layout,
//     hidden: true,
//     redirect: '/test/index',
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/test/index'),
//         name: 'test',
//         meta: { title: 'test', icon: 'user', noCache: true },
//         children: [
//           {
//             path: '/:id',
//             component: () => import('@/views/test/child.vue'),
//             name: 'test',
//             meta: { title: 'test', icon: 'user', noCache: true }
//           }
//         ]
//       }
//     ]
//   }
// ]

// /**
//  * asyncRoutes
//  * the routes that need to be dynamically loaded based on user roles
//  */
// export const asyncRoutes = [
//   // {
//   //   path: '/permission',
//   //   component: Layout,
//   //   redirect: '/permission/page',
//   //   alwaysShow: true, // will always show the root menu
//   //   name: 'Permission',
//   //   meta: {
//   //     title: 'Permission',
//   //     icon: 'lock',
//   //     roles: ['admin', 'editor'] // you can set roles in root nav
//   //   },
//   //   children: [
//   //     {
//   //       path: 'page',
//   //       component: () => import('@/views/permission/page'),
//   //       name: 'PagePermission',
//   //       meta: {
//   //         title: 'Page Permission',
//   //         roles: ['admin'] // or you can only set roles in sub nav
//   //       }
//   //     },
//   //     {
//   //       path: 'directive',
//   //       component: () => import('@/views/permission/directive'),
//   //       name: 'DirectivePermission',
//   //       meta: {
//   //         title: 'Directive Permission'
//   //         // if do not set roles, means: this page does not require permission
//   //       }
//   //     },
//   //     {
//   //       path: 'role',
//   //       component: () => import('@/views/permission/role'),
//   //       name: 'RolePermission',
//   //       meta: {
//   //         title: 'Role Permission',
//   //         roles: ['admin']
//   //       }
//   //     }
//   //   ]
//   // },

//   {
//     path: '/icon',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/icons/index'),
//         name: 'Icons',
//         meta: { title: 'Icons', icon: 'icon', noCache: true }
//       }
//     ]
//   },

//   /** when your routing map is too long, you can split it into small modules **/
//   componentsRouter,
//   chartsRouter,
//   nestedRouter,
//   tableRouter,

//   {
//     path: '/example',
//     component: Layout,
//     redirect: '/example/list',
//     name: 'Example',
//     meta: {
//       title: 'Example',
//       icon: 'example'
//     },
//     children: [
//       {
//         path: 'create',
//         component: () => import('@/views/example/create'),
//         name: 'CreateArticle',
//         meta: { title: 'Create Article', icon: 'edit' }
//       },
//       {
//         path: 'edit/:id(\\d+)',
//         component: () => import('@/views/example/edit'),
//         name: 'EditArticle',
//         meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
//         hidden: true
//       },
//       {
//         path: 'list',
//         component: () => import('@/views/example/list'),
//         name: 'ArticleList',
//         meta: { title: 'Article List', icon: 'list' }
//       }
//     ]
//   },

//   {
//     path: '/tab',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/tab/index'),
//         name: 'Tab',
//         meta: { title: 'Tab', icon: 'tab' }
//       }
//     ]
//   },

//   {
//     path: '/error',
//     component: Layout,
//     redirect: 'noRedirect',
//     name: 'ErrorPages',
//     meta: {
//       title: 'Error Pages',
//       icon: '404'
//     },
//     children: [
//       {
//         path: '401',
//         component: () => import('@/views/error-page/401'),
//         name: 'Page401',
//         meta: { title: '401', noCache: true }
//       },
//       {
//         path: '404',
//         component: () => import('@/views/error-page/404'),
//         name: 'Page404',
//         meta: { title: '404', noCache: true }
//       }
//     ]
//   },

//   {
//     path: '/error-log',
//     component: Layout,
//     children: [
//       {
//         path: 'log',
//         component: () => import('@/views/error-log/index'),
//         name: 'ErrorLog',
//         meta: { title: 'Error Log', icon: 'bug' }
//       }
//     ]
//   },

//   {
//     path: '/excel',
//     component: Layout,
//     redirect: '/excel/export-excel',
//     name: 'Excel',
//     meta: {
//       title: 'Excel',
//       icon: 'excel'
//     },
//     children: [
//       {
//         path: 'export-excel',
//         component: () => import('@/views/excel/export-excel'),
//         name: 'ExportExcel',
//         meta: { title: 'Export Excel' }
//       },
//       {
//         path: 'export-selected-excel',
//         component: () => import('@/views/excel/select-excel'),
//         name: 'SelectExcel',
//         meta: { title: 'Export Selected' }
//       },
//       {
//         path: 'export-merge-header',
//         component: () => import('@/views/excel/merge-header'),
//         name: 'MergeHeader',
//         meta: { title: 'Merge Header' }
//       },
//       {
//         path: 'upload-excel',
//         component: () => import('@/views/excel/upload-excel'),
//         name: 'UploadExcel',
//         meta: { title: 'Upload Excel' }
//       }
//     ]
//   },

//   {
//     path: '/zip',
//     component: Layout,
//     redirect: '/zip/download',
//     alwaysShow: true,
//     name: 'Zip',
//     meta: { title: 'Zip', icon: 'zip' },
//     children: [
//       {
//         path: 'download',
//         component: () => import('@/views/zip/index'),
//         name: 'ExportZip',
//         meta: { title: 'Export Zip' }
//       }
//     ]
//   },

//   {
//     path: '/pdf',
//     component: Layout,
//     redirect: '/pdf/index',
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/pdf/index'),
//         name: 'PDF',
//         meta: { title: 'PDF', icon: 'pdf' }
//       }
//     ]
//   },
//   {
//     path: '/pdf/download',
//     component: () => import('@/views/pdf/download'),
//     hidden: true
//   },

//   {
//     path: '/theme',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/theme/index'),
//         name: 'Theme',
//         meta: { title: 'Theme', icon: 'theme' }
//       }
//     ]
//   },

//   {
//     path: '/clipboard',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/clipboard/index'),
//         name: 'ClipboardDemo',
//         meta: { title: 'Clipboard', icon: 'clipboard' }
//       }
//     ]
//   },

//   {
//     path: 'external-link',
//     component: Layout,
//     children: [
//       {
//         path: 'https://github.com/PanJiaChen/vue-element-admin',
//         meta: { title: 'External Link', icon: 'link' }
//       }
//     ]
//   },

//   // 404 page must be placed at the end !!!
//   { path: '*', redirect: '/404', hidden: true }
// ]

const createRouter = () =>
	new Router({
		// mode: 'history', // require service support
		scrollBehavior: () => ({ y: 0 }),
		routes: constantRoutes,
	})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

export default router
