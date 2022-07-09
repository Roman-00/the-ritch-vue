import VueI18n from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';
import kk from './locales/kk.json';

const messages = {
    en,
    ru,
    kk,
};

const i18n = new VueI18n({
    locale: 'ru',
    messages,
});

export default i18n;
