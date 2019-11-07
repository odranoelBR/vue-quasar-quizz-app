
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/PageModulos.vue') },
      { path: '/modulo/:id', component: () => import('pages/PageModulo.vue') },
      { path: '/configuracoes', component: () => import('pages/PageConfiguracao.vue') },
      { path: '/historico', component: () => import('pages/PageHistorico.vue') },
      { path: '/questionario', component: () => import('pages/PageQuestionario.vue') }

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
