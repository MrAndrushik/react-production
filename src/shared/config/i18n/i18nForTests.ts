import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,

    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    resources: { ru: { translations: {} } },
});

export default i18n;
