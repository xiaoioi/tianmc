
const {
    createApp,
    ref,
    watchEffect
} = Vue
const APPS_URL = "./index.json"
app = createApp({
    data() {
        const config = ref(null)
        fetch(APPS_URL)
            .then((res) => res.json())
            .then((json) => (config.value = json))
            .catch(function(error) {
                console.error(error)
            })
        return {
            config
        }
    },
    mounted() {

    },
    updated() {
        mdui.mutation()
    }
})
mdui.$(function() {
    app.mount('#app')
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceWorker.js', {
            scope: '/'
        }).then(function(reg) {
            // registration worked
            console.log('Registration succeeded. Scope is ' + reg.scope);
        }).catch(function(error) {
            // registration failed
            console.log('Registration failed with ' + error);
        });
    }
})