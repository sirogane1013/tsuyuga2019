<template>
    <div id="app">
        <the-menu/>
        <transition name="page-transition" mode="out-in">
            <router-view></router-view>
        </transition>
        <the-menu-button/>
    </div>
</template>

<script>
    import TheMenuButton from './components/TheMenuButton'
    import TheMenu from './components/TheMenu'

    export default {
        name: 'app',
        components: {
            TheMenuButton,
            TheMenu
        },
    }
</script>

<style lang="scss">
    @import "./assets/scss/_variables";

    main {
        @media (min-width: 1024px) {
            width: calc(100% - 450px);
            position: absolute;
            left: 450px;
        }
    }

    .page-transition {
        /*&-enter {*/
            /*mask-size: 300% 300%;*/
            /*mask-position: 100% 100%;*/
            /*mask-image: -webkit-gradient(linear, right bottom, left top,*/
                    /*color-stop(0.00, rgba(0, 0, 0, 0)),*/
                    /*color-stop(0.33, rgba(0, 0, 0, 0)),*/
                    /*color-stop(0.66, rgba(0, 0, 0, 1)),*/
                    /*color-stop(1.00, rgba(0, 0, 0, 1)));*/
        /*}*/

        /*&-enter-to {*/
            /*mask-size: 300% 300%;*/
            /*mask-position: 0 0;*/
            /*mask-image: -webkit-gradient(linear, right bottom, left top,*/
                    /*color-stop(0.00, rgba(0, 0, 0, 0)),*/
                    /*color-stop(0.33, rgba(0, 0, 0, 0)),*/
                    /*color-stop(0.66, rgba(0, 0, 0, 1)),*/
                    /*color-stop(1.00, rgba(0, 0, 0, 1)));*/
        /*}*/

        &-leave {
            mask-size: 300% 300%;
            mask-position: 0 0;
            mask-image: -webkit-gradient(linear, right bottom, left top,
                    color-stop(0.00, rgba(0, 0, 0, 0)),
                    color-stop(0.33, rgba(0, 0, 0, 0)),
                    color-stop(0.66, rgba(0, 0, 0, 1)),
                    color-stop(1.00, rgba(0, 0, 0, 1)));
        }

        &-leave-to {
            mask-size: 300% 300%;
            mask-position: 100% 100%;
            mask-image: -webkit-gradient(linear, right bottom, left top,
                    color-stop(0.00, rgba(0, 0, 0, 0)),
                    color-stop(0.33, rgba(0, 0, 0, 0)),
                    color-stop(0.66, rgba(0, 0, 0, 1)),
                    color-stop(1.00, rgba(0, 0, 0, 1)));
        }

        /*&-enter-active {*/
            /*transition: all .5s;*/
        /*}*/

        &-leave-active {
            transition: all .5s;
        }
    }
</style>
