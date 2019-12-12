<template>
    <main>
        <headline>
            タイムテーブル
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
                    '/timetable/first-day': '1日目',
                    '/timetable/second-day': '2日目',
                    '/timetable/third-day': '3日目',
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