<template>
    <div class="message-box">
        <h3 class="message-box__header">
            {{ title }}
        </h3>
        <div class="message-box__content"
        >
            <div>
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageBox",
        props: {
            title: {
                type: String,
                default: null,
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/_variables.scss";
    @import "../assets/scss/_mixins.scss";

    .message-box {
        @include fade-in-up($animation-delay-2);
        margin-top: 10vh;
        overflow-x: hidden;
    }

    .message-box__header {
        color: $main2;
        font-weight: normal;
        font-size: $font-size-l;
        margin-left: 1rem;
    }

    .message-box__content {
        @include box-gradient();
        width: calc(100% + 24px);
        position: relative;
        left: -12px;
        box-sizing: border-box;
        border-radius: 0 40px;
        padding: 2px;
        font-size: $font-size-m;
        color: $main2;

        & > div {
            content: '';
            background: white;
            border-radius: 0 38px;
            width: 100%;
            padding: 2rem calc(12px + 1rem);
            box-sizing: border-box;
        }

        & > div > ul {
            padding-left: 1.5em;
        }
        & > div > h3 {
            font-size: 1em;
            font-weight: normal;
            &:not(:first-child) {
                margin-top: 1em;
            }
        }

        a {
            color: $main1;
        }

        a:visited {
            color: $main2;
        }

    }
</style>
