<template>
    <main>
        <headline>
            部屋・バス割
        </headline>
        <in-page-navigation :items="navigationElements"/>
        <router-view/>
        <the-footer/>
    </main>
</template>

<script>
    import Headline from "../../components/Headline"
    import InPageNavigation from "../../components/InPageNavigation"
    import TheFooter from "../../components/TheFooter"

    export default {
        name: "Index",
        components: {
            Headline,
            InPageNavigation,
            TheFooter,
        },
        data() {
            return {
                navigationElements: {
                    '/allocation/search': '検索',
                    '/allocation/room': '部屋',
                    '/allocation/bus': 'バス',
                },
            }
        },
    }
</script>

<style lang="scss">
    .timeline-wrapper {
        position: relative;
    }
</style>