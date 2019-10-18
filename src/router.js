import Vue from 'vue'
import Router from 'vue-router'

const Home = r=>require.ensure([],() =>r(require('@/views/Home')));
const bar1 = r=>require.ensure([],() =>r(require('@/views/bar1')));
const d3test1 = r=>require.ensure([],() =>r(require('@/views/d3test1')));
const tree1 = r=>require.ensure([],() =>r(require('@/views/tree1')));
const d3_template1 = r=>require.ensure([],() =>r(require('@/views/d3_template1')));

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bar1',
      name: 'bar1',
      component: bar1
    },
    {
      path: '/d3test1',
      name: 'd3test1',
      component: d3test1
    },
    {
      path: '/d3_template1',
      name: 'd3_template1',
      component: d3_template1
    },
    {
      path: '/tree1',
      name: 'tree1',
      component: tree1
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
