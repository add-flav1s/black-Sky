<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Me nome é: {{ nome }}</p>
    </div>
</template>

<script>
export default {
    name: "PrimeiroComponente",
    data() {
        return {
            nome: "Ana Flávia",
        };
    },
};
</script>
