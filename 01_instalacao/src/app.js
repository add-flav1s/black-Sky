const MyNameApp = {
    data() {
        return{
            name: 'Ana Flávia',
            age: 27,
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");