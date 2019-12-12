<template>
    <div class="timeline-wrapper">
        <timeline :from="18" :to="23"/>
        <timeline-item v-for="(event, index) in events" :key="index"
                       :base="18"
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
        name: "FirstDay",
        components: {
            Timeline,
            TimelineItem,
        },
        data() {
            return {
                events: [
                    {
                        from: {hour: 18, minute: 0},
                        to: {hour: 19, minute: 45},
                        contents: "出発・移動",
                    },
                    {
                        from: {hour: 19, minute: 45},
                        to: {hour: 20, minute: 30},
                        contents: "サービスエリア",
                    },
                    {
                        from: {hour: 20, minute: 30},
                        to: {hour: 21, minute: 45},
                        contents: "移動",
                    },
                    {
                        from: {hour: 21, minute: 45},
                        to: {hour: 23, minute: 0},
                        contents: "到着・チェックイン",
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
