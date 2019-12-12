<template>
    <list-box :allocations="roomAllocation"/>
</template>

<script>
    import ListBox from "../../components/ListBox"
    import roomData from "../../assets/json/room"

    export default {
        name: "Room",
        data() {
          return {
              roomAllocation: roomData,
          }
        },
        components: {
            ListBox,
        }
    }
</script>

<style scoped>

</style>
