import Vue from 'vue';
import 'src/styles/main.scss';
import App from 'src/components/App.vue';
import VueRouter from 'vue-router';
import router from 'src/router';
import store from 'src/store';

Vue.use(VueRouter);

new Vue({
    store: store,
    router: router,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    render: h => h(App),
}).$mount('#app');
