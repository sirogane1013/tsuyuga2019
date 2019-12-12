<template>
    <main>
        <headline>外部リンク</headline>
        <ol class="bureau-list">
            <li>
                <a href="#" class="bureau-list__link">
                    <framed-button color="blue" size="large">リンクA</framed-button>
                </a>
            </li>
            <li>
                <a href="#" class="bureau-list__link">
                    <framed-button color="red" size="large">リンクB</framed-button>
                </a>
            </li>
            <li>
                <a href="#" class="bureau-list__link">
                    <framed-button color="orange" size="large">リンクC</framed-button>
                </a>
            </li>
            <li>
                <a href="#" class="bureau-list__link">
                    <framed-button color="pink" size="large">リンクD</framed-button>
                </a>
            </li>
            <li>
                <a href="#" class="bureau-list__link">
                    <framed-button color="purple" size="large">リンクE</framed-button>
                </a>
            </li>
            <li>
                <a href="#" class="bureau-list__link">
                    <framed-button color="green" size="large">リンクF</framed-button>
                </a>
            </li>
            <li>
                <a href="#" class="bureau-list__link">
                    <framed-button color="skyblue" size="large">リンクG</framed-button>
                </a>
            </li>
        </ol>
        <the-footer/>
    </main>
</template>

<script>
    import FramedButton from "../components/FramedButton";
    import Headline from "../components/Headline";
    import TheFooter from "../components/TheFooter";

    export default {
        name: "Introduction",
        components: {
            FramedButton,
            Headline,
            TheFooter,
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/_variables.scss";
    @import "../assets/scss/_mixins.scss";

    .bureau-list {
        @include fade-in-up($animation-delay-2);

        display: flex;
        height: 35rem;
        margin-top: 10vh;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        list-style: none;

        &__link button {
            cursor: pointer;
        }
    }
</style>
