<template>
    <div :class="[
            'schedule-box',
            {'schedule-box--small': height < 3},
            'schedule-box--boot',
         ]"
         :style="{
            top: 'calc(7rem + '+ top +'rem)',
            height: height+'rem',
            'animation-delay':  state.didBootTimeTable ? '.9s' : '0s',
         }"
    >
        <div>
            <p class="schedule-box__time-begin">{{ formattedBeginHour }} : {{ formattedBeginMinute }}</p>
            <p class="schedule-box__contents" v-html="contents"></p>
        </div>
    </div>
</template>

<script>
    import store from'../store'

    export default {
        name: "TimelineItem",
        data() {
            return {
                unit: 7,
                state: store.state,
            }
        },
        props: {
            base: {
                type: Number,
                required: true,
            },
            from: {
                type: Object,
                required: true,
            },
            to: {
                type: Object,
                required: true,
            },
            contents: {
                type: String,
            }
        },
        computed: {
            top() {
                return (this.from.hour - this.base + this.from.minute / 60) * this.unit;
            },
            height() {
                return ((this.to.hour - this.from.hour) + (this.to.minute - this.from.minute) / 60) * this.unit;
            },
            formattedBeginHour() {
                return (this.from.hour < 10) ? '0'+this.from.hour : this.from.hour;
            },
            formattedBeginMinute() {
                return (this.from.minute < 10) ? '0'+this.from.minute : this.from.minute;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
    @import "../assets/scss/mixins";

    .schedule-box {
        @include box-gradient();
        position: absolute;
        left: 5rem;
        width: calc(100% - 5rem - 1rem);
        box-sizing: border-box;
        border-radius: 5px 20px;
        padding-top: 2px;
        padding-left: 2px;
        font-size: $font-size-m;
        color: $main2;
        &--boot {
            @include fade-in-up();
        }
    }

    .schedule-box > div {
        background: white;
        border-radius: 3px 18px;
        height: calc(100% - 2px);
        width: calc(100% - 2px);
        box-sizing: border-box;
    }

    .schedule-box__time-begin {
        padding-top: .2rem;
        padding-left: .3rem;
    }

    .schedule-box__contents {
        padding-left: 1rem;
    }

    .schedule-box--small {
        & .schedule-box__time-begin {
            display: inline-block;
        }
        & .schedule-box__contents {
            display: inline-block;
            padding-left: 1em;
        }
    }
</style>