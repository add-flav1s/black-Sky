<template>
    <div>
        <img v-bind:src="picture" alt="" />
        <h1>{{ firstName }} {{ lastName }}</h1>
        <h3>Email: {{ email }}</h3>
        <button>Get Random User</button>
    </div>
</template>

<script>
export default {
    name: "User",
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            email: "randomuser3@email.com",
            gender: "female",
            picture: "https://randomuser.me/api/portraits/med/men/39.jpg",
        };
    },
};
</script>