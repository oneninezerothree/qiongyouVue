import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import loginpage from './views/loginpage.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/singin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/singin.vue'),
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: loginpage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),

    },
    {
      path: '/Shanping',
      name: 'Shanping',
      component: () => import(/* webpackChunkName: "Shanping" */ './views/Shanping.vue'),

    },
    {
      path: '/qbourn',
      name: 'qbourn',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Qbourn.vue'),
      children: [{
        path: '/qbourn/ob1',
        name: 'ob1',
        component: () => import(/* webpackChunkName: "about" */ './components/mudidi/ob1.vue'),
      },
      {
        path: '/qbourn/ob2',
        name: 'ob2',
        component: () => import(/* webpackChunkName: "about" */ './components/mudidi/ob2.vue'),
      },
      {
        path: '/qbourn/ob3',
        name: 'ob3',
        component: () => import(/* webpackChunkName: "about" */ './components/mudidi/ob3.vue'),
      }
        ,
      {
        path: '/qbourn/ob4',
        name: 'ob4',
        component: () => import(/* webpackChunkName: "about" */ './components/mudidi/ob4.vue'),
      }
        ,
      {
        path: '/qbourn/ob5',
        name: 'ob5',
        component: () => import(/* webpackChunkName: "about" */ './components/mudidi/ob5.vue'),
      }
        ,
      {
        path: '/qbourn/ob6',
        name: 'ob6',
        component: () => import(/* webpackChunkName: "about" */ './components/mudidi/ob6.vue'),
      }
        ,
      {
        path: '/qbourn/ob7',
        name: 'ob7',
        component: () => import(/* webpackChunkName: "about" */ './components/mudidi/ob7.vue'),
      }

      ]
    },
    {
      path: '/qmymulu',
      name: 'qmymulu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Qmymulu.vue'),
    },
    {
      path: '/chcresh',
      name: 'chcresh',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Chcresh.vue'),
    },
    {
      path: '/seek',
      name: 'seek',
      component: () => import(/* webpackChunkName: "about" */ './views/Seek.vue'),
    }
  ],
});
