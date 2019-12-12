import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Mochimono from './views/Mochimono'
import Link from './views/Link'
import Optional from "./views/Optional";
import Play from "./views/Play";
import TimeTableIndex from "./views/TimeTable/Index";
import TimeTableFirstDay from "./views/TimeTable/FirstDay";
import TimeTableSecondDay from "./views/TimeTable/SecondDay";
import TimeTableThirdDay from "./views/TimeTable/ThirdDay";
import AllocationIndex from "./views/Allocation/Index";
import AllocationSearch from "./views/Allocation/Search";
import AllocationRoom from "./views/Allocation/Room";
import AllocationBus from "./views/Allocation/Bus";
import Other from "./views/Other";
import store from "./store";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: '/mochimono',
            name: 'mochimono',
            component: Mochimono,
        },
        {
            path: '/timetable',
            name: 'timetable',
            component: TimeTableIndex,
            children: [
                {
                    path: 'first-day',
                    component: TimeTableFirstDay,
                },
                {
                    path: 'second-day',
                    component: TimeTableSecondDay,
                },
                {
                    path: 'third-day',
                    component: TimeTableThirdDay,
                },
            ]
        },
        {
            path: '/allocation',
            name: 'allocation',
            component: AllocationIndex,
            children: [
                {
                    path: 'search',
                    component: AllocationSearch,
                },
                {
                    path: 'room',
                    component: AllocationRoom,
                },
                {
                    path: 'bus',
                    component: AllocationBus,
                },
            ]
        },
        {
            path: '/optional',
            name: 'optional',
            component: Optional,
        },
        {
            path: '/play',
            name: 'play',
            component: Play,
        },
        {
            path: '/link',
            name: 'link',
            component: Link,
        },
        {
            path: '/other',
            name: 'other',
            component: Other,
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (from.path === '/' && to.path === '/') {
        store.bootFromIndex();
    }
    if (! from.path.match(new RegExp('/timetable/.*')) && to.path.match(new RegExp('/timetable/.*'))) {
        store.bootTimeTable();
    } else {
        store.unBootTimeTable();
    }
    if (to.path === '/') {
        store.openMenu();
    } else {
        store.closeMenu();
    }
    next();
});

export default router
