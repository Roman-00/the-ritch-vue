import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import i18n from './i18n';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/scss/main.scss';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App).use(store).use(router).use(Antd)
    .use(i18n);
app.mount('#app');
