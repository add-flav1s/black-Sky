<template>
    <div>
        <h2>Está é a descrição de: {{ nome }}</h2>
        <info />
        <h3>Preencha o formulário:</h3>
        <input-text />
        <input-text />
        <submit />
    </div>
</template>

<script>
import InputText from "./form/InputText.vue";
import Submit from "./form/Submit.vue";
import Info from "./Info.vue";
export default {
    name: "Pessoa",
    data() {
        return {
            nome: "Flávia",
        };
    },
    components: {
        Info,
        InputText,
        Submit,
    },
};
</script>