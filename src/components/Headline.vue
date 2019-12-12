<template>
    <div class="headline">
        <div class="headline__circle"></div>
        <div class="headline__text">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headline",
        props: {
            title: String,
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/variables";
    @import "../assets/scss/mixins";

    $main_circle_size: 5rem;

    $headline_edge: 3px;

    .headline {
        @include fade-in-up($animation-delay-1);

        position: relative;
        width: 100%;
        top: 0;
        left: 0;
        background-color: white;
        /*青色のグラデーションのかかった円形の要素に白い円を重ねる*/
        /*青色のグラデーションのかかった円形の要素*/
        &__circle {
            position: relative;
            width: $main_circle_size;
            height: $main_circle_size;
            top: 3px;
            left: 5px;
            box-sizing: border-box;
            border-radius: 50%;
            padding-top: $headline_edge;
            padding-left: $headline_edge;
            color: $main2;
            background: linear-gradient(120deg,
                    rgba(95, 135, 255, 1) 0%,
                    rgba(94, 189, 255, 0.4) 40%,
                    rgba(94, 231, 255, 0) 90%,
                    rgba(94, 231, 255, 0) 100%);
            /*白い円を重ねる*/
            &:before {
                content: '';
                display: block;
                position: absolute;
                background: white;
                border-radius: 50%;
                height: calc(100% - 6px);
                width: calc(100% - 6px);
                padding-left: 20px;
                padding-top: 18px;
                box-sizing: border-box;
            }
        }

        .headline__text {
            position: absolute;
            color: $main1;
            font-size: $font-size-l;
            top: 2.3rem;
            left: 3.3rem;
        }
    }
</style>