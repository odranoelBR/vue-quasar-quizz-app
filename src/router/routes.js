
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/PageModules.vue') },
      { path: '/modulo/:id', component: () => import('pages/PageModule.vue') },
      { path: '/configuracoes', component: () => import('pages/PageConfiguration.vue') },
      { path: '/historico', component: () => import('pages/PageHistoric.vue') },
      { path: '/questionario', component: () => import('pages/PageQuestionary.vue') },
      { path: '/minha-conta', component: () => import('pages/PageMyAcc.vue') },
      { path: '/estatistica', component: () => import('pages/PageEstatistic.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/login', name: 'Login', component: () => import('pages/PageLogin.vue'), meta: { guest: true } }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
