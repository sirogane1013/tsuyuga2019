<template>
    <button :class="[
                'button',
                'button--'+color,
                'button--'+size,
    ]">
        <span class="button__inner"><slot/></span>
    </button>
</template>

<script>
    export default {
        name: "framed-button",
        props: {
            color: {
                type: String,
                default: "blue",
                validator: (value) => {
                    return ['blue', 'red', 'pink', 'orange', 'purple', 'green', 'skyblue'].includes(value);
                }
            },
            size: {
                type: String,
                default: "small",
                validator: (value) => {
                    return ['small', 'large'].includes(value);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/_variables.scss";
    @import "../assets/scss/_mixins.scss";

    .button {
        position: relative;
        width: 7rem;
        height: 2.5rem;
        outline: 0;
        border-style: none;
        border-radius: 6px;
        font-size: $font-size-m;

        &__inner {
            height: calc(100% - 6px); /* borderの幅だけ引く */
            width: calc(100% - 6px);
            position: absolute;
            top: 3px;
            left: 3px;
            background: white;
            border-radius: 4px;
            box-sizing: border-box;
            line-height: calc(2.5rem - 6px);
            //transition: background-color 0.2s ease;
        }

        &--blue {
            @include box-gradient($main2, $main1);
            color: $main2;
        }

        &--red {
            @include box-gradient(#FF0844, #FFB199);
            color: #FF0844;
        }

        &--pink {
            @include box-gradient(#FF8181, #FFC8C8);
            color: #FF8181;
        }

        &--orange {
            @include box-gradient(#FF4700, #FFC4C4);
            color: #FF4700;
        }

        &--purple {
            @include box-gradient(#8A85FF, #C2BFFF);
            color: #8A85FF;
        }

        &--green {
            @include box-gradient(#00CDAC, #AEEFCA);
            color: #00CDAC;
        }

        &--skyblue {
            @include box-gradient(#00B9FF, #BAECFF);
            color: #00B9FF;
        }

        &--small {
            width: 7rem;
            height: 2.5rem;
        }

        &--large {
            width: 18rem;
            height: 2.5rem;
        }
    }
</style>