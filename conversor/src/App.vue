<template>
    <div id="app">
        <h1>Conversor de moedas</h1>
        <div class="linha">
            <Conversor moeda-a="USD" moeda-b="BRL" />
            <Conversor moeda-a="BRL" moeda-b="USD" />
        </div>
    </div>
</template>

<script>
import Conversor from "./components/Conversor.vue";
export default {
    name: "App",
    components: { Conversor },
};
</script>

<style>
#app {
    margin: auto;
    max-width: 800px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.linha {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
}
</style>
