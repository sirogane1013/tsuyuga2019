<template>
    <div class="timeline-wrapper">
        <timeline :from="7" :to="23"/>
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
        name: "SecondDay",
        components: {
            Timeline,
            TimelineItem,
        },
        data() {
            return {
                events: [
                    {
                        from: {hour: 7, minute: 30},
                        to: {hour: 9, minute: 0},
                        contents: "朝食",
                    },
                    {
                        from: {hour: 9, minute: 0},
                        to: {hour: 18, minute: 0},
                        contents: "オプショナル<br>" +
                            "<br>" +
                            "09:00~15:00<br>" +
                            "オプション1<br>" +
                            "<br>" +
                            "09:00~16:00<br>" +
                            "オプション2<br>" +
                            "<br>" +
                            "09:00~16:00<br>" +
                            "オプション3<br>" +
                            "<br>" +
                            "10:00~15:00<br>" +
                            "オプション4<br>",
                    },
                    {
                        from: {hour: 18, minute: 0},
                        to: {hour: 19, minute: 30},
                        contents: "夕食",
                    },
                    {
                        from: {hour: 19, minute: 30},
                        to: {hour: 23, minute: 0},
                        contents: "宴会",
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
