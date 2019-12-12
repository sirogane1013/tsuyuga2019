<template>
    <div
            :class="[
                'framed-menu',
                state.isMenuOpen ? 'framed-menu--hide':'framed-menu--show',
            ]"
    >
        <router-link to="/">
            <div class="framed-menu__inner">
                <p>menu</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    import store from "../store"

    export default {
        name: "the-menu-button",
        data() {
            return {
                state: store.state,
            }
        },
        methods: {}

    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
    @import "../assets/scss/mixins";

    $framed-menu-edge: 3px; //メニューのふちの部分
    /*ページ下部の丸いメニューボタン*/
    /*円形の要素を二つ重ねて作る*/
    .framed-menu {
        position: fixed;
        width: 7rem;
        height: 7rem;
        bottom: -3.5rem;
        left: calc(50% - 3.5rem);
        box-sizing: border-box;
        border-radius: 50%;
        padding: $framed-menu-edge;
        color: $main2;
        background: linear-gradient(70deg, $main1, $main2);
        transition-duration: .3s;
        transition-delay: .8s;
        transition-timing-function: ease-out;
        opacity: 1;
        @media (min-width: 1024px) { // not active on pc
            display: none;
        }

        &--hide {
            transition-delay: .3s;
            opacity: 0;
            pointer-events: none;
        }

        &__inner {
            background: white;
            border-radius: 50%;
            height: 100%;
            width: 100%;
            box-sizing: border-box;

            p {
                @include text-gradient(135deg);
                width: calc(100% - 4px);
                text-align: center;
                position: absolute;
                bottom: 50%;
                font-size: $font-size-l;
            }
        }
    }

</style>