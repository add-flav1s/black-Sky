<template>
    <nav>
        <div class="menu-item"><a href="#">home</a></div>
        <div class="menu-item"><a href="#">about</a></div>
        <div class="menu-item"><a href="#">portfolio</a></div>
        <div class="menu-item"><a href="#">contact</a></div>
    </nav>
</template>

<script>
export default {
    name: "navbar",
};
</script>

<style>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-item {
    color: #fff;
    padding: 10px 50px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

.menu-item.active,
.menu-item:hover {
    background-color: #78909c;
    border-bottom-color: #f06292;
}

.menu-item a {
    color: inherit;
    text-decoration: none;
}
</style>
