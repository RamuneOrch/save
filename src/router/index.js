import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home'
import Page from '../Page'
import Result from '../Result'
import Loading from '../loading'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name : 'home',
        component : Home
    },
    {
        path : '/page',
        name : 'page',
        component : Page,
        props:(route) => ({
            query: route.query.id
        })
    },
    {
        path: '/result',
        name: 'result',
        component : Result,
        props:(route) => ({
            query: route.query.id
        })
    },
    {
        path : '/Loading',
        name: 'load',
        component : Loading,
        props:(route) => ({
            query : route.query.id
        })
    }
]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
