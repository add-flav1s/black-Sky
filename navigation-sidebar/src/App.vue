<template>
    <div id="app">
        <header>
            <NavBar />
        </header>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
    name: "App",
    components: {
        NavBar,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "montserrat", sans-serif;
}

header {
    width: 100vw;
    background-color: #455a64;
    padding: 20px;
}
</style>
