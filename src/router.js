import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const base = process.env.NODE_ENV === 'production'
  ? '/website/'
  : '/';

export default new Router({
  mode: 'history',
  base,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'default' },
      // eslint-disable-next-line global-require
      component: require('./views/Home.vue').default, // load sync home
    },
    {
      path: '/product/features',
      name: 'features',
      meta: { layout: 'default' },
      component: () => import('./views/Features.vue'),
    },
    {
      path: '/product/teams',
      name: 'teams',
      meta: { layout: 'default' },
      component: () => import('./views/Teams.vue'),
    },
    {
      path: '/product/customer',
      name: 'features',
      meta: { layout: 'default' },
      component: () => import('./views/Customer.vue'),
    },
    {
      path: '/product/automation',
      name: 'features',
      meta: { layout: 'default' },
      component: () => import('./views/Automation.vue'),
    },
    {
      path: '/product/integrations',
      name: 'integrations',
      meta: { layout: 'default' },
      component: () => import('./views/Integrations.vue'),
    },
    {
      path: '/product/usecases',
      name: 'usecases',
      meta: { layout: 'default' },
      component: () => import('./views/Usecases.vue'),
    },
    {
      path: '/product/whyus',
      name: 'whyus',
      meta: { layout: 'default' },
      component: () => import('./views/Whyus.vue'),
    },
    {
      path: '/resources/links',
      name: 'links',
      meta: { layout: 'default' },
      component: () => import('./views/Links.vue'),
    },
    {
      path: '/resources/faq',
      name: 'faq',
      meta: { layout: 'default' },
      component: () => import('./views/Faq.vue'),
    },
    {
      path: '/resources/docs',
      name: 'docs',
      meta: { layout: 'default' },
      component: () => import('./views/Docs.vue'),
    },
    {
      path: '/resources/blog',
      name: 'blog',
      meta: { layout: 'default' },
      component: () => import('./views/Blog.vue'),
    },
    {
      path: '/solutions/howitworks',
      name: 'howitworks',
      meta: { layout: 'default' },
      component: () => import('./views/Howitworks.vue'),
    },
    {
      path: '/solutions/howtochoose',
      name: 'howtochoose',
      meta: { layout: 'default' },
      component: () => import('./views/Howtochoose.vue'),
    },
    {
      path: '/solutions/sales',
      name: 'sales',
      meta: { layout: 'default' },
      component: () => import('./views/Sales.vue'),
    },
    {
      path: '/solutions/support',
      name: 'support',
      meta: { layout: 'default' },
      component: () => import('./views/Support.vue'),
    },
    {
      path: '/solutions/remote',
      name: 'remote',
      meta: { layout: 'default' },
      component: () => import('./views/Remote.vue'),
    },
    {
      path: '/solutions/version',
      name: 'version',
      meta: { layout: 'default' },
      component: () => import('./views/Version.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      meta: { layout: 'default' },
      component: () => import('./views/Pricing.vue'),
    },
    {
      path: '/resources',
      name: 'resources',
      meta: { layout: 'default' },
      component: () => import('./views/Resources.vue'),
    },
    {
      path: '/company/about',
      name: 'about',
      meta: { layout: 'default' },
      component: () => import('./views/About.vue'),
    },
    {
      path: '/company/careers',
      name: 'careers',
      meta: { layout: 'default' },
      component: () => import('./views/Careers.vue'),
    },
    {
      path: '/company/team',
      name: 'team',
      meta: { layout: 'default' },
      component: () => import('./views/Team.vue'),
    },
    {
      path: '/company/press',
      name: 'team',
      meta: { layout: 'default' },
      component: () => import('./views/Press.vue'),
    },
    {
      path: '/company/events',
      name: 'team',
      meta: { layout: 'default' },
      component: () => import('./views/Events.vue'),
    },
    {
      path: '/company/customers',
      name: 'customers',
      meta: { layout: 'default' },
      component: () => import('./views/Customers.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { layout: 'default' },
      component: () => import('./views/Contact.vue'),
    },
    {
      path: '/solutions',
      name: 'solutions',
      meta: { layout: 'default' },
      component: () => import('./views/Solutions.vue'),
    },
    {
      path: '*',
      name: '404*',
      // eslint-disable-next-line global-require
      component: require('./views/404.vue').default, // load sync home
    },
  ],
});
