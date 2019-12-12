<template>
    <main>
        <headline>
            遊び
        </headline>
        <message-box title="遊び1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut debitis dignissimos doloribus earum, eum magni minima minus non, odio odit sapiente sequi similique! Cum facere natus nobis odit repellat ullam vel vero? Animi architecto asperiores aspernatur corporis cupiditate debitis distinctio esse iste minima obcaecati quas ratione repudiandae unde, voluptatibus.
        </message-box>
        <message-box title="遊び2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut debitis dignissimos doloribus earum, eum magni minima minus non, odio odit sapiente sequi similique! Cum facere natus nobis odit repellat ullam vel vero? Animi architecto asperiores aspernatur corporis cupiditate debitis distinctio esse iste minima obcaecati quas ratione repudiandae unde, voluptatibus.
        </message-box>
        <message-box title="遊び3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut debitis dignissimos doloribus earum, eum magni minima minus non, odio odit sapiente sequi similique! Cum facere natus nobis odit repellat ullam vel vero? Animi architecto asperiores aspernatur corporis cupiditate debitis distinctio esse iste minima obcaecati quas ratione repudiandae unde, voluptatibus.
        </message-box>
        <the-footer/>
    </main>
</template>

<script>
    import MessageBox from "../components/MessageBox"
    import Headline from "../components/Headline"
    import TheFooter from "../components/TheFooter"

    export default {
        name: "Play",
        components: {
            Headline,
            TheFooter,
            MessageBox
        },
    }
</script>

<style scoped>

</style>
