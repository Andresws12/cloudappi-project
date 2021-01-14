import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

import en from './locales/locale.en';
import es from './locales/locale.es';

const messages = {
    en,
    es,
};

const i18n = new VueI18n({
    locale: 'en',
    messages,
});

export default i18n;
