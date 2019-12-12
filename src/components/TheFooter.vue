<template>
    <footer class="footer">
        <small class="footer__copyright">©2019 network team</small>
    </footer>
</template>

<script>
    export default {
        name: "TheFooter"
    }
</script>

<style lang="scss">
    @import "../assets/scss/variables";

    .footer {
        width: 100%;
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 4.5rem;
        &__copyright {
             font-size: $font-size-s;
             color: $main2;
         }
    }
</style>