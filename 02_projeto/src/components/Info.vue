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
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar_email">
            Mande uma mensagem para o email {{ email }}.
        </p>
        <p class="teste">
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
            esta_estudando: true,
            mostrar_email: false,
            email: "flavia2021@email.com",
            meu_link: "https://google.com",
            textoBotao: "Mostrar email",
        };
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email;
            if (!this.mostrar_email) {
                this.textoBotao = "Mostrar email";
            } else {
                this.textoBotao = "Esconder email";
            }
        },
    },
};
</script>