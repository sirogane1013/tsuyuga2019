<template>
    <div class="timeline-wrapper">
        <timeline :from="7" :to="19"/>
        <timeline-item v-for="(event, index) in events" :key="index"
                       :base="7"
                       :from="event.from"
                       :to="event.to"
                       :contents="event.contents"
        />
    </div>
</template>

<script>
    import Timeline from "../../components/Timeline"
    import TimelineItem from "../../components/TimelineItem"

    export default {
        name: "ThirdDay",
        components: {
            Timeline,
            TimelineItem,
        },
        data() {
            return {
                events: [
                    {
                        from: {hour: 7, minute: 30},
                        to: {hour: 9, minute: 15},
                        contents: "朝食",
                    },
                    {
                        from: {hour: 9, minute: 15},
                        to: {hour: 10, minute: 45},
                        contents: "荷物整理・チェックアウト",
                    },
                    {
                        from: {hour: 10, minute: 45},
                        to: {hour: 12, minute: 30},
                        contents: "出発・移動",
                    },
                    {
                        from: {hour: 12, minute: 30},
                        to: {hour: 14, minute: 0},
                        contents: "昼食",
                    },
                    {
                        from: {hour: 14, minute: 0},
                        to: {hour: 17, minute: 30},
                        contents: "移動",
                    },
                    {
                        from: {hour: 17, minute: 30},
                        to: {hour: 18, minute: 30},
                        contents: "解散",
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
