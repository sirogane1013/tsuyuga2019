<template>
    <div class="timeline">
        <div v-for="(hour, index) in activeHours" :key="index"
             :class="[
                'time-axis',
                'time-axis--boot',
             ]"
             :style="{
                'animation-delay':  state.didBootTimeTable ? (index/10+0.9)+'s' : (index/10)+'s',
             }"
        >
            <p>{{hour}}</p>
        </div>
    </div>
</template>

<script>
    import store from'../store'

    export default {
        name: "Timeline",
        data() {
            return {
                state: store.state,
                hours: ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00",
                        "10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00",
                        "20:00","21:00","22:00","23:00","24:00"]
            }
        },
        props: {
            from: {
                type: Number,
                required: true,
                validator: function (value) {
                    return value <= 24 && value >= 0
                }
            },
            to: {
                type: Number,
                required: true,
                validator: function (value) {
                    return value <= 24 && value >= 0
                }
            }
        },
        computed: {
            activeHours: function () {
                return this.hours.filter((element, index) => {
                    return index >= this.from && index <= this.to;
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
    @import "../assets/scss/mixins";

    .timeline {
        width: 100%;
        overflow: hidden;
    }

    .time-axis {
        position: relative;
        box-sizing: border-box;
        border-bottom: 2px solid $main2-w;
        height: 7rem;
        width: 100%;
        &--boot {
            animation-name: time-axis-boot;
            animation-duration: .4s;
            animation-fill-mode: both;
        }
    }

    .time-axis p {
        position: absolute;
        bottom: 0;
        left: .7rem;
        color: $main2;
        font-size: $font-size-m;
    }

    @keyframes time-axis-boot {
        from {
            transform: translateX(2rem);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
</style>