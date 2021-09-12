<template>
    <div>
        <p v-if="esta_estudando">Estou estudando no momento.</p>
        <p v-else>Estou relaxando no momento</p>
        <p>Aprendendo as seguintes tecnologias:</p>
        <ul>
            <li>Javascript</li>
            <li>Vue</li>
            <li>Typescript</li>
        </ul>
        <p v-show="mostrar_email">
            Mande uma mensagem para o email {{ email }}.
        </p>
        <p>
            Para acessar meu portfolio basta clicar
            <a v-bind:href="meu_link" target="_blank">aqui.</a>
        </p>
        <Picture />
    </div>
</template>

<script>
import Picture from "./Picture.vue";
export default {
    name: "Info",
    components: {
        Picture,
    },
    data() {
        return {
            esta_estudando: false,
            mostrar_email: true,
            email: "flavia2021@email.com",
            meu_link: "https://google.com",
        };
    },
};
</script>