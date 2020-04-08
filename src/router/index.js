import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/data-management',
    component: Layout,
    redirect: '/data-management',
    name: 'today',
    meta: {
      title: '数据管理',
      icon: 'nested'
    },
    children: [
      { path: 'today', component: () => import('@/views/data-management/today'), name: 'exportExcel', meta: { title: '数据今日管理' }},
      { path: 'history', component: () => import('@/views/data-management/history'), name: 'uploadExcel', meta: { title: '数据历史管理' }},
      { path: 'feedback', component: () => import('@/views/data-management/feedback'), name: 'exportExcel', meta: { title: '数据检查反馈' }},
      { path: 'all', component: () => import('@/views/data-management/all'), name: 'all', meta: { title: '数据全部管理' }}
    ]
  },
  {
    path: '/7sCheck',
    component: Layout,
    redirect: '/7sCheck',
    name: 'today',
    meta: {
      title: '7S检查',
      icon: 'skill'
    },
    children: [
      { path: 'today', component: () => import('@/views/7sCheck/today'), name: 'exportExcel', meta: { title: '7S今日检查' }},
      { path: 'history', component: () => import('@/views/7sCheck/history'), name: 'uploadExcel', meta: { title: '7S历史检查' }},
      { path: 'feedback', component: () => import('@/views/7sCheck/feedback'), name: 'exportExcel', meta: { title: '7S检查反馈' }},
      { path: 'all', component: () => import('@/views/7sCheck/all'), name: 'all', meta: { title: '7S全部检查' }}
    ]
  },
  {
    path: '/dorm',
    component: Layout,
    redirect: '/dorm',
    name: 'today',
    meta: {
      title: '寝室检查',
      icon: 'peoples'
    },
    children: [
      { path: 'today', component: () => import('@/views/dorm/today'), name: 'exportExcel', meta: { title: '寝室今日检查' }},
      { path: 'history', component: () => import('@/views/dorm/history'), name: 'uploadExcel', meta: { title: '寝室历史检查' }},
      { path: 'feedback', component: () => import('@/views/dorm/feedback'), name: 'exportExcel', meta: { title: '寝室检查反馈' }},
      { path: 'all', component: () => import('@/views/dorm/all'), name: 'all', meta: { title: '寝室全部检查' }}
    ]
  },
  {
    path: '/teaching',
    component: Layout,
    redirect: '/teaching',
    name: 'today',
    meta: {
      title: '教学检查',
      icon: 'education'
    },
    children: [
      { path: 'today', component: () => import('@/views/teaching/today'), name: 'exportExcel', meta: { title: '教学今日检查' }},
      { path: 'history', component: () => import('@/views/teaching/history'), name: 'uploadExcel', meta: { title: '教学历史检查' }},
      { path: 'feedback', component: () => import('@/views/teaching/feedback'), name: 'exportExcel', meta: { title: '教学检查反馈' }},
      { path: 'all', component: () => import('@/views/teaching/all'), name: 'all', meta: { title: '教学全部检查' }}
    ]
  },
  {
    path: '/selfstudy',
    component: Layout,
    redirect: '/selfstudy',
    name: 'today',
    meta: {
      title: '自习检查',
      icon: 'edit'
    },
    children: [
      { path: 'today', component: () => import('@/views/selfstudy/today'), name: 'exportExcel', meta: { title: '自习今日检查' }},
      { path: 'history', component: () => import('@/views/selfstudy/history'), name: 'uploadExcel', meta: { title: '自习历史检查' }},
      { path: 'feedback', component: () => import('@/views/selfstudy/feedback'), name: 'exportExcel', meta: { title: '自习检查反馈' }},
      { path: 'all', component: () => import('@/views/selfstudy/all'), name: 'all', meta: { title: '自习全部检查' }}
    ]
  },
  {
    path: '/archives',
    component: Layout,
    redirect: '/archives',
    meta: {
      title: '档案管理',
      icon: 'excel'
    },
    children: [
      { path: 'today', component: () => import('@/views/archives/today'), name: 'exportExcel', meta: { title: '档案今日管理' }},
      { path: 'history', component: () => import('@/views/archives/history'), name: 'uploadExcel', meta: { title: '档案历史管理' }},
      { path: 'feedback', component: () => import('@/views/archives/feedback'), name: 'exportExcel', meta: { title: '档案检查反馈' }},
      { path: 'all', component: () => import('@/views/archives/all'), name: 'all', meta: { title: '档案全部管理' }}
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
