{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue';
{{#veui}}
import {Button} from 'veui';
import Icon from 'vue-awesome/components/Icon';
{{/veui}}
import App from './App';
{{#router}}
import router from './router';
{{/router}}
{{#vuex}}
import store from './store';
{{/vuex}}
{{#veui}}

Vue.component('veui-button', Button);
Vue.component('icon', Icon);
{{/veui}}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    {{#router}}
    router,
    {{/router}}
    {{#vuex}}
    store,
    {{/vuex}}
    {{#if_eq build "runtime"}}
    render: h => h(App)
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    components: {App},
    template: '<App/>'
    {{/if_eq}}
});