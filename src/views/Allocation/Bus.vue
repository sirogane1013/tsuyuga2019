<template>
    <list-box :allocations="busAllocation"/>
</template>

<script>
    import ListBox from "../../components/ListBox"
    import busData from "../../assets/json/bus"

    export default {
        name: "Bus",
        data() {
            return {
                busAllocation: busData,
            }
        },
        components: {
            ListBox,
        }
    }
</script>

<style scoped>

</style>