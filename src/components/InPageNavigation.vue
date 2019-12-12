<template>
    <ul class="navbar">
        <li v-for="(value, href) in items" :key="href"
            :class="[
                'navbar__item',
                {'navbar__item--active': href === currentPath},
            ]"
        >
            <router-link class="navbar__link" :to="{path: href}">
                <p class="navbar__text">{{value}}</p>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "InPageNavigation",
        data() {
            return {
                currentPath: null,
            }
        },
        props: {
            items: {
                type: Object,
                required: true,
            },
        },
        mounted() {
            this.currentPath = this.$route.path;
        },
        watch: {
            '$route'(to) {
                this.currentPath = to.path;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
    @import "../assets/scss/mixins";

    .navbar {
        @include fade-in-up($animation-delay-3);
        display: flex;
        height: 13vh;
        justify-content: space-around;
    }

    .navbar__item {
        height: 100%;
        list-style: none;
        flex-grow: 1;
        text-align: center;
        vertical-align: bottom;
    }

    .navbar__link {
        height: 100%;
        line-height: 1;
        position: relative;
        display: block;
    }

    .navbar__text {
        position: absolute;
        display: inline-block;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        color: $main1;
        font-size: 1.2rem;
        width: 100%;
    }

    .navbar__item--active .navbar__text {
        color: $main2; /* 非対応ブラウザ用 */
    }
</style>