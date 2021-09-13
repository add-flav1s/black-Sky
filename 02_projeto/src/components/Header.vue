<template>
    <ul>
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Contact</li></a>
    </ul>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
}
li {
    margin-right: 10px;
}
a {
    color: #ddd;
    text-decoration: none;
    transition: 0.5s;
}
a:hover {
    color: turquoise;
}
</style>